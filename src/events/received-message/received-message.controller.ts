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

  @MessagePattern('received-message')
  handle(message: any) {
    if (this.config.get('LOG_UPDATES')) this.logger.verbose({ message });

    this.handlers.forEach((handler) => {
      if (handler.match(message)) handler.handle(message);
    });
  }
}
