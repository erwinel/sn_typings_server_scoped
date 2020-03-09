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
    /**
     * ServiceNow instance SDLC Stage.
     * 
     * @typedef {("prod" | "uat" | "test" | "dev" | "sb" | "none")} InstanceSdlcStage
     * @description Production=prod,User Acceptance Testing=uat,Pre-Deployment Testing=test,Development=dev,Sandbox=sb,(none)=none
     */
    export type InstanceSdlcStage = "prod" | "uat" | "test" | "dev" | "sb" | "none";

    export class USASOCCustomizations {
        /**
         * The name of event for newly submitted task-based records that are not assigned.
         *
         * @static
         * @readonly
         * @type {"x_44813_usasoc_cst.task.unassigned"}
         * @memberof USASOCCustomizationsConstructor
         */
        static readonly EVENTNAME_TASK_UNASSIGNED: "x_44813_usasoc_cst.task.unassigned";

        /**
         * The name of event for newly submitted Ideas.
         *
         * @static
         * @readonly
         * @type {"x_44813_usasoc_cst.idea.new"}
         * @memberof USASOCCustomizationsConstructor
         */
        static readonly EVENTNAME_TASK_IDEA_NEW: "x_44813_usasoc_cst.idea.new";

        /**
         * The name of category for custom USASOC system properties.
         *
         * @static
         * @readonly
         * @type {"USASOC Customization Settings"}
         * @memberof USASOCCustomizationsConstructor
         */
        static readonly PROPERTY_CATEGORY: "USASOC Customization Settings";

        /**
         * The name of system property that contains the SDLC-related usage for the current ServiceNow instance.
         *
         * @static
         * @readonly
         * @type {"x_44813_usasoc_cst.instance_sdlc_stage"}
         * @memberof USASOCCustomizationsConstructor
         * @see {InstanceSdlcStage} for values that can be stored by this property.
         */
        static readonly PROPERTYNAME_INSTANCE_SDLC_STAGE: "x_44813_usasoc_cst.instance_sdlc_stage";

        /**
         * The value of the "x_44813_usasoc_cst.instance_sdlc_stage" system property ({@link #getInstanceSdlcStage}) when the current ServiceNow instance is for production use.
         *
         * @static
         * @readonly
         * @type {"prod"}
         * @memberof USASOCCustomizationsConstructor
         */
        static readonly SDLC_STAGE_PRODUCTION: "prod";

        /**
         * The value of the "x_44813_usasoc_cst.instance_sdlc_stage" system property ({@link #getInstanceSdlcStage}) when the current ServiceNow instance is for user-acceptance testing.
         *
         * @static
         * @readonly
         * @type {"uat"}
         * @memberof USASOCCustomizationsConstructor
         */
        static readonly SDLC_STAGE_UAT: "uat";

        /**
         * The value of the "x_44813_usasoc_cst.instance_sdlc_stage" system property ({@link #getInstanceSdlcStage}) when the current ServiceNow instance is for technical pre-production deployment testing.
         *
         * @static
         * @readonly
         * @type {"test"}
         * @memberof USASOCCustomizationsConstructor
         */
        static readonly SDLC_STAGE_TEST: "test";

        /**
         * The value of the "x_44813_usasoc_cst.instance_sdlc_stage" system property ({@link #getInstanceSdlcStage}) when the current ServiceNow instance is for building release packages.
         *
         * @static
         * @readonly
         * @type {"dev"}
         * @memberof USASOCCustomizationsConstructor
         */
        static readonly SDLC_STAGE_DEVELOPMENT: "dev";

        /**
         * The value of the "x_44813_usasoc_cst.instance_sdlc_stage" system property ({@link #getInstanceSdlcStage}) when the current ServiceNow instance is for research and development purposes.
         *
         * @static
         * @readonly
         * @type {"sb"}
         * @memberof USASOCCustomizationsConstructor
         */
        static readonly SDLC_STAGE_SANDBOX: "sb";

        /**
         * The value of the "x_44813_usasoc_cst.instance_sdlc_stage" system property ({@link #getInstanceSdlcStage}) when the current ServiceNow instance does not pertain to a specific SDLC-relate purpose.
         *
         * @static
         * @readonly
         * @type {"none"}
         * @memberof USASOCCustomizationsConstructor
         */
        static readonly SDLC_STAGE_NONE: "none";

        /**
         * The name of system property that contains the base URL of the default GIT repository used version control of ServiceNow applications.
         *
         * @static
         * @readonly
         * @type {"x_44813_usasoc_cst.default_git_instance_base_url"}
         * @memberof USASOCCustomizationsConstructor
         */
        static readonly PROPERTYNAME_DEFAULT_GIT_INSTANCE_BASE_URL: "x_44813_usasoc_cst.default_git_instance_base_url";

        /**
         * The name of the system property that contains the Sys ID of the assignment group for newly-submitted ideas.
         *
         * @static
         * @readonly
         * @type {"x_44813_usasoc_cst.new_idea_assignment_group"}
         * @memberof USASOCCustomizationsConstructor
         */
        static readonly PROPERTYNAME_NEW_IDEA_ASSIGNMENT_GROUP: "x_44813_usasoc_cst.new_idea_assignment_group";

        /**
         * The name of the database that defines location-based approval groups.
         *
         * @static
         * @readonly
         * @type {"x_44813_usasoc_cst_location_approvers"}
         * @memberof USASOCCustomizationsConstructor
         */
        static readonly TABLENAME_LOCATION_APPROVERS: "x_44813_usasoc_cst_location_approvers";

        /**
         * A {@link RegExp} that matches a valid ServiceNow Sys ID string.
         *
         * @static
         * @readonly
         * @type {RegExp}
         * @memberof USASOCCustomizationsConstructor
         */
        static readonly REGEX_SYS_ID: RegExp;

        constructor();

        /**
         * Converts a value to a JavaScript string that contains a Sys ID.
         *
         * @static
         * @param {*} sys_id The value to convert.
         * @returns {(string | undefined)} The value as a JavaScript string containing a Sys ID or undefined if the converted string value does not match {@link .REGEX_SYS_ID}.
         * @memberof USASOCCustomizationsConstructor
         */
        static asSysIdStringOrUndefined(sys_id: any): string | undefined;

        /**
         * Tests whether an object is a {@link GlideRecord} whose table extends from the "task" table.
         *
         * @static
         * @param {*} obj The object to test.
         * @returns {obj is taskGlideRecord} True if the object is a {@link GlideRecord} whose table extends from the "task" table; otherwise, false.
         * @memberof USASOCCustomizationsConstructor
         */
        static isTaskGlideRecord(obj: any): obj is taskGlideRecord;

        /**
         * Tests whether a {@link $$element.IDBObject} is a {@link GlideRecord} or {@link IGlideElement} whose table matches or extends the name of a specified table.
         *
         * @static
         * @param {$$element.IDbObject} obj The object to test.
         * @param {string} tableName The name of the table or parent table to match.
         * @returns {boolean} true if the object is a {@link GlideRecord} or {@link IGlideElement} whose table matches or extends the name of a specified table; otherwise, false.
         * @memberof USASOCCustomizationsConstructor
         */
        static extendsTable(obj: $$element.IDbObject, tableName: string): boolean;

        /**
         * Tests whether an object is a {@link GlideRecord} or {@link IGlideElement} whose table extends from the "task" table.
         *
         * @static
         * @param {*} obj The object to test.
         * @returns {obj is taskFields} true if the object is a {@link GlideRecord} or {@link IGlideElement} whose table extends from the "task" table; otherwise, false.
         * @memberof USASOCCustomizationsConstructor
         */
        static isTaskElement(obj: any): obj is taskFields;

        /**
         * Gets the SDLC Stage for the current ServiceNow instance.
         * @returns {InstanceSdlcStage} The SDLC Stage for the current ServiceNow instance, obtained from the "x_44813_usasoc_cst.instance_sdlc_stage" system property.
         * @description The name of the associated system property is stored in the {@link USASOCCustomizations.PROPERTYNAME_NEW_IDEA_ASSIGNMENT_GROUP} variable.
         */
        getInstanceSdlcStage(): InstanceSdlcStage;

        /**
         * Indicates whether the current ServiceNow instance is for production use.
         *
         * @returns {boolean} True if the current ServiceNow isntance is for production use; otherwise, false.
         * @memberof IUSASOCCustomizations
         * @description This returns true when {@link #getInstanceSdlcStage} returns "prod".
         */
        isProduction(): boolean;

        /**
         * Indicates whether the current ServiceNow instance is for user-acceptance testing.
         *
         * @returns {boolean} True if the current ServiceNow isntance is for user-acceptance testing; otherwise, false.
         * @memberof IUSASOCCustomizations
         * @description This returns true when {@link #getInstanceSdlcStage} returns "uat".
         */
        isUAT(): boolean;

        /**
         * Indicates whether the current ServiceNow instance is for technical pre-production deployment testing.
         *
         * @returns {boolean} True if the current ServiceNow isntance is for technical pre-production deployment testing; otherwise, false.
         * @memberof IUSASOCCustomizations
         * @description This returns true when {@link #getInstanceSdlcStage} returns "test".
         */
        isTest(): boolean;

        /**
         * Indicates whether the current ServiceNow instance is for building release packages.
         *
         * @returns {boolean} True if the current ServiceNow isntance is for building release packages; otherwise, false.
         * @memberof IUSASOCCustomizations
         * @description This returns true when {@link #getInstanceSdlcStage} returns "dev".
         */
        isDevelopment(): boolean;

        /**
         * Indicates whether the current ServiceNow instance is for research and development purposes.
         *
         * @returns {boolean} True if the current ServiceNow isntance is for research and development purposes; otherwise, false.
         * @memberof IUSASOCCustomizations
         * @description This returns true when {@link #getInstanceSdlcStage} returns "sb".
         */
        isSandbox(): boolean;

        /**
         * Indicates whether the current ServiceNow instance does not specify a SDLC stage.
         *
         * @returns {boolean} True if the current ServiceNow isntance does not specify a SDLC stage; otherwise, false.
         * @memberof IUSASOCCustomizations
         * @description This returns true when {@link #getInstanceSdlcStage} does not return "prod", "uat", "test", "dev" or "sb".
         */
        isSdlcDefined(): boolean;

        /**
         * Gets the Sys ID of the default assignment group for new Ideas.
         *
         * @returns {(string | undefined)} The Sys ID of the default assignment group for new Ideas or undefined if the "x_44813_usasoc_cst.idea.new" system property value is not defined.
         * @memberof IUSASOCCustomizations
         * @description The name of the associated system property is stored in the {@link USASOCCustomizations.PROPERTYNAME_NEW_IDEA_ASSIGNMENT_GROUP} variable.
         */
        getNewIdeaAssignmentGroupSysId(): string | undefined;

        /**
         * Gets the {@link GlideRecord} of the default assignment group for new Ideas.
         *
         * @returns {(sys_user_groupGlideRecord | undefined)} The {@link GlideRecord} of the default assignment group for new Ideas or undefined if the
         * {@link USASOCCustomizations#getNewIdeaAssignmentGroupSysId} is not a valid group Sys ID.
         * @memberof IUSASOCCustomizations
         */
        getNewIdeaAssignmentGroup(): sys_user_groupGlideRecord | undefined;

        readonly type: "USASOCCustomizations";
    }
}
