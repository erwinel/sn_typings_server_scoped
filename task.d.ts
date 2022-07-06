/// <reference path="core.d.ts" />
/// <reference path="change.d.ts" />
/// <reference path="serviceCatalog.d.ts" />

/**
 *
 * @type {("not requested" | "cancelled" | "requested" | "duplicate" | "not_required" | "approved" | "rejected")}
 */
declare type TaskApproval = "not requested" | "cancelled" | "requested" | "duplicate" | "not_required" | "approved" | "rejected";

/**
 * email=Email; endpoint_security=Endpoint Security; ids_ips=IDS/IPS; network_monitoring=Network Monitoring; phone=Phone; self-service=Self-service; siem=SIEM; virtual_agent=Virtual Agent; vulnerability_response=Vulnerability Response; walk-in=Walk-in
 * @type {("email" | "endpoint_security" | "ids_ips" | "network_monitoring" | "phone" | "self-service" | "siem" | "virtual_agent" | "vulnerability_response" | "walk-in")}
 */
declare type TaskContactType = "email" | "endpoint_security" | "ids_ips" | "network_monitoring" | "phone" | "self-service" | "siem" | "virtual_agent" | "vulnerability_response" | "walk-in";
 
/**
 *
 */
declare type TaskEscalationValue = 0 | 1 | 2 | 3;
declare type TaskEscalationString = "0" | "1" | "2" | "3";
declare type TaskEscalation = TaskEscalationValue | TaskEscalationString;
 
/**
 *
 * @description 1="1 - High"; 2="2 - Medium"; 3="3 - Low"
 */
declare type Task3ScaleValue = 1 | 2 | 3;
declare type Task3ScaleString = "1" | "2" | "3";
declare type Task3Scale = Task3ScaleValue | Task3ScaleString;
 
declare type TaskPriorityValue = 1 | 2 | 3 | 4 | 5;
declare type TaskPriorityString = "1" | "2" | "3" | "4" | "5";
declare type TaskPriority = TaskPriorityValue | TaskPriorityString;
 
/**
 * Values for task state
 * @description -5="Pending"; 1="Open"; 2="Work in Progress"; 3="Closed Complete"; 4="Closed Incomplete"; 7="Closed Skipped"
 */
declare type TaskStateValue = -5 | 1 | 2 | 3 | 4 | 7;
declare type TaskStateString = "-5" | "1" | "2" | "3" | "4" | "7";
declare type TaskState = TaskStateValue | TaskStateString;

declare interface TaskStateUtil {
    /**
     * static properties and default values
     */
    ATTR_INACTIVE_STATES: "close_states";
    ATTR_DEFAULT_WORK: "default_work_state";
    ATTR_DEFAULT_CLOSE: "default_close_state";
    SYSTEM_DEFAULT_CLOSE: 3; // task closed complete state
    SYSTEM_DEFAULT_WORK: 2; // task work in progress state
    SYSTEM_INACTIVE_STATES: [3, 4, 7]; // task default inactive/close states

    /**
     * Get the active status of a given state
     * @param state value of the state field choice
     * @return boolean true if state is an active state
     */
    isStateInactive(state): boolean;
    /**
     * Get the value for the default work state, defaults to 2 if not specified
     * @return int
     */
    getDefaultWorkState(): number;

    /**
     * Get the value for the default close state, defaults to 3 if not specified
     * @return int
     */
    getDefaultCloseState(): number;

    /**
     * Get the list of inactive state values
     * @return array
     */
    getInactiveStates(): number[];

    /**
	 * Sets the default work state using the passed-in value.
	 * However, if the 'default_work_state' its value is used in preference to the passed-in value.
	 *
	 * @param The value to use for the default work state
	 * @return A self-reference to allow for method chaining
	 */
    setDefaultWorkState(defaultWorkState: number): TaskStateUtil;

    /**
     * Decides whether the 'task closer' business rule should be run or not
     * @return boolean Whether the business rule should be allowed to run or not
     */
    runTaskCloser(): boolean;

    /**
     * Decides whether the 'mark closed' business rule should be run or not
     * @return boolean Whether the business rule should be allowed to run or not
     */
    runMarkClosed(): boolean;

    /**
     * Decides whether the 'task reopener' business rule should be run or not
     * @return boolean Whether the business rule should be allowed to run or not
     */
    runTaskReopener(): boolean;

    readonly type: "TaskStateUtil";
}

/**
 * GlideElement values from the Task table.
 * @interface taskFields
 * @extends {IExtendedGlideTableProperties}
 */
declare interface taskFields extends IExtendedGlideTableProperties {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof taskFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Activity due
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     * @description Internal type is "due_date"
     */
    activity_due: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Additional assignee list
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "glide_list"
     */
    additional_assignee_list: $$rhino.Nilable<IGlideElement>;

    /**
     * Approval
     * @type {$$rhino.Nilable<$$property.generic.Element<TaskApproval>>}
     * @memberof taskFields
     */
    approval: $$rhino.Nilable<$$property.generic.Element<TaskApproval>>;

    /**
     * Approval history
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "journal"
     */
    approval_history: $$rhino.Nilable<IGlideElement>;

    /**
     * Approval set
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    approval_set: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Assigned to
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof taskFields
     * @description Refers to sys_user (User)
     */
    assigned_to: $$rhino.Nilable<sys_userProperty>;

    /**
     * Assignment group
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof taskFields
     * @description Refers to sys_user_group (Group)
     */
    assignment_group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Business duration
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     * @description Internal type is "glide_duration"
     */
    business_duration: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Business service
     * @type {$$rhino.Nilable<cmdb_ci_serviceProperty>}
     * @memberof taskFields
     * @description Refers to cmdb_ci_service (Business Service)
     */
    business_service: $$rhino.Nilable<cmdb_ci_serviceProperty>;

    /**
     * Duration
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     * @description Internal type is "glide_duration"
     */
    calendar_duration: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Closed
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    closed_at: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Closed by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof taskFields
     * @description Refers to sys_user (User)
     */
    closed_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Close notes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    close_notes: $$rhino.Nilable<$$property.Element>;

    /**
     * Configuration item
     * @type {$$rhino.Nilable<cmdb_ciProperty>}
     * @memberof taskFields
     * @description Refers to cmdb_ci (Configuration Item)
     */
    cmdb_ci: $$rhino.Nilable<cmdb_ciProperty>;

    /**
     * Additional comments
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "journal_input"
     */
    comments: $$rhino.Nilable<IGlideElement>;

    /**
     * Comments and Work notes
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "journal_list"
     */
    comments_and_work_notes: $$rhino.Nilable<IGlideElement>;

    /**
     * Company
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof taskFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<core_companyProperty>;

    /**
     * Contact type
     * @type {$$rhino.Nilable<$$property.generic.Element<TaskContactType>>}
     * @memberof taskFields
     */
    contact_type: $$rhino.Nilable<$$property.generic.Element<TaskContactType>>;

    /**
     * Contract
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof taskFields
     * @description Refers to ast_contract (Contract)
     */
    contract: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Correlation display
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    correlation_display: $$rhino.Nilable<$$property.Element>;

    /**
     * Correlation ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    correlation_id: $$rhino.Nilable<$$property.Element>;

    /**
     * delivery_plan
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof taskFields
     * @description Refers to sc_cat_item_delivery_plan (Execution Plan)
     */
    delivery_plan: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Delivery task
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof taskFields
     * @description Refers to sc_cat_item_delivery_task (Execution Plan Task)
     */
    delivery_task: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Due date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    due_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Escalation
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    escalation: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Expected start
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    expected_start: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Follow up
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    follow_up: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Group list
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "glide_list"
     */
    group_list: $$rhino.Nilable<IGlideElement>;

    /**
     * Impact
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    impact: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Knowledge
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof taskFields
     */
    knowledge: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Location
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof taskFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Made SLA
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof taskFields
     */
    made_sla: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    number: $$rhino.Nilable<$$property.Element>;

    /**
     * Opened
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    opened_at: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Opened by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof taskFields
     * @description Refers to sys_user (User)
     */
    opened_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Order
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    order: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Parent
     * @type {$$rhino.Nilable<taskProperty>}
     * @memberof taskFields
     * @description Refers to task (Task)
     */
    parent: $$rhino.Nilable<taskProperty>;

    /**
     * Priority
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    priority: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Reassignment count
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    reassignment_count: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Rejection goto
     * @type {$$rhino.Nilable<taskProperty>}
     * @memberof taskFields
     * @description Refers to task (Task)
     */
    rejection_goto: $$rhino.Nilable<taskProperty>;

    /**
     * Service offering
     * @type {$$rhino.Nilable<$$property.generic.Reference<service_offeringFields, service_offeringGlideRecord>>}
     * @memberof taskFields
     * @description Refers to service_offering (Service Offering)
     */
    service_offering: $$rhino.Nilable<$$property.generic.Reference<service_offeringFields, service_offeringGlideRecord>>;

    /**
     * Short description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    short_description: $$rhino.Nilable<$$property.Element>;

    /**
     * Skills
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "glide_list"
     */
    skills: $$rhino.Nilable<IGlideElement>;

    /**
     * SLA due
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     * @description Internal type is "due_date"
     */
    sla_due: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    state: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof taskFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     * @description Internal type is "domain_path"
     */
    sys_domain_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Time worked
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     * @description Internal type is "timer"
     */
    time_worked: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Upon approval
     * @type {$$rhino.Nilable<$$property.generic.Element<("proceed" | "do_nothing")>>}
     * @memberof taskFields
     * @description "proceed"="Proceed to Next Task"; "do_nothing"="Wait for a User to Close this task"
     */
    upon_approval: $$rhino.Nilable<$$property.generic.Element<("proceed" | "do_nothing")>>;

    /**
     * Upon reject
     * @type {$$rhino.Nilable<$$property.generic.Element<("cancel" | "goto")>>}
     * @memberof taskFields
     * @description "cancel"="Cancel all future Tasks"; "goto"="Go to a previous Task"
     */
    upon_reject: $$rhino.Nilable<$$property.generic.Element<("cancel" | "goto")>>;

    /**
     * Urgency
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    urgency: $$rhino.Nilable<$$property.Numeric>;

    /**
     * User input
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "user_input"
     */
    user_input: $$rhino.Nilable<IGlideElement>;

    /**
     * Variables
     * @type {$$rhino.Nilable<$$property.Variables>}
     * @memberof taskFields
     */
    variables: $$rhino.Nilable<$$property.Variables>;

    /**
     * Watch list
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "glide_list"
     */
    watch_list: $$rhino.Nilable<IGlideElement>;

    /**
     * Workflow activity
     * @type {$$rhino.Nilable<$$property.generic.Reference<wf_activityFields, wf_activityGlideRecord>>}
     * @memberof taskFields
     * @description Refers to wf_activity (Workflow Activity)
     */
    wf_activity: $$rhino.Nilable<$$property.generic.Reference<wf_activityFields, wf_activityGlideRecord>>;

    /**
     * Actual end
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    work_end: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Work notes
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "journal_input"
     */
    work_notes: $$rhino.Nilable<IGlideElement>;

    /**
     * Work notes list
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "glide_list"
     */
    work_notes_list: $$rhino.Nilable<IGlideElement>;

    /**
     * Actual start
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    work_start: $$rhino.Nilable<$$property.GlideObject>;
}
declare type taskGlideRecord = GlideRecord & taskFields;
declare type taskElement = $$element.Reference<taskFields, taskGlideRecord>;
declare type taskProperty = $$property.generic.ReferenceProperty<taskFields, taskGlideRecord, taskElement>;
