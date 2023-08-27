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

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' })],
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
  providers: [SocketIoClientProvider, SocketIoClientStrategy],
})
export class AppModule {}
