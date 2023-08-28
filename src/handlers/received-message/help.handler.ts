import { Injectable, Logger } from '@nestjs/common';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';
import { HandlerFilter } from 'src/utils/handler-filter';

@Injectable()
export class HelpHandler implements IUpdateHandler {
  private readonly logger = new Logger(HelpHandler.name);

  constructor(
    private readonly i18n: I18nService<I18nTranslations>,
    private readonly filter: HandlerFilter,
  ) {}

  match({ response }: any) {
    return this.filter.check(response).isCommand('help');
  }

  async handle({ response }: any) {
    this.logger.log('.help command received');

    const text = [
      this.i18n.t('help.header'),
      this.i18n.t('help.body'),
      this.i18n.t('help.footer'),
    ].join('\n');

    MessagesService.postApiSendMessage(response.session, {
      phone: response.chatId,
      isGroup: response.isGroupMsg,
      message: text,
    });
  }
}
