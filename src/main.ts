import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SocketIoClientProvider } from './utils/socket-io-client-provider/socket-io-client-provider';
import { MicroserviceOptions } from '@nestjs/microservices';
import { SocketIoClientStrategy } from './strategies/socket-io-client-strategy/socket-io-client.strategy';
import { OpenAPI } from './utils/wpp-connect-sdk';
import { ConfigService } from '@nestjs/config';
import { LogLevel } from '@nestjs/common';

function getLogLevels(): LogLevel[] {
  const environment = process.env.NODE_ENV || 'development';
  const isInDevelopmentMode = environment === 'development';
  const defaultLogLevel: LogLevel[] = [
    'error',
    'warn',
    'log',
    'debug',
    'fatal',
  ];

  return isInDevelopmentMode
    ? [...defaultLogLevel, 'verbose']
    : defaultLogLevel;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: getLogLevels(),
  });
  const config = app.get(ConfigService);

  const socketIoClientProvider = app.get<SocketIoClientProvider>(
    SocketIoClientProvider,
  );

  app.connectMicroservice<MicroserviceOptions>({
    strategy: new SocketIoClientStrategy(socketIoClientProvider.getSocket()),
  });

  OpenAPI.WITH_CREDENTIALS = true;
  OpenAPI.BASE = config.get('WPPCONNECT_BASE');
  OpenAPI.TOKEN = config.get('WPPCONNECT_TOKEN');

  await app.startAllMicroservices();

  await app.listen(0);
}

bootstrap();
