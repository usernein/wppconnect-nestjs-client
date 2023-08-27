/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LabelsService {

    /**
     * @param session
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static postApiAddNewLabel(
        session: string,
        requestBody: {
            name: string;
            options: {
                labelColor?: number;
            };
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/add-new-label',
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

    /**
     * @param session
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static postApiAddOrRemoveLabel(
        session: string,
        requestBody: {
            chatIds: Array<string>;
            options?: Array<{
                labelId?: string;
                type?: string;
            }>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/add-or-remove-label',
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

    /**
     * @param session
     * @returns any Created
     * @throws ApiError
     */
    public static getApiGetAllLabels(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/get-all-labels',
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
     * @returns any Created
     * @throws ApiError
     */
    public static putApiDeleteAllLabels(
        session: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/{session}/delete-all-labels',
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
     * @param id
     * @returns any Created
     * @throws ApiError
     */
    public static putApiDeleteLabel(
        session: string,
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/{session}/delete-label/{id}',
            path: {
                'session': session,
                'id': id,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

}
