import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class QrCodeController {
  private readonly logger = new Logger(QrCodeController.name);

  constructor(private readonly config: ConfigService) {}

  @MessagePattern('qrCode')
  handle(data: any) {
    if (this.config.get('LOG_UPDATES')) this.logger.verbose({ data });
  }
}
