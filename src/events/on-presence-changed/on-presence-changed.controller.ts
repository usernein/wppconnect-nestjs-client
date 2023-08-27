import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnPresenceChangedController {
  private readonly logger = new Logger(OnPresenceChangedController.name);

  constructor(private readonly config: ConfigService) {}

  @MessagePattern('onpresencechanged')
  handle(data: any) {
    if (this.config.get('LOG_UPDATES')) this.logger.verbose({ data });
  }
}
