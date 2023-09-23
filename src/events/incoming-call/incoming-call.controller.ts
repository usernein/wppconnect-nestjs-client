import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class IncomingCallController {
  private readonly logger = new Logger(IncomingCallController.name);

  constructor(private readonly config: ConfigService) {}

  shouldLog() {
    return (
      this.config.get('LOG_UPDATES') &&
      this.config.get('EVENTS_TO_LOG').split(',').includes('incoming-call')
    );
  }

  @MessagePattern('incomingcall')
  handle(data: any) {
    if (this.shouldLog()) this.logger.verbose({ data });
  }
}
