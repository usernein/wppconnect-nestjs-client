import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class QrCodeController {
  private readonly logger = new Logger(QrCodeController.name);

  constructor(private readonly config: ConfigService) {}

  shouldLog() {
    return (
      this.config.get('LOG_UPDATES') &&
      this.config.get('EVENTS_TO_LOG').split(',').includes('qr-code')
    );
  }

  @MessagePattern('qrCode')
  handle(data: any) {
    if (this.shouldLog()) this.logger.verbose({ data });
  }
}
