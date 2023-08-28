import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Socket, io } from 'socket.io-client';

@Injectable()
export class SocketIoClientProvider {
  @Inject(ConfigService)
  private readonly config: ConfigService;
  private socket: Socket;
  private readonly logger = new Logger(SocketIoClientProvider.name);

  private logStartInfo() {
    const url = this.config.get('WPPCONNECT_BASE');
    this.logger.verbose(`Starting socket.io client with url: ${url}`);
  }

  private connect() {
    this.logStartInfo();

    const url = this.config.get('WPPCONNECT_BASE');

    this.socket = io(url);
    return this.socket;
  }

  getSocket = () => {
    if (!this.socket) {
      return this.connect();
    }
    return this.socket;
  };
}
