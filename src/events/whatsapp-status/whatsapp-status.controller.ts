import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class WhatsappStatusController {
  private readonly logger = new Logger(WhatsappStatusController.name);

  @MessagePattern('whatsapp-status')
  handle(data: any) {
    this.logger.verbose({ data });
  }
}
