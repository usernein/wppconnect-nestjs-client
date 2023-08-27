import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class QrCodeController {
  private readonly logger = new Logger(QrCodeController.name);

  @MessagePattern('qrCode')
  handle(data: any) {
    this.logger.verbose({ data });
  }
}
