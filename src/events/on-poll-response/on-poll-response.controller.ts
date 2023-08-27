import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OnPollResponseController {
  private readonly logger = new Logger(OnPollResponseController.name);

  @MessagePattern('onpollresponse')
  handle(data: any) {
    this.logger.verbose({ data });
  }
}
