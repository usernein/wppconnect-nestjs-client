import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MessagesService } from 'src/utils/wpp-connect-sdk';

@Controller()
export class ReceivedMessageController {
  private readonly logger = new Logger(ReceivedMessageController.name);

  @MessagePattern('received-message')
  handle(message: any) {
    this.logger.verbose({ message });
    const { response } = message;

    if (message.response.body === '!ping') {
      this.logger.log('!ping command received');
      const result = MessagesService.postApiSendMessage(response.session, {
        phone: response.chatId,
        isGroup: response.isGroupMsg,
        message: 'pong!',
      });

      this.logger.verbose({ result });
    }
  }
}
