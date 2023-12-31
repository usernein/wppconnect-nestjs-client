import { Injectable, Logger } from '@nestjs/common';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';
import { HandlerFilter } from 'src/utils/handler-filter';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CommandsHandler implements IUpdateHandler {
  private readonly logger = new Logger(CommandsHandler.name);

  constructor(
    private readonly i18n: I18nService<I18nTranslations>,
    private readonly filter: HandlerFilter,
    private readonly config: ConfigService,
  ) {}

  match({ response }: any) {
    return this.filter.check(response).isCommand('commands');
  }

  async handle({ response }: any) {
    this.logger.log('.commands command received');

    const commandsDescriptions = this.i18n.t('commands.commands-info', {
      args: { prefix: this.config.get('COMMAND_PREFIX') },
    });

    const header = this.i18n.t('commands.header');

    const textParts = [header];

    Object.entries(commandsDescriptions).forEach(([command, info]) => {
      textParts.push(
        this.i18n.t('commands.command-item', {
          args: {
            prefix: this.config.get('COMMAND_PREFIX'),
            name: command,
            description: info.description,
          },
        }),
      );
    });

    textParts.push(
      this.i18n.t('commands.footer', {
        args: {
          prefix: this.config.get('COMMAND_PREFIX'),
        },
      }),
    );

    const text = textParts.join('\n');

    MessagesService.postApiSendMessage(response.session, {
      phone: response.chatId,
      isGroup: response.isGroupMsg,
      message: text,
    });
  }
}
