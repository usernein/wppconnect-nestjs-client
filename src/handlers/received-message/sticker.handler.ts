import { Injectable, Logger } from '@nestjs/common';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';
import { HandlerFilter } from 'src/utils/handler-filter';

@Injectable()
export class StickerHandler implements IUpdateHandler {
  private readonly logger = new Logger(StickerHandler.name);

  constructor(
    private readonly i18n: I18nService<I18nTranslations>,
    private readonly filter: HandlerFilter,
  ) {}

  match({ response }: any) {
    return this.filter.check(response).isCommand('sticker');
  }

  private checkIsImageCommand(response: any) {
    return response.type == 'image';
  }

  async handle({ response }: any) {
    this.logger.log('.sticker command received');
    const isQuotingImage =
      response.quotedMsgId && response.quotedMsg.type == 'image';
    const isImageCommand = this.checkIsImageCommand(response);

    if (!isImageCommand && !isQuotingImage) {
      const text = this.i18n.t('sticker.error.wrong_usage.generic');
      await MessagesService.postApiSendMessage(response.session, {
        phone: response.chatId,
        isGroup: response.isGroupMsg,
        message: text,
      });
      return;
    }

    const mediaId = isQuotingImage ? response.quotedMsgId : response.id;

    const media = await MessagesService.postApiDownloadMedia(response.session, {
      messageId: mediaId,
    });

    const formattedBase64 = `data:${media.mimetype};base64,${media.base64}`;

    await MessagesService.postApiSendSticker(response.session, {
      phone: response.chatId,
      isGroup: response.isGroupMsg,
      path: formattedBase64,
    });
  }
}
