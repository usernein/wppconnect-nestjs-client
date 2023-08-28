import { Injectable, Logger } from '@nestjs/common';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';
import { HandlerFilter } from 'src/utils/handler-filter';

@Injectable()
export class InfoHandler implements IUpdateHandler {
  private readonly logger = new Logger(InfoHandler.name);

  constructor(
    private readonly i18n: I18nService<I18nTranslations>,
    private readonly filter: HandlerFilter,
  ) {}

  match({ response }: any) {
    return this.filter.check(response).isCommand('info');
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
