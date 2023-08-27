import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class SessionErrorController {
  private readonly logger = new Logger(SessionErrorController.name);

  constructor(private config: ConfigService) {}

  @MessagePattern('session-error')
  handle(data: any) {
    if (this.config.get('LOG_UPDATES')) this.logger.verbose({ data });
  }
}
