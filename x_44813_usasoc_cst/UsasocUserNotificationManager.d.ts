/// <reference path="../index.d.ts" />

declare namespace x_44813_usasoc_cst {
    export interface NameLabelAndFailMessage<T extends string> {
        name: T;
        label: string;
        failAdj: string;
    }
    export interface IUsasocUserNotificationManagerResponse {
        code: number;
        user_id: string;
        sys_id?: string;
    }
    export interface IUsasocUserNotificationManagerComplete extends IUsasocUserNotificationManagerResponse {
        code: 0;
        sys_id: string;
    }
    export interface IUsasocUserNotificationManagerFault extends IUsasocUserNotificationManagerResponse {
        code: Exclude<number, 0>;
        message: string;
        reason?: string;
        fault?: any;
    }
    export interface GetUserGlideObjectResult extends IUsasocUserNotificationManagerComplete {
        user: sys_userFields & (GlideRecord | GlideElement);
    }
    export interface UserProfileFieldComplianceResult {
        label: string;
        passed: boolean;
    }
    export interface UserProfileFieldAccessError extends Omit<UserProfileFieldComplianceResult, "passed">, IUsasocUserNotificationManagerFault {
    }
    export type PROFILE_FIELD_NAME = 'building' | 'department' | 'u_red_phone';
    export interface UserProfileComplianceFieldResults {
        building: UserProfileFieldComplianceResult | UserProfileFieldAccessError;
        department: UserProfileFieldComplianceResult | UserProfileFieldAccessError;
        u_red_phone: UserProfileFieldComplianceResult | UserProfileFieldAccessError;
    }
    export interface UserProfileComplianceCheck {
        passed: number;
        failed: number;
        notChecked: number;
        message: string;
        results: UserProfileComplianceFieldResults;
    }
    export interface UserProfileComplianceResponse extends UserProfileComplianceCheck, IUsasocUserNotificationManagerComplete {
    }
    export interface UserNotificationsResponse extends IUsasocUserNotificationManagerComplete {
        profileCompliance: UserProfileComplianceCheck;
    }
    export class UsasocUserNotificationManager{
        constructor ();
        static isUsasocUserNotificationManagerFault(result: IUsasocUserNotificationManagerResponse): result is IUsasocUserNotificationManagerFault;
        static getUserGlideObject(user?: $$rhino.String | GlideUser | sys_userFields): GetUserGlideObjectResult | IUsasocUserNotificationManagerFault;
        static checkUserProfileCompliance(sys_user: sys_userFields): UserProfileComplianceCheck;
        static getUserProfileCompliance(user?: $$rhino.String | GlideUser | sys_userFields): UserProfileComplianceResponse | IUsasocUserNotificationManagerFault;
        static getUserNotifications(user?: $$rhino.String | GlideUser | sys_userFields): UserNotificationsResponse | IUsasocUserNotificationManagerFault;
        getUserNotifications(): string;
        getUserProfileCompliance(): string;
    }
}