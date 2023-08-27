/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StatusStoriesService {

    /**
     * @param session
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postApiSendTextStorie(
        session: string,
        requestBody: {
            text: string;
            options?: Record<string, any>;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-text-storie',
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
    public static postApiSendImageStorie(
        session: string,
        requestBody: {
            path: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-image-storie',
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
    public static postApiSendVideoStorie(
        session: string,
        requestBody: {
            path: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/send-video-storie',
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

}
