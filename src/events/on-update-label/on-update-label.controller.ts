import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnUpdateLabelController {
  private readonly logger = new Logger(OnUpdateLabelController.name);

  @MessagePattern('onupdatelabel')
  handle(data: any) {
    this.logger.verbose({ data });
  }
}
