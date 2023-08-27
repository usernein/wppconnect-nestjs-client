/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GroupService {

    /**
     * @deprecated
     * Deprecated in favor of
     * @param session
     * @param requestBody
     * @param groupId
     * @returns any OK
     * @throws ApiError
     */
    public static getApiAllGroups(
        session: string,
        requestBody: {
            groupId?: string;
            path?: string;
        },
        groupId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/all-groups',
            path: {
                'session': session,
            },
            query: {
                'groupId': groupId,
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
     * @param session
     * @param groupId
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static getApiGroupMembers(
        session: string,
        groupId: string,
        requestBody: {
            groupId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/group-members/{groupId}',
            path: {
                'session': session,
                'groupId': groupId,
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
     * @param groupId
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static getApiGroupAdmins(
        session: string,
        groupId: string,
        requestBody: {
            groupId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/group-admins/{groupId}',
            path: {
                'session': session,
                'groupId': groupId,
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
     * @param groupId
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static getApiGroupInviteLink(
        session: string,
        groupId: string,
        requestBody: {
            groupId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/group-invite-link/{groupId}',
            path: {
                'session': session,
                'groupId': groupId,
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
     * @param groupId
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static getApiGroupRevokeLink(
        session: string,
        groupId: string,
        requestBody: {
            groupId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/group-revoke-link/{groupId}',
            path: {
                'session': session,
                'groupId': groupId,
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
     * @param groupId
     * @returns any OK
     * @throws ApiError
     */
    public static getApiGroupMembersIds(
        session: string,
        groupId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/group-members-ids/{groupId}',
            path: {
                'session': session,
                'groupId': groupId,
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
    public static postApiCreateGroup(
        session: string,
        requestBody: {
            participants: Array<string>;
            name: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/create-group',
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
    public static postApiLeaveGroup(
        session: string,
        requestBody: {
            groupId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/leave-group',
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
    public static postApiJoinCode(
        session: string,
        requestBody: {
            inviteCode: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/join-code',
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
     * @param session
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static postApiAddParticipantGroup(
        session: string,
        requestBody: {
            groupId: string;
            phone: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/add-participant-group',
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
    public static postApiRemoveParticipantGroup(
        session: string,
        requestBody: {
            groupId: string;
            phone: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/remove-participant-group',
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
    public static postApiPromoteParticipantGroup(
        session: string,
        requestBody: {
            groupId: string;
            phone: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/promote-participant-group',
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
    public static postApiDemoteParticipantGroup(
        session: string,
        requestBody: {
            groupId: string;
            phone: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/demote-participant-group',
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
    public static postApiGroupInfoFromInviteLink(
        session: string,
        requestBody: {
            invitecode?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/group-info-from-invite-link',
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
    public static postApiGroupDescription(
        session: string,
        requestBody: {
            groupId?: string;
            description?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/group-description',
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
    public static postApiGroupProperty(
        session: string,
        requestBody: {
            groupId?: string;
            property?: string;
            value?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/group-property',
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
    public static postApiGroupSubject(
        session: string,
        requestBody: {
            groupId?: string;
            title?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/group-subject',
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
    public static postApiMessagesAdminsOnly(
        session: string,
        requestBody: {
            groupId?: string;
            value?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/messages-admins-only',
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
    public static postApiGroupPic(
        session: string,
        requestBody: {
            groupId?: string;
            path?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/group-pic',
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
     * @returns any OK
     * @throws ApiError
     */
    public static postApiChangePrivacyGroup(
        session: string,
        requestBody: {
            groupId?: string;
            status?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/change-privacy-group',
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
