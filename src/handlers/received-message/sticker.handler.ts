import { Injectable, Logger } from '@nestjs/common';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';
import { HandlerFilter } from 'src/utils/handler-filter';
import * as fs from 'node:fs';
import * as FfmpegCommand from 'fluent-ffmpeg';
import { FfmpegLogger } from '../../utils/ffmpef-logger';

@Injectable()
export class StickerHandler implements IUpdateHandler {
  private readonly logger = new Logger(StickerHandler.name);

  constructor(
    private readonly i18n: I18nService<I18nTranslations>,
    private readonly filter: HandlerFilter,
  ) {
  }

  match({ response }: any) {
    return this.filter.check(response).isCommand('sticker');
  }

  async handle({ response }: any) {
    this.logger.log('.sticker command received');
    const isQuotingImage =
      response.quotedMsgId && response.quotedMsg.type == 'image';
    const isQuotingVideo =
      response.quotedMsgId && response.quotedMsg.type == 'video';
    const isImageCommand = this.checkIsImageCommand(response);
    const isVideoCommand = response.type == 'video';

    const isNotValid =
      !isQuotingImage && !isImageCommand && !isVideoCommand && !isQuotingVideo;

    if (isNotValid) {
      const text = this.i18n.t('sticker.error.wrong_usage.generic');
      await MessagesService.postApiSendMessage(response.session, {
        phone: response.chatId,
        isGroup: response.isGroupMsg,
        message: text,
      });
      return;
    }

    const mediaId =
      isQuotingImage || isQuotingVideo ? response.quotedMsgId : response.id;

    const media = await MessagesService.postApiDownloadMedia(response.session, {
      messageId: mediaId,
    });

    if (isImageCommand || isQuotingImage) {
      const formattedBase64 = `data:${media.mimetype};base64,${media.base64}`;

      await MessagesService.postApiSendSticker(response.session, {
        phone: response.chatId,
        isGroup: response.isGroupMsg,
        path: formattedBase64,
      });
    } else if (isVideoCommand || isQuotingVideo) {
      const inputVideoFileName = response.id + '.mp4';
      const outputVideoFileName = response.id + '.out.gif';

      fs.writeFileSync(inputVideoFileName, media.base64, {
        encoding: 'base64',
      });

      try {
        const ffmpegLogger = new FfmpegLogger(this.logger);
        const logger = this.logger;

        const command = FfmpegCommand(inputVideoFileName, {
          logger: ffmpegLogger,
        })
          .complexFilter("crop=w='min(min(iw\\,ih)\\,300)':h='min(min(iw\\,ih)\\,300)',fps=15,scale=300:300:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=32[p];[s1][p]paletteuse=dither=bayer")
          .output(outputVideoFileName)
          .on('start', function(commandLine) {
            console.log('Spawned Ffmpeg with command: ' + commandLine);
          })
          .on('error', function(err, stderr, stdout) {
            logger.error('Cannot process video: ' + err.message);
            logger.verbose({ stderr, stdout });
          })
          .on('end', (stderr, stdout) => {
            if (stderr) {
              logger.error('Cannot process video: ' + stderr);
            }
            logger.verbose('Finished processing video');
            logger.verbose({ stdout, stderr });
            const convertedBase64 = fs.readFileSync(outputVideoFileName, {
              encoding: 'base64',
            });

            this.cleanUpFiles(inputVideoFileName, outputVideoFileName);

            const formattedBase64 = `data:image/gif;base64,${convertedBase64}`;

            MessagesService.postApiSendStickerGif(response.session, {
              phone: response.chatId,
              isGroup: response.isGroupMsg,
              path: formattedBase64,
            }).catch((error) => {
              this.logger.error('Error uploading video', error);
              const text = this.i18n.t('tiktok.error-uploading');

              MessagesService.postApiSendMessage(response.session, {
                phone: response.chatId,
                isGroup: response.isGroupMsg,
                message: text,
              });
            });
          });
        command.run();
      } catch (error) {
        const text = this.i18n.t('tiktok.error-converting');

        await MessagesService.postApiSendMessage(response.session, {
          phone: response.chatId,
          isGroup: response.isGroupMsg,
          message: text,
        });
        this.cleanUpFiles(inputVideoFileName, outputVideoFileName);

        this.logger.error('Error converting video', error);
      }
    } else {
      const text = this.i18n.t('sticker.error.wrong_usage.generic');
      await MessagesService.postApiSendMessage(response.session, {
        phone: response.chatId,
        isGroup: response.isGroupMsg,
        message: text,
      });
    }
  }

  private checkIsImageCommand(response: any) {
    return response.type == 'image';
  }

  private cleanUpFiles(inputFilename: string, outputFilename: string) {
    if (fs.existsSync(inputFilename)) fs.unlinkSync(inputFilename);
    if (fs.existsSync(outputFilename)) fs.unlinkSync(outputFilename);
  }
}
