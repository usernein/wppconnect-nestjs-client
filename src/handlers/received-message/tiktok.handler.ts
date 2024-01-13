import { Injectable, Logger } from '@nestjs/common';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';
import { HandlerFilter } from 'src/utils/handler-filter';
import * as fs from 'node:fs';
import { ConfigService } from '@nestjs/config';
import * as fetch from 'node-fetch';
import * as FfmpegCommand from 'fluent-ffmpeg';
import { FfmpegLogger } from '../../utils/ffmpef-logger';


@Injectable()
export class TikTokHandler implements IUpdateHandler {
  private readonly logger = new Logger(TikTokHandler.name);

  constructor(
    private readonly i18n: I18nService<I18nTranslations>,
    private readonly filter: HandlerFilter,
    private readonly config: ConfigService,
  ) {
  }

  match({ response }: any) {
    return (
      this.filter.check(response).isCommand('tiktok') ||
      this.filter.check(response).isCommand('tt')
    );
  }

  async handle({ response }: any) {
    this.logger.log('.tiktok command received');

    const parts = response.body.split(' ');

    if (parts.length < 2) {
      const text = this.i18n.t('tiktok.missing-argument');

      return MessagesService.postApiSendMessage(response.session, {
        phone: response.chatId,
        isGroup: response.isGroupMsg,
        message: text,
      });
    }

    const text = this.i18n.t('tiktok.acknowledgement-text');

    MessagesService.postApiSendMessage(response.session, {
      phone: response.chatId,
      isGroup: response.isGroupMsg,
      message: text,
    });

    const tiktok_url = parts[1];
    const url =
      this.config.get('DOUYIN_TIKTOK_DOWNLOAD_API_URL') +
      'download?url=' +
      tiktok_url +
      '&prefix=true&watermark=false';
    try {
      await this.downloadAndSave(url, response);
    } catch (e) {
      this.logger.error('Error downloading video', e);
      const text = this.i18n.t('tiktok.error-downloading');

      return MessagesService.postApiSendMessage(response.session, {
        phone: response.chatId,
        isGroup: response.isGroupMsg,
        message: text,
      });
    }
  }

  async downloadAndSave(url: string, response) {
    const result = await fetch(url);
    const buffer = await result.buffer();
    const base64 = buffer.toString('base64');

    const inputVideoFileName = response.id + '.mp4';
    const outputVideoFileName = response.id + '.out.mp4';

    fs.writeFileSync(inputVideoFileName, base64, {
      encoding: 'base64',
    });

    try {
      const ffmpegLogger = new FfmpegLogger(this.logger);
      const command = FfmpegCommand(inputVideoFileName, {
        logger: ffmpegLogger,
      })
        .videoCodec('copy')
        .output(outputVideoFileName)
        .on('start', function(commandLine) {
          console.log('Spawned Ffmpeg with command: ' + commandLine);
        })
        .on('error', function(err, stderr, stdout) {
          this.logger.error('Cannot process video: ' + err.message);
          this.logger.verbose({ stderr, stdout });
        })
        .on('end', (stderr, stdout) => {
          if (stderr) {
            this.logger.error('Cannot process video: ' + stderr);
          }
          this.logger.verbose('Finished processing video');
          this.logger.verbose({ stdout, stderr });
          const convertedBase64 = fs.readFileSync(outputVideoFileName, {
            encoding: 'base64',
          });

          this.cleanUpFiles(inputVideoFileName, outputVideoFileName);

          const formattedBase64 = `data:video/mp4;base64,${convertedBase64}`;

          MessagesService.postApiSendFileBase64(response.session, {
            phone: response.chatId,
            isGroup: response.isGroupMsg,
            filename: outputVideoFileName,
            base64: formattedBase64,
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
  }

  private cleanUpFiles(inputFilename: string, outputFilename: string) {
    if (fs.existsSync(inputFilename)) fs.unlinkSync(inputFilename);
    if (fs.existsSync(outputFilename)) fs.unlinkSync(outputFilename);
  }
}
