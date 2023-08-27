/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MiscService {

    /**
     * @param session
     * @param messageId
     * @returns any OK
     * @throws ApiError
     */
    public static getApiGetPlatformFromMessage(
        session: string,
        messageId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/get-platform-from-message/{messageId}',
            path: {
                'session': session,
                'messageId': messageId,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param secretkey
     * @returns any OK
     * @throws ApiError
     */
    public static postApiClearSessionData(
        session: string,
        secretkey: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/{secretkey}/clear-session-data',
            path: {
                'session': session,
                'secretkey': secretkey,
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
    public static postApiSubscribePresence(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
            all?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/subscribe-presence',
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
     * @returns any OK
     * @throws ApiError
     */
    public static getApiAllBroadcastList(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/all-broadcast-list',
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
    public static postApiRejectCall(
        session: string,
        requestBody: {
            callId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/reject-call',
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
    public static getApiCheckNumberStatus(
        session: string,
        phone: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/check-number-status/{phone}',
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
     * @returns any OK
     * @throws ApiError
     */
    public static getApiBlocklist(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/blocklist',
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
    public static postApiBlockContact(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/block-contact',
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
    public static postApiUnblockContact(
        session: string,
        requestBody: {
            phone?: string;
            isGroup?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/unblock-contact',
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
     * @returns any OK
     * @throws ApiError
     */
    public static getApiGetBatteryLevel(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/get-battery-level',
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
    public static getApiHostDevice(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/host-device',
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
    public static getApiGetPhoneNumber(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/get-phone-number',
            path: {
                'session': session,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Please, open the router in your browser, in swagger this not run
     * @param secretkey
     * @returns any A ZIP file contaings your backup. Please, open this link in your browser
     * @throws ApiError
     */
    public static getApiBackupSessions(
        secretkey: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{secretkey}/backup-sessions',
            path: {
                'secretkey': secretkey,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param secretkey
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static postApiRestoreSessions(
        secretkey: string,
        formData: {
            file: Blob;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{secretkey}/restore-sessions',
            path: {
                'secretkey': secretkey,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @returns any OK
     * @throws ApiError
     */
    public static getApiTakeScreenshot(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/take-screenshot',
            path: {
                'session': session,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Change limits of whatsapp web. Types value: maxMediaSize, maxFileSize, maxShare, statusVideoMaxDuration, unlimitedPin;
     * @param session
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiSetLimit(
        session: string,
        requestBody: {
            type: string;
            value: any;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/set-limit',
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
     * You can point your Chatwoot to this route so that it can perform functions.
     * @param session
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiChatwoot(
        session: string,
        requestBody: {
            event?: string;
            private?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/chatwoot',
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
     * This endpoint can be used to check the health status of the API. It returns a response with a status code indicating the API
     * @returns void
     * @throws ApiError
     */
    public static getHealthz(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/healthz',
        });
    }

    /**
     * This endpoint can be used to check the status of API metrics. It returns a response with the collected metrics.
     * @returns void
     * @throws ApiError
     */
    public static getMetrics(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/metrics',
        });
    }

    /**
     * This endpoint is used to force the API into an unhealthy state. It can be useful for testing error handling or simulating service disruptions.
     * @returns void
     * @throws ApiError
     */
    public static getUnhealthy(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/unhealthy',
        });
    }

}
