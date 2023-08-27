import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnAckController {
  constructor(private readonly config: ConfigService) {}

  private readonly logger = new Logger(OnAckController.name);

  @MessagePattern('onack')
  handle(data: any) {
    if (this.config.get('LOG_UPDATES')) this.logger.verbose({ data });
  }
}
