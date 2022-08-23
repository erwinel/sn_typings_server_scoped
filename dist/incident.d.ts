/// <reference path="task.d.ts" />
/// <reference path="change.d.ts" />

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
 * @description 1="Open"; 3="Pending Change"; 2="Known Error"; 4="Closed/Resolved"
 */
declare type ProblemStateValue = 1 | 3 | 2 | 4;
declare type ProblemStateString = "1" | "3" | "2" | "4";
declare type ProblemState = ProblemStateValue | ProblemStateString;

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
}
/**
 * Record for items from the 'incident' table
 * @typedef {(taskGlideRecord & incidentFields)} incidentGlideRecord
 */
declare type incidentGlideRecord = taskGlideRecord & incidentFields;
declare type incidentElement = $$element.Reference<incidentFields, incidentGlideRecord>;
declare type incidentProperty = $$property.generic.ReferenceProperty<incidentFields, incidentGlideRecord, incidentElement>;

declare interface incident_taskFields extends taskFields {
    /**
     * Incident
     * @type {$$rhino.Nilable<incidentProperty>}
     * @memberof incident_taskFields
     */
    incident: $$rhino.Nilable<incidentProperty>;
}
/**
 * Record for items from the 'incident_task' table
 * @typedef {(taskGlideRecord & incident_taskFields)} incident_taskGlideRecord
 */
declare type incident_taskGlideRecord = taskGlideRecord & incident_taskFields;

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
/**
 * Record for items from the 'problem' table
 * @typedef {(taskGlideRecord & problemFields)} problemGlideRecord
 */
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
/**
 * Record for items from the 'problem_task' table
 * @typedef {(taskGlideRecord & problem_taskFields)} problem_taskGlideRecord
 */
declare type problem_taskGlideRecord = taskGlideRecord & problem_taskFields;
