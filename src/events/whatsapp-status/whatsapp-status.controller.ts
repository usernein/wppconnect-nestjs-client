import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class WhatsappStatusController {
  private readonly logger = new Logger(WhatsappStatusController.name);

  constructor(private readonly config: ConfigService) {}

  @MessagePattern('whatsapp-status')
  handle(data: any) {
    if (this.config.get('LOG_UPDATES')) this.logger.verbose({ data });
  }
}
