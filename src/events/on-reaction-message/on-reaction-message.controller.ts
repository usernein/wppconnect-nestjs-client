import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnReactionMessageController {
  private readonly logger = new Logger(OnReactionMessageController.name);

  @MessagePattern('onreactionmessage')
  handle(data: any) {
    this.logger.verbose({ data });
  }
}
