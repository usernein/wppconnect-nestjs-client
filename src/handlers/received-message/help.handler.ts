import { Logger } from '@nestjs/common';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';

export class HelpHandler implements IUpdateHandler {
  private readonly logger = new Logger(HelpHandler.name);

  match({ response: { body } }: any) {
    return body === '.help';
  }

  async handle({ response }: any) {
    this.logger.log('.help command received');

    const text = `🤖 *Precisa de ajuda?*\n- _Para saber mais sobre o bot, digite *.info*_\n- _Para ver a lista de comandos disponíveis, digite *.commands*_`;

    MessagesService.postApiSendMessage(response.session, {
      phone: response.chatId,
      isGroup: response.isGroupMsg,
      message: text,
    });
  }
}
