import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnPollResponseController {
  private readonly logger = new Logger(OnPollResponseController.name);

  constructor(private readonly config: ConfigService) {}

  @MessagePattern('onpollresponse')
  handle(data: any) {
    if (this.config.get('LOG_UPDATES')) this.logger.verbose({ data });
  }
}
