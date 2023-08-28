import { Injectable, Logger } from '@nestjs/common';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';

@Injectable()
export class InfoHandler implements IUpdateHandler {
  private readonly logger = new Logger(InfoHandler.name);

  constructor(private readonly i18n: I18nService<I18nTranslations>) {}

  match({ response: { body } }: any) {
    return body === '.info';
  }

  async handle({ response }: any) {
    this.logger.log('.help command received');

    const version = process.env.npm_package_version;

    const text = [
      this.i18n.t('info.header'),
      this.i18n.t('info.subheader', {
        args: {
          version,
        },
      }),
      this.i18n.t('info.body'),
    ].join('\n');

    MessagesService.postApiSendMessage(response.session, {
      phone: response.chatId,
      isGroup: response.isGroupMsg,
      message: text,
    });
  }
}
