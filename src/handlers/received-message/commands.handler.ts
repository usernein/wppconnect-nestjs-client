import { Logger } from '@nestjs/common';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';
// 🗒️ *Lista de comandos*\n- *.commands*: retorna esta mensagem\n- *.help*: retorna uma mensagem pouco útil\n\n- *.ping*: para pequenos testes. Retorna o tempo que levou para receber a processar a mensagem.\n- *.dice*: lança um dado e retorna o resultado.\n- *.sticker*: envie o comando respondendo a uma imagem para transformá-la em sticker. Também funciona utilizando o comando como legenda de uma imagem.\n- *.clima*: passe o nome de uma cidade (ou de qualquer localização) como argumento e receba informações do clima em tempo real.
export class CommandsHandler implements IUpdateHandler {
  private readonly logger = new Logger(CommandsHandler.name);

  private commandsDescriptions = {
    commands: 'retorna esta mensagem',
    help: 'retorna uma mensagem pouco útil',
    info: 'retorna info sobre este chatbot',
    ping: 'para pequenos testes. Retorna o tempo que levou para receber a processar a mensagem.',
    dice: 'lança um dado de 6 faces e retorna o resultado.',
    sticker:
      'envie o comando respondendo a uma imagem para transformá-la em sticker. Também funciona utilizando o comando como legenda de uma imagem.',
    clima:
      'passe o nome de uma cidade (ou de qualquer localização) como argumento e receba informações do clima em tempo real.',
  };

  match({ response: { body } }: any) {
    return body?.startsWith('.commands');
  }

  async handle({ response }: any) {
    this.logger.log('.commands command received');
    const parts = response.body.split(' ');
    const args = parts.slice(1);
    const isDetailed = args.length && args[0] == 'info';

    const header =
      `🗒️ *Lista de comandos*` +
      (isDetailed ? '' : '\n_(Envie *.commands info* para + detalhes)_\n');
    const textParts = [header];

    Object.entries(this.commandsDescriptions).forEach(
      ([command, description]) => {
        if (isDetailed) {
          textParts.push(`- *.${command}*: ${description}\n`);
          return;
        }
        textParts.push(`- *.${command}*`);
      },
    );

    const text = textParts.join('\n');

    MessagesService.postApiSendMessage(response.session, {
      phone: response.chatId,
      isGroup: response.isGroupMsg,
      message: text,
    });
  }
}
