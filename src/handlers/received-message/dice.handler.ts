import { Injectable, Logger } from '@nestjs/common';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';

@Injectable()
export class DiceHandler implements IUpdateHandler {
  private readonly logger = new Logger(DiceHandler.name);

  constructor(private readonly i18n: I18nService<I18nTranslations>) {}

  match({ response: { body } }: any) {
    return body === '.dice';
  }

  async handle({ response }: any) {
    this.logger.log('.dice command received');

    const dice = Math.floor(Math.random() * 6) + 1;
    const text = this.i18n.t('dice.result-text', {
      args: {
        result: dice,
      },
    });

    MessagesService.postApiSendMessage(response.session, {
      phone: response.chatId,
      isGroup: response.isGroupMsg,
      message: text,
    });
  }
}
