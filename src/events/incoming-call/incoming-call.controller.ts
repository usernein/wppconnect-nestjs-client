import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class IncomingCallController {
  private readonly logger = new Logger(IncomingCallController.name);

  @MessagePattern('incomingcall')
  handle(data: any) {
    this.logger.verbose({ data });
  }
}
