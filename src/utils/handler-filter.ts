import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

class FiltersFulfilledWithResponse {
  constructor(
    private readonly response: any,
    private readonly config: ConfigService,
  ) {}

  isCommand(command: string): boolean {
    const message = this.response.caption || this.response.body;

    if (!message) {
      return false;
    }

    const COMMAND_PREFIX = this.config.get('COMMAND_PREFIX');
    return message.startsWith(COMMAND_PREFIX + command);
  }
}

@Injectable()
export class HandlerFilter {
  constructor(private readonly config: ConfigService) {}

  check(response: any): FiltersFulfilledWithResponse {
    return new FiltersFulfilledWithResponse(response, this.config);
  }
}
