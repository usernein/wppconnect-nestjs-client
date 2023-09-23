import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class WhatsappStatusController {
  private readonly logger = new Logger(WhatsappStatusController.name);

  constructor(private readonly config: ConfigService) {}

  shouldLog() {
    return (
      this.config.get('LOG_UPDATES') &&
      this.config.get('EVENTS_TO_LOG').split(',').includes('whatsapp-status')
    );
  }

  @MessagePattern('whatsapp-status')
  handle(data: any) {
    if (this.shouldLog()) this.logger.verbose({ data });
  }
}
