import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class IncomingCallController {
  private readonly logger = new Logger(IncomingCallController.name);

  constructor(private readonly config: ConfigService) {}

  @MessagePattern('incomingcall')
  handle(data: any) {
    if (this.config.get('LOG_UPDATES')) this.logger.verbose({ data });
  }
}
