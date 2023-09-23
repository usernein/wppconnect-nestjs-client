import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnUpdateLabelController {
  private readonly logger = new Logger(OnUpdateLabelController.name);

  constructor(private readonly config: ConfigService) {}

  shouldLog() {
    return (
      this.config.get('LOG_UPDATES') &&
      this.config.get('EVENTS_TO_LOG').split(',').includes('on-update-label')
    );
  }

  @MessagePattern('onupdatelabel')
  handle(data: any) {
    if (this.shouldLog()) this.logger.verbose({ data });
  }
}
