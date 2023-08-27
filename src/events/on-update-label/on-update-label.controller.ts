import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnUpdateLabelController {
  private readonly logger = new Logger(OnUpdateLabelController.name);

  constructor(private readonly config: ConfigService) {}

  @MessagePattern('onupdatelabel')
  handle(data: any) {
    if (this.config.get('LOG_UPDATES')) this.logger.verbose({ data });
  }
}
