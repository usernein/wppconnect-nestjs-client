import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Socket, io } from 'socket.io-client';

@Injectable()
export class SocketIoClientProvider {
  @Inject(ConfigService)
  private readonly config: ConfigService;
  private socket: Socket;
  private readonly logger = new Logger(SocketIoClientProvider.name);

  private connect() {
    const url = this.config.get('WPPCONNECT_BASE');
    this.logger.verbose(`Connecting to socket.io server: ${url}`);

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
