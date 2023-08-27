import { Logger } from '@nestjs/common';
import { MessagesService } from 'src/utils/wpp-connect-sdk';
import { IUpdateHandler } from '../contracts/handler.interface';

export class StickerHandler implements IUpdateHandler {
  private readonly logger = new Logger(StickerHandler.name);

  checkIsImageCommand(response: any) {
    return response.type === 'image' && response.caption == '.sticker';
  }

  match({ response }: any) {
    const { body } = response;
    return this.checkIsImageCommand(response) || body === '.sticker';
  }

  async handle({ response }: any) {
    this.logger.log('.sticker command received');
    const isQuotingImage =
      response.quotedMsgId && response.quotedMsg.type == 'image';
    const isImageCommand = this.checkIsImageCommand(response);

    if (!isImageCommand && !isQuotingImage) {
      const text = `*🤖 Ops!*\n_Para transformar uma imagem em sticker, envie o comando respondendo a uma imagem ou envie uma imagem com o comando na legenda._`;
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
