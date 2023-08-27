import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';
import { MessagesService } from 'src/utils/wpp-connect-sdk';

@Controller()
export class ReceivedMessageController {
  private readonly logger = new Logger(ReceivedMessageController.name);

  constructor(
    private readonly config: ConfigService,
  ) {}

  @MessagePattern('received-message')
  handle(message: any) {
    if (this.config.get('LOG_UPDATES')) this.logger.verbose({ message });

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
