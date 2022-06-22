/// <reference path="$$rhino.d.ts" />
/// <reference path="$$property.d.ts" />
/// <reference path="glide.d.ts" />

declare interface IApprovalInfo {
    key: $$rhino.String; // sys_id for the group approval
    value: {
        sys_id: $$rhino.String; // sys_id of the approval record
        state: $$rhino.String; // current approval state
        group_id: $$rhino.String; // sys_id of the group on the approval record
        activity_id: $$rhino.String; // sys_id of the activity that created the approval record
    }
}

declare interface WorkflowApprovalUtils {
    readonly PENDING_STATES: ['not requested', 'not_required', 'requested'];

    /** 
     * this tests whether or not a table is a Task table. If it is a task table then
     * still set the sysapproval column that references the task table. In doing this
     * we will preserve all the sc_XXX ui_macros for now.
     */
    isTask(tableName: string): boolean;

    /**
     * Cancel all approvals for a task
     */
    cancelAll(task: taskGlideRecord, comment?: string): void;

    /**
    * Set all User approvals for a target record (task or non-task) to the specified state.
    */
    setAllApprovalsByTask(target: GlideRecord, approvalState: string, comment?: string): void;

    /**
     * Reset all approvals by deleting all of them along with any
     * workflow associated with the task so that the workflows get
     * rerun and recalculated.
     */
    reset(task: taskGlideRecord, comment?: string): void;

    /**
     * Restart workflows (this is deprecated and only exists to support legacy
     * calls to this method - use new Workflow().restartWorkflow(task, true)
     * instead)
     */
    deleteWorkflows(task: taskGlideRecord, comment?: string): void;

    /**
     * Create user approvals for a sysapproval_group approval
     */
    createUserApprovals(groupApproval: GlideRecord): void;
    //createUserApprovals(groupApproval: sysapproval_groupGlideRecord): void;

    /**
     * Get the list of user sys_ids for each member of a group
     */
    getMembersOfGroup(groupID: $$rhino.String): $$rhino.String;

    /**
     * Get an object of group approvals that were created by all of the children of
     * an approval manager activity (we use this to determine if we are about to
     * create a duplicate and to determine if we are reusing an approval that
     * we previously created)
     *
     * We return an object that has:
     *       key -> sys_id for the group approval
     *       value -> { sys_id: sys_id of the approval record
     *                  state: current approval state
     *                  group_id: sys_id of the group on the approval record
     *                  activity_id: sys_id of the activity that created the approval record
     *                }
     */
    getGroupApprovalsByApprovalManager(taskId: $$rhino.String, amId: $$rhino.String): IApprovalInfo;

    /**
     * Get an object of user approvals that were created by all of the children of
     * an approval manager activity (we use this to determine if we are about to
     * create a duplicate and to determine if we are reusing an approval that
     * we previously created)
     *
     * We return an object that has:
     *       key -> sys_id for the user approval
     *       value -> { sys_id: sys_id of the approval record
     *                  state: current approval state
     *                  user_id: sys_id of the user on the approval record
     *                  activity_id: sys_id of the activity that created the approval record
     *                }
     */
    getUserApprovalsByApprovalManager(taskId: $$rhino.String, amId: $$rhino.String): IApprovalInfo;

    /**
     * Get the counts for the user approvals of a task
     */
    getUserApprovalCounts(taskID: $$rhino.String): $$rhino.Number;

    /**
     * Get the counts for the user approvals of a group approval
     */
    getUserGroupApprovalCounts(groupID: $$rhino.String): $$rhino.Number;

    /**
     * Get the counts for the user approvals of a group approval
     * by the approval ids
     */
    getGroupUserApprovalCounts(approvalIDs: $$rhino.String): $$rhino.Number;

    /**
     * Get the counts for the group approvals of a task
     */
    getGroupApprovalCounts(taskID: $$rhino.String): $$rhino.Number;

    /**
     * Get the counts for the list of user approvals
     *
     * ids is an array of user approval sys_ids
     */
    getUserIdListApprovalCounts(ids: $$rhino.String): $$rhino.Number;

    /**
     * Get the counts for the list of group approvals
     *
     * ids is an array of group approval sys_ids
     */
    getGroupIdListApprovalCounts(ids: $$rhino.String): $$rhino.Number;

    getUserApprovalIdsForGroups(groups: $$rhino.String[]): $$rhino.String[];

    /**
     * Set all group approvals of a parent task to the specified state
     */
    setGroupApprovalsByTask(taskID: $$rhino.String, approvalState: $$rhino.String, comment?: string, currentStates?: $$rhino.String[]): void;

    /**
     * Set all group approvals of a parent task to the specified state
     */
    setPendingGroupApprovalsByTask(taskID: $$rhino.String, approvalState: $$rhino.String, comment?: string): void;

    /**
     * Set all specified group approvals to the specified state
     */
    setGroupApprovalsByIds(ids: $$rhino.String[], approvalState: $$rhino.String, comment?: string, currentStates?: $$rhino.String[]): void;

    /**
     * Set specified pending group approvals to the specified state
     */
    setPendingGroupApprovalsByIds(ids: $$rhino.String[], approvalState: $$rhino.String, comment?: string): void;

    /**
     * Set all User approvals of a task to the specified state
     * - modified to look at document_id for all non-task tables
     */
    setUserApprovalsByTask(taskID: $$rhino.String, approvalState: $$rhino.String, comment?: string, currentStates?: $$rhino.String[]): void;

    /**
     * Set all pending user approvals of a task to the specified state
     * - modified to look for document_id when approving a non-task table
     */
    setPendingUserApprovalsByTask(taskID: $$rhino.String, approvalState: $$rhino.String, comment?: string): void;

    /**
     * Set all user approvals of a group approval to the specified state
     */
    setUserApprovalsByGroup(groupID: $$rhino.String, approvalState: $$rhino.String, comment?: string, currentStates?: $$rhino.String[]): void;

    /**
     * Set all pending user approvals of a group approval to the specified state
     */
    setPendingUserApprovalsByGroup(groupID: $$rhino.String, approvalState: $$rhino.String, comment?: string): void;

    /**
     * Set all specified user approvals to the specified state
     */
    setUserApprovalsByIds(ids, approvalState, comment?: string, currentStates?: $$rhino.String[]): void;

    /**
     * Set specified pending user approvals to the specified state
     */
    setPendingUserApprovalsByIds(ids, approvalState, comment?: string): void;

    /**
     * Add a list of ids to the approval list
     */
    addIdsToApprovalList(approvals: any[], o: string | string[]): void;

    ///**
    // * Add a list of user or group ids to the appropriate approval list
    // */
    //addUsersAndGroupsToApprovalList(users, groups, o): void;

    ///**
    // * Create the group approvals from the group list
    // */
    //createGroupApprovers(groups, order, state): void;

    ///**
    // * Add an approval history journal entry for a task record
    // */
    //addApprovalHistoryGR(taskGR, msg): void;

    ///**
    // * Add an approval history journal entry for a task id (read the task record,
    // * add the journal entry and update the task record)
    // */
    //addApprovalHistoryID(taskID, msg: void;

    /**
     * Get the user name from a user sys_id
     */
    getUserName(userSysId: $$rhino.String): string;


    /**
     * Get approval record for a given task/record id
     */
    getApprovalRecord(taskID: $$rhino.String): GlideRecord;
    //getApprovalRecord(taskID: $$rhino.String): sysapproval_approverGlideRecord;

    getRequestedApproversAsString(taskID: $$rhino.String): string;

    resolveUserIdToName(userID: $$rhino.String): string;

    debug(msg: any): void;

    /**
    * Get state of all specified user approvals
    */
    getUserApprovalStateById(ids: $$rhino.String[]): $$rhino.String | undefined;

    /**
    * Get state of all specified user approvals
    */
    getGroupApprovalStateById(ids: $$rhino.String[]): $$rhino.String | undefined;

    unapprove(): void;

    approve(): void;

    type: 'WorkflowApprovalUtils'
}

declare interface WorkflowApprovalUtilsConstructor {
    new(): WorkflowApprovalUtils;
    (): WorkflowApprovalUtils;
}

/**
 * Fields common to all tables.
 * @interface IGlideTableProperties
 */
declare interface IGlideTableProperties extends $$element.IDbObject {
    /**
     * Created by
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof IGlideTablePropertiesFields
     */
    sys_created_by: $$rhino.Nilable<$$property.Element>;

    /**
     * Created
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof IGlideTablePropertiesFields
     */
    sys_created_on: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Sys ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof IGlideTablePropertiesFields
     * @description Internal type is "GUID"
     */
    sys_id: $$rhino.Nilable<$$property.Element>;

    /**
     * Updates
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof IGlideTablePropertiesFields
     */
    sys_mod_count: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Updated by
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof IGlideTablePropertiesFields
     */
    sys_updated_by: $$rhino.Nilable<$$property.Element>;

    /**
     * Updated
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof IGlideTablePropertiesFields
     */
    sys_updated_on: $$rhino.Nilable<$$property.GlideObject>;
}

/**
 * Fields common to all extendable tables.
 * @interface IExtendedGlideTableProperties
 * @extends {}
 */
declare interface IExtendedGlideTableProperties extends IGlideTableProperties {
    /**
     * Class
     * @type {$$rhino.Nilable<$$property.SysClassName>}
     * @memberof IExtendedGlideTablePropertiesFields
     */
    sys_class_name: $$rhino.Nilable<$$property.SysClassName>;
}

/**
 * GlideElement values from the Application File table.
 * @interface sys_metadataFields
 * @extends {IExtendedGlideTableProperties}
 */
declare interface sys_metadataFields extends IExtendedGlideTableProperties {
    /**
     * Display name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_metadataFields
     */
    sys_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Package
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_packageFields, sys_packageGlideRecord>>}
     * @memberof sys_metadataFields
     * @description Refers to sys_package (Package)
     */
    sys_package: $$rhino.Nilable<$$property.generic.Reference<sys_packageFields, sys_packageGlideRecord>>;

    /**
     * Protection policy
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_metadataFields
     */
    sys_policy: $$rhino.Nilable<$$property.Element>;

    /**
     * Application
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_scopeFields, sys_scopeGlideRecord>>}
     * @memberof sys_metadataFields
     * @description Refers to sys_scope (Application)
     */
    sys_scope: $$rhino.Nilable<$$property.generic.Reference<sys_scopeFields, sys_scopeGlideRecord>>;

    /**
     * Update name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_metadataFields
     */
    sys_update_name: $$rhino.Nilable<$$property.Element>;
}
declare type sys_metadataGlideRecord = GlideRecord & sys_metadataFields;

/**
 * GlideElement values from the Table table.
 * @interface sys_db_objectFields
 * @extends {sys_metadataFields}
 */
declare interface sys_db_objectFields extends sys_metadataFields {
    /**
     * Accessible from
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    access: $$rhino.Nilable<$$property.Element>;

    /**
     * Allow UI actions
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    actions_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Allow new fields
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    alter_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Caller Access
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    caller_access: $$rhino.Nilable<$$property.Element>;

    /**
     * Allow client scripts
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    client_scripts_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Allow configuration
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    configuration_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Can create
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    create_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Create access controls
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    create_access_controls: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Can delete
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    delete_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Extension model
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    extension_model: $$rhino.Nilable<$$property.Element>;

    /**
     * Extensible
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    is_extendable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Label
     * @type {$$rhino.Nilable<$$property.Documentation>}
     * @memberof sys_db_objectFields
     */
    label: $$rhino.Nilable<$$property.Documentation>;

    /**
     * Live feed
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    live_feed_enabled: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Auto number
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_numberFields, sys_numberGlideRecord>>}
     * @memberof sys_db_objectFields
     * @description Refers to sys_number (Number)
     */
    number_ref: $$rhino.Nilable<$$property.generic.Reference<sys_numberFields, sys_numberGlideRecord>>;

    /**
     * Provider class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    provider_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Can read
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    read_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Extends table
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>}
     * @memberof sys_db_objectFields
     * @description Refers to sys_db_object (Table)
     */
    super_class: $$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>;

    /**
     * Sys class code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    sys_class_code: $$rhino.Nilable<$$property.Element>;

    /**
     * Sys class path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    sys_class_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Can update
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    update_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * User role
     * @type {$$rhino.Nilable<sys_user_roleProperty>}
     * @memberof sys_db_objectFields
     * @description Refers to sys_user_role (Role)
     */
    user_role: $$rhino.Nilable<sys_user_roleProperty>;

    /**
     * Allow access to this table via web services
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    ws_access: $$rhino.Nilable<$$property.Boolean>;
}
declare type sys_db_objectGlideRecord = sys_metadataGlideRecord & sys_db_objectFields;

/**
 * GlideElement values from the Dictionary Entry table.
 * @interface sys_dictionaryFields
 * @extends {sys_metadataFields}
 */
declare interface sys_dictionaryFields extends sys_metadataFields {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Array
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    array: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Array denormalized
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    array_denormalized: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Attributes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    attributes: $$rhino.Nilable<$$property.Element>;

    /**
     * Audit
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    audit: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Calculation
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sys_dictionaryFields
     */
    calculation: $$rhino.Nilable<$$property.Script>;

    /**
     * Choice
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_dictionaryFields
     */
    choice: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Choice field
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    choice_field: $$rhino.Nilable<$$property.Element>;

    /**
     * Choice table
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    choice_table: $$rhino.Nilable<$$property.Element>;

    /**
     * Column label
     * @type {$$rhino.Nilable<$$property.Documentation>}
     * @memberof sys_dictionaryFields
     */
    column_label: $$rhino.Nilable<$$property.Documentation>;

    /**
     * Comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Create roles
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    create_roles: $$rhino.Nilable<$$property.Element>;

    /**
     * Defaultsort
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_dictionaryFields
     */
    defaultsort: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Default value
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    default_value: $$rhino.Nilable<$$property.Element>;

    /**
     * Delete roles
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    delete_roles: $$rhino.Nilable<$$property.Element>;

    /**
     * Dependent
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    dependent: $$rhino.Nilable<$$property.Element>;

    /**
     * Dependent on field
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    dependent_on_field: $$rhino.Nilable<$$property.Element>;

    /**
     * Display
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    display: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Dynamic creation
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    dynamic_creation: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Dynamic creation script
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    dynamic_creation_script: $$rhino.Nilable<$$property.Element>;

    /**
     * Dynamic default value
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_dictionaryFields
     * @description Refers to sys_filter_option_dynamic (Dynamic Filter Options)
     */
    dynamic_default_value: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Dynamic ref qual
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_dictionaryFields
     * @description Refers to sys_filter_option_dynamic (Dynamic Filter Options)
     */
    dynamic_ref_qual: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Column name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    element: $$rhino.Nilable<$$property.Element>;

    /**
     * Element reference
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    element_reference: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Foreign database
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    foreign_database: $$rhino.Nilable<$$property.Element>;

    /**
     * Function definition
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    function_definition: $$rhino.Nilable<$$property.Element>;

    /**
     * Function field
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    function_field: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_glide_objectFields, sys_glide_objectGlideRecord>>}
     * @memberof sys_dictionaryFields
     * @description Refers to sys_glide_object (Field class)
     */
    internal_type: $$rhino.Nilable<$$property.generic.Reference<sys_glide_objectFields, sys_glide_objectGlideRecord>>;

    /**
     * Mandatory
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    mandatory: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Max length
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_dictionaryFields
     */
    max_length: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Table
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Next element
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    next_element: $$rhino.Nilable<$$property.Element>;

    /**
     * Primary
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    primary: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Read only
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    read_only: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Read roles
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    read_roles: $$rhino.Nilable<$$property.Element>;

    /**
     * Reference
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>}
     * @memberof sys_dictionaryFields
     * @description Refers to sys_db_object (Table)
     */
    reference: $$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>;

    /**
     * Reference cascade rule
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    reference_cascade_rule: $$rhino.Nilable<$$property.Element>;

    /**
     * Reference floats
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    reference_floats: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Reference key
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    reference_key: $$rhino.Nilable<$$property.Element>;

    /**
     * Reference qual
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    reference_qual: $$rhino.Nilable<$$property.Element>;

    /**
     * Reference qual condition
     * @type {$$rhino.Nilable<$$property.Conditions>}
     * @memberof sys_dictionaryFields
     */
    reference_qual_condition: $$rhino.Nilable<$$property.Conditions>;

    /**
     * Reference type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    reference_type: $$rhino.Nilable<$$property.Element>;

    /**
     * Sizeclass
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_dictionaryFields
     */
    sizeclass: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Spell check
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    spell_check: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Staged
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    staged: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Table reference
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    table_reference: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Text index
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    text_index: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Unique
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    unique: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Use dependent field
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    use_dependent_field: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Use dynamic default
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    use_dynamic_default: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Use reference qualifier
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    use_reference_qualifier: $$rhino.Nilable<$$property.Element>;

    /**
     * Calculated
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    virtual: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Widget
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    widget: $$rhino.Nilable<$$property.Element>;

    /**
     * Write roles
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    write_roles: $$rhino.Nilable<$$property.Element>;

    /**
     * XML view
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    xml_view: $$rhino.Nilable<$$property.Boolean>;
}
declare type sys_dictionaryGlideRecord = sys_metadataGlideRecord & sys_dictionaryFields;

/**
 * GlideElement values from the Field class table.
 * @interface sys_glide_objectFields
 * @extends {sys_metadataFields}
 */
declare interface sys_glide_objectFields extends sys_metadataFields {
    /**
     * Attributes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_glide_objectFields
     */
    attributes: $$rhino.Nilable<$$property.Element>;

    /**
     * Class name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_glide_objectFields
     */
    class_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Label
     * @type {$$rhino.Nilable<$$property.TranslatedField>}
     * @memberof sys_glide_objectFields
     */
    label: $$rhino.Nilable<$$property.TranslatedField>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_glide_objectFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Length
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_glide_objectFields
     */
    scalar_length: $$rhino.Nilable<$$property.Element>;

    /**
     * Extends
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_glide_objectFields
     */
    scalar_type: $$rhino.Nilable<$$property.Element>;

    /**
     * Use original value
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_glide_objectFields
     */
    use_original_value: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Visible
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_glide_objectFields
     */
    visible: $$rhino.Nilable<$$property.Boolean>;
}
declare type sys_glide_objectGlideRecord = sys_metadataGlideRecord & sys_glide_objectFields;

/**
 * GlideElement values from the Number table.
 * @interface sys_numberFields
 * @extends {sys_metadataFields}
 */
declare interface sys_numberFields extends sys_metadataFields {
    /**
     * Table
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>}
     * @memberof sys_numberFields
     * @description Refers to sys_db_object (Table)
     */
    category: $$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>;

    /**
     * Number of digits
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_numberFields
     */
    maximum_digits: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Number
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_numberFields
     */
    number: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Prefix
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_numberFields
     */
    prefix: $$rhino.Nilable<$$property.Element>;
}
declare type sys_numberGlideRecord = sys_metadataGlideRecord & sys_numberFields;

/**
 * GlideElement values from the Number table.
 * @interface sys_choiceFields
 * @extends {IGlideTableProperties}
 */
declare interface sys_choiceFields extends IGlideTableProperties {
    /**
     * Dependent value
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    dependent_value: $$rhino.Nilable<$$property.Element>;

    /**
     * Element
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    element: $$rhino.Nilable<$$property.Element>;

    /**
     * Hint
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    hint: $$rhino.Nilable<$$property.Element>;

    /**
     * Inactive
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_choiceFields
     */
    inactive: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Label
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    label: $$rhino.Nilable<$$property.Element>;

    /**
     * Language
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    language: $$rhino.Nilable<$$property.Element>;

    /**
     * Table
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Sequence
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_choiceFields
     */
    sequence: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof sys_choiceFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof sys_choiceFields
     */
    sys_domain_path: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Value
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    value: $$rhino.Nilable<$$property.Element>;
}
declare type sys_choiceGlideRecord = GlideRecord & sys_choiceFields;

/**
 * GlideElement values from the Dictionary Entry Override table.
 * @interface sys_dictionary_overrideFields
 * @extends {sys_metadataFields}
 */
declare interface sys_dictionary_overrideFields extends sys_metadataFields {
    /**
     * Attributes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    attributes: $$rhino.Nilable<$$property.Element>;

    /**
     * Override attributes
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    attributes_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Base table
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    base_table: $$rhino.Nilable<$$property.Element>;

    /**
     * Calculation
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sys_dictionary_overrideFields
     */
    calculation: $$rhino.Nilable<$$property.Script>;

    /**
     * Override calculation
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    calculation_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Default value
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    default_value: $$rhino.Nilable<$$property.Element>;

    /**
     * Override default value
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    default_value_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Dependent
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    dependent: $$rhino.Nilable<$$property.Element>;

    /**
     * Override dependent
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    dependent_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Override display value
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    display_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Column name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    element: $$rhino.Nilable<$$property.Element>;

    /**
     * Mandatory
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    mandatory: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Override mandatory
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    mandatory_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Table
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Read only
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    read_only: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Override read only
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    read_only_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Reference qual
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    reference_qual: $$rhino.Nilable<$$property.Element>;

    /**
     * Override reference qualifier
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    reference_qual_override: $$rhino.Nilable<$$property.Boolean>;
}
declare type sys_dictionary_overrideGlideRecord = sys_metadataGlideRecord & sys_dictionary_overrideFields;

/**
 * GlideElement values from the Package table.
 * @interface sys_packageFields
 * @extends {IExtendedGlideTableProperties}
 */
declare interface sys_packageFields extends IExtendedGlideTableProperties {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_packageFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Subscription requirement
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_packageFields
     */
    enforce_license: $$rhino.Nilable<$$property.Element>;

    /**
     * Licensable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_packageFields
     */
    licensable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Subscription Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_packageFields
     */
    license_category: $$rhino.Nilable<$$property.Element>;

    /**
     * Subscription Model
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_packageFields
     */
    license_model: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_packageFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_packageFields
     */
    source: $$rhino.Nilable<$$property.Element>;

    /**
     * Trackable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_packageFields
     */
    trackable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Version
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_packageFields
     */
    version: $$rhino.Nilable<$$property.Element>;
}
declare type sys_packageGlideRecord = GlideRecord & sys_packageFields;

/**
 * GlideElement values from the Application table.
 * @interface sys_scopeFields
 * @extends {sys_packageFields}
 */
declare interface sys_scopeFields extends sys_packageFields {
    /**
     * JavaScript Mode
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    js_level: $$rhino.Nilable<$$property.Element>;

    /**
     * Logo
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sys_scopeFields
     */
    logo: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Private
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_scopeFields
     */
    private: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Restrict Table Choices
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_scopeFields
     */
    restrict_table_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Runtime Access Tracking
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    runtime_access_tracking: $$rhino.Nilable<$$property.Element>;

    /**
     * Scope
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    scope: $$rhino.Nilable<$$property.Element>;

    /**
     * Application administration
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_scopeFields
     */
    scoped_administration: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Short description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    short_description: $$rhino.Nilable<$$property.Element>;

    /**
     * Template
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    template: $$rhino.Nilable<$$property.Element>;

    /**
     * Vendor
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    vendor: $$rhino.Nilable<$$property.Element>;

    /**
     * Vendor prefix
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    vendor_prefix: $$rhino.Nilable<$$property.Element>;
}
declare type sys_scopeGlideRecord = sys_packageGlideRecord & sys_scopeFields;

/**
 * GlideElement values from the Role table.
 * @interface sys_user_roleFields
 * @extends {sys_metadataFields}
 */
declare interface sys_user_roleFields extends sys_metadataFields {
    /**
     * Assignable by
     * @type {$$rhino.Nilable<sys_user_roleProperty>}
     * @memberof sys_user_roleFields
     * @description Refers to sys_user_role (Role)
     */
    assignable_by: $$rhino.Nilable<sys_user_roleProperty>;

    /**
     * Can delegate
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_roleFields
     */
    can_delegate: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_roleFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Elevated privilege
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_roleFields
     */
    elevated_privilege: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Encryption context
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_encryption_contextFields, sys_encryption_contextGlideRecord>>}
     * @memberof sys_user_roleFields
     * @description Refers to sys_encryption_context (Encryption Context)
     */
    encryption_context: $$rhino.Nilable<$$property.generic.Reference<sys_encryption_contextFields, sys_encryption_contextGlideRecord>>;

    /**
     * Grantable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_roleFields
     */
    grantable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Includes roles
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_roleFields
     */
    includes_roles: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_roleFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Requires Subscription
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_roleFields
     */
    requires_subscription: $$rhino.Nilable<$$property.Element>;

    /**
     * Application Administrator
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_roleFields
     */
    scoped_admin: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Suffix
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_roleFields
     */
    suffix: $$rhino.Nilable<$$property.Element>;
}
declare type sys_user_roleGlideRecord = sys_metadataGlideRecord & sys_user_roleFields;
declare type sys_user_roleElement = $$element.Reference<sys_user_roleFields, sys_user_roleGlideRecord>;
declare type sys_user_roleProperty = $$property.generic.ReferenceProperty<sys_user_roleFields, sys_user_roleGlideRecord, sys_user_roleElement>;

/**
 * GlideElement values from the Encryption Context table.
 * @interface sys_encryption_contextFields
 * @extends {sys_metadataFields}
 */
declare interface sys_encryption_contextFields extends sys_metadataFields {
    /**
     * Encryption key
     * @type {$$rhino.Nilable<$$property.Password2>}
     * @memberof sys_encryption_contextFields
     */
    encryption_key: $$rhino.Nilable<$$property.Password2>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_encryption_contextFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_encryption_contextFields
     */
    type: $$rhino.Nilable<$$property.Element>;
}
declare type sys_encryption_contextGlideRecord = sys_metadataGlideRecord & sys_encryption_contextFields;

/**
 * GlideElement values from the Calendar table.
 * @interface sys_calendarFields
 * @extends {sys_metadataFields}
 */
declare interface sys_calendarFields extends sys_metadataFields {
    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_calendarFields
     */
    name: $$rhino.Nilable<$$property.Element>;
}
declare type sys_calendarGlideRecord = sys_metadataGlideRecord & sys_calendarFields;
declare type sys_calendarElement = $$element.Reference<sys_calendarFields, sys_calendarGlideRecord>;
declare type sys_calendarProperty = $$property.generic.ReferenceProperty<sys_calendarFields, sys_calendarGlideRecord, sys_calendarElement>;

/**
 * GlideElement values from the Agreement table.
 * @interface slaFields
 * @extends {IGlideTableProperties}
 */
declare interface slaFields extends IGlideTableProperties {
    /**
     * Accountable user
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof slaFields
     * @description Refers to sys_user (User)
     */
    accountable_user: $$rhino.Nilable<sys_userProperty>;

    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof slaFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Avail pct
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof slaFields
     * @description Internal type is "decimal"
     */
    avail_pct: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Begins
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof slaFields
     * @description Internal type is "glide_date"
     */
    begins: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Business lead
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof slaFields
     * @description Refers to sys_user (User)
     */
    business_lead: $$rhino.Nilable<sys_userProperty>;

    /**
     * Business unit
     * @type {$$rhino.Nilable<$$property.generic.Element<("Operations" | "Sales")>>}
     * @memberof slaFields
     */
    business_unit: $$rhino.Nilable<$$property.generic.Element<("Operations" | "Sales")>>;

    /**
     * Calendar
     * @type {$$rhino.Nilable<sys_calendarProperty>}
     * @memberof slaFields
     * @description Refers to sys_calendar (Calendar)
     */
    calendar: $$rhino.Nilable<sys_calendarProperty>;

    /**
     * Change procedures
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    change_procedures: $$rhino.Nilable<$$property.Element>;

    /**
     * Consultant user
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof slaFields
     * @description Refers to sys_user (User)
     */
    consultant_user: $$rhino.Nilable<sys_userProperty>;

    /**
     * Contract
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof slaFields
     * @description Refers to ast_contract (Contract)
     */
    contract: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Department
     * @type {$$rhino.Nilable<cmn_departmentProperty>}
     * @memberof slaFields
     * @description Refers to cmn_department (Department)
     */
    department: $$rhino.Nilable<cmn_departmentProperty>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Disaster recovery
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    disaster_recovery: $$rhino.Nilable<$$property.Element>;

    /**
     * Ends
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof slaFields
     * @description Internal type is "glide_date"
     */
    ends: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Functional area
     * @type {$$rhino.Nilable<$$property.generic.Element<("Data Management" | "Network" | "Security")>>}
     * @memberof slaFields
     */
    functional_area: $$rhino.Nilable<$$property.generic.Element<("Data Management" | "Network" | "Security")>>;

    /**
     * Incident procedures
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    incident_procedures: $$rhino.Nilable<$$property.Element>;

    /**
     * Informed user
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof slaFields
     * @description Refers to sys_user (User)
     */
    informed_user: $$rhino.Nilable<sys_userProperty>;

    /**
     * Maintenance
     * @type {$$rhino.Nilable<sys_calendarProperty>}
     * @memberof slaFields
     * @description Refers to sys_calendar (Calendar)
     */
    maintenance: $$rhino.Nilable<sys_calendarProperty>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Next review
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof slaFields
     * @description Internal type is "glide_date"
     */
    next_review: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Notes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    notes: $$rhino.Nilable<$$property.Element>;

    /**
     * Number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     */
    number: $$rhino.Nilable<$$property.Element>;

    /**
     * Reponsibilities
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    reponsibilities: $$rhino.Nilable<$$property.Element>;

    /**
     * Response time
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof slaFields
     * @description Internal type is "decimal"
     */
    response_time: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Responsible user
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof slaFields
     * @description Refers to sys_user (User)
     */
    responsible_user: $$rhino.Nilable<sys_userProperty>;

    /**
     * Security notes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    security_notes: $$rhino.Nilable<$$property.Element>;

    /**
     * Service goals
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    service_goals: $$rhino.Nilable<$$property.Element>;

    /**
     * Short description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     */
    short_description: $$rhino.Nilable<$$property.Element>;

    /**
     * Signatures
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    signatures: $$rhino.Nilable<$$property.Element>;

    /**
     * Technical lead
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof slaFields
     * @description Refers to sys_user (User)
     */
    technical_lead: $$rhino.Nilable<sys_userProperty>;

    /**
     * Transaction load
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof slaFields
     * @description Internal type is "decimal"
     */
    transaction_load: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Users
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof slaFields
     * @description Refers to sys_user_group (Group)
     */
    users: $$rhino.Nilable<sys_user_groupProperty>;
}
declare type slaGlideRecord = GlideRecord & slaFields;
declare type slaElement = $$element.Reference<slaFields, slaGlideRecord>;
declare type slaProperty = $$property.generic.ReferenceProperty<slaFields, slaGlideRecord, slaElement>;

/**
 * GlideElement values from the User table.
 * @interface sys_userFields
 * @extends {IGlideTableProperties}
 */
declare interface sys_userFields extends IGlideTableProperties {
    /**
     * Accumulated roles
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    accumulated_roles: $$rhino.Nilable<$$property.Element>;

    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Work agent status
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_userFields
     * @description Internal type is "choice"
     */
    agent_status: $$rhino.Nilable<IGlideElement>;

    /**
     * Average Daily FTE Hours/Hours Per Person Day
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     * @description Internal type is "decimal"
     */
    average_daily_fte: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Building
     * @type {$$rhino.Nilable<cmn_buildingProperty>}
     * @memberof sys_userFields
     * @description Refers to cmn_building (Building)
     */
    building: $$rhino.Nilable<cmn_buildingProperty>;

    /**
     * Business impact
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     */
    business_criticality: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Calendar integration
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     */
    calendar_integration: $$rhino.Nilable<$$property.Numeric>;

    /**
     * City
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    city: $$rhino.Nilable<$$property.Element>;

    /**
     * Company
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof sys_userFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<core_companyProperty>;

    /**
     * Cost center
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to cmn_cost_center (Cost Center)
     */
    cost_center: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Country code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    country: $$rhino.Nilable<$$property.Element>;

    /**
     * Date format
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    date_format: $$rhino.Nilable<$$property.Element>;

    /**
     * Default perspective
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to sys_perspective (Menu List)
     */
    default_perspective: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Department
     * @type {$$rhino.Nilable<cmn_departmentProperty>}
     * @memberof sys_userFields
     * @description Refers to cmn_department (Department)
     */
    department: $$rhino.Nilable<cmn_departmentProperty>;

    /**
     * EDU Status
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    edu_status: $$rhino.Nilable<$$property.Element>;

    /**
     * Email
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     * @description Internal type is "email"
     */
    email: $$rhino.Nilable<$$property.Element>;

    /**
     * Employee number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    employee_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Enable Multifactor Authentication
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    enable_multifactor_authn: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Failed login attempts
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     */
    failed_attempts: $$rhino.Nilable<$$property.Numeric>;

    /**
     * First name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    first_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Gender
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    gender: $$rhino.Nilable<$$property.Element>;

    /**
     * Geolocation tracked
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    geolocation_tracked: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Home phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     * @description Internal type is "ph_number"
     */
    home_phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Internal Integration User
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    internal_integration_user: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Prefix
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    introduction: $$rhino.Nilable<$$property.Element>;

    /**
     * Last login
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_userFields
     * @description Internal type is "glide_date"
     */
    last_login: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Last login device
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    last_login_device: $$rhino.Nilable<$$property.Element>;

    /**
     * Last login time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_userFields
     */
    last_login_time: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Last name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    last_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Last password
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    last_password: $$rhino.Nilable<$$property.Element>;

    /**
     * Last position update
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_userFields
     */
    last_position_update: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Latitude
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     * @description Internal type is "float"
     */
    latitude: $$rhino.Nilable<$$property.Numeric>;

    /**
     * LDAP server
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to ldap_server_config (LDAP server)
     */
    ldap_server: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Location
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof sys_userFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Locked out
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    locked_out: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Longitude
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     * @description Internal type is "float"
     */
    longitude: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Manager
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sys_userFields
     * @description Refers to sys_user (User)
     */
    manager: $$rhino.Nilable<sys_userProperty>;

    /**
     * Middle name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    middle_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Mobile phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     * @description Internal type is "ph_number"
     */
    mobile_phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Notification
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     */
    notification: $$rhino.Nilable<$$property.Numeric>;

    /**
     * On schedule
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_userFields
     * @description Internal type is "choice"
     */
    on_schedule: $$rhino.Nilable<IGlideElement>;

    /**
     * Password needs reset
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    password_needs_reset: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Black phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     * @description Internal type is "ph_number"
     */
    phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Photo
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sys_userFields
     */
    photo: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Language
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    preferred_language: $$rhino.Nilable<$$property.Element>;

    /**
     * Roles
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_userFields
     * @description Internal type is "user_roles"
     */
    roles: $$rhino.Nilable<IGlideElement>;

    /**
     * Schedule
     * @type {$$rhino.Nilable<cmn_scheduleProperty>}
     * @memberof sys_userFields
     * @description Refers to cmn_schedule (Schedule)
     */
    schedule: $$rhino.Nilable<cmn_scheduleProperty>;

    /**
     * Source
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    source: $$rhino.Nilable<$$property.Element>;

    /**
     * State / Province
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Street
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_userFields
     * @description Internal type is "multi_two_lines"
     */
    street: $$rhino.Nilable<IGlideElement>;

    /**
     * Class
     * @type {$$rhino.Nilable<$$property.SysClassName>}
     * @memberof sys_userFields
     */
    sys_class_name: $$rhino.Nilable<$$property.SysClassName>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof sys_userFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     * @description Internal type is "domain_path"
     */
    sys_domain_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Time format
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    time_format: $$rhino.Nilable<$$property.Element>;

    /**
     * Time sheet policy
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to time_sheet_policy (Time Sheet Policy)
     */
    time_sheet_policy: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Time zone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    time_zone: $$rhino.Nilable<$$property.Element>;

    /**
     * Title
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    title: $$rhino.Nilable<$$property.Element>;

    /**
     * User ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    user_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Password
     * @type {$$rhino.Nilable<$$property.Password>}
     * @memberof sys_userFields
     */
    user_password: $$rhino.Nilable<$$property.Password>;

    /**
     * Grey Phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    u_grey_phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Rank
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    u_rank: $$rhino.Nilable<$$property.Element>;

    /**
     * Red Phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    u_red_phone: $$rhino.Nilable<$$property.Element>;

    /**
     * VIP
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    vip: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Web service access only
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    web_service_access_only: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Zip / Postal code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    zip: $$rhino.Nilable<$$property.Element>;
}
declare type sys_userGlideRecord = GlideRecord & sys_userFields;
declare type sys_userElement = $$element.Reference<sys_userFields, sys_userGlideRecord>;
declare type sys_userProperty = $$property.generic.ReferenceProperty<sys_userFields, sys_userGlideRecord, sys_userElement>;

/**
 * GlideElement values from the Group table.
 * @interface sys_user_groupFields
 * @extends {IGlideTableProperties}
 */
declare interface sys_user_groupFields extends IGlideTableProperties {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_groupFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Average Daily FTE Hours/Hours Per Person Day
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_user_groupFields
     * @description Internal type is "decimal"
     */
    average_daily_fte: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Cost center
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_user_groupFields
     * @description Refers to cmn_cost_center (Cost Center)
     */
    cost_center: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Default assignee
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sys_user_groupFields
     * @description Refers to sys_user (User)
     */
    default_assignee: $$rhino.Nilable<sys_userProperty>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_groupFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Group email
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_groupFields
     * @description Internal type is "email"
     */
    email: $$rhino.Nilable<$$property.Element>;

    /**
     * Exclude manager
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_groupFields
     */
    exclude_manager: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Hourly rate
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof sys_user_groupFields
     */
    hourly_rate: $$rhino.Nilable<$$property.Currency>;

    /**
     * Include members
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_groupFields
     */
    include_members: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Manager
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sys_user_groupFields
     * @description Refers to sys_user (User)
     */
    manager: $$rhino.Nilable<sys_userProperty>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_groupFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Parent
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof sys_user_groupFields
     * @description Refers to sys_user_group (Group)
     */
    parent: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Points
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_user_groupFields
     */
    points: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Roles
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_user_groupFields
     * @description Internal type is "user_roles"
     */
    roles: $$rhino.Nilable<IGlideElement>;

    /**
     * Source
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_groupFields
     */
    source: $$rhino.Nilable<$$property.Element>;

    /**
     * Type
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_user_groupFields
     * @description Internal type is "glide_list"
     */
    type: $$rhino.Nilable<IGlideElement>;

    /**
     * Vendors
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_user_groupFields
     * @description Internal type is "glide_list"
     */
    vendors: $$rhino.Nilable<IGlideElement>;
}
declare type sys_user_groupGlideRecord = GlideRecord & sys_user_groupFields;
declare type sys_user_groupElement = $$element.Reference<sys_user_groupFields, sys_user_groupGlideRecord>;
declare type sys_user_groupProperty = $$property.generic.ReferenceProperty<sys_user_groupFields, sys_user_groupGlideRecord, sys_user_groupElement>;

/**
 * GlideElement values from the Schedule table.
 * @interface cmn_scheduleFields
 * @extends {IGlideTableProperties}
 */
declare interface cmn_scheduleFields extends IGlideTableProperties {
    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_scheduleFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Document
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_scheduleFields
     */
    document: $$rhino.Nilable<$$property.Element>;

    /**
     * Document key
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_scheduleFields
     */
    document_key: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_scheduleFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Parent
     * @type {$$rhino.Nilable<cmn_scheduleProperty>}
     * @memberof cmn_scheduleFields
     * @description Refers to cmn_schedule (Schedule)
     */
    parent: $$rhino.Nilable<cmn_scheduleProperty>;

    /**
     * Read only
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmn_scheduleFields
     */
    read_only: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Time zone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_scheduleFields
     */
    time_zone: $$rhino.Nilable<$$property.Element>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_scheduleFields
     */
    type: $$rhino.Nilable<$$property.Element>;
}
declare type cmn_scheduleGlideRecord = GlideRecord & cmn_scheduleFields;
declare type cmn_scheduleElement = $$element.Reference<cmn_scheduleFields, cmn_scheduleGlideRecord>;
declare type cmn_scheduleProperty = $$property.generic.ReferenceProperty<cmn_scheduleFields, cmn_scheduleGlideRecord, cmn_scheduleElement>;

/**
 * GlideElement values from the Location table.
 * @interface cmn_locationFields
 * @extends {IGlideTableProperties}
 */
declare interface cmn_locationFields extends IGlideTableProperties {
    /**
     * City
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    city: $$rhino.Nilable<$$property.Element>;

    /**
     * Company
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof cmn_locationFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<core_companyProperty>;

    /**
     * Contact
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmn_locationFields
     * @description Refers to sys_user (User)
     */
    contact: $$rhino.Nilable<sys_userProperty>;

    /**
     * Country
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    country: $$rhino.Nilable<$$property.Element>;

    /**
     * Fax phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    fax_phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Full name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    full_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Latitude
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmn_locationFields
     * @description Internal type is "float"
     */
    latitude: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Lat long error
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    lat_long_error: $$rhino.Nilable<$$property.Element>;

    /**
     * Longitude
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmn_locationFields
     * @description Internal type is "float"
     */
    longitude: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Parent
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof cmn_locationFields
     * @description Refers to cmn_location (Location)
     */
    parent: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Phone territory
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof cmn_locationFields
     * @description Refers to sys_phone_territory (Sys Phone Territory)
     */
    phone_territory: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * State / Province
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Stock room
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmn_locationFields
     */
    stock_room: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Street
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof cmn_locationFields
     * @description Internal type is "multi_two_lines"
     */
    street: $$rhino.Nilable<IGlideElement>;

    /**
     * Time zone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    time_zone: $$rhino.Nilable<$$property.Element>;

    /**
     * Zip / Postal Code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    zip: $$rhino.Nilable<$$property.Element>;
}
declare type cmn_locationGlideRecord = GlideRecord & cmn_locationFields;
declare type cmn_locationElement = $$element.Reference<cmn_locationFields, cmn_locationGlideRecord>;
declare type cmn_locationProperty = $$property.generic.ReferenceProperty<cmn_locationFields, cmn_locationGlideRecord, cmn_locationElement>;

/**
 * GlideElement values from the Department table.
 * @interface cmn_departmentFields
 * @extends {IGlideTableProperties}
 */
declare interface cmn_departmentFields extends IGlideTableProperties {
    /**
     * Business unit
     * @type {$$rhino.Nilable<business_unitProperty>}
     * @memberof cmn_departmentFields
     * @description Refers to business_unit (Business Unit)
     */
    business_unit: $$rhino.Nilable<business_unitProperty>;

    /**
     * Code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_departmentFields
     */
    code: $$rhino.Nilable<$$property.Element>;

    /**
     * Company
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof cmn_departmentFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<core_companyProperty>;

    /**
     * Cost center
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof cmn_departmentFields
     * @description Refers to cmn_cost_center (Cost Center)
     */
    cost_center: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Department head
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmn_departmentFields
     * @description Refers to sys_user (User)
     */
    dept_head: $$rhino.Nilable<sys_userProperty>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_departmentFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Head count
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmn_departmentFields
     */
    head_count: $$rhino.Nilable<$$property.Numeric>;

    /**
     * ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_departmentFields
     */
    id: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_departmentFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Parent
     * @type {$$rhino.Nilable<cmn_departmentProperty>}
     * @memberof cmn_departmentFields
     * @description Refers to cmn_department (Department)
     */
    parent: $$rhino.Nilable<cmn_departmentProperty>;

    /**
     * Primary contact
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmn_departmentFields
     * @description Refers to sys_user (User)
     */
    primary_contact: $$rhino.Nilable<sys_userProperty>;
}
declare type cmn_departmentGlideRecord = GlideRecord & cmn_departmentFields;
declare type cmn_departmentElement = $$element.Reference<cmn_departmentFields, cmn_departmentGlideRecord>;
declare type cmn_departmentProperty = $$property.generic.ReferenceProperty<cmn_departmentFields, cmn_departmentGlideRecord, cmn_departmentElement>;

/**
 * GlideElement values from the Company table.
 * @interface core_companyFields
 * @extends {IGlideTableProperties}
 */
declare interface core_companyFields extends IGlideTableProperties {
    /**
     * Apple icon
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof core_companyFields
     */
    apple_icon: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Banner image
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof core_companyFields
     */
    banner_image: $$rhino.Nilable<$$property.UserImage>;

    /**
     * UI16 Banner Image
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof core_companyFields
     */
    banner_image_light: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Banner text
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    banner_text: $$rhino.Nilable<$$property.Element>;

    /**
     * City
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    city: $$rhino.Nilable<$$property.Element>;

    /**
     * Contact
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof core_companyFields
     * @description Refers to sys_user (User)
     */
    contact: $$rhino.Nilable<sys_userProperty>;

    /**
     * Country
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    country: $$rhino.Nilable<$$property.Element>;

    /**
     * Customer
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof core_companyFields
     */
    customer: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Discount
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof core_companyFields
     * @description Internal type is "decimal"
     */
    discount: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Fax phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     * @description Internal type is "ph_number"
     */
    fax_phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Fiscal year
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof core_companyFields
     * @description Internal type is "glide_date"
     */
    fiscal_year: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Latitude
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof core_companyFields
     * @description Internal type is "float"
     */
    latitude: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Lat long error
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    lat_long_error: $$rhino.Nilable<$$property.Element>;

    /**
     * Longitude
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof core_companyFields
     * @description Internal type is "float"
     */
    longitude: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Manufacturer
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof core_companyFields
     */
    manufacturer: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Market cap
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof core_companyFields
     */
    market_cap: $$rhino.Nilable<$$property.Currency>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Notes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    notes: $$rhino.Nilable<$$property.Element>;

    /**
     * Number of employees
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof core_companyFields
     */
    num_employees: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Parent
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof core_companyFields
     * @description Refers to core_company (Company)
     */
    parent: $$rhino.Nilable<core_companyProperty>;

    /**
     * Phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     * @description Internal type is "ph_number"
     */
    phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Primary
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof core_companyFields
     */
    primary: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Profits
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof core_companyFields
     */
    profits: $$rhino.Nilable<$$property.Currency>;

    /**
     * Publicly traded
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof core_companyFields
     */
    publicly_traded: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Rank tier
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    rank_tier: $$rhino.Nilable<$$property.Element>;

    /**
     * Revenue per year
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof core_companyFields
     */
    revenue_per_year: $$rhino.Nilable<$$property.Currency>;

    /**
     * State / Province
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Stock price
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    stock_price: $$rhino.Nilable<$$property.Element>;

    /**
     * Stock symbol
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    stock_symbol: $$rhino.Nilable<$$property.Element>;

    /**
     * Street
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof core_companyFields
     * @description Internal type is "multi_two_lines"
     */
    street: $$rhino.Nilable<IGlideElement>;

    /**
     * Theme
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof core_companyFields
     * @description Refers to sys_ui_theme (Theme)
     */
    theme: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Vendor
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof core_companyFields
     */
    vendor: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Vendor manager
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof core_companyFields
     * @description Internal type is "glide_list"
     */
    vendor_manager: $$rhino.Nilable<IGlideElement>;

    /**
     * Vendor type
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof core_companyFields
     * @description Internal type is "glide_list"
     */
    vendor_type: $$rhino.Nilable<IGlideElement>;

    /**
     * Website
     * @type {$$rhino.Nilable<$$property.URL>}
     * @memberof core_companyFields
     */
    website: $$rhino.Nilable<$$property.URL>;

    /**
     * Zip / Postal code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    zip: $$rhino.Nilable<$$property.Element>;
}
declare type core_companyGlideRecord = GlideRecord & core_companyFields;
declare type core_companyElement = $$element.Reference<core_companyFields, core_companyGlideRecord>;
declare type core_companyProperty = $$property.generic.ReferenceProperty<core_companyFields, core_companyGlideRecord, core_companyElement>;

/**
 * GlideElement values from the Building table.
 * @interface cmn_buildingFields
 * @extends {IGlideTableProperties}
 */
declare interface cmn_buildingFields extends IGlideTableProperties {
    /**
     * Contact
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmn_buildingFields
     * @description Refers to sys_user (User)
     */
    contact: $$rhino.Nilable<sys_userProperty>;

    /**
     * Floors
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmn_buildingFields
     */
    floors: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Location
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof cmn_buildingFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_buildingFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Notes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_buildingFields
     */
    notes: $$rhino.Nilable<$$property.Element>;
}
declare type cmn_buildingGlideRecord = GlideRecord & cmn_buildingFields;
declare type cmn_buildingElement = $$element.Reference<cmn_buildingFields, cmn_buildingGlideRecord>;
declare type cmn_buildingProperty = $$property.generic.ReferenceProperty<cmn_buildingFields, cmn_buildingGlideRecord, cmn_buildingElement>;

/**
 * GlideElement values from the Business Unit table.
 * @interface business_unitFields
 * @extends {IGlideTableProperties}
 */
declare interface business_unitFields extends IGlideTableProperties {
    /**
     * Business Unit Head
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof business_unitFields
     * @description Refers to sys_user (User)
     */
    bu_head: $$rhino.Nilable<sys_userProperty>;

    /**
     * Company
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof business_unitFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<core_companyProperty>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof business_unitFields
     * @description Internal type is "wide_text"
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Hierarchy level
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof business_unitFields
     */
    hierarchy_level: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof business_unitFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Parent
     * @type {$$rhino.Nilable<business_unitProperty>}
     * @memberof business_unitFields
     * @description Refers to business_unit (Business Unit)
     */
    parent: $$rhino.Nilable<business_unitProperty>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof business_unitFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof business_unitFields
     * @description Internal type is "domain_path"
     */
    sys_domain_path: $$rhino.Nilable<$$property.Element>;
}
declare type business_unitGlideRecord = GlideRecord & business_unitFields;
declare type business_unitElement = $$element.Reference<business_unitFields, business_unitGlideRecord>;
declare type business_unitProperty = $$property.generic.ReferenceProperty<business_unitFields, business_unitGlideRecord, business_unitElement>;
