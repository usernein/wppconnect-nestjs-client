/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CatalogBussinessService {

    /**
     * @param session
     * @param phone
     * @param qnt
     * @returns any Created
     * @throws ApiError
     */
    public static getApiGetProducts(
        session: string,
        phone?: string,
        qnt?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/get-products',
            path: {
                'session': session,
            },
            query: {
                'phone': phone,
                'qnt': qnt,
            },
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param session
     * @param phone
     * @param id
     * @returns any Created
     * @throws ApiError
     */
    public static getApiGetProductById(
        session: string,
        phone?: string,
        id?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/get-product-by-id',
            path: {
                'session': session,
            },
            query: {
                'phone': phone,
                'id': id,
            },
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
    public static postApiAddProduct(
        session: string,
        requestBody: {
            name?: string;
            image?: string;
            description?: string;
            price?: string;
            url?: string;
            retailerId?: string;
            currency?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/add-product',
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
    public static postApiEditProduct(
        session: string,
        requestBody: {
            id?: string;
            options?: Record<string, any>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/edit-product',
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
    public static postApiDelProducts(
        session: string,
        requestBody: {
            id?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/del-products',
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
    public static postApiChangeProductImage(
        session: string,
        requestBody: {
            id?: string;
            base64?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/change-product-image',
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
    public static postApiAddProductImage(
        session: string,
        requestBody: {
            id?: string;
            base64?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/add-product-image',
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
    public static postApiRemoveProductImage(
        session: string,
        requestBody: {
            id?: string;
            index?: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/remove-product-image',
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
     * @param phone
     * @param qnt
     * @param max
     * @returns any Created
     * @throws ApiError
     */
    public static getApiGetCollections(
        session: string,
        phone?: string,
        qnt?: string,
        max?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/get-collections',
            path: {
                'session': session,
            },
            query: {
                'phone': phone,
                'qnt': qnt,
                'max': max,
            },
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
    public static postApiCreateCollection(
        session: string,
        requestBody: {
            name?: string;
            products?: any[];
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/create-collection',
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
    public static postApiEditCollection(
        session: string,
        requestBody: {
            id?: string;
            products?: any[];
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/edit-collection',
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
    public static postApiDelCollection(
        session: string,
        requestBody: {
            id?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/del-collection',
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
    public static postApiSetProductVisibility(
        session: string,
        requestBody: {
            id?: string;
            value?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/set-product-visibility',
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
    public static postApiSetCartEnabled(
        session: string,
        requestBody: {
            enabled?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/set-cart-enabled',
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
     * @returns void
     * @throws ApiError
     */
    public static getApiGetBusinessProfilesProducts(
        session: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/get-business-profiles-products',
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
    public static getApiGetOrderByMessageId(
        session: string,
        requestBody: {
            messageId: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/get-order-by-messageId',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
