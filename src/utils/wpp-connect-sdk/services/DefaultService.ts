/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @param session
     * @returns void
     * @throws ApiError
     */
    public static getApiAllContacts(
        session: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/all-contacts',
            path: {
                'session': session,
            },
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public static getApiDocs(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api-docs',
        });
    }

}
