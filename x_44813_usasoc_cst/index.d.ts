/// <reference path="../index.d.ts" />

declare type USASOC_CST_LOCATION_APPROVERS_TYPE = "all" | "any";

declare interface x_44813_usasoc_cst_location_approversFields extends IGlideTableProperties {
    building: $$rhino.Nilable<$$property.generic.Reference<cmn_buildingFields, cmn_buildingGlideRecord>>;
    location: $$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>;
    department: $$rhino.Nilable<$$property.generic.Reference<cmn_departmentFields, cmn_departmentGlideRecord>>;
    business_unit: $$rhino.Nilable<$$property.generic.Reference<business_unitFields, business_unitGlideRecord>>;
    company: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;
    type: $$property.generic.Element<USASOC_CST_LOCATION_APPROVERS_TYPE>;
    approval_group: $$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>;
    order: $$property.Numeric;
}
declare type x_44813_usasoc_cst_location_approversGlideRecord = GlideRecord & x_44813_usasoc_cst_location_approversFields;

declare namespace x_44813_usasoc_cst {

    //#region TaskHelper

    export interface ITaskHelper extends ICustomClassBase<ITaskHelper, "TaskHelper"> {
        getCaller(): sys_userFields;
        isVip(): boolean;
        getDefaultApprovalGroupByCallerLocation(): sys_user_groupFields;
    }
    interface ITaskHelperPrototype extends ICustomClassPrototype1<ITaskHelper, ITaskHelperPrototype, "TaskHelper", string>, ITaskHelper {
        _task: taskGlideRecord;
    }
    export interface TaskHelper extends Readonly<ITaskHelper> {
    }
    export interface TaskHelperConstructor extends CustomClassConstructor1<ITaskHelper, ITaskHelperPrototype, TaskHelper, string> {
        new (task: string | taskFields): TaskHelper;
        (task: string | taskFields): TaskHelper;
        getCaller(task: taskFields): sys_userFields | undefined;
        isVip(task: taskFields): boolean;
        getDefaultApprovalGroupByLocation(user: sys_userFields): sys_user_groupFields | undefined;
        getLocationApproverRules(): IRuleCacheItem[];
    }
    export interface IRuleCacheItem {
        building?: string;
        location?: string;
        department?: string;
        business_unit?: string;
        company?: string;
        type: USASOC_CST_LOCATION_APPROVERS_TYPE;
        approval_group: sys_user_groupFields;
    }
    export const TaskHelper: Readonly<TaskHelperConstructor> & {
        new (task: string | taskFields): TaskHelper;
    };

    //#endregion
    
    //#region USASOCCustomizations

    /**
     * ServiceNow instance SDLC Stage.
     * Production=prod,User Acceptance Testing=uat,Pre-Deployment Testing=test,Development=dev,Sandbox=sb,(none)=none
     */
    export type InstanceSdlcStage = "prod" | "uat" | "test" | "dev" | "sb" | "none";
    export interface IUSASOCCustomizations extends ICustomClassBase<IUSASOCCustomizations, "USASOCCustomizations"> {
        /**
         * Gets the SDLC Stage for the current ServiceNow instance.
         * @returns {InstanceSdlcStage} The SDLC Stage for the current ServiceNow instance.
         */
        getInstanceSdlcStage(): InstanceSdlcStage;
        getNewIdeaAssignmentGroupSysId(): string | undefined;
        getNewIdeaAssignmentGroup(): sys_user_groupGlideRecord | undefined;
        getDefaultScCatItemApprovalGroupSysId(): string | undefined;
        getDefaultScCatItemApprovalGroup(): sys_user_groupGlideRecord | undefined;
        getDefaultScCatItemAssignmentGroup(): sys_user_groupGlideRecord | undefined;
        getDefaultScCatItemAssignmentGroupSysId(): string | undefined;
    }
    interface IUSASOCCustomizationsPrototype extends ICustomClassPrototype0<IUSASOCCustomizations, IUSASOCCustomizationsPrototype, "USASOCCustomizations">, IUSASOCCustomizations {
        _newIdeaAssignmentGroup?: sys_user_groupGlideRecord | {
            sys_id: string;
        };
        _defaultScCatItemApprovalGroup?: sys_user_groupGlideRecord | {
            sys_id: string;
        };
        _defaultScCatItemAssignmentGroup?: sys_user_groupGlideRecord | {
            sys_id: string;
        };
    }
    export interface USASOCCustomizations extends Readonly<IUSASOCCustomizations> {
    }
    export interface USASOCCustomizationsConstructor extends CustomClassConstructor0<IUSASOCCustomizations, IUSASOCCustomizationsPrototype, USASOCCustomizations> {
        EVENTNAME_TASK_UNASSIGNED: "x_44813_usasoc_cst.task.unassigned";
        EVENTNAME_TASK_IDEA_NEW: "x_44813_usasoc_cst.idea.new";
        PROPERTY_CATEGORY: "USASOC Customization Settings";
        PROPERTYNAME_INSTANCE_SDLC_STAGE: "x_44813_usasoc_cst.instance_sdlc_stage";
        PROPERTYNAME_DEFAULT_GIT_INSTANCE_BASE_URL: "x_44813_usasoc_cst.default_git_instance_base_url";
        PROPERTYNAME_NEW_IDEA_ASSIGNMENT_GROUP: "x_44813_usasoc_cst.new_idea_assignment_group";
        PROPERTYNAME_DEFAULT_SC_CAT_APPROVER_GROUP: "x_44813_usasoc_cst.default_sc_cat_approver_group";
        PROPERTYNAME_DEFAULT_SC_CAT_ASSIGNMENT_GROUP: "default_sc_cat_assignment_group";
        new (): USASOCCustomizations;
        (): USASOCCustomizations;
    }
    export const USASOCCustomizations: Readonly<USASOCCustomizationsConstructor> & {
        new (): USASOCCustomizations;
    };
    
    //#endregion
    
    //#region UsasocUserNotificationManager
    
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
    export interface IUsasocUserNotificationManagerExt extends ICustomClassBase<IUsasocUserNotificationManager, "UsasocUserNotificationManager"> {
        getUserNotifications(): string;
        getUserProfileCompliance(): string;
    }
    export interface IUsasocUserNotificationManager extends IUsasocUserNotificationManagerExt, Omit<IAbstractAjaxProcessor, "type"> {
    }
    interface IUsasocUserNotificationManagerPrototype extends ICustomClassPrototype0<IUsasocUserNotificationManager, IUsasocUserNotificationManagerPrototype, "UsasocUserNotificationManager">, IUsasocUserNotificationManager {
    }
    export interface UsasocUserNotificationManager extends Readonly<IUsasocUserNotificationManager> {
    }
    export interface UsasocUserNotificationManagerConstructor extends CustomClassConstructor0<IUsasocUserNotificationManager, IUsasocUserNotificationManagerPrototype, UsasocUserNotificationManager>, AbstractAjaxProcessorConstructor {
        new (): UsasocUserNotificationManager;
        (): UsasocUserNotificationManager;
        isUsasocUserNotificationManagerFault(result: IUsasocUserNotificationManagerResponse): result is IUsasocUserNotificationManagerFault;
        getUserGlideObject(user?: $$rhino.String | GlideUser | sys_userFields): GetUserGlideObjectResult | IUsasocUserNotificationManagerFault;
        checkUserProfileCompliance(sys_user: sys_userFields): UserProfileComplianceCheck;
        getUserProfileCompliance(user?: $$rhino.String | GlideUser | sys_userFields): UserProfileComplianceResponse | IUsasocUserNotificationManagerFault;
        getUserNotifications(user?: $$rhino.String | GlideUser | sys_userFields): UserNotificationsResponse | IUsasocUserNotificationManagerFault;
    }
    export const UsasocUserNotificationManager: Readonly<UsasocUserNotificationManagerConstructor> & {
        new (): UsasocUserNotificationManager;
    };
    
    //#endregion
    
}