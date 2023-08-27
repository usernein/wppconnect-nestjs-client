import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnPresenceChangedController {
  private readonly logger = new Logger(OnPresenceChangedController.name);

  @MessagePattern('onpresencechanged')
  handle(data: any) {
    this.logger.verbose({ data });
  }
}
