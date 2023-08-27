/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MessagesService {

    /**
     * @param session
     * @param messageId
     * @returns any OK
     * @throws ApiError
     */
    public static getApiGetMediaByMessage(
        session: string,
        messageId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/get-media-by-message/{messageId}',
            path: {
                'session': session,
                'messageId': messageId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiDownloadMedia(
        session: string,
        requestBody: {
            messageId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/download-media',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendMessage(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            message?: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-message',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendImage(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            filename?: string;
            caption?: string;
            base64?: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-image',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendSticker(
        session: string,
        requestBody: {
            phone: string;
            isGroup?: boolean;
            path: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-sticker',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendStickerGif(
        session: string,
        requestBody: {
            phone: string;
            isGroup?: boolean;
            path: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-sticker-gif',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendReply(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            message?: string;
            messageId?: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-reply',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendFile(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            filename?: string;
            caption?: string;
            base64?: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-file',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendFileBase64(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            filename?: string;
            caption?: string;
            base64?: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-file-base64',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendVoice(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            path?: string;
            quotedMessageId?: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-voice',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendVoiceBase64(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            base64Ptt?: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-voice-base64',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendStatus(
        session: string,
        requestBody: {
            phone: string;
            isGroup: boolean;
            message: string;
            messageId?: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-status',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendLinkPreview(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            url?: string;
            caption?: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-link-preview',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendLocation(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            lat?: string;
            lng?: string;
            title?: string;
            address?: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-location',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static postApiSendMentioned(
        session: string,
        requestBody: {
            phone: string;
            isGroup?: boolean;
            message: string;
            mentioned: Array<string>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-mentioned',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @deprecated
     * @param session
     * @returns void
     * @throws ApiError
     */
    public static postApiSendButtons(
        session: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-buttons',
            path: {
                'session': session,
            },
        });
    }

    /**
     * @deprecated
     * @param session
     * @returns void
     * @throws ApiError
     */
    public static postApiSendListMessage(
        session: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-list-message',
            path: {
                'session': session,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendPollMessage(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            name?: string;
            choices?: any[];
            options?: Record<string, any>;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-poll-message',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * @param session
     * @returns any OK
     * @throws ApiError
     */
    public static getApiUnreadMessages(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/unread-messages',
            path: {
                'session': session,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param phone
     * @param count
     * @param direction
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static getApiGetMessages(
        session: string,
        phone: string,
        count?: string,
        direction?: string,
        id?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/get-messages/{phone}',
            path: {
                'session': session,
                'phone': phone,
            },
            query: {
                'count': count,
                'direction': direction,
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiDeleteMessage(
        session: string,
        requestBody?: {
            phone?: string;
            isGroup?: boolean;
            messageId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/delete-message',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiReactMessage(
        session: string,
        requestBody?: {
            messageId?: string;
            reaction?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/react-message',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static postApiForwardMessages(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            messageid?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/forward-messages',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiMarkUnseen(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/mark-unseen',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiContactVcard(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            name?: string;
            contactsId?: any[];
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/contact-vcard',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiTemporaryMessages(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            value?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/temporary-messages',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiStarMessage(
        session: string,
        requestBody: {
            messageId?: string;
            star?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/star-message',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param id
     * @param messageId
     * @returns any OK
     * @throws ApiError
     */
    public static getApiReactions(
        session: string,
        id: string,
        messageId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/reactions/{id}',
            path: {
                'session': session,
                'id': id,
            },
            query: {
                'messageId': messageId,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param id
     * @param messageId
     * @returns any OK
     * @throws ApiError
     */
    public static getApiVotes(
        session: string,
        id: string,
        messageId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/votes/{id}',
            path: {
                'session': session,
                'id': id,
            },
            query: {
                'messageId': messageId,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiSendLinkCatalog(
        session: string,
        requestBody: {
            phones?: any[];
            message?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-link-catalog',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }

}
