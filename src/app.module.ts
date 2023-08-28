import { Module } from '@nestjs/common';
import { SocketIoClientProvider } from './utils/socket-io-client-provider/socket-io-client-provider';
import { ConfigModule } from '@nestjs/config';
import { SocketIoClientStrategy } from './strategies/socket-io-client-strategy/socket-io-client.strategy';
import { ReceivedMessageController } from './events/received-message/received-message.controller';
import { IncomingCallController } from './events/incoming-call/incoming-call.controller';
import { OnAckController } from './events/on-ack/on-ack.controller';
import { OnPollResponseController } from './events/on-poll-response/on-poll-response.controller';
import { OnPresenceChangedController } from './events/on-presence-changed/on-presence-changed.controller';
import { OnReactionMessageController } from './events/on-reaction-message/on-reaction-message.controller';
import { OnRevokedMessageController } from './events/on-revoked-message/on-revoked-message.controller';
import { OnUpdateLabelController } from './events/on-update-label/on-update-label.controller';
import { QrCodeController } from './events/qr-code/qr-code.controller';
import { SessionErrorController } from './events/session-error/session-error.controller';
import { SessionLoggedController } from './events/session-logged/session-logged.controller';
import { WhatsappStatusController } from './events/whatsapp-status/whatsapp-status.controller';
import { DiceHandler } from './handlers/received-message/dice.handler';
import { IUpdateHandler } from './handlers/contracts/handler.interface';
import { PingHandler } from './handlers/received-message/ping.handler';
import { WeatherHandler } from './handlers/received-message/weather.handler';
import { StickerHandler } from './handlers/received-message/sticker.handler';
import { HelpHandler } from './handlers/received-message/help.handler';
import { CommandsHandler } from './handlers/received-message/commands.handler';
import { InfoHandler } from './handlers/received-message/info.handler';
import { envValidationSchema } from './validation/env-schema-validation';
import { I18nModule } from 'nestjs-i18n';
import * as path from 'path';
import { HandlerFilter } from './utils/handler-filter';

const updateHandlers = [
  DiceHandler,
  PingHandler,
  WeatherHandler,
  StickerHandler,
  HelpHandler,
  CommandsHandler,
  InfoHandler,
];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      validationSchema: envValidationSchema,
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'pt-br',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      typesOutputPath: path.join(
        __dirname,
        '../src/generated/i18n.generated.ts',
      ),
    }),
  ],
  controllers: [
    IncomingCallController,
    OnAckController,
    OnPollResponseController,
    OnPresenceChangedController,
    OnReactionMessageController,
    OnRevokedMessageController,
    OnUpdateLabelController,
    QrCodeController,
    ReceivedMessageController,
    SessionErrorController,
    SessionLoggedController,
    WhatsappStatusController,
  ],
  providers: [
    SocketIoClientProvider,
    SocketIoClientStrategy,
    HandlerFilter,
    ...updateHandlers,
    {
      provide: 'ReceivedMessageHandlers',
      useFactory: (...handlers: IUpdateHandler[]) => handlers,
      inject: updateHandlers,
    },
  ],
})
export class AppModule {}
