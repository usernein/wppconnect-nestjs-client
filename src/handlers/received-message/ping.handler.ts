import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';
import { Logger } from '@nestjs/common';

export class PingHandler implements IUpdateHandler {
  private readonly logger = new Logger(PingHandler.name);

  match({ response: { body } }: any) {
    return body === '.ping';
  }

  handle({ response }: any) {
    this.logger.log('.ping command received');

    // calculate timestamp
    const messageTimestamp = new Date(response.timestamp).getTime() * 1000;
    const timestampNow = new Date().getTime();

    const difference = timestampNow - messageTimestamp;

    this.logger.debug({ messageTimestamp, timestampNow, difference });

    MessagesService.postApiSendMessage(response.session, {
      phone: response.chatId,
      isGroup: response.isGroupMsg,
      message: `🏓 *Pong!* _(${difference / 1000}ms)_`,
    });
  }
}
