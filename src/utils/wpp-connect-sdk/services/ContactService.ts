/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContactService {

    /**
     * @param session
     * @param phone
     * @returns any OK
     * @throws ApiError
     */
    public static getApiProfilePic(
        session: string,
        phone: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/profile-pic/{phone}',
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
    public static getApiProfileStatus(
        session: string,
        phone: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/profile-status/{phone}',
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
