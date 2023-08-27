import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnAckController {
  private readonly logger = new Logger(OnAckController.name);

  @MessagePattern('onack')
  handle(data: any) {
    this.logger.verbose({ data });
  }
}
