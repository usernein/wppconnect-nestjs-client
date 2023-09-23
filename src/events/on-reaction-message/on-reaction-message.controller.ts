import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnReactionMessageController {
  private readonly logger = new Logger(OnReactionMessageController.name);

  constructor(private config: ConfigService) {}

  shouldLog() {
    return (
      this.config.get('LOG_UPDATES') &&
      this.config
        .get('EVENTS_TO_LOG')
        .split(',')
        .includes('on-reaction-message')
    );
  }

  @MessagePattern('onreactionmessage')
  handle(data: any) {
    if (this.shouldLog()) this.logger.verbose({ data });
  }
}
