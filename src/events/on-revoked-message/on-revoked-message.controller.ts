import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnRevokedMessageController {
  private readonly logger = new Logger(OnRevokedMessageController.name);

  constructor(private config: ConfigService) {}

  @MessagePattern('onrevokedmessage')
  handle(data: any) {
    if (this.config.get('LOG_UPDATES')) this.logger.verbose({ data });
  }
}
