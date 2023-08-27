import { Logger } from '@nestjs/common';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';

export class DiceHandler implements IUpdateHandler {
  private readonly logger = new Logger(DiceHandler.name);

  match({ response: { body } }: any) {
    return body === '.dice';
  }

  async handle({ response }: any) {
    this.logger.log('.dice command received');

    const dice = Math.floor(Math.random() * 6) + 1;
    const text = `*🎲 Dice rolled:* ${dice}`;

    MessagesService.postApiSendMessage(response.session, {
      phone: response.chatId,
      isGroup: response.isGroupMsg,
      message: text,
    });
  }
}
