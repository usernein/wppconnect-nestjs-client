import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';
import { Injectable, Logger } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';
import { HandlerFilter } from 'src/utils/handler-filter';

@Injectable()
export class PingHandler implements IUpdateHandler {
  private readonly logger = new Logger(PingHandler.name);

  constructor(
    private readonly i18n: I18nService<I18nTranslations>,
    private readonly filter: HandlerFilter,
  ) {}

  match({ response }: any) {
    return this.filter.check(response).isCommand('ping');
  }

  handle({ response }: any) {
    this.logger.log('.ping command received');

    // calculate timestamp
    const messageTimestamp = new Date(response.timestamp).getTime() * 1000;
    const timestampNow = new Date().getTime();

    const difference = timestampNow - messageTimestamp;

    this.logger.debug({ messageTimestamp, timestampNow, difference });

    const text = this.i18n.t('ping.result', {
      args: {
        ping: difference / 1000,
      },
    });

    MessagesService.postApiSendMessage(response.session, {
      phone: response.chatId,
      isGroup: response.isGroupMsg,
      message: text,
    });
  }
}
