import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class SessionLoggedController {
  private readonly logger = new Logger(SessionLoggedController.name);

  @MessagePattern('session-logged')
  handle(data: any) {
    this.logger.verbose({ data });
  }
}
