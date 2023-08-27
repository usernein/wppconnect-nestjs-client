import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnRevokedMessageController {
  private readonly logger = new Logger(OnRevokedMessageController.name);

  @MessagePattern('onrevokedmessage')
  handle(data: any) {
    this.logger.verbose({ data });
  }
}
