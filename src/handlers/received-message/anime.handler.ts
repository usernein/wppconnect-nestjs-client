import { Injectable, Logger } from '@nestjs/common';
import { IUpdateHandler } from '../contracts/handler.interface';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';
import { HandlerFilter } from 'src/utils/handler-filter';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import * as fs from 'fs';
import * as fetch from 'node-fetch';
import * as FfmpegCommand from 'fluent-ffmpeg';

class FfmpegLogger implements FfmpegCommand.FfmpegCommandLogger {
  private readonly logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  debug(message: string) {
    this.logger.debug(message);
  }
  error(message: string) {
    this.logger.error(message);
  }
  warn(message: string) {
    this.logger.warn(message);
  }
  info(message: string) {
    this.logger.log(message);
  }
}
@Injectable()
export class AnimeHandler implements IUpdateHandler {
  private readonly logger = new Logger(AnimeHandler.name);
  constructor(
    private readonly i18n: I18nService<I18nTranslations>,
    private readonly filter: HandlerFilter,
  ) {}

  match({ response }: any): boolean {
    return this.filter.check(response).isCommand('anime');
  }

  private checkIsImageCommand(response: any) {
    return response.type == 'image';
  }

  async handle({ response }: any) {
    this.logger.log('.anime command received');

    const isQuotingImage =
      response.quotedMsgId && response.quotedMsg.type == 'image';
    const isImageCommand = this.checkIsImageCommand(response);

    if (!isImageCommand && !isQuotingImage) {
      const text = this.i18n.t('sticker.error.wrong_usage.generic');
      await MessagesService.postApiSendMessage(response.session, {
        phone: response.chatId,
        isGroup: response.isGroupMsg,
        message: text,
      });
      return;
    }

    const mediaId = isQuotingImage ? response.quotedMsgId : response.id;

    const media = await MessagesService.postApiDownloadMedia(response.session, {
      messageId: mediaId,
    });

    const inputImageFileName = response.id + '.jpg';

    fs.writeFileSync(inputImageFileName, media.base64, {
      encoding: 'base64',
    });

    let data: any;
    try {
      const result = await fetch('https://api.trace.moe/search?anilistInfo', {
        method: 'POST',
        body: fs.readFileSync(inputImageFileName),
        headers: { 'Content-type': 'image/jpeg' },
      });
      data = await result.json();
    } finally {
      fs.unlinkSync(inputImageFileName);
    }

    const { anilist, episode, similarity, from, to, video } = data.result[0];
    const { title } = anilist;

    const anime_link = `https://anilist.co/anime/${anilist.id}`;

    const formattedSimiliarity = (similarity * 100).toFixed(2);

    const secondsAsString = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const secondsLeft = (seconds % 60).toFixed(0);
      return `${minutes}:${secondsLeft}`;
    };
    const formattedStartPoint = secondsAsString(from);
    const formattedEndPoint = secondsAsString(to);

    let text: string;
    if (episode) {
      text = this.i18n.t('anime.result_with_episode', {
        args: {
          title: title.romaji,
          episode,
          similarity: formattedSimiliarity,
          anime_link,
          startPoint: formattedStartPoint,
          endPoint: formattedEndPoint,
        },
      });
    } else {
      text = this.i18n.t('anime.result_without_episode', {
        args: {
          title: title.romaji,
          similarity: formattedSimiliarity,
          anime_link,
          startPoint: formattedStartPoint,
          endPoint: formattedEndPoint,
        },
      });
    }

    if (video) {
      const result = await fetch(video);
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
          .output(outputVideoFileName)
          .on('error', function (err, stdout, stderr) {
            this.logger.error('Cannot process video: ' + err.message);
            this.logger.verbose({ stdout, stderr });
          })
          .on('end', (stdout, stderr) => {
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
              caption: text,
            });
          });
        command.run();
      } catch (error) {
        this.cleanUpFiles(inputVideoFileName, outputVideoFileName);
        throw error;
      }

      return;
    }

    MessagesService.postApiSendMessage(response.session, {
      phone: response.chatId,
      isGroup: response.isGroupMsg,
      message: text,
    });
  }

  private cleanUpFiles(inputFilename: string, outputFilename: string) {
    if (fs.existsSync(inputFilename)) fs.unlinkSync(inputFilename);
    if (fs.existsSync(outputFilename)) fs.unlinkSync(outputFilename);
  }
}
