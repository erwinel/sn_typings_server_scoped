/// <reference path="$$rhino.d.ts" />
/// <reference path="$$property.d.ts" />
/// <reference path="Glide.d.ts" />
/// <reference path="task.d.ts" />

declare interface sysapproval_groupFields extends taskFields {
    /**
     * Admin override
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sysapproval_groupFields
     */
    admin_override: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Approval user
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sysapproval_groupFields
     */
    approval_user: $$rhino.Nilable<sys_userProperty>;
    /**
     * Handle a rejection by
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sysapproval_groupFields
     */
    reject_handling: $$rhino.Nilable<$$property.Element>;
    /**
     * Wait for
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sysapproval_groupFields
     */
    wait_for: $$rhino.Nilable<$$property.Element>;
}
declare type sysapproval_Element = $$element.Reference<sysapproval_groupFields, sysapproval_groupGlideRecord>;
declare type sysapproval_groupGlideRecord = taskGlideRecord & sysapproval_groupFields;

declare interface IApprovalRecordInfo {
    /**
     * Current approval state.
     * @type {TaskApproval}
     * @memberof IApprovalRecordInfo
     */
    state: TaskApproval;
    
    /**
     * SysID of the activity that created the approval record
     * @type {string}
     * @memberof IApprovalRecordInfo
     */
    activity_id: string;
}

/**
 * Hash of approvals by approval sys_id.
 * @interface IApprovalInfo
 */
declare interface IApprovalInfo {
    [key: string]: IApprovalRecordInfo;
}

/**
 * Provides string handling methods.
 * @class GlideStringUtil
 * @description Reference {@link https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server/no-namespace/GlideStringUtilScopedAPI}.
 */
declare class GlideStringUtil {
    /**
     * Replaces periods with underscore characters.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with periods replaced with underscores.
     * @memberof GlideStringUtil
     */
    static dotToUnderBar(sourceString: $$rhino.String): string;
    
    /**
     * Removes quotes from a string.
     * @param {$$rhino.String} sourceString - The string to be processed.
     * @return {string} The string with quotes removed.
     * @memberof GlideStringUtil
     */
    static escapeAllQuotes(sourceString: $$rhino.String): string;
    
    /**
     * Replaces problem characters with escape characters.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with problem characters replaced with escape characters.
     * @memberof GlideStringUtil
     */
    static escapeForHomePage(sourceString: $$rhino.String): string;

    /**
     * Replaces illegal characters with their escape codes.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with illegal characters replaced with their escape codes.
     * @memberof GlideStringUtil
     * @description Using this method removes illegal characters that might cause the UI to render improperly, or trigger a client side attack such as JavaScript or HTML injection.
     */
    static escapeHTML(sourceString: $$rhino.String): string;

    /**
     * Replaces non-printable characters with their printable notation.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with non-printable characters replaced with printable notation.
     * @memberof GlideStringUtil
     */
    static escapeNonPrintable(sourceString: $$rhino.String): string;

    /**
     * Replaces query term separators "^" with their escape sequence "^^".
     * @param {string} sourceString - Text to process.
     * @return {string} Text with query term separators replaced with the escape characters.
     * @memberof GlideStringUtil
     */
    static escapeQueryTermSeparator(sourceString: $$rhino.String): string;

    /**
     * Replaces quotes with escape characters by adding a backslash before each quote.
     * @param {string} sourceString - Text to process.
     * @return {string} Text with backslashes added before quotes.
     * @memberof GlideStringUtil
     */
    static escapeTicks(sourceString: $$rhino.String): string;

    /**
     * Replaces illegal HTML characters into HTML notation.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with illegal characters replaced with HTML notation.
     * @memberof GlideStringUtil
     * @description Using this method removes illegal characters that might cause the UI to render improperly, or trigger a client side attack such as JavaScript or HTML injection.
     */
    static getHTMLValue(sourceString: $$rhino.String): string;

    /**
     * Extracts numeric characters from a string.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text containing only numeric characters.
     * @memberof GlideStringUtil
     */
    static getNumeric(sourceString: $$rhino.String): string;

    /**
     * Validates whether the specified string is a valid base64 string.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {boolean} true if the source string is a base64 formatted string; otherwise, false.
     * @memberof GlideStringUtil
     */
    static isBase64(sourceString: $$rhino.String): boolean;

    /**
     * Validates whether the specified string is in valid sys_id format.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {boolean} true if the source string is a valid sys_id formatted string; otherwise, false.
     * @memberof GlideStringUtil
     * @description The sys_id format is a sequence of 32 hexadecimal characters where all the characters are in the range [0-9, a-f, A-F].
     */
    static isEligibleSysID(sourceString: $$rhino.String): boolean;

    /**
     * Replaces the new line character, /n, with a break code, <br/>.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with new line characters replaced with HTML break code.
     * @memberof GlideStringUtil
     */
    static newLinesToBreaks(sourceString: $$rhino.String): string;

    /**
     * Replaces carriage returns, line feeds, and tabs with spaces, and then removes leading, trailing, and duplicate spaces.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with carriage returns, line feeds, and tabs replaced with spaces, and then leading, trailing, and duplicate spaces removed.
     * @memberof GlideStringUtil
     */
    static normalizeWhitespace(sourceString: $$rhino.String): string;

    /**
     * Replaces escape characters with their respective character.
     * @param {$$rhino.String} htmlString - String to process.
     * @return {string} String with the escape characters replaced.
     * @memberof GlideStringUtil
     * @description This method replaces these escape characters: &lt; &gt: &nbsp; &amp; &quote;.
     */
    static unescapeHTML(htmlString: $$rhino.String): string;
}

declare class GlideXMLUtil {
    removeInvalidChars(xmlString: string): string;
    validateXML(xmlString: string, nsAware: boolean, forgiveUnclosed: boolean): string | null;
}

/**
 * Workflow approval support utilities
 * @interface WorkflowApprovalUtils
 */
declare interface WorkflowApprovalUtils {
    readonly PENDING_STATES: ['not requested', 'not_required', 'requested'];
    
    /**
     * Validates whether a table is derived from the task table.
     * @param {string} tableName - The name of a table.
     * @return {boolean} true if the specified table is derived from the task table; otherwise, false.
     * @memberof WorkflowApprovalUtils
     */
    isTask(tableName: string): boolean;

    /**
     * Cancel all approvals for a task.
     * @param {taskGlideRecord} task - A task record.
     * @param {string} [comment] - Optional comment for workflow history entry.
     * @memberof WorkflowApprovalUtils
     */
    cancelAll(task: taskGlideRecord, comment?: string): void;

    /**
     * Set all User approvals for a target record (task or non-task) to the specified state.
     * @param {GlideRecord} target - The target GlideRecord.
     * @param {TaskApproval} approvalState - The approval state value to set.
     * @param {string} [comment] - Optional comment for approval history entry.
     * @memberof WorkflowApprovalUtils
     */
    setAllApprovalsByTask(target: GlideRecord, approvalState: TaskApproval, comment?: string): void;

    /**
     * Reset all approvals by deleting all of them along with any workflow associated with the task so that the workflows get rerun and recalculated.
     * @param {taskGlideRecord} task - A task record.
     * @param {string} [comment] - Optional comment for workflow history entry.
     * @memberof WorkflowApprovalUtils
     */
    reset(task: taskGlideRecord, comment?: string): void;

    /**
     * Restart workflow.
     * @param {taskGlideRecord} task - A task record.
     * @param {string} [comment] - Optional comment for workflow history entry.
     * @memberof WorkflowApprovalUtils
     * @deprecated this is deprecated and only exists to support legacy calls to this method - use new Workflow().restartWorkflow(task, true) instead.
     */
    deleteWorkflows(task: taskGlideRecord, comment?: string): void;

    /**
     * Create user approvals for a sysapproval_group approval.
     * @param {sysapproval_groupGlideRecord} groupApproval - A record from the 'sysapproval_group' table.
     * @memberof WorkflowApprovalUtils
     */
    createUserApprovals(groupApproval: sysapproval_groupGlideRecord): void;

    /**
     * Get the list of user sys_ids for each member of a group.
     * @param {string} groupID - The SysID of a user group.
     * @return {string}
     * @memberof WorkflowApprovalUtils
     */
    getMembersOfGroup(groupID: string): string;

    /**
     * Get an object of group approvals that were created by all of the children of an approval manager activity.
     * @param {string} taskId - The SysID of a task record.
     * @param {string} amId - The SysID of a user.
     * @return {IApprovalInfo} Hash of group approvals.
     * @memberof WorkflowApprovalUtils
     * @description We use this to determine if we are about to create a duplicate and to determine if we are reusing an approval that we previously created.
     */
    getGroupApprovalsByApprovalManager(taskId: string, amId: string): IApprovalInfo;

    /**
     * Get an object of user approvals that were created by all of the children of an approval manager activity.
     * @param {string} taskId - The SysID of a task record.
     * @param {string} amId - The SysID of a user.
     * @return {IApprovalInfo} Hash of user approvals.
     * @memberof WorkflowApprovalUtils
     * @description We use this to determine if we are about to create a duplicate and to determine if we are reusing an approval that we previously created.
     */
    getUserApprovalsByApprovalManager(taskId: string, amId: string): IApprovalInfo;

    /**
     * Get the counts for the user approvals of a task.
     * @param {string} taskID - The SysID of a task record.
     * @return {number} The number of user approvals for the specified task.
     * @memberof WorkflowApprovalUtils
     */
    getUserApprovalCounts(taskID: string): number;

    /**
     * Get the counts for the user approvals of a group approval.
     * @param {string} groupID - The SysID of a user group.
     * @return {number} The number of user approvals for the specified group.
     * @memberof WorkflowApprovalUtils
     */
    getUserGroupApprovalCounts(groupID: string): number;

    /**
     * Get the counts for the user approvals of a group approval by the approval ids.
     * @param {string} approvalID - the SysId of a user approval.
     * @return {number}
     * @memberof WorkflowApprovalUtils
     */
    getGroupUserApprovalCounts(approvalID: string): number;

    /**
     * Get the counts for the group approvals of a task.
     * @param {string} taskID - The SysID of a task record.
     * @return {number}
     * @memberof WorkflowApprovalUtils
     */
    getGroupApprovalCounts(taskID: string): number;

    /**
     * Get the counts for the list of user approvals.
     * @param {string[]} ids - An array of user approval sys_ids.
     * @return {number}
     * @memberof WorkflowApprovalUtils
     */
    getUserIdListApprovalCounts(ids: string[]): number;

    /**
     * Get the counts for the list of group approvals.
     * @param {string[]} ids - An array of group approval sys_ids.
     * @return {number}
     * @memberof WorkflowApprovalUtils
     */
    getGroupIdListApprovalCounts(ids: string[]): number;

    /**
     * 
     * @param {string[]} groups - An array of group sys_ids.
     * @return {string[]} - An array of user approval sys_ids.
     * @memberof WorkflowApprovalUtils
     */
    getUserApprovalIdsForGroups(groups: string[]): string[];

    /**
     * Set all group approvals of a parent task to the specified state.
     * @param {string} taskID - The SysID of a task record.
     * @param {TaskApproval} approvalState
     * @param {string} [comment] - Optional comment for approval history entry.
     * @param {TaskApproval[]} [currentStates]
     * @memberof WorkflowApprovalUtils
     */
    setGroupApprovalsByTask(taskID: string, approvalState: TaskApproval, comment?: string, currentStates?: TaskApproval[]): void;

    /**
     * Set all group approvals of a parent task to the specified state.
     * @param {string} taskID - The SysID of a task record.
     * @param {TaskApproval} approvalState
     * @param {string} [comment] - Optional comment for approval history entry.
     * @memberof WorkflowApprovalUtils
     */
    setPendingGroupApprovalsByTask(taskID: string, approvalState: TaskApproval, comment?: string): void;

    /**
     * Set all specified group approvals to the specified state.
     * @param {string[]} ids - An array of group approval sys_ids.
     * @param {TaskApproval} approvalState
     * @param {string} [comment] - Optional comment for approval history entry.
     * @param {TaskApproval[]} [currentStates]
     * @memberof WorkflowApprovalUtils
     */
    setGroupApprovalsByIds(ids: string[], approvalState: TaskApproval, comment?: string, currentStates?: TaskApproval[]): void;

    /**
     * Set specified pending group approvals to the specified state.
     * @param {string[]} ids - An array of group approval sys_ids.
     * @param {TaskApproval} approvalState
     * @param {string} [comment] - Optional comment for approval history entry.
     * @memberof WorkflowApprovalUtils
     */
    setPendingGroupApprovalsByIds(ids: string[], approvalState: TaskApproval, comment?: string): void;

    /**
     * Set all User approvals of a task to the specified state.
     * @param {string} taskID - The SysID of a task record.
     * @param {TaskApproval} approvalState
     * @param {string} [comment] - Optional comment for approval history entry.
     * @param {TaskApproval[]} [currentStates]
     * @memberof WorkflowApprovalUtils
     * @description modified to look at document_id for all non-task tables.
     */
    setUserApprovalsByTask(taskID: string, approvalState: TaskApproval, comment?: string, currentStates?: TaskApproval[]): void;

    /**
     * Set all pending user approvals of a task to the specified state.
     * @param {string} taskID - The SysID of a task record.
     * @param {TaskApproval} approvalState
     * @param {string} [comment] - Optional comment for approval history entry.
     * @memberof WorkflowApprovalUtils
     * @description modified to look for document_id when approving a non-task table.
     */
    setPendingUserApprovalsByTask(taskID: string, approvalState: TaskApproval, comment?: string): void;

    /**
     * Set all user approvals of a group approval to the specified state.
     * @param {string} groupID - The SysID of a user group.
     * @param {TaskApproval} approvalState
     * @param {string} [comment] - Optional comment for approval history entry.
     * @param {TaskApproval[]} [currentStates]
     * @memberof WorkflowApprovalUtils
     */
    setUserApprovalsByGroup(groupID: string, approvalState: TaskApproval, comment?: string, currentStates?: TaskApproval[]): void;

    /**
     * Set all pending user approvals of a group approval to the specified state.
     * @param {string} groupID - The SysID of a user group.
     * @param {TaskApproval} approvalState
     * @param {string} [comment] - Optional comment for approval history entry.
     * @memberof WorkflowApprovalUtils
     */
    setPendingUserApprovalsByGroup(groupID: string, approvalState: TaskApproval, comment?: string): void;

    /**
     * Set all specified user approvals to the specified state.
     * @param {string[]} ids - An array of user approval sys_ids.
     * @param {TaskApproval} approvalState
     * @param {string} [comment] - Optional comment for approval history entry.
     * @param {TaskApproval[]} [currentStates]
     * @memberof WorkflowApprovalUtils
     */
    setUserApprovalsByIds(ids: string[], approvalState: TaskApproval, comment?: string, currentStates?: TaskApproval[]): void;

    /**
     * Set specified pending user approvals to the specified state.
     * @param {*} ids
     * @param {TaskApproval} approvalState
     * @param {string} [comment] - Optional comment for approval history entry.
     * @memberof WorkflowApprovalUtils
     */
    setPendingUserApprovalsByIds(ids: any, approvalState: TaskApproval, comment?: string): void;

    /**
     * Add a list of ids to the approval list.
     * @param {string[]} approvals - An array of approval sys_ids.
     * @param {(string | string[])} o - approval sys_ids to add.
     * @memberof WorkflowApprovalUtils
     */
    addIdsToApprovalList(approvals: string[], o: string | string[]): void;

    /**
     * Add a list of user or group ids to the appropriate approval list.
     * @param {string[]} users - An array of user record sys_ids.
     * @param {string[]} groups - An array of user group sys_ids.
     * @param {(string | string[])} o
     * @memberof WorkflowApprovalUtils
     */
    addUsersAndGroupsToApprovalList(users: any[], groups: any[], o: string | string[]): void;

    /**
     * Create the group approvals from the group list.
     * @param {string[]} groups - An array of user group sys_ids.
     * @param {number} order
     * @param {TaskApproval} state - The approval state value.
     * @memberof WorkflowApprovalUtils
     */
    createGroupApprovers(groups: string[], order: number, state: TaskApproval): void;

    /**
     * Add an approval history journal entry for a task record.
     * @param {taskGlideRecord} taskGR - A task glide record.
     * @param {string} msg - The approval history entry message.
     * @memberof WorkflowApprovalUtils
     */
    addApprovalHistoryGR(taskGR: taskGlideRecord, msg: string): void;

    /**
     * Add an approval history journal entry for a task id.
     * @param {string} taskID - The SysId of a task record.
     * @param {string} msg - The journal entry message.
     * @memberof WorkflowApprovalUtils
     * @description Reads the task record, adds the journal entry and updates the task record.
     */
    addApprovalHistoryID(taskID: string, msg: string): void;

    /**
     * Get the display name from a user sys_id.
     * @param {string} userSysId - The SysID of a user record.
     * @return {string} - The display name of the user or an empty string if the user was not found.
     * @memberof WorkflowApprovalUtils
     */
    getUserName(userSysId: string): string;

    /**
     * Get approval record for a given task/record id.
     * @param {string} taskID - The SysId of a task record.
     * @return {GlideRecord} A record from the 'sysapproval_approver' table.
     * @memberof WorkflowApprovalUtils
     */
    getApprovalRecord(taskID: string): GlideRecord;
    
    /**
     * Gets the names of the requested approvers.
     * @param {string} taskID - The SysId of a task record.
     * @return {string} - The names of the requested approvers.
     * @memberof WorkflowApprovalUtils
     */
    getRequestedApproversAsString(taskID: string): string;
    
    /**
     * Gets the first and last name of a user by the user record sys_id.
     * @param {string} userID - The SysId of a user record.
     * @return {string} The first and last name of the user or an empty string if the user was not found.
     * @memberof WorkflowApprovalUtils
     */
    resolveUserIdToName(userID: string): string;
    
    /**
     * Writes a debug message to the system log if in debug mode.
     * @param {string} msg - The message to write to the system logs.
     * @memberof WorkflowApprovalUtils
     */
    debug(msg: string): void;

    /**
     * Get state of all specified user approvals.
     * @param {string[]} ids - An array of user approval sys_ids.
     * @return {(string | undefined)}
     * @memberof WorkflowApprovalUtils
     */
    getUserApprovalStateById(ids: string[]): string | undefined;

    /**
     * Get state of all specified user approvals.
     * @param {string[]} ids - An array of group approval sys_ids.
     * @return {(string | undefined)}
     * @memberof WorkflowApprovalUtils
     */
    getGroupApprovalStateById(ids: string[]): string | undefined;

    /**
     * Sets the approval record in the current workflow context to unapproved.
     * @memberof WorkflowApprovalUtils
     */
    unapprove(): void;
    
    /**
     * Sets the approval record in the current workflow context to approved.
     * @memberof WorkflowApprovalUtils
     */
    approve(): void;

    type: 'WorkflowApprovalUtils'
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
/**
 * Record for items from the 'sys_metadata' table
 * @typedef {(GlideRecord & sys_metadataFields)} sys_metadataGlideRecord
 */
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
/**
 * Record for items from the 'sys_db_object' table
 * @typedef {(sys_metadataGlideRecord & sys_db_objectFields)} sys_db_objectGlideRecord
 */
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
/**
 * Record for items from the 'sys_dictionary' table
 * @typedef {(sys_metadataGlideRecord & sys_dictionaryFields)} sys_dictionaryGlideRecord
 */
declare type sys_dictionaryGlideRecord = sys_metadataGlideRecord & sys_dictionaryFields;

/**
 * GlideElement values from the Variables table.
 * @interface var_dictionaryFields
 * @extends {sys_dictionaryFields}
 */
declare interface var_dictionaryFields extends sys_dictionaryFields {
    /**
     * Help
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof var_dictionaryFields
     */
    help: $$rhino.Nilable<$$property.Element>;

    /**
     * Hint
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof var_dictionaryFields
     */
    hint: $$rhino.Nilable<$$property.Element>;

    /**
     * Label
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof var_dictionaryFields
     */
    label: $$rhino.Nilable<$$property.Element>;

    /**
     * Model ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof var_dictionaryFields
     */
    model_id: $$rhino.Nilable<$$property.Element>;

    /**
     * Model Table
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof var_dictionaryFields
     */
    model_table: $$rhino.Nilable<$$property.Element>;

    /**
     * Order
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof var_dictionaryFields
     */
    order: $$rhino.Nilable<$$property.Numeric>;
}
/**
 * Record for items from the 'var_dictionary' table
 * @typedef {(sys_dictionaryGlideRecord & var_dictionaryFields)} var_dictionaryGlideRecord
 */
declare type var_dictionaryGlideRecord = sys_dictionaryGlideRecord & var_dictionaryFields;
declare type var_dictionaryElement = $$element.Reference<var_dictionaryFields, var_dictionaryGlideRecord>;
declare type var_dictionaryProperty = $$property.generic.ReferenceProperty<var_dictionaryFields, var_dictionaryGlideRecord, var_dictionaryElement>;

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
/**
 * Record for items from the 'sys_glide_object' table
 * @typedef {(sys_metadataGlideRecord & sys_glide_objectFields)} sys_glide_objectGlideRecord
 */
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
/**
 * Record for items from the 'sys_number' table
 * @typedef {(sys_metadataGlideRecord & sys_numberFields)} sys_numberGlideRecord
 */
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
/**
 * Record for items from the 'sys_choice' table
 * @typedef {(GlideRecord & sys_choiceFields)} sys_choiceGlideRecord
 */
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
/**
 * Record for items from the 'sys_dictionary_override' table
 * @typedef {(sys_metadataGlideRecord & sys_dictionary_overrideFields)} sys_dictionary_overrideGlideRecord
 */
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
/**
 * Record for items from the 'sys_package' table
 * @typedef {(GlideRecord & sys_packageFields)} sys_packageGlideRecord
 */
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
/**
 * Record for items from the 'sys_scope' table
 * @typedef {(sys_packageGlideRecord & sys_scopeFields)} sys_scopeGlideRecord
 */
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
/**
 * Record for items from the 'sys_user_role' table
 * @typedef {(sys_metadataGlideRecord & sys_user_roleFields)} sys_user_roleGlideRecord
 */
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
/**
 * Record for items from the 'sys_encryption_context' table
 * @typedef {(sys_metadataGlideRecord & sys_encryption_contextFields)} sys_encryption_contextGlideRecord
 */
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
/**
 * Record for items from the 'sys_calendar' table
 * @typedef {(sys_metadataGlideRecord & sys_calendarFields)} sys_calendarGlideRecord
 */
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
/**
 * Record for items from the 'sla' table
 * @typedef {(GlideRecord & slaFields)} slaGlideRecord
 */
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
/**
 * Record for items from the 'sys_user' table
 * @typedef {(GlideRecord & sys_userFields)} sys_userGlideRecord
 */
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
/**
 * Record for items from the 'sys_user_group' table
 * @typedef {(GlideRecord & sys_user_groupFields)} sys_user_groupGlideRecord
 */
declare type sys_user_groupGlideRecord = GlideRecord & sys_user_groupFields;
declare type sys_user_groupElement = $$element.Reference<sys_user_groupFields, sys_user_groupGlideRecord>;
declare type sys_user_groupProperty = $$property.generic.ReferenceProperty<sys_user_groupFields, sys_user_groupGlideRecord, sys_user_groupElement>;

// #region business_calendar

/**
 * GlideElement values from the "Business Calendar" table.
 * @interface business_calendarFields
 * @extends {sys_metadataFields}
 * @see {business_calendarGlideRecord}
 */
declare interface business_calendarFields extends sys_metadataFields {
    /**
     * The "Name" column.
     * @type {$$property.Element}
     * @memberof business_calendarFields
     * @description mandatory: true; max_length: 80.
     */
    calendar_name: $$property.Element;

    /**
     * The "Description" column.
     * @type {$$property.Element}
     * @memberof business_calendarFields
     * @description max_length: 1000.
     */
    description: $$property.Element;

    /**
     * The "Is legacy schedule" column.
     * @type {$$property.Boolean}
     * @memberof business_calendarFields
     * @description default_value: false.
     */
    is_legacy_schedule: $$property.Boolean;

    /**
     * The "Label" column.
     * @type {$$property.TranslatedField}
     * @memberof business_calendarFields
     * @description mandatory: true; java_class: "GlideElementTranslatedField"; max_length: 80.
     */
    label: $$property.TranslatedField;

    /**
     * Parent calendar which constrains the times for which this schedule is valid
     * @type {$$property.Reference}
     * @memberof business_calendarFields
     * @description column_label: "Parent"; java_class: "com.glide.script.glide_elements.GlideElementReference".
     */
    parent: $$property.Reference;

    /**
     * The "Plural label" column.
     * @type {$$property.TranslatedField}
     * @memberof business_calendarFields
     * @description mandatory: true; java_class: "GlideElementTranslatedField"; max_length: 80.
     */
    plural_label: $$property.TranslatedField;

    /**
     * The "Time zone" column.
     * @type {$$property.Element}
     * @memberof business_calendarFields
     * @description max_length: 40.
     */
    time_zone: $$property.Element;
}

/**
 * Type of {@link GlideRecord} that can refer to items from the "Business Calendar" (business_calendar) table.
 * @typedef {(sys_metadataGlideRecord & business_calendarFields)} business_calendarGlideRecord
 */
declare type business_calendarGlideRecord = sys_metadataGlideRecord & business_calendarFields;

/**
 * Type of {@link GlideElementReference} that refers to a record in the "Business Calendar" (business_calendar) table.
 * @typedef {$$element.Reference<business_calendarFields, business_calendarGlideRecord>} business_calendarGlideRecord
 */
declare type business_calendarElement = $$element.Reference<business_calendarFields, business_calendarGlideRecord>;

/**
 * Type of {@link GlideRecord} property that refers to an item from the "Business Calendar" (business_calendar) table.
 * @typedef {$$property.generic.ReferenceProperty<business_calendarFields, business_calendarGlideRecord, business_calendarElement>} business_calendarGlideRecord
 */
declare type business_calendarProperty = $$property.generic.ReferenceProperty<business_calendarFields, business_calendarGlideRecord, business_calendarElement>;

// #endregion

// #region business_calendar_span

/**
 * GlideElement values from the "Business Calendar Entry" table.
 * @interface business_calendar_spanFields
 * @extends {IExtendedGlideTableProperties}
 * @see {business_calendar_spanGlideRecord}
 */
declare interface business_calendar_spanFields extends IExtendedGlideTableProperties {
    /**
     * The "Calendar" column.
     * @type {$$property.Reference}
     * @memberof business_calendar_spanFields
     * @description mandatory: true; java_class: "com.glide.script.glide_elements.GlideElementReference".
     */
    calendar: $$property.Reference;

    /**
     * The "Counter" column.
     * @type {$$property.Numeric}
     * @memberof business_calendar_spanFields
     */
    counter: $$property.Numeric;

    /**
     * The "End" column.
     * @type {$$property.GlideObject}
     * @memberof business_calendar_spanFields
     * @description mandatory: true; internal_type: "calendar_date_time"; java_class: "com.glide.glideobject.CalendarDateTime".
     */
    end: $$property.GlideObject;

    /**
     * The "Index0" column.
     * @type {$$property.Numeric}
     * @memberof business_calendar_spanFields
     */
    index0: $$property.Numeric;

    /**
     * The "Index1" column.
     * @type {$$property.Numeric}
     * @memberof business_calendar_spanFields
     */
    index1: $$property.Numeric;

    /**
     * The "Index2" column.
     * @type {$$property.Numeric}
     * @memberof business_calendar_spanFields
     */
    index2: $$property.Numeric;

    /**
     * The "Index3" column.
     * @type {$$property.Numeric}
     * @memberof business_calendar_spanFields
     */
    index3: $$property.Numeric;

    /**
     * The "Index4" column.
     * @type {$$property.Numeric}
     * @memberof business_calendar_spanFields
     */
    index4: $$property.Numeric;

    /**
     * The "Index5" column.
     * @type {$$property.Numeric}
     * @memberof business_calendar_spanFields
     */
    index5: $$property.Numeric;

    /**
     * The "Index6" column.
     * @type {$$property.Numeric}
     * @memberof business_calendar_spanFields
     */
    index6: $$property.Numeric;

    /**
     * The "Index7" column.
     * @type {$$property.Numeric}
     * @memberof business_calendar_spanFields
     */
    index7: $$property.Numeric;

    /**
     * The "Index8" column.
     * @type {$$property.Numeric}
     * @memberof business_calendar_spanFields
     */
    index8: $$property.Numeric;

    /**
     * The "Index9" column.
     * @type {$$property.Numeric}
     * @memberof business_calendar_spanFields
     */
    index9: $$property.Numeric;

    /**
     * The "Name" column.
     * @type {$$property.Reference}
     * @memberof business_calendar_spanFields
     * @description mandatory: true; java_class: "com.glide.script.glide_elements.GlideElementReference".
     */
    span_name: $$property.Reference;

    /**
     * The "Start" column.
     * @type {$$property.GlideObject}
     * @memberof business_calendar_spanFields
     * @description mandatory: true; internal_type: "calendar_date_time"; java_class: "com.glide.glideobject.CalendarDateTime".
     */
    start: $$property.GlideObject;
}

/**
 * Type of {@link GlideRecord} that can refer to items from the "Business Calendar Entry" (business_calendar_span) table.
 * @typedef {(GlideRecord & business_calendar_spanFields)} business_calendar_spanGlideRecord
 */
declare type business_calendar_spanGlideRecord = GlideRecord & business_calendar_spanFields;

/**
 * Type of {@link GlideElementReference} that refers to a record in the "Business Calendar Entry" (business_calendar_span) table.
 * @typedef {$$element.Reference<business_calendar_spanFields, business_calendar_spanGlideRecord>} business_calendar_spanGlideRecord
 */
declare type business_calendar_spanElement = $$element.Reference<business_calendar_spanFields, business_calendar_spanGlideRecord>;

/**
 * Type of {@link GlideRecord} property that refers to an item from the "Business Calendar Entry" (business_calendar_span) table.
 * @typedef {$$property.generic.ReferenceProperty<business_calendar_spanFields, business_calendar_spanGlideRecord, business_calendar_spanElement>} business_calendar_spanGlideRecord
 */
declare type business_calendar_spanProperty = $$property.generic.ReferenceProperty<business_calendar_spanFields, business_calendar_spanGlideRecord, business_calendar_spanElement>;

// #endregion

// #region cmn_schedule

/**
 * GlideElement values from the "Schedule" table.
 * @interface cmn_scheduleFields
 * @extends {business_calendarFields}
 * @description Schedule during which Changes may be performed.
 * @see {cmn_scheduleGlideRecord}
 */
declare interface cmn_scheduleFields extends business_calendarFields {
    /**
     * The "Document" column.
     * @type {$$property.Element}
     * @memberof cmn_scheduleFields
     * @description max_length: 40.
     */
    document: $$property.Element;

    /**
     * The "Document key" column.
     * @type {$$property.Element}
     * @memberof cmn_scheduleFields
     * @description max_length: 32.
     */
    document_key: $$property.Element;

    /**
     * The "Name" column.
     * @type {$$property.Element}
     * @memberof cmn_scheduleFields
     * @description max_length: 80.
     */
    name: $$property.Element;

    /**
     * Read-only schedules cannot be modified from the user interface
     * @type {$$property.Boolean}
     * @memberof cmn_scheduleFields
     * @description column_label: "Read only"; default_value: false.
     */
    read_only: $$property.Boolean;

    /**
     * The "Type" column.
     * @type {$$property.Element}
     * @memberof cmn_scheduleFields
     * @description max_length: 40.
     */
    type: $$property.Element;
}

/**
 * Type of {@link GlideRecord} that can refer to items from the "Schedule" (cmn_schedule) table.
 * @typedef {(business_calendarGlideRecord & cmn_scheduleFields)} cmn_scheduleGlideRecord
 */
declare type cmn_scheduleGlideRecord = business_calendarGlideRecord & cmn_scheduleFields;

/**
 * Type of {@link GlideElementReference} that refers to a record in the "Schedule" (cmn_schedule) table.
 * @typedef {$$element.Reference<cmn_scheduleFields, cmn_scheduleGlideRecord>} cmn_scheduleGlideRecord
 */
declare type cmn_scheduleElement = $$element.Reference<cmn_scheduleFields, cmn_scheduleGlideRecord>;

/**
 * Type of {@link GlideRecord} property that refers to an item from the "Schedule" (cmn_schedule) table.
 * @typedef {$$property.generic.ReferenceProperty<cmn_scheduleFields, cmn_scheduleGlideRecord, cmn_scheduleElement>} cmn_scheduleGlideRecord
 */
declare type cmn_scheduleProperty = $$property.generic.ReferenceProperty<cmn_scheduleFields, cmn_scheduleGlideRecord, cmn_scheduleElement>;

// #endregion

// #region cmn_schedule_span

/**
 * Indicates the monthly recurrance type.
 * Used by the {@link cmn_schedule_spanFields#monthly_type} column.
 * @typedef {("dom" | "nth" | "ldom" | "lwdom")} cmn_schedule_entryMonthlyType
 * @description dom=Day of the month; nth=Day of the Week; ldom=Last Day of the Month; lwdom=Last Week Day of the Month.
 */
declare type cmn_schedule_entryMonthlyType = "dom" | "nth" | "ldom" | "lwdom";

/**
 * Indicates the monthly recurrance type.
 * Used by the {@link cmn_schedule_spanFields#repeat_type} column.
 * @typedef {("daily" | "weekdays" | "weekends" | "weekMWF" | "weekTT" | "weekly" | "monthly" | "yearly" | "specific")} cmn_schedule_entryRepeatType
 * @description daily=Daily; weekdays=Every Weekday (Mon-Fri); weekends=Every Weekend (Sat, Sun); weekMWF=Every Mon, Wed, Fri; weekTT=Every Tue, Thu; weekly=Weekly; monthly=Monthly; yearly=Yearly; specific=Specific.
 */
declare type cmn_schedule_entryRepeatType = "daily" | "weekdays" | "weekends" | "weekMWF" | "weekTT" | "weekly" | "monthly" | "yearly" | "specific";

/**
 * Indicates the monthly recurrance type.
 * Used by the {@link cmn_schedule_spanFields#type} column.
 * @typedef {("time_off" | "appointment" | "meeting" | "call" | "on_call" | "time_off_in_approval" | "time_off_rejected")} cmn_schedule_entryEntryType
 * @description time_off=Time off; appointment=Appointment; meeting=Meeting; call=Phone call; on_call=On call; time_off_in_approval=Time off - In approval; time_off_rejected=Time off - rejected.
 */
declare type cmn_schedule_entryEntryType = "time_off" | "appointment" | "meeting" | "call" | "on_call" | "time_off_in_approval" | "time_off_rejected";

/**
 * Indicates the monthly recurrance type.
 * Used by the {@link cmn_schedule_spanFields#show_as} column.
 * @typedef {("busy" | "free" | "tentative" | "on_call")} cmn_schedule_entryShowAs
 * @description busy=Busy; free=Free; tentative=Tentative; on_call=On call.
 */
declare type cmn_schedule_entryShowAs = "busy" | "free" | "tentative" | "on_call";

/**
 * Indicates the yearly recurrance type.
 * Used by the {@link cmn_schedule_spanFields#yearly_type} column.
 * @typedef {("doy" | "float")} cmn_schedule_entryYearlyType
 * @description doy=Day of the year; float=Floating.
 */
 declare type cmn_schedule_entryYearlyType = "doy" | "float";
 
/**
 * GlideElement values from the "Schedule Entry" table.
 * @interface cmn_schedule_spanFields
 * @extends {business_calendar_spanFields}
 * @see {cmn_schedule_spanGlideRecord}
 */
 declare interface cmn_schedule_spanFields extends business_calendar_spanFields {
    /**
     * The "All day" column.
     * @type {$$property.Boolean}
     * @memberof cmn_schedule_spanFields
     * @description default_value: false.
     */
    all_day: $$property.Boolean;

    /**
     * The "Repeat on" column.
     * @type {$$property.Element}
     * @memberof cmn_schedule_spanFields
     * @description internal_type: "days_of_week"; max_length: 40; default_value: "1".
     */
    days_of_week: $$property.Element;

    /**
     * The "End date time" column.
     * @type {$$property.Element}
     * @memberof cmn_schedule_spanFields
     * @description internal_type: "schedule_date_time"; java_class: "com.glide.script.fencing.ScopedGlideScheduleDateTime".
     */
    end_date_time: $$property.Element;

    /**
     * The "Float day" column.
     * @type {$$property.Element}
     * @memberof cmn_schedule_spanFields
     * @description max_length: 40; default_value: "1".
     */
    float_day: $$property.Element;

    /**
     * The "Float week" column.
     * @type {$$property.Element}
     * @memberof cmn_schedule_spanFields
     * @description max_length: 40; default_value: "1".
     */
    float_week: $$property.Element;

    /**
     * The "Group" column.
     * @type {$$property.Reference}
     * @memberof cmn_schedule_spanFields
     * @description java_class: "com.glide.script.glide_elements.GlideElementReference".
     */
    group: $$property.Reference;

    /**
     * The "Month" column.
     * @type {$$property.Numeric}
     * @memberof cmn_schedule_spanFields
     * @description internal_type: "month_of_year"; java_class: "MonthOfYear".
     */
    month: $$property.Numeric;

    /**
     * The "Monthly type" column.
     * @type {$$property.generic.Element<cmn_schedule_entryMonthlyType>}
     * @memberof cmn_schedule_spanFields
     * @description max_length: 40; default_value: "dom".
     */
    monthly_type: $$property.generic.Element<cmn_schedule_entryMonthlyType>;

    /**
     * The "Name" column.
     * @type {$$property.Element}
     * @memberof cmn_schedule_spanFields
     * @description max_length: 80.
     */
    name: $$property.Element;

    /**
     * The "Notes" column.
     * @type {$$property.Element}
     * @memberof cmn_schedule_spanFields
     * @description max_length: 1000.
     */
    notes: $$property.Element;

    /**
     * The starting date for the repeating item that this item overrides
     * @type {$$property.Numeric}
     * @memberof cmn_schedule_spanFields
     * @description column_label: "Overridden Start Date"; internal_type: "integer_date"; java_class: "IntegerDate".
     */
    override_start_date: $$property.Numeric;

    /**
     * The repeating item that this item overrides, making this item a single occurrence
     * @type {$$property.Reference}
     * @memberof cmn_schedule_spanFields
     * @description column_label: "Overridden Item"; java_class: "com.glide.script.glide_elements.GlideElementReference".
     */
    parent: $$property.Reference;

    /**
     * The "Repeat every" column.
     * @type {$$property.Numeric}
     * @memberof cmn_schedule_spanFields
     * @description internal_type: "repeat_count"; java_class: "com.glide.script.glide_elements.GlideElementNumeric"; default_value: 1.
     */
    repeat_count: $$property.Numeric;

    /**
     * The "Repeats" column.
     * @type {$$property.generic.Element<cmn_schedule_entryRepeatType>}
     * @memberof cmn_schedule_spanFields
     * @description internal_type: "repeat_type"; max_length: 40.
     */
    repeat_type: $$property.generic.Element<cmn_schedule_entryRepeatType>;

    /**
     * The "Repeat until" column.
     * @type {$$property.Numeric}
     * @memberof cmn_schedule_spanFields
     * @description internal_type: "integer_date"; java_class: "IntegerDate".
     */
    repeat_until: $$property.Numeric;

    /**
     * The "Schedule" column.
     * @type {$$property.Reference}
     * @memberof cmn_schedule_spanFields
     * @description java_class: "com.glide.script.glide_elements.GlideElementReference".
     */
    schedule: $$property.Reference;

    /**
     * The "Show as" column.
     * @type {$$property.Element}
     * @memberof cmn_schedule_spanFields
     * @description max_length: 40; default_value: "busy".
     */
    show_as: $$property.generic.Element<cmn_schedule_entryShowAs>;

    /**
     * The "Start date time" column.
     * @type {$$property.Element}
     * @memberof cmn_schedule_spanFields
     * @description internal_type: "schedule_date_time"; java_class: "com.glide.script.fencing.ScopedGlideScheduleDateTime".
     */
    start_date_time: $$property.Element;

    /**
     * The "Sys ID" column.
     * @type {$$property.Element}
     * @memberof cmn_schedule_spanFields
     * @description internal_type: "GUID"; max_length: 32.
     */
    sys_id: $$property.Element;

    /**
     * The "Type" column.
     * @type {$$property.generic.Element<cmn_schedule_entryEntryType>}
     * @memberof cmn_schedule_spanFields
     * @description max_length: 40.
     */
    type: $$property.generic.Element<cmn_schedule_entryEntryType>;

    /**
     * The "User" column.
     * @type {$$property.Reference}
     * @memberof cmn_schedule_spanFields
     * @description java_class: "com.glide.script.glide_elements.GlideElementReference".
     */
    user: $$property.Reference;

    /**
     * The "Yearly type" column.
     * @type {$$property.generic.Element<cmn_schedule_entryYearlyType>}
     * @memberof cmn_schedule_spanFields
     * @description max_length: 40; default_value: "doy".
     */
    yearly_type: $$property.generic.Element<cmn_schedule_entryYearlyType>;
}

/**
 * Type of {@link GlideRecord} that can refer to items from the "Schedule Entry" (cmn_schedule_span) table.
 * @typedef {(business_calendar_spanGlideRecord & cmn_schedule_spanFields)} cmn_schedule_spanGlideRecord
 */
declare type cmn_schedule_spanGlideRecord = business_calendar_spanGlideRecord & cmn_schedule_spanFields;

/**
 * Type of {@link GlideElementReference} that refers to a record in the "Schedule Entry" (cmn_schedule_span) table.
 * @typedef {$$element.Reference<cmn_schedule_spanFields, cmn_schedule_spanGlideRecord>} cmn_schedule_spanGlideRecord
 */
declare type cmn_schedule_spanElement = $$element.Reference<cmn_schedule_spanFields, cmn_schedule_spanGlideRecord>;

/**
 * Type of {@link GlideRecord} property that refers to an item from the "Schedule Entry" (cmn_schedule_span) table.
 * @typedef {$$property.generic.ReferenceProperty<cmn_schedule_spanFields, cmn_schedule_spanGlideRecord, cmn_schedule_spanElement>} cmn_schedule_spanGlideRecord
 */
declare type cmn_schedule_spanProperty = $$property.generic.ReferenceProperty<cmn_schedule_spanFields, cmn_schedule_spanGlideRecord, cmn_schedule_spanElement>;

// #endregion

// #region cmn_other_schedule

declare type cmn_other_scheduleType = "include" | "exclude";

/**
 * GlideElement values from the "Other Schedule" table.
 * @interface cmn_other_scheduleFields
 * @extends {IGlideTableProperties}
 * @see {cmn_other_scheduleGlideRecord}
 */
declare interface cmn_other_scheduleFields extends IGlideTableProperties {
    /**
     * The "Other Schedule" column.
     * @type {$$property.Element}
     * @memberof cmn_other_scheduleFields
     * @description internal_type: "collection"; max_length: 40.
     */
    cmn_other_schedule: $$property.Element;

    /**
     * The "Child schedule" column.
     * @type {$$property.Reference}
     * @memberof cmn_other_scheduleFields
     * @description java_class: "com.glide.script.glide_elements.GlideElementReference".
     */
    child_schedule: $$property.Reference;

    /**
     * The "Schedule" column.
     * @type {$$property.Reference}
     * @memberof cmn_other_scheduleFields
     * @description java_class: "com.glide.script.glide_elements.GlideElementReference".
     */
    schedule: $$property.Reference;

    /**
     * The "Created by" column.
     * @type {$$property.Element}
     * @memberof cmn_other_scheduleFields
     * @description max_length: 40.
     */
    sys_created_by: $$property.Element;

    /**
     * The "Created" column.
     * @type {$$property.GlideObject}
     * @memberof cmn_other_scheduleFields
     * @description java_class: "com.glide.glideobject.GlideDateTime".
     */
    sys_created_on: $$property.GlideObject;

    /**
     * The "Sys ID" column.
     * @type {$$property.Element}
     * @memberof cmn_other_scheduleFields
     * @description internal_type: "GUID"; max_length: 32.
     */
    sys_id: $$property.Element;

    /**
     * The "Updates" column.
     * @type {$$property.Numeric}
     * @memberof cmn_other_scheduleFields
     */
    sys_mod_count: $$property.Numeric;

    /**
     * The "Updated by" column.
     * @type {$$property.Element}
     * @memberof cmn_other_scheduleFields
     * @description max_length: 40.
     */
    sys_updated_by: $$property.Element;

    /**
     * The "Updated" column.
     * @type {$$property.GlideObject}
     * @memberof cmn_other_scheduleFields
     * @description java_class: "com.glide.glideobject.GlideDateTime".
     */
    sys_updated_on: $$property.GlideObject;

    /**
     * The "Time zone" column.
     * @type {$$property.Element}
     * @memberof cmn_other_scheduleFields
     * @description max_length: 40.
     */
    time_zone: $$property.Element;

    /**
     * The "Type" column.
     * @type {$$property.generic.Element<cmn_other_scheduleType>}
     * @memberof cmn_other_scheduleFields
     * @description default_value: "include".
     */
    type: $$property.generic.Element<cmn_other_scheduleType>;
}

/**
 * Type of {@link GlideRecord} that can refer to items from the "Other Schedule" (cmn_other_schedule) table.
 * @typedef {(GlideRecord & cmn_other_scheduleFields)} cmn_other_scheduleGlideRecord
 */
declare type cmn_other_scheduleGlideRecord = GlideRecord & cmn_other_scheduleFields;

/**
 * Type of {@link GlideElementReference} that refers to a record in the "Other Schedule" (cmn_other_schedule) table.
 * @typedef {$$element.Reference<cmn_other_scheduleFields, cmn_other_scheduleGlideRecord>} cmn_other_scheduleGlideRecord
 */
declare type cmn_other_scheduleElement = $$element.Reference<cmn_other_scheduleFields, cmn_other_scheduleGlideRecord>;

/**
 * Type of {@link GlideRecord} property that refers to an item from the "Other Schedule" (cmn_other_schedule) table.
 * @typedef {$$property.generic.ReferenceProperty<cmn_other_scheduleFields, cmn_other_scheduleGlideRecord, cmn_other_scheduleElement>} cmn_other_scheduleGlideRecord
 */
declare type cmn_other_scheduleProperty = $$property.generic.ReferenceProperty<cmn_other_scheduleFields, cmn_other_scheduleGlideRecord, cmn_other_scheduleElement>;

// #endregion

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
/**
 * Record for items from the 'cmn_location' table
 * @typedef {(GlideRecord & cmn_locationFields)} cmn_locationGlideRecord
 */
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
/**
 * Record for items from the 'cmn_department' table
 * @typedef {(GlideRecord & cmn_departmentFields)} cmn_departmentGlideRecord
 */
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
/**
 * Record for items from the 'core_company' table
 * @typedef {(GlideRecord & core_companyFields)} core_companyGlideRecord
 */
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
/**
 * Record for items from the 'cmn_building' table
 * @typedef {(GlideRecord & cmn_buildingFields)} cmn_buildingGlideRecord
 */
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
/**
 * Record for items from the 'business_unit' table
 * @typedef {(GlideRecord & business_unitFields)} business_unitGlideRecord
 */
declare type business_unitGlideRecord = GlideRecord & business_unitFields;
declare type business_unitElement = $$element.Reference<business_unitFields, business_unitGlideRecord>;
declare type business_unitProperty = $$property.generic.ReferenceProperty<business_unitFields, business_unitGlideRecord, business_unitElement>;
