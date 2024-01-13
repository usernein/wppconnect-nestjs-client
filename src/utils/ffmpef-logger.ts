import * as FfmpegCommand from 'fluent-ffmpeg';
import { Logger } from '@nestjs/common';

export class FfmpegLogger implements FfmpegCommand.FfmpegCommandLogger {
  private readonly logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  error(message: string) {
    this.logger.error(message);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  info(message: string) {
    this.logger.log(message);
  }
}