import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class SessionLoggedController {
  private readonly logger = new Logger(SessionLoggedController.name);

  constructor(private config: ConfigService) {}

  shouldLog() {
    return (
      this.config.get('LOG_UPDATES') &&
      this.config.get('EVENTS_TO_LOG').split(',').includes('session-logged')
    );
  }

  @MessagePattern('session-logged')
  handle(data: any) {
    if (this.shouldLog()) this.logger.verbose({ data });
  }
}
