import { Controller, Inject, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';
import { IUpdateHandler } from 'src/handlers/contracts/handler.interface';

@Controller()
export class ReceivedMessageController {
  private readonly logger = new Logger(ReceivedMessageController.name);

  constructor(
    @Inject('ReceivedMessageHandlers')
    private readonly handlers: IUpdateHandler[],
    private readonly config: ConfigService,
  ) {}

  shouldLog() {
    return (
      this.config.get('LOG_UPDATES') &&
      this.config.get('EVENTS_TO_LOG').split(',').includes('received-message')
    );
  }

  @MessagePattern('received-message')
  handle(message: any) {
    if (this.shouldLog()) {
      if (this.config.get('VERBOSE_UPDATES')) this.logger.verbose({ message });
      else {
        let shortMessage = '';
        const { response } = message;
        if (!response) shortMessage = 'message without response';

        if (response?.isGroupMsg) shortMessage += '[at group] ';
        else shortMessage += '[at private] ';

        if (response?.fromMe) shortMessage += response?.notifyName + ' (me): ';
        else shortMessage += (response?.notifyName || 'unknown') + ': ';

        if (response?.caption || response?.mimetype)
          shortMessage += `[${response?.mimetype}] ${response?.caption || ''}`;
        else if (response?.body) shortMessage += response?.body;
        else shortMessage += '<unknown message body>';

        this.logger.log(shortMessage);
      }
    }

    this.handlers.forEach((handler) => {
      if (handler.match(message)) handler.handle(message);
    });
  }
}
