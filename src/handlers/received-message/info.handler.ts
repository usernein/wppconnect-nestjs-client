import { Logger } from '@nestjs/common';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';

export class InfoHandler implements IUpdateHandler {
  private readonly logger = new Logger(InfoHandler.name);

  match({ response: { body } }: any) {
    return body === '.info';
  }

  async handle({ response }: any) {
    this.logger.log('.help command received');

    const version = process.env.npm_package_version;

    const text = `ℹ️ *Info sobre o bot:*\n_wppconnect-nestjs-client v${version}_\n\n🕵️‍♂️ _*Desenvolvedor*: github.com/usernein_\n📂 _*Código-fonte:* ainda indefinido_\n🛠️ _*Tecnologias*: NestJS, TypeScript, Wppconnect, WebSockets, Docker_`;

    MessagesService.postApiSendMessage(response.session, {
      phone: response.chatId,
      isGroup: response.isGroupMsg,
      message: text,
    });
  }
}
