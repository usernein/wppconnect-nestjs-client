import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class SessionLoggedController {
  private readonly logger = new Logger(SessionLoggedController.name);

  constructor(private config: ConfigService) {}

  @MessagePattern('session-logged')
  handle(data: any) {
    if (this.config.get('LOG_UPDATES')) this.logger.verbose({ data });
  }
}
