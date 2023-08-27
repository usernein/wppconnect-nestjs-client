/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProfileService {

    /**
     * @param session
     * @param file
     * @returns any OK
     * @throws ApiError
     */
    public static postApiSetProfilePic(
        session: string,
        file: Blob,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/set-profile-pic',
            path: {
                'session': session,
            },
            formData: {
                'file': file,
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
    public static postApiProfileStatus(
        session: string,
        requestBody: {
            status?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/profile-status',
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
    public static postApiChangeUsername(
        session: string,
        requestBody?: {
            name?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/change-username',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Edit your bussiness profile
     * @param session
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiEditBusinessProfile(
        session: string,
        requestBody: {
            adress?: string;
            email?: string;
            categories?: Record<string, any>;
            websites?: any[];
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/edit-business-profile',
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
