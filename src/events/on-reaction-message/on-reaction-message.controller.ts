import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnReactionMessageController {
  private readonly logger = new Logger(OnReactionMessageController.name);

  constructor(private config: ConfigService) {}

  @MessagePattern('onreactionmessage')
  handle(data: any) {
    if (this.config.get('LOG_UPDATES')) this.logger.verbose({ data });
  }
}
