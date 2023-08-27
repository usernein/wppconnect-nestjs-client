import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class SessionErrorController {
  private readonly logger = new Logger(SessionErrorController.name);

  @MessagePattern('session-error')
  handle(data: any) {
    this.logger.verbose({ data });
  }
}
