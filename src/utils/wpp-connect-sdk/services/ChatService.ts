/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChatService {

    /**
     * @deprecated
     * Deprecated in favor of
     * This body is not required. Not sent body to get all chats or filter.
     * @param session
     * @param messageId
     * @param file
     * @param requestBody
     * @param phone
     * @param isGroup
     * @param includeMe
     * @param includeNotifications
     * @param type
     * @param count
     * @param direction
     * @param id
     * @param status
     * @param response
     * @returns any OK
     * @throws ApiError
     */
    public static getApiAllChats(
        session: string,
        messageId: string,
        file: Blob,
        requestBody: {
            event?: string;
            private?: string;
        },
        phone?: string,
        isGroup?: string,
        includeMe?: string,
        includeNotifications?: string,
        type?: string,
        count?: string,
        direction?: string,
        id?: string,
        status?: string,
        response?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/all-chats',
            path: {
                'session': session,
            },
            query: {
                'phone': phone,
                'isGroup': isGroup,
                'includeMe': includeMe,
                'includeNotifications': includeNotifications,
                'messageId': messageId,
                'type': type,
                'count': count,
                'direction': direction,
                'id': id,
                'status': status,
                'response': response,
            },
            formData: {
                'file': file,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve a list of chats
     * This body is not required. Not sent body to get all chats or filter.
     * @param session
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiListChats(
        session: string,
        requestBody?: {
            id?: string;
            count?: number;
            direction?: string;
            onlyGroups?: boolean;
            onlyUsers?: boolean;
            onlyWithUnreadMessage?: boolean;
            withLabels?: any[];
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/list-chats',
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
     * Retrieves all archived chats.
     * @param session
     * @returns any Created
     * @throws ApiError
     */
    public static getApiAllChatsArchived(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/all-chats-archived',
            path: {
                'session': session,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @deprecated
     * Deprecated in favor of list-chats
     * @param session
     * @returns any OK
     * @throws ApiError
     */
    public static getApiAllChatsWithMessages(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/all-chats-with-messages',
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
     * @param isGroup
     * @param includeMe
     * @param includeNotifications
     * @returns any OK
     * @throws ApiError
     */
    public static getApiAllMessagesInChat(
        session: string,
        phone: string,
        isGroup?: string,
        includeMe?: string,
        includeNotifications?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/all-messages-in-chat/{phone}',
            path: {
                'session': session,
                'phone': phone,
            },
            query: {
                'isGroup': isGroup,
                'includeMe': includeMe,
                'includeNotifications': includeNotifications,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @returns any OK
     * @throws ApiError
     */
    public static getApiAllNewMessages(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/all-new-messages',
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
     * @returns any OK
     * @throws ApiError
     */
    public static getApiAllUnreadMessages(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/all-unread-messages',
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
     * @param isGroup
     * @returns any OK
     * @throws ApiError
     */
    public static getApiChatById(
        session: string,
        phone: string,
        isGroup?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/chat-by-id/{phone}',
            path: {
                'session': session,
                'phone': phone,
            },
            query: {
                'isGroup': isGroup,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param messageId
     * @returns void
     * @throws ApiError
     */
    public static getApiMessageById(
        session: string,
        messageId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/message-by-id/{messageId}',
            path: {
                'session': session,
                'messageId': messageId,
            },
        });
    }

    /**
     * @param session
     * @param phone
     * @returns any OK
     * @throws ApiError
     */
    public static getApiChatIsOnline(
        session: string,
        phone: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/chat-is-online/{phone}',
            path: {
                'session': session,
                'phone': phone,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param phone
     * @returns any OK
     * @throws ApiError
     */
    public static getApiLastSeen(
        session: string,
        phone: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/last-seen/{phone}',
            path: {
                'session': session,
                'phone': phone,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param type
     * @returns any OK
     * @throws ApiError
     */
    public static getApiListMutes(
        session: string,
        type: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/list-mutes/{type}',
            path: {
                'session': session,
                'type': type,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @deprecated
     * @param session
     * @param phone
     * @param includeMe
     * @param includeNotifications
     * @returns any OK
     * @throws ApiError
     */
    public static getApiLoadMessagesInChat(
        session: string,
        phone: string,
        includeMe?: string,
        includeNotifications?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/load-messages-in-chat/{phone}',
            path: {
                'session': session,
                'phone': phone,
            },
            query: {
                'includeMe': includeMe,
                'includeNotifications': includeNotifications,
            },
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
    public static postApiArchiveChat(
        session: string,
        requestBody?: {
            phone?: string;
            isGroup?: boolean;
            value?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/archive-chat',
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
     * @returns any Created
     * @throws ApiError
     */
    public static postApiArchiveAllChats(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/archive-all-chats',
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
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiClearChat(
        session: string,
        requestBody?: {
            phone?: string;
            isGroup?: boolean;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/clear-chat',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param session
     * @returns any Created
     * @throws ApiError
     */
    public static postApiClearAllChats(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/clear-all-chats',
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
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiDeleteChat(
        session: string,
        requestBody?: {
            phone?: string;
            isGroup?: boolean;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/delete-chat',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param session
     * @returns any OK
     * @throws ApiError
     */
    public static postApiDeleteAllChats(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/delete-all-chats',
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
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiPinChat(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            state?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/pin-chat',
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
    public static postApiSendMute(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            time?: number;
            type?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-mute',
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
     * @returns void
     * @throws ApiError
     */
    public static postApiSendSeen(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-seen',
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
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiChatState(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            chatstate?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/chat-state',
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
    public static postApiTyping(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            value?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/typing',
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
    public static postApiRecording(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            duration?: number;
            value?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/recording',
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
     * @param phone
     * @returns any OK
     * @throws ApiError
     */
    public static getApiContact(
        session: string,
        phone: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/contact/{phone}',
            path: {
                'session': session,
                'phone': phone,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @deprecated
     * @param session
     * @param phone
     * @returns any OK
     * @throws ApiError
     */
    public static getApiProfile(
        session: string,
        phone: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/profile/{phone}',
            path: {
                'session': session,
                'phone': phone,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

}
