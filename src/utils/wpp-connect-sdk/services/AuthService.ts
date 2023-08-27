/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * @param session
     * @param secretkey
     * @returns any Created
     * @throws ApiError
     */
    public static postApiGenerateToken(
        session: string,
        secretkey: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/{secretkey}/generate-token',
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
     * @param secretkey
     * @returns any OK
     * @throws ApiError
     */
    public static getApiShowAllSessions(
        secretkey: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{secretkey}/show-all-sessions',
            path: {
                'secretkey': secretkey,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param secretkey
     * @param session
     * @param authorization
     * @returns any Created
     * @throws ApiError
     */
    public static postApiStartAll(
        secretkey: string,
        session?: string,
        authorization?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{secretkey}/start-all',
            path: {
                'secretkey': secretkey,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'session': session,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param session
     * @returns any OK
     * @throws ApiError
     */
    public static getApiCheckConnectionSession(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/check-connection-session',
            path: {
                'session': session,
            },
        });
    }

    /**
     * @param session
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static getApiStatusSession(
        session: string,
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/status-session',
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
    public static getApiQrcodeSession(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/qrcode-session',
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
    public static postApiStartSession(
        session: string,
        requestBody: {
            webhook?: string;
            waitQrCode?: boolean;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/start-session',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * This route logout and delete session data
     * @param session
     * @returns any OK
     * @throws ApiError
     */
    public static postApiLogoutSession(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/logout-session',
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
    public static postApiCloseSession(
        session: string,
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/close-session',
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

}
