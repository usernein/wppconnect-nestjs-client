import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class SessionErrorController {
  private readonly logger = new Logger(SessionErrorController.name);

  constructor(private config: ConfigService) {}

  shouldLog() {
    return (
      this.config.get('LOG_UPDATES') &&
      this.config.get('EVENTS_TO_LOG').split(',').includes('session-error')
    );
  }

  @MessagePattern('session-error')
  handle(data: any) {
    if (this.shouldLog()) this.logger.verbose({ data });
  }
}
