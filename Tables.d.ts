/// <reference path="index.d.ts" />

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

/**
 *
 */
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

/**
 *
 * @type {("Solved (Work Around)" | "Solved (Permanently)" | "Solved Remotely (Work Around)" | "Solved Remotely (Permanently)" | "Not Solved (Not Reproducible)" | "Not Solved (Too Costly)" | "Closed/Resolved by Caller")}
 */
declare type IncidentCloseCode = "Solved (Work Around)" | "Solved (Permanently)" | "Solved Remotely (Work Around)" | "Solved Remotely (Permanently)" | "Not Solved (Not Reproducible)" | "Not Solved (Too Costly)" | "Closed/Resolved by Caller";

/**
 *
 * @description 1="Awaiting Caller"; 5="Awaiting Change"; 3="Awaiting Problem"; 4="Awaiting Vendor"
 */
declare type IncidentHoldReasonValue = 1 | 5 | 3 | 4;
declare type IncidentHoldReasonString = "1" | "5" | "3" | "4";
declare type IncidentHoldReason = IncidentHoldReasonValue | IncidentHoldReasonString;

/**
 *
 * @description 1="New"; 2="In Progress"; 3="On Hold"; 6="Resolved"; 7="Closed"; 8="Canceled"
 */
declare type IncidentStateValue = 1 | 2 | 3 | 6 | 7 | 8;
declare type IncidentStateString = "1" | "2" | "3" | "6" | "7" | "8";
declare type IncidentState = IncidentStateValue | IncidentStateString;

/**
 *
 */
declare type IncidentNotifyValue = 1 | 2 | 3;
declare type IncidentNotifyString = "1" | "2" | "3";
declare type IncidentNotify = IncidentNotifyValue | IncidentNotifyString;

/**
 *
 * @description 1="Success"; 2="Fail"
 */
declare type ChangeReviewStatusValue = 1 | 2;
declare type ChangeReviewStatusString = "1" | "2";
declare type ChangeReviewStatus = ChangeReviewStatusValue | ChangeReviewStatusString;

/**
 *
 * @description 2="High"; 3="Moderate"; 4="Low"
 */
declare type ChangeRiskValue = 2 | 3 | 4;
declare type ChangeRiskString = "2" | "3" | "4";
declare type ChangeRisk = ChangeRiskValue | ChangeRiskString;

/**
 *
 * @description 1="Massive"; 2="Large"; 3="Medium"; 4="Small"; 5="Tiny"
 */
declare type ChangeScopeValue = 1 | 2 | 3 | 4 | 5;
declare type ChangeScopeString = "1" | "2" | "3" | "4" | "5";
declare type ChangeScope = ChangeScopeValue | ChangeScopeString;

/**
 *
 */
declare type ChangeType = "standard" | "normal" | "emergency";

/**
 *
 * @type {("successful" | "successful_issues" | "unsuccessful")}
 * @description "successful"="Successful"; "successful_issues"="Successful with issues"; "unsuccessful"="Unsuccessful"
 */
declare type ChangeCloseCode = "successful" | "successful_issues" | "unsuccessful";

/**
 *
 * @description 1="Open"; 3="Pending Change"; 2="Known Error"; 4="Closed/Resolved"
 */
declare type ProblemStateValue = 1 | 3 | 2 | 4;
declare type ProblemStateString = "1" | "3" | "2" | "4";
declare type ProblemState = ProblemStateValue | ProblemStateString;

/**
 *
 * @type {("starting" | "running" | "complete" | "cancelled" | "unknown")}
 */
declare type GlideProgressWorkerState = "starting" | "running" | "complete" | "cancelled" | "unknown";

/**
 *
 * @type {("success" | "cancelled" | "error")}
 */
declare type GlideProgressWorkerCompletionCode = "success" | "cancelled" | "error";

/**
 *
 * @type {("requested" | "in_process" | "closed_complete" | "closed_incomplete" | "closed_cancelled" | "closed_rejected" | "closed_skipped")}
 * @description "requested"="Pending Approval"; "in_process"="Approved"; "closed_complete"="Closed Complete"; "closed_incomplete"="Closed Incomplete"; "closed_cancelled"="Closed Cancelled"; "closed_rejected"="Closed Rejected"; "closed_skipped"="Closed Skipped"
 */
declare type IRequestState = "requested" | "in_process" | "closed_complete" | "closed_incomplete" | "closed_cancelled" | "closed_rejected" | "closed_skipped";

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

/**
 * GlideElement values from the Service Order table.
 * @interface sm_orderFields
 * @extends {taskFields}
 */
declare interface sm_orderFields extends taskFields {

    /**
     * Asset
     * @type {$$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>}
     * @memberof sm_orderFields
     * @description Refers to alm_asset (Asset)
     */
    asset: $$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>;

    /**
     * Assigned vendor
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof sm_orderFields
     * @description Refers to core_company (Company)
     */
    assigned_vendor: $$rhino.Nilable<core_companyProperty>;

    /**
     * Billable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sm_orderFields
     */
    billable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Caller
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sm_orderFields
     * @description Refers to sys_user (User)
     */
    caller: $$rhino.Nilable<sys_userProperty>;

    /**
     * Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    category: $$rhino.Nilable<$$property.Element>;
    /**
     * Estimated end
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    estimated_end: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Expected end
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    expected_end: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Initiated from
     * @type {$$rhino.Nilable<taskProperty>}
     * @memberof sm_orderFields
     * @description Refers to task (Task)
     */
    initiated_from: $$rhino.Nilable<taskProperty>;
    /**
     * Is catalog
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sm_orderFields
     */
    is_catalog: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Opened for
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sm_orderFields
     * @description Refers to sys_user (User)
     */
    opened_for: $$rhino.Nilable<sys_userProperty>;

    /**
     * Previous agent
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sm_orderFields
     * @description Refers to sys_user (User)
     */
    previous_agent: $$rhino.Nilable<sys_userProperty>;
    /**
     * Qualification group
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof sm_orderFields
     * @description Refers to sys_user_group (Group)
     */
    qualification_group: $$rhino.Nilable<sys_user_groupProperty>;
    /**
     * Requested due by
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    requested_due_by: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Category
     * @type {$$rhino.Nilable<$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sm_orderFields
     * @description Refers to sm_category (Sm Category)
     */
    request_category: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Request type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    request_type: $$rhino.Nilable<$$property.Element>;

    /**
     * Secure notes
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    secure_notes: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Suspended
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sm_orderFields
     */
    sla_suspended: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Suspended for
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    sla_suspended_for: $$rhino.Nilable<$$property.Element>;

    /**
     * Suspended on
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    sla_suspended_on: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Suspended reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    sla_suspended_reason: $$rhino.Nilable<$$property.Element>;

    /**
     * Spam
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sm_orderFields
     */
    spam: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Subcategory
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    subcategory: $$rhino.Nilable<$$property.Element>;

    /**
     * Substate
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sm_orderFields
     */
    substate: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Task created
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sm_orderFields
     */
    task_created: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Template
     * @type {$$rhino.Nilable<cmdb_modelProperty>}
     * @memberof sm_orderFields
     * @description Refers to cmdb_model (Product Model)
     */
    template: $$rhino.Nilable<cmdb_modelProperty>;

    /**
     * Template Workflow Invoked
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sm_orderFields
     */
    template_workflow_invoked: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Vendor reference
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    vendor_reference: $$rhino.Nilable<$$property.Element>;
}

/**
 * GlideElement values from the Incident table.
 * @interface incidentFields
 * @extends {taskFields}
 */
declare interface incidentFields extends taskFields {
    /**
     * Business resolve time
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    business_stc: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Resolve time
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    calendar_stc: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Caller
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof incidentFields
     * @description Refers to sys_user (User)
     */
    caller_id: $$rhino.Nilable<sys_userProperty>;

    /**
     * Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof incidentFields
     */
    category: $$rhino.Nilable<$$property.Element>;

    /**
     * Caused by Change
     * @type {$$rhino.Nilable<change_requestProperty>}
     * @memberof incidentFields
     * @description Refers to change_request (Change Request)
     */
    caused_by: $$rhino.Nilable<change_requestProperty>;

    /**
     * Child Incidents
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    child_incidents: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Close code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof incidentFields
     */
    close_code: $$rhino.Nilable<$$property.Element>;

    /**
     * On hold reason
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    hold_reason: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Incident state
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    incident_state: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Notify
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    notify: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Parent Incident
     * @type {$$rhino.Nilable<incidentProperty>}
     * @memberof incidentFields
     * @description Refers to incident (Incident)
     */
    parent_incident: $$rhino.Nilable<incidentProperty>;

    /**
     * Problem
     * @type {$$rhino.Nilable<$$property.generic.Reference<problemFields, problemGlideRecord>>}
     * @memberof incidentFields
     * @description Refers to problem (Problem)
     */
    problem_id: $$rhino.Nilable<$$property.generic.Reference<problemFields, problemGlideRecord>>;

    /**
     * Last reopened by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof incidentFields
     * @description Refers to sys_user (User)
     */
    reopened_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Last reopened at
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof incidentFields
     */
    reopened_time: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Reopen count
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    reopen_count: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Resolved
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof incidentFields
     */
    resolved_at: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Resolved by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof incidentFields
     * @description Refers to sys_user (User)
     */
    resolved_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Change Request
     * @type {$$rhino.Nilable<change_requestProperty>}
     * @memberof incidentFields
     * @description Refers to change_request (Change Request)
     */
    rfc: $$rhino.Nilable<change_requestProperty>;

    /**
     * Severity
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    severity: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Subcategory
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof incidentFields
     */
    subcategory: $$rhino.Nilable<$$property.Element>;

    /**
     * Is Mission Related
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof incidentFields
     */
    u_is_mission_related: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Network
     * @type {$$rhino.Nilable<$$property.generic.Reference<x_44813_phys_net_networkFields, x_44813_phys_net_networkGlideRecord>>}
     * @memberof incidentFields
     * @description Refers to x_44813_phys_net_network (Physical Network)
     */
    u_network: $$rhino.Nilable<$$property.generic.Reference<x_44813_phys_net_networkFields, x_44813_phys_net_networkGlideRecord>>;

    /**
     * VIP Priority
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof incidentFields
     */
    u_vip_priority: $$rhino.Nilable<$$property.Boolean>;
}
declare type incidentGlideRecord = taskGlideRecord & incidentFields;
declare type incidentElement = $$element.Reference<incidentFields, incidentGlideRecord>;
declare type incidentProperty = $$property.generic.ReferenceProperty<incidentFields, incidentGlideRecord, incidentElement>;

/**
 * GlideElement values from the Change Request table.
 * @interface change_requestFields
 * @extends {taskFields}
 */
declare interface change_requestFields extends taskFields {
    /**
     * Backout plan
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    backout_plan: $$rhino.Nilable<$$property.Element>;

    /**
     * CAB date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     * @description Internal type is "glide_date"
     */
    cab_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * CAB delegate
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof change_requestFields
     * @description Refers to sys_user (User)
     */
    cab_delegate: $$rhino.Nilable<sys_userProperty>;

    /**
     * CAB recommendation
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    cab_recommendation: $$rhino.Nilable<$$property.Element>;

    /**
     * CAB required
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_requestFields
     */
    cab_required: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    category: $$rhino.Nilable<$$property.Element>;

    /**
     * Change plan
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    change_plan: $$rhino.Nilable<$$property.Element>;

    /**
     * CI class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     * @description Internal type is "table_name"
     */
    ci_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Close code
     * @type {$$rhino.Nilable<$$property.generic.Element<IncidentCloseCode>>}
     * @memberof change_requestFields
     */
    close_code: $$rhino.Nilable<$$property.generic.Element<IncidentCloseCode>>;

    /**
     * Conflict last run
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     */
    conflict_last_run: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Conflict status
     * @type {$$rhino.Nilable<$$property.generic.Element<("Not Run" | "Conflict" | "No Conflict")>>}
     * @memberof change_requestFields
     */
    conflict_status: $$rhino.Nilable<$$property.generic.Element<("Not Run" | "Conflict" | "No Conflict")>>;

    /**
     * Planned end date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     */
    end_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Implementation plan
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    implementation_plan: $$rhino.Nilable<$$property.Element>;

    /**
     * Justification
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    justification: $$rhino.Nilable<$$property.Element>;

    /**
     * On hold
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_requestFields
     */
    on_hold: $$rhino.Nilable<$$property.Boolean>;

    /**
     * On hold reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    on_hold_reason: $$rhino.Nilable<$$property.Element>;

    /**
     * On Hold Change Tasks
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof change_requestFields
     * @description Internal type is "glide_list"
     */
    on_hold_task: $$rhino.Nilable<IGlideElement>;

    /**
     * Outside maintenance schedule
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_requestFields
     */
    outside_maintenance_schedule: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Phase
     * @type {$$rhino.Nilable<$$property.generic.Element<("requested" | "plan" | "build" | "accept")>>}
     * @memberof change_requestFields
     */
    phase: $$rhino.Nilable<$$property.generic.Element<("requested" | "plan" | "build" | "accept")>>;

    /**
     * Phase state
     * @type {$$rhino.Nilable<$$property.generic.Element<("open" | "work in progress" | "approved" | "rejected" | "testing" | "implementation" | "on hold" | "complete")>>}
     * @memberof change_requestFields
     */
    phase_state: $$rhino.Nilable<$$property.generic.Element<("open" | "work in progress" | "approved" | "rejected" | "testing" | "implementation" | "on hold" | "complete")>>;

    /**
     * Production system
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_requestFields
     */
    production_system: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Proposed change
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof change_requestFields
     * @description Internal type is "template_value"
     */
    proposed_change: $$rhino.Nilable<IGlideElement>;

    /**
     * Reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    reason: $$rhino.Nilable<$$property.Element>;

    /**
     * Requested by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof change_requestFields
     * @description Refers to sys_user (User)
     */
    requested_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Requested by date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     */
    requested_by_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Review comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    review_comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Review date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     * @description Internal type is "glide_date"
     */
    review_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Review status
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof change_requestFields
     */
    review_status: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Risk
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof change_requestFields
     */
    risk: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Risk and impact analysis
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    risk_impact_analysis: $$rhino.Nilable<$$property.Element>;

    /**
     * Risk value
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof change_requestFields
     */
    risk_value: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Scope
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof change_requestFields
     */
    scope: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Planned start date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     */
    start_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Standard Change Template version
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof change_requestFields
     * @description Refers to std_change_producer_version (Standard Change Template Version)
     */
    std_change_producer_version: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Test plan
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    test_plan: $$rhino.Nilable<$$property.Element>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    type: $$rhino.Nilable<$$property.Element>;
}
declare type change_requestGlideRecord = taskGlideRecord & change_requestFields;
declare type change_requestElement = $$element.Reference<change_requestFields, change_requestGlideRecord>;
declare type change_requestProperty = $$property.generic.ReferenceProperty<change_requestFields, change_requestGlideRecord, change_requestElement>;

/**
 * GlideElement values from the Change Task table.
 * @interface change_taskFields
 * @extends {taskFields}
 */
declare interface change_taskFields extends taskFields {
    /**
     * Change request
     * @type {$$rhino.Nilable<change_requestProperty>}
     * @memberof change_taskFields
     * @description Refers to change_request (Change Request)
     */
    change_request: $$rhino.Nilable<change_requestProperty>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("planning" | "implementation" | "testing" | "review")>>}
     * @memberof change_taskFields
     */
    change_task_type: $$rhino.Nilable<$$property.generic.Element<("planning" | "implementation" | "testing" | "review")>>;

    /**
     * Close code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_taskFields
     */
    close_code: $$rhino.Nilable<$$property.Element>;

    /**
     * Created from
     * @type {$$rhino.Nilable<$$property.generic.Element<("workflow" | "manual")>>}
     * @memberof change_taskFields
     * @description "workflow"=""; "manual"=""
     */
    created_from: $$rhino.Nilable<$$property.generic.Element<("workflow" | "manual")>>;

    /**
     * On hold
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_taskFields
     */
    on_hold: $$rhino.Nilable<$$property.Boolean>;

    /**
     * On hold reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_taskFields
     */
    on_hold_reason: $$rhino.Nilable<$$property.Element>;

    /**
     * Planned end date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_taskFields
     */
    planned_end_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Planned start date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_taskFields
     */
    planned_start_date: $$rhino.Nilable<$$property.GlideObject>;
}
declare type change_taskGlideRecord = taskGlideRecord & change_taskFields;
declare type change_taskElement = $$element.Reference<change_taskFields, change_taskGlideRecord>;
declare type change_taskProperty = $$property.generic.ReferenceProperty<change_taskFields, change_taskGlideRecord, change_taskElement>;

/**
 * GlideElement values from the Problem table.
 * @interface problemFields
 * @extends {taskFields}
 */
declare interface problemFields extends taskFields {
    /**
     * Known error
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof problemFields
     */
    known_error: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Major problem
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof problemFields
     */
    major_problem: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Problem state
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof problemFields
     */
    problem_state: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Related Incidents
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof problemFields
     */
    related_incidents: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Review outcome
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof problemFields
     */
    review_outcome: $$rhino.Nilable<$$property.Element>;

    /**
     * Change request
     * @type {$$rhino.Nilable<change_requestProperty>}
     * @memberof problemFields
     * @description Refers to change_request (Change Request)
     */
    rfc: $$rhino.Nilable<change_requestProperty>;

    /**
     * Workaround
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof problemFields
     * @description Internal type is "journal_input"
     */
    work_around: $$rhino.Nilable<IGlideElement>;
}
declare type problemGlideRecord = taskGlideRecord & problemFields;

/**
 * GlideElement values from the Problem Task table.
 * @interface problem_taskFields
 * @extends {taskFields}
 */
declare interface problem_taskFields extends taskFields {
    /**
     * Problem
     * @type {$$rhino.Nilable<$$property.generic.Reference<problemFields, problemGlideRecord>>}
     * @memberof problem_taskFields
     * @description Refers to problem (Problem)
     */
    problem: $$rhino.Nilable<$$property.generic.Reference<problemFields, problemGlideRecord>>;
}
declare type problem_taskGlideRecord = taskGlideRecord & problem_taskFields;

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


/**
 * GlideElement values from the GlideRecord that contains values from a record in the Progress Worker table.
 * @interface sys_progress_workerFields
 * @extends {IGlideTableProperties}
 */
declare interface sys_progress_workerFields extends IGlideTableProperties {
    /**
     * Error message
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    error_message: $$rhino.Nilable<$$property.Element>;

    /**
     * Message
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    message: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Output summary
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    output_summary: $$rhino.Nilable<$$property.Element>;

    /**
     * Queued Time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_progress_workerFields
     * @description Internal type is "glide_duration"
     */
    queued_time: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Run in background
     * @type {$$rhino.Nilable<$$property.generic.Element<("true" | "false")>>}
     * @memberof sys_progress_workerFields
     */
    run_in_background: $$rhino.Nilable<$$property.generic.Element<("true" | "false")>>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Completion code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    state_code: $$rhino.Nilable<$$property.Element>;

    /**
     * Total Execute Time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_progress_workerFields
     * @description Internal type is "glide_duration"
     */
    total_execute_time: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Total Run Time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_progress_workerFields
     * @description Internal type is "glide_duration"
     */
    total_run_time: $$rhino.Nilable<$$property.GlideObject>;
}
declare type sys_progress_workerGlideRecord = GlideRecord & sys_progress_workerFields;

/**
 * GlideElement values from the Attachment table.
 * @interface sys_attachmentFields
 * @extends {IGlideTableProperties}
 */
declare interface sys_attachmentFields extends IGlideTableProperties {
    /**
     * Average image color
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_attachmentFields
     * @description Internal type is "color"
     */
    average_image_color: $$rhino.Nilable<IGlideElement>;

    /**
     * Chunk size bytes
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     */
    chunk_size_bytes: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Compressed
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_attachmentFields
     */
    compressed: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Content type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_attachmentFields
     */
    content_type: $$rhino.Nilable<$$property.Element>;

    /**
     * Encryption context
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_encryption_contextFields, sys_encryption_contextGlideRecord>>}
     * @memberof sys_attachmentFields
     * @description Refers to sys_encryption_context (Encryption Context)
     */
    encryption_context: $$rhino.Nilable<$$property.generic.Reference<sys_encryption_contextFields, sys_encryption_contextGlideRecord>>;

    /**
     * File name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_attachmentFields
     */
    file_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Image height
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     */
    image_height: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Image width
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     */
    image_width: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Size bytes
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     * @description Internal type is "longint"
     */
    size_bytes: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Size compressed
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     * @description Internal type is "longint"
     */
    size_compressed: $$rhino.Nilable<$$property.Numeric>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.generic.Element<("pending" | "available" | "not_available" | "available_conditionally")>>}
     * @memberof sys_attachmentFields
     */
    state: $$rhino.Nilable<$$property.generic.Element<("pending" | "available" | "not_available" | "available_conditionally")>>;

    /**
     * Table name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_attachmentFields
     */
    table_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Table sys ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_attachmentFields
     * @description Internal type is "char"
     */
    table_sys_id: $$rhino.Nilable<$$property.Element>;
}
declare type sys_attachmentGlideRecord = GlideRecord & sys_attachmentFields;

/**
 * GlideElement values from the GlideRecord that contains values from a record in the System Plugin table.
 * @interface v_pluginFields
 * @extends {IGlideTableProperties}
 */
declare interface v_pluginFields extends IGlideTableProperties {
    /**
     * Status
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    active: $$rhino.Nilable<$$property.Element>;

    /**
     * Available version
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    available_version: $$rhino.Nilable<$$property.Element>;

    /**
     * Definition
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    definition: $$rhino.Nilable<$$property.Element>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Entitled
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    entitled: $$rhino.Nilable<$$property.Element>;

    /**
     * Has demo data
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof v_pluginFields
     */
    has_demo_data: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Help
     * @type {$$rhino.Nilable<$$property.URL>}
     * @memberof v_pluginFields
     */
    help: $$rhino.Nilable<$$property.URL>;

    /**
     * ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    id: $$rhino.Nilable<$$property.Element>;

    /**
     * Licensable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof v_pluginFields
     */
    licensable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Subscription Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    license_category: $$rhino.Nilable<$$property.Element>;

    /**
     * Subscription Model
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    license_model: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    path: $$rhino.Nilable<$$property.Element>;

    /**
     * Provider
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    provider: $$rhino.Nilable<$$property.Element>;

    /**
     * Requires
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof v_pluginFields
     * @description Internal type is "glide_list"
     */
    requires: $$rhino.Nilable<IGlideElement>;

    /**
     * Scope
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    scope: $$rhino.Nilable<$$property.Element>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Supports Rollback
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof v_pluginFields
     */
    supports_rollback: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Trackable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof v_pluginFields
     */
    trackable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    type: $$rhino.Nilable<$$property.Element>;

    /**
     * Version
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    version: $$rhino.Nilable<$$property.Element>;
}
declare type v_pluginGlideRecord = GlideRecord & v_pluginFields;

/**
 * GlideElement values from the Category table.
 * @interface sc_categoryFields
 * @extends {sys_metadataFields}
 */
declare interface sc_categoryFields extends sys_metadataFields {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_categoryFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_categoryFields
     */
    description: $$rhino.Nilable<$$property.TranslatedText>;

    /**
     * Entitlement script
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sc_categoryFields
     */
    entitlement_script: $$rhino.Nilable<$$property.Script>;

    /**
     * Header icon
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_categoryFields
     */
    header_icon: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Homepage image
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_categoryFields
     */
    homepage_image: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Homepage renderer
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_categoryFields
     * @description Refers to sc_homepage_renderer (Homepage Category Renderer)
     */
    homepage_renderer: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Icon
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_categoryFields
     */
    icon: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Image
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_categoryFields
     * @description Internal type is "image"
     */
    image: $$rhino.Nilable<IGlideElement>;

    /**
     * Location
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof sc_categoryFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Hide description (mobile browsing)
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_categoryFields
     */
    mobile_hide_description: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Mobile Picture
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_categoryFields
     */
    mobile_picture: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Mobile Subcategory Render Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("list" | "card")>>}
     * @memberof sc_categoryFields
     * @description "list"=""; "card"=""
     */
    mobile_subcategory_render_type: $$rhino.Nilable<$$property.generic.Element<("list" | "card")>>;

    /**
     * Module link
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_categoryFields
     * @description Refers to sys_app_module (Module)
     */
    module: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Order
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_categoryFields
     */
    order: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Parent
     * @type {$$rhino.Nilable<sc_categoryProperty>}
     * @memberof sc_categoryFields
     * @description Refers to sc_category (Category)
     */
    parent: $$rhino.Nilable<sc_categoryProperty>;

    /**
     * Roles
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_categoryFields
     * @description Internal type is "user_roles"
     */
    roles: $$rhino.Nilable<IGlideElement>;

    /**
     * Catalog
     * @type {$$rhino.Nilable<sc_catalogProperty>}
     * @memberof sc_categoryFields
     * @description Refers to sc_catalog (Catalog)
     */
    sc_catalog: $$rhino.Nilable<sc_catalogProperty>;

    /**
     * Show in CMS
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_categoryFields
     */
    show_in_cms: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Title
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_categoryFields
     */
    title: $$rhino.Nilable<$$property.TranslatedText>;
}
declare type sc_categoryGlideRecord = sys_metadataGlideRecord & sc_categoryFields;
declare type sc_categoryElement = $$element.Reference<sc_categoryFields, sc_categoryGlideRecord>;
declare type sc_categoryProperty = $$property.generic.ReferenceProperty<sc_categoryFields, sc_categoryGlideRecord, sc_categoryElement>;

/**
 * GlideElement values from the Catalog table.
 * @interface sc_catalogFields
 * @extends {sys_metadataFields}
 */
declare interface sc_catalogFields extends sys_metadataFields {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_catalogFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Background Color
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_catalogFields
     * @description Internal type is "color"
     */
    background_color: $$rhino.Nilable<IGlideElement>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_catalogFields
     */
    description: $$rhino.Nilable<$$property.TranslatedText>;

    /**
     * 'Continue Shopping' page
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_catalogFields
     */
    desktop_continue_shopping: $$rhino.Nilable<$$property.Element>;

    /**
     * 'Catalog Home' Page
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_catalogFields
     */
    desktop_home_page: $$rhino.Nilable<$$property.Element>;

    /**
     * Desktop image
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_catalogFields
     */
    desktop_image: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Editors
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_catalogFields
     * @description Internal type is "glide_list"
     */
    editors: $$rhino.Nilable<IGlideElement>;

    /**
     * Enable Wish List
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_catalogFields
     */
    enable_wish_list: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Manager
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sc_catalogFields
     * @description Refers to sys_user (User)
     */
    manager: $$rhino.Nilable<sys_userProperty>;

    /**
     * Title
     * @type {$$rhino.Nilable<$$property.TranslatedField>}
     * @memberof sc_catalogFields
     */
    title: $$rhino.Nilable<$$property.TranslatedField>;
}
declare type sc_catalogGlideRecord = sys_metadataGlideRecord & sc_catalogFields;
declare type sc_catalogElement = $$element.Reference<sc_catalogFields, sc_catalogGlideRecord>;
declare type sc_catalogProperty = $$property.generic.ReferenceProperty<sc_catalogFields, sc_catalogGlideRecord, sc_catalogElement>;

/**
 * GlideElement values from the Catalog Item table.
 * @interface sc_cat_itemFields
 * @extends {sys_metadataFields}
 */
declare interface sc_cat_itemFields extends sys_metadataFields {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Availability
     * @type {$$rhino.Nilable<$$property.generic.Element<("on_both" | "on_desktop" | "on_mobile")>>}
     * @memberof sc_cat_itemFields
     * @description "on_both"=""; "on_desktop"=""; "on_mobile"=""
     */
    availability: $$rhino.Nilable<$$property.generic.Element<("on_both" | "on_desktop" | "on_mobile")>>;

    /**
     * Billable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    billable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Category
     * @type {$$rhino.Nilable<sc_categoryProperty>}
     * @memberof sc_cat_itemFields
     * @description Refers to sc_category (Category)
     */
    category: $$rhino.Nilable<sc_categoryProperty>;

    /**
     * Cost
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "decimal"
     */
    cost: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Cart
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sys_ui_macro (Macro)
     */
    custom_cart: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Execution Plan
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sc_cat_item_delivery_plan (Execution Plan)
     */
    delivery_plan: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Delivery plan script
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sc_cat_itemFields
     */
    delivery_plan_script: $$rhino.Nilable<$$property.Script>;

    /**
     * Delivery time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "glide_duration"
     */
    delivery_time: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.TranslatedHTML>}
     * @memberof sc_cat_itemFields
     */
    description: $$rhino.Nilable<$$property.TranslatedHTML>;

    /**
     * Entitlement script
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sc_cat_itemFields
     */
    entitlement_script: $$rhino.Nilable<$$property.Script>;

    /**
     * Fulfillment group
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof sc_cat_itemFields
     * @description Refers to sys_user_group (Group)
     */
    group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Hide on Service Portal
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    hide_sp: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Icon
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_cat_itemFields
     */
    icon: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Ignore price
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    ignore_price: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Image
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "image"
     */
    image: $$rhino.Nilable<IGlideElement>;

    /**
     * List Price
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof sc_cat_itemFields
     */
    list_price: $$rhino.Nilable<$$property.Currency>;

    /**
     * Location
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof sc_cat_itemFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Meta
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_cat_itemFields
     */
    meta: $$rhino.Nilable<$$property.Element>;

    /**
     * Hide price (mobile listings)
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    mobile_hide_price: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Mobile Picture
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_cat_itemFields
     */
    mobile_picture: $$rhino.Nilable<$$property.UserImage>;

    /**
     *  Mobile Picture Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("use_desktop_picture" | "use_mobile_picture" | "use_no_picture")>>}
     * @memberof sc_cat_itemFields
     * @description "use_desktop_picture"=""; "use_mobile_picture"=""; "use_no_picture"=""
     */
    mobile_picture_type: $$rhino.Nilable<$$property.generic.Element<("use_desktop_picture" | "use_mobile_picture" | "use_no_picture")>>;

    /**
     * Model
     * @type {$$rhino.Nilable<cmdb_modelProperty>}
     * @memberof sc_cat_itemFields
     * @description Refers to cmdb_model (Product Model)
     */
    model: $$rhino.Nilable<cmdb_modelProperty>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_cat_itemFields
     */
    name: $$rhino.Nilable<$$property.TranslatedText>;

    /**
     * No cart
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_cart: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No order
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_order: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No order now
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_order_now: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No proceed checkout
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_proceed_checkout: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No quantity
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_quantity: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No search
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_search: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Omit price in cart
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    omit_price: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Order
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_cat_itemFields
     */
    order: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Ordered item link
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sc_ordered_item_link (Ordered Item Link)
     */
    ordered_item_link: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Picture
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_cat_itemFields
     */
    picture: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Preview link
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "catalog_preview"
     */
    preview: $$rhino.Nilable<IGlideElement>;

    /**
     * Price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof sc_cat_itemFields
     */
    price: $$rhino.Nilable<$$property.Price>;

    /**
     * Recurring Price Frequency
     * @type {$$rhino.Nilable<$$property.generic.Element<("daily" | "weekly" | "weekly2" | "monthly" | "monthly2" | "quarterly" | "semiannual" | "yearly")>>}
     * @memberof sc_cat_itemFields
     * @description "daily"=""; "weekly"=""; "weekly2"=""; "monthly"=""; "monthly2"=""; "quarterly"=""; "semiannual"=""; "yearly"=""
     */
    recurring_frequency: $$rhino.Nilable<$$property.generic.Element<("daily" | "weekly" | "weekly2" | "monthly" | "monthly2" | "quarterly" | "semiannual" | "yearly")>>;

    /**
     * Recurring price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof sc_cat_itemFields
     */
    recurring_price: $$rhino.Nilable<$$property.Price>;

    /**
     * Roles
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "user_roles"
     */
    roles: $$rhino.Nilable<IGlideElement>;

    /**
     * Catalogs
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "glide_list"
     */
    sc_catalogs: $$rhino.Nilable<IGlideElement>;

    /**
     * Created from item design
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sc_ic_item_staging (Item)
     */
    sc_ic_item_staging: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Published version
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_cat_itemFields
     */
    sc_ic_version: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Short description
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_cat_itemFields
     */
    short_description: $$rhino.Nilable<$$property.TranslatedText>;

    /**
     * Expand help for all questions
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    show_variable_help_on_load: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Start closed
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    start_closed: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Template
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sys_template (Template)
     */
    template: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("item" | "task" | "bundle" | "template" | "package")>>}
     * @memberof sc_cat_itemFields
     * @description "item"=""; "task"=""; "bundle"=""; "template"=""; "package"=""
     */
    type: $$rhino.Nilable<$$property.generic.Element<("item" | "task" | "bundle" | "template" | "package")>>;

    /**
     * Use cart layout
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    use_sc_layout: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Vendor
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof sc_cat_itemFields
     * @description Refers to core_company (Company)
     */
    vendor: $$rhino.Nilable<core_companyProperty>;

    /**
     * Visible on Bundles
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    visible_bundle: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Visible on Guides
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    visible_guide: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Visible elsewhere
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    visible_standalone: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Workflow
     * @type {$$rhino.Nilable<$$property.generic.Reference<wf_workflowFields, wf_workflowGlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to wf_workflow (Workflow)
     */
    workflow: $$rhino.Nilable<$$property.generic.Reference<wf_workflowFields, wf_workflowGlideRecord>>;
}
declare type sc_cat_itemGlideRecord = sys_metadataGlideRecord & sc_cat_itemFields;
declare type sc_cat_itemElement = $$element.Reference<sc_cat_itemFields, sc_cat_itemGlideRecord>;
declare type sc_cat_itemProperty = $$property.generic.ReferenceProperty<sc_cat_itemFields, sc_cat_itemGlideRecord, sc_cat_itemElement>;

/**
 * GlideElement values from the Request table.
 * @interface sc_requestFields
 * @extends {taskFields}
 */
declare interface sc_requestFields extends taskFields {
    /**
     * Resolve Time
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_requestFields
     */
    calendar_stc: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Delivery address
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_requestFields
     */
    delivery_address: $$rhino.Nilable<$$property.Element>;

    /**
     * Price
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof sc_requestFields
     */
    price: $$rhino.Nilable<$$property.Currency>;

    /**
     * Requested for date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sc_requestFields
     * @description Internal type is "glide_date"
     */
    requested_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Requested for
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sc_requestFields
     * @description Refers to sys_user (User)
     */
    requested_for: $$rhino.Nilable<sys_userProperty>;

    /**
     * Request state
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_requestFields
     */
    request_state: $$rhino.Nilable<$$property.Element>;

    /**
     * Sourceable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_requestFields
     */
    sourceable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Sourced
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_requestFields
     */
    sourced: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Special instructions
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_requestFields
     */
    special_instructions: $$rhino.Nilable<$$property.Element>;

    /**
     * Stage
     * @type {$$rhino.Nilable<GlideElementWorkflow>}
     * @memberof sc_requestFields
     */
    stage: $$rhino.Nilable<GlideElementWorkflow>;
}
declare type sc_requestGlideRecord = taskGlideRecord & sc_requestFields;
declare type sc_requestElement = $$element.Reference<sc_requestFields, sc_requestGlideRecord>;
declare type sc_requestProperty = $$property.generic.ReferenceProperty<sc_requestFields, sc_requestGlideRecord, sc_requestElement>;

/**
 * GlideElement values from the Requested Item table.
 * @interface sc_req_itemFields
 * @extends {taskFields}
 */
declare interface sc_req_itemFields extends taskFields {
    /**
     * Backordered
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_req_itemFields
     */
    backordered: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Billable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_req_itemFields
     */
    billable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Item
     * @type {$$rhino.Nilable<sc_cat_itemProperty>}
     * @memberof sc_req_itemFields
     * @description Refers to sc_cat_item (Catalog Item)
     */
    cat_item: $$rhino.Nilable<sc_cat_itemProperty>;

    /**
     * Configuration item
     * @type {$$rhino.Nilable<cmdb_ciProperty>}
     * @memberof sc_req_itemFields
     * @description Refers to cmdb_ci (Configuration Item)
     */
    configuration_item: $$rhino.Nilable<cmdb_ciProperty>;

    /**
     * Context
     * @type {$$rhino.Nilable<wf_contextProperty}
     * @memberof sc_req_itemFields
     * @description Refers to wf_context (Workflow context)
     */
    context: $$rhino.Nilable<wf_contextProperty>;

    /**
     * Estimated delivery
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sc_req_itemFields
     */
    estimated_delivery: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Order Guide
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_req_itemFields
     * @description Refers to sc_cat_item_guide (Order guide)
     */
    order_guide: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Price
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof sc_req_itemFields
     */
    price: $$rhino.Nilable<$$property.Currency>;

    /**
     * Quantity
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_req_itemFields
     */
    quantity: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Quantity Sourced
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_req_itemFields
     */
    quantity_sourced: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Received
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_req_itemFields
     */
    received: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Recurring Price Frequency
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_req_itemFields
     * @description Internal type is "choice"
     */
    recurring_frequency: $$rhino.Nilable<IGlideElement>;

    /**
     * Recurring Price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof sc_req_itemFields
     */
    recurring_price: $$rhino.Nilable<$$property.Price>;

    /**
     * Request
     * @type {$$rhino.Nilable<sc_requestProperty>}
     * @memberof sc_req_itemFields
     * @description Refers to sc_request (Request)
     */
    request: $$rhino.Nilable<sc_requestProperty>;

    /**
     * Catalog
     * @type {$$rhino.Nilable<sc_catalogProperty>}
     * @memberof sc_req_itemFields
     * @description Refers to sc_catalog (Catalog)
     */
    sc_catalog: $$rhino.Nilable<sc_catalogProperty>;

    /**
     * Sourced
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_req_itemFields
     */
    sourced: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Stage
     * @type {$$rhino.Nilable<GlideElementWorkflow>}
     * @memberof sc_req_itemFields
     */
    stage: $$rhino.Nilable<$$property.Workflow>;
}
declare type sc_req_itemGlideRecord = taskGlideRecord & sc_req_itemFields;
declare type sc_req_itemElement = $$element.Reference<sc_req_itemFields, sc_req_itemGlideRecord>;
declare type sc_req_itemProperty = $$property.generic.ReferenceProperty<sc_req_itemFields, sc_req_itemGlideRecord, sc_req_itemElement>;

/**
 * GlideElement values from the Catalog Task table.
 * @interface sc_taskFields
 * @extends {taskFields}
 */
declare interface sc_taskFields extends taskFields {
    /**
     * Resolve Time
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_taskFields
     */
    calendar_stc: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Request
     * @type {$$rhino.Nilable<sc_requestProperty>}
     * @memberof sc_taskFields
     * @description Refers to sc_request (Request)
     */
    request: $$rhino.Nilable<sc_requestProperty>;

    /**
     * Request item
     * @type {$$rhino.Nilable<sc_req_itemProperty>}
     * @memberof sc_taskFields
     * @description Refers to sc_req_item (Requested Item)
     */
    request_item: $$rhino.Nilable<sc_req_itemProperty>;

    /**
     * Catalog
     * @type {$$rhino.Nilable<sc_catalogProperty>}
     * @memberof sc_taskFields
     * @description Refers to sc_catalog (Catalog)
     */
    sc_catalog: $$rhino.Nilable<sc_catalogProperty>;
}
declare type sc_taskGlideRecord = taskGlideRecord & sc_taskFields;
declare type sc_taskElement = $$element.Reference<sc_taskFields, sc_taskGlideRecord>;
declare type sc_taskProperty = $$property.generic.ReferenceProperty<sc_taskFields, sc_taskGlideRecord, sc_taskElement>;

/**
 * GlideElement values from the Service Offering table.
 * @interface service_offeringFields
 * @extends {cmdb_ci_serviceFields}
 */
declare interface service_offeringFields extends cmdb_ci_serviceFields {
    /**
     * Billing
     * @type {$$rhino.Nilable<$$property.generic.Element<("monthly" | "weekly" | "yearly")>>}
     * @memberof service_offeringFields
     * @description "monthly"=""; "weekly"=""; "yearly"=""
     */
    billing: $$rhino.Nilable<$$property.generic.Element<("monthly" | "weekly" | "yearly")>>;

    /**
     * Contract
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof service_offeringFields
     * @description Refers to ast_contract (Contract)
     */
    contract: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof service_offeringFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof service_offeringFields
     */
    price: $$rhino.Nilable<$$property.Price>;

    /**
     * Technical contact
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof service_offeringFields
     * @description Refers to sys_user (User)
     */
    technical_contact: $$rhino.Nilable<sys_userProperty>;
}
declare type service_offeringGlideRecord = cmdb_ci_serviceGlideRecord & service_offeringFields;

/**
 * GlideElement values from the Model Category table.
 * @interface cmdb_model_categoryFields
 * @extends {IGlideTableProperties}
 */
declare interface cmdb_model_categoryFields extends IGlideTableProperties {
    /**
     * Allow as master
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    allow_as_master: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Allow in bundle
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    allow_in_bundle: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Allow pre-allocation
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    allow_pre_allocation: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Asset class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_model_categoryFields
     * @description Internal type is "table_name"
     */
    asset_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Bundle
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    bundle: $$rhino.Nilable<$$property.Boolean>;

    /**
     * CI class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_model_categoryFields
     * @description Internal type is "table_name"
     */
    cmdb_ci_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Enforce CI verification
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    enforce_verification: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_model_categoryFields
     */
    name: $$rhino.Nilable<$$property.Element>;
}
declare type cmdb_model_categoryGlideRecord = GlideRecord & cmdb_model_categoryFields;

/**
 * GlideElement values from the Model Component table.
 * @interface cmdb_m2m_model_componentFields
 * @extends {IGlideTableProperties}
 */
declare interface cmdb_m2m_model_componentFields extends IGlideTableProperties {
    /**
     * Component
     * @type {$$rhino.Nilable<cmdb_modelProperty>}
     * @memberof cmdb_m2m_model_componentFields
     * @description Refers to cmdb_model (Product Model)
     */
    child: $$rhino.Nilable<cmdb_modelProperty>;

    /**
     * Is main component
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_m2m_model_componentFields
     */
    master: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Model category of component
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_model_categoryFields, cmdb_model_categoryGlideRecord>>}
     * @memberof cmdb_m2m_model_componentFields
     * @description Refers to cmdb_model_category (Model Category)
     */
    model_category: $$rhino.Nilable<$$property.generic.Reference<cmdb_model_categoryFields, cmdb_model_categoryGlideRecord>>;

    /**
     * Bundle
     * @type {$$rhino.Nilable<cmdb_modelProperty>}
     * @memberof cmdb_m2m_model_componentFields
     * @description Refers to cmdb_model (Product Model)
     */
    parent: $$rhino.Nilable<cmdb_modelProperty>;
}
declare type cmdb_m2m_model_componentGlideRecord = GlideRecord & cmdb_m2m_model_componentFields;

/**
 * GlideElement values from the Product Model table.
 * @interface cmdb_modelFields
 * @extends {IGlideTableProperties}
 */
declare interface cmdb_modelFields extends IGlideTableProperties {
    /**
     * Acquisition method
     * @type {$$rhino.Nilable<$$property.generic.Element<("Both" | "Buy" | "Lease")>>}
     * @memberof cmdb_modelFields
     */
    acquisition_method: $$rhino.Nilable<$$property.generic.Element<("Both" | "Buy" | "Lease")>>;

    /**
     * Asset tracking strategy
     * @type {$$rhino.Nilable<$$property.generic.Element<("leave_to_category" | "track_as_consumable" | "do_not_track")>>}
     * @memberof cmdb_modelFields
     * @description "leave_to_category"=""; "track_as_consumable"=""; "do_not_track"=""
     */
    asset_tracking_strategy: $$rhino.Nilable<$$property.generic.Element<("leave_to_category" | "track_as_consumable" | "do_not_track")>>;

    /**
     * Barcode
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    barcode: $$rhino.Nilable<$$property.Element>;

    /**
     * Bundle
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_modelFields
     */
    bundle: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Certified
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_modelFields
     */
    certified: $$rhino.Nilable<$$property.Boolean>;

    /**
     * CMDB CI class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    cmdb_ci_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Model categories
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof cmdb_modelFields
     * @description Internal type is "glide_list"
     */
    cmdb_model_category: $$rhino.Nilable<IGlideElement>;

    /**
     * Comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Cost
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof cmdb_modelFields
     */
    cost: $$rhino.Nilable<$$property.Price>;

    /**
     * Depreciation
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof cmdb_modelFields
     * @description Refers to cmdb_depreciation (Depreciation)
     */
    depreciation: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.TranslatedHTML>}
     * @memberof cmdb_modelFields
     */
    description: $$rhino.Nilable<$$property.TranslatedHTML>;

    /**
     * Display name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    display_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Expenditure type
     * @type {$$rhino.Nilable<$$property.generic.Element<("capex" | "opex")>>}
     * @memberof cmdb_modelFields
     * @description "capex"=""; "opex"=""
     */
    expenditure_type: $$rhino.Nilable<$$property.generic.Element<("capex" | "opex")>>;

    /**
     * Flow Rate (cfm)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    flow_rate: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Full name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    full_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Main component
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_m2m_model_componentFields, cmdb_m2m_model_componentGlideRecord>>}
     * @memberof cmdb_modelFields
     * @description Refers to cmdb_m2m_model_component (Model Component)
     */
    main_component: $$rhino.Nilable<$$property.generic.Reference<cmdb_m2m_model_componentFields, cmdb_m2m_model_componentGlideRecord>>;

    /**
     * Manufacturer
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof cmdb_modelFields
     * @description Refers to core_company (Company)
     */
    manufacturer: $$rhino.Nilable<core_companyProperty>;

    /**
     * Model number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    model_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Owner
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmdb_modelFields
     * @description Refers to sys_user (User)
     */
    owner: $$rhino.Nilable<sys_userProperty>;

    /**
     * Picture
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof cmdb_modelFields
     */
    picture: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Power (watts)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    power_consumption: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Product Catalog Item
     * @type {$$rhino.Nilable<sc_cat_itemProperty>}
     * @memberof cmdb_modelFields
     * @description Refers to sc_cat_item (Catalog Item)
     */
    product_catalog_item: $$rhino.Nilable<sc_cat_itemProperty>;

    /**
     * Height (U)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    rack_units: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Salvage value
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof cmdb_modelFields
     */
    salvage_value: $$rhino.Nilable<$$property.Currency>;

    /**
     * Short description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    short_description: $$rhino.Nilable<$$property.Element>;

    /**
     * SLA
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    sla: $$rhino.Nilable<$$property.Element>;

    /**
     * Sound Power (bels)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    sound_power: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Status
     * @type {$$rhino.Nilable<$$property.generic.Element<("In Production" | "Retired" | "Sold")>>}
     * @memberof cmdb_modelFields
     */
    status: $$rhino.Nilable<$$property.generic.Element<("In Production" | "Retired" | "Sold")>>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("Generic" | "Product" | "Scrum product")>>}
     * @memberof cmdb_modelFields
     */
    type: $$rhino.Nilable<$$property.generic.Element<("Generic" | "Product" | "Scrum product")>>;

    /**
     * Weight (lbs)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    weight: $$rhino.Nilable<$$property.Numeric>;
}
declare type cmdb_modelGlideRecord = GlideRecord & cmdb_modelFields;
declare type cmdb_modelElement = $$element.Reference<cmdb_modelFields, cmdb_modelGlideRecord>;
declare type cmdb_modelProperty = $$property.generic.ReferenceProperty<cmdb_modelFields, cmdb_modelGlideRecord, cmdb_modelElement>;

/**
 * GlideElement values from the Asset table.
 * @interface alm_assetFields
 * @extends {IGlideTableProperties}
 */
declare interface alm_assetFields extends IGlideTableProperties {
    /**
     * Acquisition method
     * @type {$$rhino.Nilable<$$property.generic.Element<("purchase" | "lease" | "rental" | "loan")>>}
     * @memberof alm_assetFields
     * @description "purchase"=""; "lease"=""; "rental"=""; "loan"=""
     */
    acquisition_method: $$rhino.Nilable<$$property.generic.Element<("purchase" | "lease" | "rental" | "loan")>>;

    /**
     * Active transfer order
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof alm_assetFields
     */
    active_to: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Asset tag
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    asset_tag: $$rhino.Nilable<$$property.Element>;

    /**
     * Assigned
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    assigned: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Assigned to
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    assigned_to: $$rhino.Nilable<sys_userProperty>;

    /**
     * Beneficiary
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof alm_assetFields
     * @description Refers to core_company (Company)
     */
    beneficiary: $$rhino.Nilable<core_companyProperty>;

    /**
     * Checked in
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    checked_in: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Checked out
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    checked_out: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Configuration Item
     * @type {$$rhino.Nilable<cmdb_ciProperty>}
     * @memberof alm_assetFields
     * @description Refers to cmdb_ci (Configuration Item)
     */
    ci: $$rhino.Nilable<cmdb_ciProperty>;

    /**
     * Comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Company
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof alm_assetFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<core_companyProperty>;

    /**
     * Cost
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof alm_assetFields
     */
    cost: $$rhino.Nilable<$$property.Currency>;

    /**
     * Cost center
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to cmn_cost_center (Cost Center)
     */
    cost_center: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Order received
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    delivery_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Department
     * @type {$$rhino.Nilable<cmn_departmentProperty>}
     * @memberof alm_assetFields
     * @description Refers to cmn_department (Department)
     */
    department: $$rhino.Nilable<cmn_departmentProperty>;

    /**
     * Depreciated amount
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof alm_assetFields
     */
    depreciated_amount: $$rhino.Nilable<$$property.Currency>;

    /**
     * Depreciation
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to cmdb_depreciation (Depreciation)
     */
    depreciation: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Depreciation effective date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    depreciation_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Display name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    display_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Disposal reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    disposal_reason: $$rhino.Nilable<$$property.Element>;

    /**
     * Due
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    due: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Due in
     * @type {$$rhino.Nilable<$$property.generic.Element<("1 Day" | "1 Hour" | "1 Week")>>}
     * @memberof alm_assetFields
     */
    due_in: $$rhino.Nilable<$$property.generic.Element<("1 Day" | "1 Hour" | "1 Week")>>;

    /**
     * Expenditure type
     * @type {$$rhino.Nilable<$$property.generic.Element<("capex" | "opex")>>}
     * @memberof alm_assetFields
     * @description "capex"=""; "opex"=""
     */
    expenditure_type: $$rhino.Nilable<$$property.generic.Element<("capex" | "opex")>>;

    /**
     * GL account
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    gl_account: $$rhino.Nilable<$$property.Element>;

    /**
     * Installed
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    install_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.generic.Element<("2" | "6" | "9" | "1" | "10" | "3" | "7" | "8")>>}
     * @memberof alm_assetFields
     * @description "2"=""; "6"=""; "9"=""; "1"=""; "10"=""; "3"=""; "7"=""; "8"=""
     */
    install_status: $$rhino.Nilable<$$property.generic.Element<("2" | "6" | "9" | "1" | "10" | "3" | "7" | "8")>>;

    /**
     * Invoice number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    invoice_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Justification
     * @type {$$rhino.Nilable<$$property.generic.Element<("New employee hire" | "Replace in repair" | "Replace stolen" | "Replacement" | "Stock replenishment" | "Swap" | "Testing" | "Upgrade")>>}
     * @memberof alm_assetFields
     */
    justification: $$rhino.Nilable<$$property.generic.Element<("New employee hire" | "Replace in repair" | "Replace stolen" | "Replacement" | "Stock replenishment" | "Swap" | "Testing" | "Upgrade")>>;

    /**
     * Lease contract
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    lease_id: $$rhino.Nilable<$$property.Element>;

    /**
     * Location
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof alm_assetFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Managed by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    managed_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Model
     * @type {$$rhino.Nilable<cmdb_modelProperty>}
     * @memberof alm_assetFields
     * @description Refers to cmdb_model (Product Model)
     */
    model: $$rhino.Nilable<cmdb_modelProperty>;

    /**
     * Model category
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_model_categoryFields, cmdb_model_categoryGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to cmdb_model_category (Model Category)
     */
    model_category: $$rhino.Nilable<$$property.generic.Reference<cmdb_model_categoryFields, cmdb_model_categoryGlideRecord>>;

    /**
     * Old status
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    old_status: $$rhino.Nilable<$$property.Element>;

    /**
     * Old substatus
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    old_substatus: $$rhino.Nilable<$$property.Element>;

    /**
     * Ordered
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    order_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Owned by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    owned_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Parent
     * @type {$$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to alm_asset (Asset)
     */
    parent: $$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>;

    /**
     * PO number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    po_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Pre-allocated
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof alm_assetFields
     */
    pre_allocated: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Purchased
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    purchase_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Purchase order line
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to proc_po_item (Purchase order line items)
     */
    purchase_line: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Quantity
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof alm_assetFields
     */
    quantity: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Receiving line
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to proc_rec_slip_item (Receiving Slip Line)
     */
    receiving_line: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Request line
     * @type {$$rhino.Nilable<sc_req_itemProperty>}
     * @memberof alm_assetFields
     * @description Refers to sc_req_item (Requested Item)
     */
    request_line: $$rhino.Nilable<sc_req_itemProperty>;

    /**
     * Resale price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof alm_assetFields
     */
    resale_price: $$rhino.Nilable<$$property.Price>;

    /**
     * Reserved for
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    reserved_for: $$rhino.Nilable<sys_userProperty>;

    /**
     * Residual value
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof alm_assetFields
     */
    residual: $$rhino.Nilable<$$property.Currency>;

    /**
     * Residual date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    residual_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Retired date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    retired: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Scheduled retirement
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    retirement_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Salvage value
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof alm_assetFields
     */
    salvage_value: $$rhino.Nilable<$$property.Currency>;

    /**
     * Serial number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    serial_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Skip sync
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof alm_assetFields
     */
    skip_sync: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Stockroom
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to alm_stockroom (Stockroom)
     */
    stockroom: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Substate
     * @type {$$rhino.Nilable<$$property.generic.Element<("available" | "disposed" | "lost" | "reserved" | "sold" | "stolen" | "defective" | "donated" | "pending_repair" | "vendor_credit" | "pending_install" | "pending_disposal" | "pending_transfer" | "pre_allocated")>>}
     * @memberof alm_assetFields
     * @description "available"=""; "disposed"=""; "lost"=""; "reserved"=""; "sold"=""; "stolen"=""; "defective"=""; "donated"=""; "pending_repair"=""; "vendor_credit"=""; "pending_install"=""; "pending_disposal"=""; "pending_transfer"=""; "pre_allocated"=""
     */
    substatus: $$rhino.Nilable<$$property.generic.Element<("available" | "disposed" | "lost" | "reserved" | "sold" | "stolen" | "defective" | "donated" | "pending_repair" | "vendor_credit" | "pending_install" | "pending_disposal" | "pending_transfer" | "pre_allocated")>>;

    /**
     * Supported by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    supported_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Support group
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof alm_assetFields
     * @description Refers to sys_user_group (Group)
     */
    support_group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Class
     * @type {$$rhino.Nilable<$$property.SysClassName>}
     * @memberof alm_assetFields
     */
    sys_class_name: $$rhino.Nilable<$$property.SysClassName>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof alm_assetFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     * @description Internal type is "domain_path"
     */
    sys_domain_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Vendor
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof alm_assetFields
     * @description Refers to core_company (Company)
     */
    vendor: $$rhino.Nilable<core_companyProperty>;

    /**
     * Warranty expiration
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    warranty_expiration: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Work notes
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof alm_assetFields
     * @description Internal type is "journal_input"
     */
    work_notes: $$rhino.Nilable<IGlideElement>;
}
declare type alm_assetGlideRecord = GlideRecord & alm_assetFields;

/**
 * GlideElement values from the Base Configuration Item table.
 * @interface cmdbFields
 * @extends {IExtendedGlideTableProperties}
 */
declare interface cmdbFields extends IExtendedGlideTableProperties {
    /**
     * Asset
     * @type {$$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to alm_asset (Asset)
     */
    asset: $$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>;

    /**
     * Asset tag
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    asset_tag: $$rhino.Nilable<$$property.Element>;

    /**
     * Assigned
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    assigned: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Assigned to
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmdbFields
     * @description Refers to sys_user (User)
     */
    assigned_to: $$rhino.Nilable<sys_userProperty>;

    /**
     * Assignment group
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof cmdbFields
     * @description Refers to sys_user_group (Group)
     */
    assignment_group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Checked in
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    checked_in: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Checked out
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    checked_out: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Company
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof cmdbFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<core_companyProperty>;

    /**
     * Cost
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdbFields
     * @description Internal type is "float"
     */
    cost: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Cost currency
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    cost_cc: $$rhino.Nilable<$$property.Element>;

    /**
     * Cost center
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to cmn_cost_center (Cost Center)
     */
    cost_center: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Order received
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    delivery_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Department
     * @type {$$rhino.Nilable<cmn_departmentProperty>}
     * @memberof cmdbFields
     * @description Refers to cmn_department (Department)
     */
    department: $$rhino.Nilable<cmn_departmentProperty>;

    /**
     * Due
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    due: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Due in
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    due_in: $$rhino.Nilable<$$property.Element>;

    /**
     * GL account
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    gl_account: $$rhino.Nilable<$$property.Element>;

    /**
     * Installed
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    install_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Status
     * @type {$$rhino.Nilable<$$property.generic.Element<("100" | "3" | "6" | "1" | "2" | "4" | "5" | "7" | "8")>>}
     * @memberof cmdbFields
     * @description "100"=""; "3"=""; "6"=""; "1"=""; "2"=""; "4"=""; "5"=""; "7"=""; "8"=""
     */
    install_status: $$rhino.Nilable<$$property.generic.Element<("100" | "3" | "6" | "1" | "2" | "4" | "5" | "7" | "8")>>;

    /**
     * Invoice number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    invoice_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Justification
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    justification: $$rhino.Nilable<$$property.Element>;

    /**
     * Lease contract
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    lease_id: $$rhino.Nilable<$$property.Element>;

    /**
     * Location
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof cmdbFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Managed by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmdbFields
     * @description Refers to sys_user (User)
     */
    managed_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Manufacturer
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof cmdbFields
     * @description Refers to core_company (Company)
     */
    manufacturer: $$rhino.Nilable<core_companyProperty>;

    /**
     * Model ID
     * @type {$$rhino.Nilable<cmdb_modelProperty>}
     * @memberof cmdbFields
     * @description Refers to cmdb_model (Product Model)
     */
    model_id: $$rhino.Nilable<cmdb_modelProperty>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Ordered
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    order_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Owned by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmdbFields
     * @description Refers to sys_user (User)
     */
    owned_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * PO number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    po_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Purchased
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     * @description Internal type is "glide_date"
     */
    purchase_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Serial number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    serial_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Skip sync
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdbFields
     */
    skip_sync: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Supported by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmdbFields
     * @description Refers to sys_user (User)
     */
    supported_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Support group
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof cmdbFields
     * @description Refers to sys_user_group (Group)
     */
    support_group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Class
     * @type {$$rhino.Nilable<$$property.SysClassName>}
     * @memberof cmdbFields
     */
    sys_class_name: $$rhino.Nilable<$$property.SysClassName>;

    /**
     * Sys class path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     * @description Internal type is "sys_class_path"
     */
    sys_class_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof cmdbFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     * @description Internal type is "domain_path"
     */
    sys_domain_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Requires verification
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdbFields
     */
    unverified: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Vendor
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof cmdbFields
     * @description Refers to core_company (Company)
     */
    vendor: $$rhino.Nilable<core_companyProperty>;

    /**
     * Warranty expiration
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     * @description Internal type is "glide_date"
     */
    warranty_expiration: $$rhino.Nilable<$$property.GlideObject>;
}
declare type cmdbGlideRecord = GlideRecord & cmdbFields;

/**
 * GlideElement values from the Configuration Item table.
 * @interface cmdb_ciFields
 * @extends {cmdbFields}
 */
declare interface cmdb_ciFields extends cmdbFields {
    /**
     * Attributes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    attributes: $$rhino.Nilable<$$property.Element>;

    /**
     * Can Print
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_ciFields
     */
    can_print: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    category: $$rhino.Nilable<$$property.Element>;

    /**
     * Approval group
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof cmdb_ciFields
     * @description Refers to sys_user_group (Group)
     */
    change_control: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Correlation ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    correlation_id: $$rhino.Nilable<$$property.Element>;

    /**
     * Discovery source
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    discovery_source: $$rhino.Nilable<$$property.Element>;

    /**
     * DNS Domain
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    dns_domain: $$rhino.Nilable<$$property.Element>;

    /**
     * Fault count
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_ciFields
     */
    fault_count: $$rhino.Nilable<$$property.Numeric>;

    /**
     * First discovered
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdb_ciFields
     */
    first_discovered: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Fully qualified domain name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    fqdn: $$rhino.Nilable<$$property.Element>;

    /**
     * IP Address
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    ip_address: $$rhino.Nilable<$$property.Element>;

    /**
     * Most recent discovery
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdb_ciFields
     */
    last_discovered: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * MAC Address
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    mac_address: $$rhino.Nilable<$$property.Element>;

    /**
     * Maintenance schedule
     * @type {$$rhino.Nilable<cmn_scheduleProperty>}
     * @memberof cmdb_ciFields
     * @description Refers to cmn_schedule (Schedule)
     */
    maintenance_schedule: $$rhino.Nilable<cmn_scheduleProperty>;

    /**
     * Model number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    model_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Monitor
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_ciFields
     */
    monitor: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Operational status
     * @type {$$rhino.Nilable<$$property.generic.Element<("1" | "2" | "3" | "4" | "5" | "6")>>}
     * @memberof cmdb_ciFields
     * @description "1"=""; "2"=""; "3"=""; "4"=""; "5"=""; "6"=""
     */
    operational_status: $$rhino.Nilable<$$property.generic.Element<("1" | "2" | "3" | "4" | "5" | "6")>>;

    /**
     * Schedule
     * @type {$$rhino.Nilable<cmn_scheduleProperty>}
     * @memberof cmdb_ciFields
     * @description Refers to cmn_schedule (Schedule)
     */
    schedule: $$rhino.Nilable<cmn_scheduleProperty>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    short_description: $$rhino.Nilable<$$property.Element>;

    /**
     * Start date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdb_ciFields
     */
    start_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Subcategory
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    subcategory: $$rhino.Nilable<$$property.Element>;
}
declare type cmdb_ciGlideRecord = cmdbGlideRecord & cmdb_ciFields;
declare type cmdb_ciElement = $$element.Reference<cmdb_ciFields, cmdb_ciGlideRecord>;
declare type cmdb_ciProperty = $$property.generic.ReferenceProperty<cmdb_ciFields, cmdb_ciGlideRecord, cmdb_ciElement>;

/**
 * GlideElement values from the Business Service table.
 * @interface cmdb_ci_serviceFields
 * @extends {cmdb_ciFields}
 */
declare interface cmdb_ci_serviceFields extends cmdb_ciFields {
    /**
     * Business Criticality
     * @type {$$rhino.Nilable<$$property.generic.Element<("1 - most critical" | "2 - somewhat critical" | "3 - less critical" | "4 - not critical")>>}
     * @memberof cmdb_ci_serviceFields
     */
    busines_criticality: $$rhino.Nilable<$$property.generic.Element<("1 - most critical" | "2 - somewhat critical" | "3 - less critical" | "4 - not critical")>>;

    /**
     * Parent
     * @type {$$rhino.Nilable<cmdb_ci_serviceProperty>}
     * @memberof cmdb_ci_serviceFields
     * @description Refers to cmdb_ci_service (Business Service)
     */
    parent: $$rhino.Nilable<cmdb_ci_serviceProperty>;

    /**
     * Portfolio status
     * @type {$$rhino.Nilable<$$property.generic.Element<("pipeline" | "catalog" | "retired")>>}
     * @memberof cmdb_ci_serviceFields
     * @description "pipeline"=""; "catalog"=""; "retired"=""
     */
    portfolio_status: $$rhino.Nilable<$$property.generic.Element<("pipeline" | "catalog" | "retired")>>;

    /**
     * Price model
     * @type {$$rhino.Nilable<$$property.generic.Element<("fixed" | "per_unit")>>}
     * @memberof cmdb_ci_serviceFields
     * @description "fixed"=""; "per_unit"=""
     */
    price_model: $$rhino.Nilable<$$property.generic.Element<("fixed" | "per_unit")>>;

    /**
     * Price unit
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ci_serviceFields
     */
    price_unit: $$rhino.Nilable<$$property.Element>;

    /**
     * Service classification
     * @type {$$rhino.Nilable<$$property.generic.Element<("Business Service" | "Technical Service" | "Service Offering" | "Shared Service" | "Application Service" | "Billable Service")>>}
     * @memberof cmdb_ci_serviceFields
     */
    service_classification: $$rhino.Nilable<$$property.generic.Element<("Business Service" | "Technical Service" | "Service Offering" | "Shared Service" | "Application Service" | "Billable Service")>>;

    /**
     * Service level requirement
     * @type {$$rhino.Nilable<$$property.TranslatedHTML>}
     * @memberof cmdb_ci_serviceFields
     */
    service_level_requirement: $$rhino.Nilable<$$property.TranslatedHTML>;

    /**
     * Service status
     * @type {$$rhino.Nilable<$$property.generic.Element<("design" | "requirements" | "definition" | "development" | "analysis" | "buildtestrelease" | "approved" | "operational" | "chartered" | "retiring")>>}
     * @memberof cmdb_ci_serviceFields
     * @description "design"=""; "requirements"=""; "definition"=""; "development"=""; "analysis"=""; "buildtestrelease"=""; "approved"=""; "operational"=""; "chartered"=""; "retiring"=""
     */
    service_status: $$rhino.Nilable<$$property.generic.Element<("design" | "requirements" | "definition" | "development" | "analysis" | "buildtestrelease" | "approved" | "operational" | "chartered" | "retiring")>>;

    /**
     * SLA
     * @type {$$rhino.Nilable<$$property.generic.Reference<slaFields, slaGlideRecord>>}
     * @memberof cmdb_ci_serviceFields
     * @description Refers to sla (Agreement)
     */
    sla: $$rhino.Nilable<$$property.generic.Reference<slaFields, slaGlideRecord>>;

    /**
     * Unit description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ci_serviceFields
     * @description Internal type is "html"
     */
    unit_description: $$rhino.Nilable<$$property.Element>;

    /**
     * Used for
     * @type {$$rhino.Nilable<$$property.generic.Element<("Production" | "Staging" | "QA" | "Test" | "Development" | "Demonstration" | "Training" | "Disaster recovery")>>}
     * @memberof cmdb_ci_serviceFields
     */
    used_for: $$rhino.Nilable<$$property.generic.Element<("Production" | "Staging" | "QA" | "Test" | "Development" | "Demonstration" | "Training" | "Disaster recovery")>>;

    /**
     * Users supported
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof cmdb_ci_serviceFields
     * @description Refers to sys_user_group (Group)
     */
    user_group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Version
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ci_serviceFields
     */
    version: $$rhino.Nilable<$$property.Element>;
}
declare type cmdb_ci_serviceGlideRecord = cmdb_ciGlideRecord & cmdb_ci_serviceFields;
declare type cmdb_ci_serviceElement = $$element.Reference<cmdb_ci_serviceFields, cmdb_ci_serviceGlideRecord>;
declare type cmdb_ci_serviceProperty = $$property.generic.ReferenceProperty<cmdb_ci_serviceFields, cmdb_ci_serviceGlideRecord, cmdb_ci_serviceElement>;

declare interface change_request_imacFields extends change_requestFields {
    /**
     * Move department
     * @type {$$rhino.Nilable<cmn_departmentProperty>}
     * @memberof change_request_imacFields
     */
    move_department: $$rhino.Nilable<cmn_departmentProperty>;

    /**
     * Move from
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof change_request_imacFields
     */
    move_from: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Move from dc
     * @type {$$rhino.Nilable<cmdb_ciProperty>}
     * @memberof change_request_imacFields
     */
    move_from_dc: $$rhino.Nilable<cmdb_ciProperty>;

    /**
     * Move to
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof change_request_imacFields
     */
    move_to: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Move to dc
     * @type {$$rhino.Nilable<cmdb_ciProperty>}
     * @memberof change_request_imacFields
     */
    move_to_dc: $$rhino.Nilable<cmdb_ciProperty>;

    /**
     * Move user
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof change_request_imacFields
     */
    move_user: $$rhino.Nilable<sys_userProperty>;

    /**
     * Network component
     * @type {$$property.Boolean}
     * @memberof change_request_imacFields
     */
    network_component: $$property.Boolean;
}
declare type change_request_imacGlideRecord = change_requestGlideRecord & change_request_imacFields;

declare interface incident_taskFields extends taskFields {
    /**
     * Incident
     * @type {$$rhino.Nilable<incidentProperty>}
     * @memberof incident_taskFields
     */
    incident: $$rhino.Nilable<incidentProperty>;
}
declare type incident_taskGlideRecord = taskGlideRecord & incident_taskFields;

declare interface kb_knowledgeFields extends IExtendedGlideTableProperties {

}

declare interface wf_contextFields extends IGlideTableProperties {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof wf_contextFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Activity count
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof wf_contextFields
     */
    activity_count: $$rhino.Nilable<$$property.Numeric>;
    /**
     * Activity index
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof wf_contextFields
     */
    activity_index: $$rhino.Nilable<$$property.Numeric>;
    /**
     * Run after bus. rules run
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof wf_contextFields
     */
    after_business_rules: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Auto start
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof wf_contextFields
     */
    auto_start: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Stage rendering
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof wf_contextFields
     */
    column_renderer: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;
    /**
     * Cumulative to ERT
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof wf_contextFields
     */
    cumulated_avg_ert: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Due
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof wf_contextFields
     */
    due: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Ended
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof wf_contextFields
     */
    ended: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Available actions
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof wf_contextFields
     */
    ert_long_running_actions: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Available actions
     * @type { $$rhino.Nilable<$$property.GlideObject>}
     * @memberof wf_contextFields
     */
    ert_outlier_workflow_actions: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Related record
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof wf_contextFields
     */
    id: $$rhino.Nilable<$$property.Element>;
    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof wf_contextFields
     */
    name: $$rhino.Nilable<$$property.Element>;
    /**
     * Parent Workflow
     * @type {$$rhino.Nilable<wf_contextProperty>}
     * @memberof wf_contextFields
     */
    parent: $$rhino.Nilable<wf_contextProperty>;
    /**
     * Parent activity
     * @type {$$rhino.Nilable<$$property.generic.Reference<wf_executingFields, wf_executingGlideRecord>>}
     * @memberof wf_contextFields
     */
    parent_activity: $$rhino.Nilable<$$property.generic.Reference<wf_executingFields, wf_executingGlideRecord>>;
    /**
     * Requires ERT
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof wf_contextFields
     */
    requires_ert: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Result
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof wf_contextFields
     */
    result: $$rhino.Nilable<$$property.Element>;
    /**
     * Return value
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof wf_contextFields
     */
    return_value: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Running duration
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof wf_contextFields
     */
    running_duration: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Schedule
     * @type {$$rhino.Nilable<cmn_scheduleProperty>}
     * @memberof wf_contextFields
     */
    schedule: $$rhino.Nilable<cmn_scheduleProperty>;

    /**
     * Scratchpad
     * @type {}
     * @memberof wf_contextFields
     */
    scratchpad: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Stage
     * @type {}
     * @memberof wf_contextFields
     */
    stage: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Stage states
     * @type {}
     * @memberof wf_contextFields
     */
    stage_state: $$rhino.Nilable<$$property.Element>;

    /**
     * Started
     * @type {}
     * @memberof wf_contextFields
     */
    started: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Started by
     * @type {}
     * @memberof wf_contextFields
     */
    started_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * State
     * @type {}
     * @memberof wf_contextFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Table
     * @type {}
     * @memberof wf_contextFields
     */
    table: $$rhino.Nilable<$$property.Element>;

    /**
     * Timezone
     * @type {}
     * @memberof wf_contextFields
     */
    timezone: $$rhino.Nilable<$$property.Element>;

    /**
     * Available actions
     * @type {}
     * @memberof wf_contextFields
     */
    without_current_wf_actions: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Workflow
     * @type {}
     * @memberof wf_contextFields
     */
    workflow: $$rhino.Nilable<$$property.generic.Reference<wf_workflowFields, wf_workflowGlideRecord>>;

    /**
     * Workflow version
     * @type {}
     * @memberof wf_contextFields
     */
    workflow_version: $$rhino.Nilable<$$property.generic.Reference<wf_workflow_versionFields, wf_workflow_versionGlideRecord>>;
}
declare type wf_contextGlideRecord = GlideRecord & wf_contextFields;
declare type wf_contextElement = $$element.Reference<wf_contextFields, wf_contextGlideRecord>;
declare type wf_contextProperty = $$property.generic.ReferenceProperty<wf_contextFields, wf_contextGlideRecord, wf_contextElement>;

declare interface wf_activityFields extends IGlideTableProperties {
}
declare type wf_activityGlideRecord = GlideRecord & wf_activityFields;

declare interface wf_workflowFields extends IGlideTableProperties {
}
declare type wf_workflowGlideRecord = GlideRecord & wf_workflowFields;

declare interface wf_executingFields extends IGlideTableProperties {
}
declare type wf_executingGlideRecord = GlideRecord & wf_executingFields;

declare interface wf_workflow_versionFields extends IGlideTableProperties {
}
declare type wf_workflow_versionGlideRecord = GlideRecord & wf_workflow_versionFields;