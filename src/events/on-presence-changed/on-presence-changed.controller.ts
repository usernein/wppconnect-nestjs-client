import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnPresenceChangedController {
  private readonly logger = new Logger(OnPresenceChangedController.name);

  constructor(private readonly config: ConfigService) {}

  shouldLog() {
    return (
      this.config.get('LOG_UPDATES') &&
      this.config
        .get('EVENTS_TO_LOG')
        .split(',')
        .includes('on-presence-changed')
    );
  }

  @MessagePattern('onpresencechanged')
  handle(data: any) {
    if (this.shouldLog()) this.logger.verbose({ data });
  }
}
