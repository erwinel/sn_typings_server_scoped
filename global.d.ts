/// <reference path="$$rhino.d.ts" />
/// <reference path="Packages.d.ts" />
/// <reference path="GlideScriptable.d.ts" />
/// <reference path="sn_kmf_ns.d.ts" />

//#region TypeDefs

declare type EncryptionAlgorithmHashType = "MD-2" | "MD-5" | "SHA-1" | "SHA-224" | "SHA-256" | "SHA-384" | "SHA-512";

declare type EncryptionAlgorithmSignType = "NONEwithRSA" | "MD2withRSA" | "MD5withRSA" | "SHA1withRSA" | "SHA224withRSA" | "SHA256withRSA" | "SHA384withRSA" |
    "SHA512withRSA" | "NONEwithDSA" | "SHA1withDSA" | "SHA224withDSA" | "SHA256withDSA" | "NONEwithECDSA" | "SHA1withECDSA" | "SHA224withECDSA" | "SHA256withECDSA" |
    "SHA384withECDSA" | "SHA512withECDSA";

declare type TaskAppproval = "not requested" | "cancelled" | "requested" | "duplicate" | "not_required" | "approved" | "rejected";

/**
 * email=Email; endpoint_security=Endpoint Security; ids_ips=IDS/IPS; network_monitoring=Network Monitoring; phone=Phone; self-service=Self-service; siem=SIEM; virtual_agent=Virtual Agent; vulnerability_response=Vulnerability Response; walk-in=Walk-in
 */
declare type TaskContactType = "email" | "endpoint_security" | "ids_ips" | "network_monitoring" | "phone" | "self-service" | "siem" | "virtual_agent" | "vulnerability_response" | "walk-in";

declare type TaskEscalationNumber = 0 | 1 | 2 | 3;
declare type TaskEscalationString = "0" | "1" | "2" | "3";
declare type TaskEscalationValue = TaskEscalationNumber | TaskEscalationString;

/**
 *
 * @description 1="1 - High"; 2="2 - Medium"; 3="3 - Low"
 */
declare type Task3ScaleNumber = 1 | 2 | 3;
declare type Task3ScaleString = "1" | "2" | "3";
declare type Task3ScaleValue = Task3ScaleNumber | Task3ScaleString;

declare type TaskPriorityNumber = 1 | 2 | 3 | 4 | 5;
declare type TaskPriorityString = "1" | "2" | "3" | "4" | "5";
declare type TaskPriorityValue = TaskPriorityNumber | TaskPriorityString;

/**
 *
 * @description -5="Pending"; 1="Open"; 2="Work in Progress"; 3="Closed Complete"; 4="Closed Incomplete"; 7="Closed Skipped"
 */
declare type TaskStateNumber = -5 | 1 | 2 | 3 | 4 | 7;
declare type TaskStateString = "-5" | "1" | "2" | "3" | "4" | "7";
declare type TaskStateValue = TaskStateNumber | TaskStateString;

declare type IncidentCloseCode = "Solved (Work Around)" | "Solved (Permanently)" | "Solved Remotely (Work Around)" | "Solved Remotely (Permanently)" | "Not Solved (Not Reproducible)" | "Not Solved (Too Costly)" | "Closed/Resolved by Caller";

/**
 *
 * @description 1="Awaiting Caller"; 5="Awaiting Change"; 3="Awaiting Problem"; 4="Awaiting Vendor"
 */
declare type IncidentHoldReasonNumber = 1 | 5 | 3 | 4;
declare type IncidentHoldReasonString = "1" | "5" | "3" | "4";
declare type IncidentHoldReasonValue = IncidentHoldReasonNumber | IncidentHoldReasonString;

/**
 *
 * @description 1="New"; 2="In Progress"; 3="On Hold"; 6="Resolved"; 7="Closed"; 8="Canceled"
 */
declare type IncidentStateNumber = 1 | 2 | 3 | 6 | 7 | 8;
declare type IncidentStateString = "1" | "2" | "3" | "6" | "7" | "8";
declare type IncidentStateValue = IncidentStateNumber | IncidentStateString;

declare type IncidentNotifyNumber = 1 | 2 | 3;
declare type IncidentNotifyString = "1" | "2" | "3";
declare type IncidentNotifyValue = IncidentNotifyNumber | IncidentNotifyString;

/**
 *
 * @description 1="Success"; 2="Fail"
 */
declare type ChangeReviewStatusNumber = 1 | 2;
declare type ChangeReviewStatusString = "1" | "2";
declare type ChangeReviewStatusValue = ChangeReviewStatusNumber | ChangeReviewStatusString;

/**
 *
 * @description 2="High"; 3="Moderate"; 4="Low"
 */
declare type ChangeRiskNumber = 2 | 3 | 4;
declare type ChangeRiskString = "2" | "3" | "4";
declare type ChangeRiskValue = ChangeRiskNumber | ChangeRiskString;

/**
 *
 * @description 1="Massive"; 2="Large"; 3="Medium"; 4="Small"; 5="Tiny"
 */
declare type ChangeScopeNumber = 1 | 2 | 3 | 4 | 5;
declare type ChangeScopeString = "1" | "2" | "3" | "4" | "5";
declare type ChangeScopeValue = ChangeScopeNumber | ChangeScopeString;

declare type ChangeType = "standard" | "normal" | "emergency";

/**
 *
 * @description "successful"="Successful"; "successful_issues"="Successful with issues"; "unsuccessful"="Unsuccessful"
 */
declare type ChangeCloseCode = "successful" | "successful_issues" | "unsuccessful";

/**
 *
 * @description 1="Open"; 3="Pending Change"; 2="Known Error"; 4="Closed/Resolved"
 */
declare type ProblemStateNumber = 1 | 3 | 2 | 4;
declare type ProblemStateString = "1" | "3" | "2" | "4";
declare type ProblemStateValue = ProblemStateNumber | ProblemStateString;

/**
 *
 * @description "requested"="Pending Approval"; "in_process"="Approved"; "closed_complete"="Closed Complete"; "closed_incomplete"="Closed Incomplete"; "closed_cancelled"="Closed Cancelled"; "closed_rejected"="Closed Rejected"; "closed_skipped"="Closed Skipped"
 */
declare type IRequestState = "requested" | "in_process" | "closed_complete" | "closed_incomplete" | "closed_cancelled" | "closed_rejected" | "closed_skipped";

/**
 * Query operator values that can be used for string value comparisons.
 */
declare type StringQueryOperator = "=" | "!=" | "IN" | "NOT IN" | "STARTSWITH" | "ENDSWITH" | "CONTAINS" | "DOES NOT CONTAIN" | "INSTANCEOF";

/**
 * Query operator values that can be used for numerical operations.
 */
declare type NumberQueryOperator = "=" | "!=" | ">" | ">=" | "<" | "<=";

/**
 * Query operator values.
 */
declare type QueryOperator = StringQueryOperator | NumberQueryOperator;

/**
 * Type values for the "Type" field of the "Service Availibility" table (service_availility.type).
 */
declare type service_availabilityType = "daily" | "weekly" | "monthly" | "annually" | "last7days" | "last30days" | "last12months";

declare type AggregateType = "min" | "max" | "sum" | "avg" | "count";

declare type GlideProgressWorkerState = "starting" | "running" | "complete" | "cancelled" | "unknown";

declare type GlideProgressWorkerCompletionCode = "success" | "cancelled" | "error";

/**
 * Represents an object type.
 */
declare type GlideJSType = "null" | "string" | "number" | "boolean" | "function" | "object";

declare type LocationType = "region" | "country" | "state/province" | "city" | "site" | "building/structure" | "floor" | "room" | "zone";

/**
 * Names of workflow events availablein the base system.
 * 
 * This was created by referencing {@link https://docs.servicenow.com/bundle/utah-servicenow-platform/page/administer/workflow-administration/reference/r_WorkflowEventsInTheBaseSystem.html}
 * @enum {string}
 */
declare enum BaseSystemWorkflowEventNames {
    /**
     * Informs records in the Workflow Executing Activity [wf_executing] table about the completion of other activities in the same workflow context.
     * If the activity is allowed to set the boolean value for wf_executing.notify_termination, then set the value to true (activity.notify_termination = true) during the onExecute event.
     * Source: Workflow Engine, Process Terminations; Thread: Current thread, current mutex; Listeners: Join activity
     * @summary String value used by activity definitions to respond to the onActivityComplete event handler.
     */
    activityComplete = "activityComplete",
    /**
     * From within activity definitions:
     * 
     * Informs all wf_executing records in a context that the workflow is being canceled.
     * The End activity uses the global workflow.broadcastEvent('cancel') to interrupt the currently running wf_executing records. This changes the state of those records to Cancelled.
     * Source: End activity; Thread: Current thread, current mutex; Listeners: All activities, onCancel event handler
     * 
     * Outside current context:
     * 
     * This event is the same as the cancel event above and handled the same. However, the management of this event is subtly different.
     * This event informs all wf_executing records in a context that the workflow is being canceled.
     * The event is managed via the onCancel event handler of each executing activity definition, but the event is called differently.
     * In particular, the call to cancel from outside an activity definition is blocked by the current mutex.
     * This is a significant difference in that the event does not interrupt a currently executing activity that is still operating within the parameters of the current mutex.
     * Any script can call cancel on a known executing context via the workflow script include.
     * Source: Any script include, scheduled job, UI action, or other source; Thread: Current thread, private mutex; Listeners:All activities, onCancel event handler
     * @summary String value used by workflow activities to respond to a request for cancellation.
     */
    cancel = "cancel",
    /**
     * Informs wf_executing records for approval activities about an approval that completed and triggered the timer event.
     * Approval Coordinator both registers for the event and triggers the event. The child approvals have listeners that determine their approval state.
     * Source: Approval Coordinator triggers the event during its onExecute; Thread: Current thread, current mutex;
     * Listeners: Approval Coordinator, Approval - User, and Approval - Group all have onDetermineApprovalState event handlers.
     * If the state is anything but Requested, the activity is considered finished, and the approval state (Approved, Rejected, Cancelled) is set to the wf_executing.result column
     * @summary String value used by approval activities to respond to a change in the overall approval status of the current record.
     */
    determineApprovalState = "determineApprovalState",
    /**
     * Informs a record in the wf_executing table with the initial state of Executing to proceed with its primary work.
     * The workflow engine, for each transition executed, creates an executing record with a state of Executing. Once created, the executing record is put in a queue for processing.
     * For each item in the queue, the Rhino globals are established, the activity definition that drives the executing record is instantiated, and the run() function is called.
     * When the state of a record is Executing, this function always calls onExecute.
     * Source: Workflow engine, via the WFActivity Handler; Thread: Current thread, current mutex; Listeners: All activities, onExecute event handler
     * 
     * Lock Activities
     * 
     * This is also the string value used by the Lock activity to respond to a waiting lock that is ready to make another attempt to obtain a specific lock.
     * For Lock activities, this informs a wf_executing record waiting to execute that the specified wait interval has passed and that it should attempt to get the lock again.
     * The execute event for a Lock activity is different because it is called on a separate thread, at specified intervals, and is treated as an outside event.
     * Source: Lock activity via a scheduled job; Thread: Worker thread, private mutex; Listeners: Lock activity, onExecute event handler
     * @summary String value used by workflow activities to respond to a Timer activity that has expired.
     */
    execute = "execute",
    /**
     * When a main workflow calls a subflow, the workflow keeps the ID of the subflow's context in the scratchpad. When the subflow is complete, it triggers the listener event via a business rule.
     * The listener event is passed to the parent context on completion of a subflow and is managed by the onListener action of the workflow activity.
     * Source: Business rule that is triggered by the update of a workflow that has a parent; Thread: Current thread, current mutex;
     * Listeners: This event is used by a subflow to inform it's parent flow that it is complete. The parent workflow will react to this event and continue.
     * @summary String value that the workflow (subflow) activity triggers as an event.
     */
    listener = "listener",
    /**
     * When an SLA is paused, the SLA workflows must be paused if there is a timer running.
     * Use is exclusive to the SLA timer.
     * Source: SLA; Thread: Business rule thread, private mutex; Listeners: Timer activity
     * @summary String value sent to a workflow from an SLA to pause the Timer activity.
     */
    pause = "pause",
    /**
     * String value triggered in the workflow by an Orchestration activity indicating that the MID Server has completed a task.
     * The onProbe_complete event handler is in the WebServiceActivityHandler and is used by most Orchestration activities.
     * Source: Event used to restate a workflow that is waiting for the MID Server to process a task or activity; Thread: Worker thread, private mutex; Listeners: Orchestration activities
     * @summary String value triggered in the workflow by an Orchestration activity indicating that the MID Server has completed a task.
     */
    probe_complete = "probe_complete",
    /**
     * When an SLA is resumed, the SLA workflows must be resumed as well.
     * Use is exclusive to the SLA timer.
     * Source: SLA; Thread: Business rule thread, private mutex; Listeners: Timer activity
     * @summary String value used by the Timer activity to resume a paused timer (see {@link BaseSystemWorkflowEventNames#pause}).
     */
    resume = "resume",
    /**
     * The End activity checks for this event. This is only in the End activity.
     * Source: Any script can trigger or broadcast the stop event via a script include or workflow Run Script activity; Thread: Current thread, current mutex;
     * Listeners: This event is used by the End activity to exclude the Cancel activity and allow a workflow to end, even if canceled.
     * @summary The End activity checks for this event.
     */
    stop = "stop",
    /**
     * Allows wf_executing records to be informed about a timer activity that has completed and has fired the timer event.
     * The Timer activity schedules a job that calls a script. The script calls fireEvent (wf_executing, timer).
     * Source: Timer activity via a scheduled job; Thread: Worker thread, private mutex; Listeners: Timer activity, onTimer event handler
     * @summary String value used by workflow activities to respond to a Timer activity that has expired.
     */
    timer = "timer",
    /**
     * Informs records in the Workflow Executing Activity [wf_executing] table about an otherEvent that has completed.
     * The Join activity transitions from n number of preceding activities. These preceding activities all create a wf_executing record, which causes a check to see if the record already exists.
     * If the Join already exists, then the Join created by the executing transition sets the wf_executing record for deletion.
     * Source: Join activity; Thread: Current thread, current mutex; Listeners: Join activity, onOtherEvent event handler
     * @summary String value used by the Join activity to respond to an otherEvent.
     */
    otherEvent = "otherEvent"
}

declare type WorkflowOperationType = "insert" | "update" | "delete";

//#endregion

interface ArrayConstructor {
    /**
     * @deprecated DO NOT USE - does not exist in server script.
     */
    from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];

    /**
     * @deprecated DO NOT USE - does not exist in server script.
     */
    from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
}

declare namespace global {
    /**
     * ArrayUtil API is a script include with useful functions for working with JavaScript arrays.
     * @see {@link https://docs.servicenow.com/bundle/utah-api-reference/page/app-store/dev_portal/API_reference/ArrayUtil/concept/c_ArrayUtilAPI.html}
     * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/utah/server_legacy/c_ArrayUtilAPI}
     */
    export class ArrayUtil {
        /**
         * Merge two arrays.
         * @template T - The element type,
         * @param {T[]} parent - An array to merge.
         * @param {T[]} child - An array to merge.
         * @return {T[]} An array of elements from both input arrays. Duplicates are not removed.
         */
        concat<T>(parent: T[], child: T[]): T[];
    
        /**
         * Searches the array for the specified element.
         * @template T - The element type,
         * @param {T[]} array
         * @param {T} element
         * @return {boolean} True if the element exists in the array; otherwise returns false.
         */
        contains<T>(array: T[], element: T): boolean;
    
        /**
         * Converts a Java object to an array.
         * @param {*} a - Object to convert.
         * @return {any[]} Array created from the object.
         */
        convertArray(a: any): any[];
        /**
         * Finds the differences between two or more arrays.
         * @template T - The element type.
         * @param {T[]} a - The first array.
         * @param {T[]} b - The second array.
         * @param {...T[]} c - Zero or more additional arrays.
         * @return {T[]} - Returns an array of items from array a that were not found in any other input array. Duplicates are removed from the result.
         */
        diff<T>(a: T[], b: T[], ...c: T[]): T[];
    
        /**
         * Returns an array from the specified object.
         * @param {*} obj - Object from which to create an array.
         * @return {any[]} Array created from the object.
         */
        ensureArray(object: any): any[];
    
        /**
         * Searches the array for the element.
         * @template T - The element type.
         * @param {T} array - Array to search.
         * @param {T} element - Element to search for.
         * @param {number} [startIndex] - The optional zero-based index to start searching from.
         * @return {number} Zero-based position of the element in the array, or -1 if the element is not found.
         */
        indexOf<T>(array: T, element: T, startIndex?: number): number;
    
        /**
         * Finds the elements present in all arrays.
         * @template T - The element type.
         * @param {T[]} a - The first array.
         * @param {T[]} b - The second array.
         * @param {...T[]} c - Zero or more additional arrays.
         * @return {T[]} An array of elements from array a that were found in all of the other input arrays. Duplicates are removed.
         */
        intersect<T>(a: T[], b: T[], ...c: T[]): T[];

        /**
         * Merge two or more arrays.
         * @template T - The element type.
         * @param {T[]} a - The first array.
         * @param {T[]} b - The second array.
         * @param {...T[]} c - Zero or more additional arrays.
         * @return {T[]} An array of items from all the input arrays. Duplicates are removed.
         */
        union<T>(a: T[], b: T[], ...c: T[]): T[];
    
        /**
         * Removes duplicate items from an array.
         * @template T - The element type.
         * @param {T[]} a - The array to check for duplicate elements.
         * @return {T[]} An array of unique items from the input array.
         */
        unique<T>(a: T[]): T[];
    }

    export interface IAbstractAjaxProcessor {
        readonly CALLABLE_PREFIX: 'ajaxFunction_';
        
        // readonly prototype: AbstractAjaxProcessor;

        readonly request?: GlideServletRequest;
        
        readonly responseXML?: XMLDocument2;

        readonly gc?: Packages.com.glide.script.GlideController;

        initialize(request?: GlideServletRequest, responseXML?: XMLDocument2, gc?: Packages.com.glide.script.GlideController): void;
        
        process(): any;
        
        newItem(name?: string): Packages.org.w3c.dom.Element;
        
        /**
         * returns value of parameter as a Java String instance
         * @param {string} name - The name of the parameter
         * @return {$$rhino.String} The value of the parameter.
         */
        getParameter(name: string): $$rhino.Nilable<$$rhino.String>;
        
        getDocument(): XMLDocument2 | undefined;
        
        getRootElement(): Packages.org.w3c.dom.Element;
        
        /**
         * Returns value of "sysparm_name" as a Java String instance
         * @return {$$rhino.Stringg}
         */
        getName(): $$rhino.String;
        
        /**
         * Returns value of "sysparm_value" as a Java String instance
         * @return {$$rhino.String}
         */
        getValue(): $$rhino.String;
        
        /**
         * Returns value of "sysparm_type" as a Java String instance
         * @return {$$rhino.String}
         */
        getType(): $$rhino.String;
        
        getChars(): $$rhino.String;
        
        setAnswer(value: any): void;
        
        setError(error: any): void;
    }


    export interface AbstractAjaxProcessorConstructor extends $$class.Constructor<AbstractAjaxProcessor, IAbstractAjaxProcessor & Readonly<{ prototype: AbstractAjaxProcessor }>> {
        new(): AbstractAjaxProcessor;
        (): AbstractAjaxProcessor;
    }

    /**
     * Base ajax processor class that other ajax processors extend
     */
    export class AbstractAjaxProcessor implements IAbstractAjaxProcessor {
        readonly CALLABLE_PREFIX: 'ajaxFunction_';

        constructor();

        readonly prototype: AbstractAjaxProcessor;

        readonly request?: GlideServletRequest;
        
        readonly responseXML?: XMLDocument2;

        readonly gc?: Packages.com.glide.script.GlideController;

        initialize(request?: GlideServletRequest, responseXML?: XMLDocument2, gc?: Packages.com.glide.script.GlideController): void;

        process(): any;

        newItem(name?: string): Packages.org.w3c.dom.Element;

        /**
         * returns value of parameter as a Java String instance
         * @param {string} name - The name of the parameter
         * @return {$$rhino.String} The value of the parameter.
         */
        getParameter(name: string): $$rhino.Nilable<$$rhino.String>;

        getDocument(): XMLDocument2 | undefined;

        getRootElement(): Packages.org.w3c.dom.Element;

        /**
         * Returns value of "sysparm_name" as a Java String instance
         * @return {$$rhino.Stringg}
         */
        getName(): $$rhino.String;

        /**
         * Returns value of "sysparm_value" as a Java String instance
         * @return {$$rhino.String}
         */
        getValue(): $$rhino.String;

        /**
         * Returns value of "sysparm_type" as a Java String instance
         * @return {$$rhino.String}
         */
        getType(): $$rhino.String;

        getChars(): $$rhino.String;

        setAnswer(value: any): void;

        setError(error: any): void;
    }

    /**
     * Attachment utilities
     */
    export class AttachmentUtils {
        attInptStream: GlideScriptableInputStream;
    
        /**
         * Creates an instance of AttachmentUtils.
         * @param {string} attachmentSysId - Attachment sys_id.
         */
        constructor(attachmentSysId: string);
    
        /**
         * Gets MD5 checksum for the attachment identified by the attachmentSysId parameter in the class initialization.
         * @return {$$rhino.String} MD5 checksum string.
         */
        getMD5ChecksumFromAttachment(): $$rhino.String;
    
        /**
         * Gets SHA1 checksum for the attachment identified by the attachmentSysId parameter in the class initialization.
         * @return {$$rhino.String} SHA1 checksum string
         */
        getSHA1ChecksumFromAttachment(): $$rhino.String;
    
        /**
         * Gets SHA256 checksum for the attachment identified by the attachmentSysId parameter in the class initialization.
         * @return {$$rhino.String} SHA256 checksum string
         */
        getSHA256ChecksumFromAttachment(): $$rhino.String;
    
        /**
         * Gets MD5 Hex checksum for the attachment identified by the attachmentSysId parameter in the class initialization.
         * @return {$$rhino.String} MD5 Hex checksum string
         */
        getMD5HexChecksumFromAttachment(): $$rhino.String;
    
        /**
         * Gets SHA1 Hex checksum for the attachment identified by the attachmentSysId parameter in the class initialization.
         * @return {$$rhino.String} SHA1 Hex checksum string
         */
        getSHA1HexChecksumFromAttachment(): $$rhino.String;
    
        /**
         * Gets SHA256 Hex checksum for the attachment identified by the attachmentSysId parameter in the class initialization.
         * @return {$$rhino.String} SHA256 HEx checksum string
         */
        getSHA256HexChecksumFromAttachment(): $$rhino.String;
    
        type: "AttachmentUtils";
    }

    /**
     * This script does availability calculation given a start and an end date, it considers the availability as well as maintenance commitments
     * along with the schedules attached to the offering.
     */
    export class AvailabilityCalculator {
        SCHEDULES: GlideLRUCache;
        cmdb_ci: string | null;
        commitment: string | null;
        sumCount: number;
        constructor();
        calculate(start: GlideDateTime, end: GlideDateTime, type: service_availabilityType): void;
        setCommitment(id: string): void;
        setCI(cmdb_ci: string): void;
    }

    export class AvailabilityRecord {
        type : service_availabilityType;
        constructor(cmdb_ci: $$rhino.String, start: GlideDateTime, end: GlideDateTime);
        post(commitment: $$rhino.String, absolute: GlideDuration, scheduled: GlideDuration, absolute_avail: $$rhino.Number, scheduled_avail: $$rhino.Number, absolute_count: $$rhino.Number,
            scheduled_count: $$rhino.Number, ast: GlideDuration, mtbf: GlideDuration, mtrs: GlideDuration, allowed: GlideDuration, met: $$rhino.Boolean): void;
        setType(t: service_availabilityType): void;
    }

    export class AvailabilitySummarizer {
        cmdb_ci: string | null;
        commitment: string | null;
        start: GlideDateTime;
        constructor();
        summarize(start?: string | GlideDateTime): void;
        setCommitment(id: string): void;
        setCI(cmdb_ci: string): void;
    }

    /**
     * Utility for Calendar
     */
    export class CalendarUtils {
        static readonly UTC_DATE_FORMAT = "yyyy-MM-dd";
        static readonly UTC_TIME_FORMAT = "HH:mm:ss";

        log: GSLog;

        /**
         * Creates an instance of CalendarUtils.
         */
        constructor();

        /**
         * Get date format from user defined format or system format if not found, but converted to DHTMLX format as per spec:
         * {@link http://docs.dhtmlx.com/scheduler/settings_format.html}
         * @return {string} DHTMLX user date format or system date format.
         */
        getUserDateFormat(): string;

        /**
         * Get time format from user defined format or system format if not found, but converted to DHTMLX format as per spec:
         * {@link http://docs.dhtmlx.com/scheduler/settings_format.html}
         * @return {string} DHTMLX user time format or system time format.
         */
        getUserTimeFormat(): string;

        type: "CalendarUtils";
    }

    /**
     * For a given system property which lists out supported content types, this Script Inlcude checks to make sure the associated attachment stored (passed into class as a GlideRecord) has the correct content_type.
     */
    export class ContentTypeValidator {
        defaultSupportedContentTypes: "image/svg+xml";

	    constructor();

        isValidType(attachment: GlideRecord, userDefinedSupportedContentTypes?: string[]): boolean;
    }

    export class CurrencyConversionTableList {
        constructor();
        process(): string[];
        type: "CurrencyConversionTableList";
    }

    /**
     * Core methods to get a default list of encryptable fields, meant to be leveraged by both Edge and Column Level Encryption.
     */
    export class EncryptionCommons {
        constructor();

        /**
         * Lists all fields that can be encrypted for a given table.
         * @param {string} tableName - The name of the table.
         * @param {{ (ed: GlideElementDescriptor, fieldName: $$rhino.String, ec?: EncryptionCommons): boolean }} [additionalValidator] - Validator that returns true if the field can be encrypted.
         * @return {$$rhino.String[]} Name sof encryptable fields for the given table.
         */
        getEncryptableFieldsForTable(tableName: string, additionalValidator?: { (ed: GlideElementDescriptor, fieldName: $$rhino.String, ec: EncryptionCommons): boolean }): $$rhino.String[];

        addToArrayTablesWithBooleanAttributeSetToTrue(array: $$rhino.String[], attributeName: $$rhino.String): $$rhino.String[];

        /**
         * Tests whether table is marked for auditing.
         * @param {string} tableName - The name of the table.
         * @return {boolean} True if the table is marked for auditing; otherwise, false.
         */
        isTableAudited(tableName: string): boolean;

        getUsableCryptoModules(): $$rhino.String[];

        type: "EncryptionCommons";
    }

    /**
     * Choice list for job type field based on user session and 'glide_encryption.cle_replatforming_with_kmf'
     */
    export class EncryptionJobTypeChoices {
        constructor();
        process(): GlideChoiceList;
        type: "EncryptionJobTypeChoices";
    }

    export class GlideCryptoModule {
        static get(): GlideCryptoModule;
        static getModule(cryptoModuleName: $$rhino.String): GlideCryptoModule;
        CRYPTO_MODULE: sn_kmf_ns.KMFCryptoModule | null;
        constructor(cryptoModule: sn_kmf_ns.KMFCryptoModule);
        encryptData(data: $$rhino.String): $$rhino.String;
        wrapKeyFromBytes(data: $$rhino.String): $$rhino.String;
        wrapKeyFromBytesForAlgorithm(data: $$rhino.String, algorithm: $$rhino.String): $$rhino.String;
        wrapKeyFromSysId(data: $$rhino.String): $$rhino.String;
        decryptData(data: $$rhino.String): $$rhino.String;
        unwrapKey(data: $$rhino.String): $$rhino.String;
        unwrapKeyForAlgorithm(data: $$rhino.String, algorithm: $$rhino.String): $$rhino.String;
        generateMac(data: $$rhino.String): $$rhino.String;
        verifyMac(data: $$rhino.String, expectedMac: $$rhino.String): $$rhino.Boolean;
        asymmetricEncryptData(data: $$rhino.String): $$rhino.String;
        asymmetricWrapKeyFromBytes(data: $$rhino.String): $$rhino.String;
        asymmetricWrapKeyFromBytesForAlgorithm(data: $$rhino.String, algorithm: $$rhino.String): $$rhino.String;
        asymmetricWrapKeyFromSysId(data: $$rhino.String): $$rhino.String;
        asymmetricDecryptData(data: $$rhino.String): $$rhino.String;
        asymmetricUnwrapKey(data: $$rhino.String): $$rhino.String;
        asymmetricUnwrapKeyForAlgorithm(data: $$rhino.String, algorithm: $$rhino.String): $$rhino.String;
        sign(data: $$rhino.String): $$rhino.String;
        verifySignature(data: $$rhino.String, signature: $$rhino.String): $$rhino.Boolean;
        discard(): void;
        type: "GlideCryptoModule";
    }

    /**
     * The GlideQuery API is an alternative to GlideRecord to perform CRUD operations on record data from server-side scripts.
     * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/utah/server/no-namespace/GlideQueryAPI}
     * @see {@link https://docs.servicenow.com/bundle/utah-api-reference/page/app-store/dev_portal/API_reference/GlideQuery/concept/GlideQueryGlobalAPI.html}
     */
    export class GlideQuery {

        /**
         * Instantiates a GlideQuery object used to build and execute record queries.
         * @param {$$rhino.String} table - Name of table to query.
         */
        constructor(table: $$rhino.String);
    
        /**
         * Aggregates a field using a specified aggregation function.
         * @param {$$rhino.String} aggregateType - The type of aggregation function to perform.
         * @param {$$rhino.String} field - Field on which to perform the operation.
         * @return {GlideQuery} The query object being built.
         * @description Use this method to build queries that aggregate against multiple fields or use multiple aggregate functions,
         * or if you must use the {@link #groupBy()} method. If you only want to aggregate against one field with one function,
         * and you don't need to use {@link #groupBy()}, then use {@link #avg()}, {@link #min()}, {@link #max()} or {@link #count()}, instead.
         */
        aggregate(aggregateType: AggregateType, field: $$rhino.String): GlideQuery;
    
        /**
         * Returns the aggregate average of a given numeric field.
         * @param {$$rhino.String} field - Field on which to perform the operation.
         * @return {Optional<$$rhino.Number>} Object that contains the aggregate average of the given field.
         * @description You can only use this method on Integer, Long, Floating Point Number, Double and Currency fields.
         */
        avg(field: $$rhino.String): Optional<$$rhino.Number>;
    
        /**
         * Returns the number of records that match the query.
         * @return {$$rhino.Number} Number of records that match the query.
         */
        count(): $$rhino.Number;
    
        /**
         * Deletes all records in the table specified by the preceding Where clauses.
         */
        deleteMultiple(): void;
    
        /**
         * Disables updating system fields, or fields with a name that starts with the sys prefix, such as sys_created_on, sys_updated_on, and sys_mod_count.
         * Only applies to the specified query.
         * @return {GlideQuery} The query object being built.
         */
        disableAutoSysFields(): GlideQuery;
    
        /**
         * Disables any business rules, flows, workflows, or audit records that would run or be created as the result of the query.
         * @return {GlideQuery} The query object being built.
         */
        disableWorkflow(): GlideQuery;
    
        /**
         * Forces a database update even when no record changes are made. For example, you can use this method to force a business rule to execute.
         * @return {GlideQuery} The query object being built.
         */
        forceUpdate(): GlideQuery;
    
        /**
         * Returns a single record from the query.
         * @param {$$rhino.String} key - Sys_id of the record to return.
         * @param {$$rhino.String[]} [selectedFields] - Optional additional fields to return in the result.
         * The system always returns the sys_id.
         * @return {Optional<{ [key: string]: $$rhino.String; }>} Object used to interact with a single record.
         */
        get(key: $$rhino.String, selectedFields?: $$rhino.String[]): Optional<{ [key: string]: $$rhino.String; }>;
    
        /**
         * Returns an Optional object containing a single record based on a set of name-value pairs to query by.
         * Assumes the '=' operator for each name-value pair.
         * @param {{ [key: string]: any; }} keyValues - Object where the keys are the name of the fields, and the values are the values to query for.
         * @param {$$rhino.String[]} [selectedFields] - Optional additional fields to return in the result.
         * The system always returns the sys_id.
         * @return {Optional<{ [key: string]: $$rhino.String; }>} Object used to interact with a single record.
         */
        getBy(keyValues: { [key: string]: any; }, selectedFields?: $$rhino.String[]): Optional<{ [key: string]: $$rhino.String; }>;
    
        /**
         * Groups the query results by a designated field or fields.
         * @param {($$rhino.String | $$rhino.String[])} fields - Field or fields to group the results by.
         * @return {GlideQuery} The query object being built.
         * @description You must use this method with the {@link #aggregate} method.
         */
        groupBy(fields: $$rhino.String | $$rhino.String[]): GlideQuery;
    
        /**
         * Filters aggregate groups so that you can display only groups of results that match a specified condition.
         * @param {AggregateType} aggregateType - The type of aggregation function to perform.
         * @param {$$rhino.String} field - Field on which to perform the operation.
         * @param {NumberQueryOperator} operator - Numeric operator to use in the operation.
         * @param {$$rhino.Number} value - Number value to use in the operation.
         * @return {GlideQuery} The query object being built.
         */
        having(aggregateType: AggregateType, field: $$rhino.String, operator: NumberQueryOperator, value: $$rhino.Number): GlideQuery;
    
        /**
         * Inserts a record and returns an Optional object containing the record.
         * @param {{ [key: string]: any; }} keyValues - Object containing name-value pairs to insert into the record. Unspecified fields will be null.
         * @param {$$rhino.String[]} [selectedFields] - Optional additional fields to return in the result.
         * The system always returns the sys_id.
         * @return {Optional<{ [key: string]: $$rhino.String; }>} Object used to interact with a single record.
         */
        insert(keyValues: { [key: string]: any; }, selectedFields?: $$rhino.String[]): Optional<{ [key: string]: $$rhino.String; }>;
    
        /**
         * Updates an existing record, or inserts a new record if one does not already exist.
         * @param {{ [key: string]: any; }} changes - Object containing name-value pairs to update or insert into the record.
         * @param {$$rhino.String[]} [selectedFields] - Optional additional fields to return in the result.
         * The system always returns the sys_id.
         * @return {Optional<{ [key: string]: $$rhino.String; }>} Object used to interact with a single record.
         */
        insertOrUpdate(changes: { [key: string]: any; }, selectedFields?: $$rhino.String[]): Optional<{ [key: string]: $$rhino.String; }>;
    
        /**
         * Limits the number of records returned in a query.
         * @param {$$rhino.Number} limit - Number of records to return.
         * @return {GlideQuery} The query object being built.
         */
        limit(limit: $$rhino.Number): GlideQuery;
    
        /**
         * Returns the aggregate maximum of a given field.
         * @param {$$rhino.String} field - Field on which to perform the operation.
         * @return {Optional<$$rhino.String>} Object used to interact with a single record.
         */
        max(field: $$rhino.String): Optional<$$rhino.String>;
    
        /**
         * Returns the aggregate minimum of a given field.
         * @param {$$rhino.String} field - Field on which to perform the operation.
         * @return {Optional<$$rhino.String>} Object used to interact with a single record.
         */
        min(field: $$rhino.String): Optional<$$rhino.String>;
    
        /**
         * Orders the returned result in ascending order by a given field.
         * @param {$$rhino.String} fields - Comma-delimited fields to order the result by in ascending order.
         * @return {GlideQuery} The query object being built.
         */
        orderBy(fields: $$rhino.String): GlideQuery;
    
        /**
         * Orders the returned result in descending order by a given field.
         * @param {$$rhino.String} fieldOrAggregate - If the query does not use the aggregate() method, pass the field to order the results by.
         * If the query uses the {@link #aggregate} method, pass the type of aggregation function ({@link AggregateType}) to perform.
         * @param {$$rhino.String} field - Field on which to perform the operation.
         * @return {GlideQuery} The query object being built.
         */
        orderByDesc(fieldOrAggregate: $$rhino.String, field: $$rhino.String): GlideQuery;
    
        /**
         * Adds an OR clause to a query that returns values based on a given condition.
         * @param {($$rhino.String | GlideQuery)} fieldOrQuery - Field or another GlideQuery object used in the where clause.
         * If passing a field, you can dot-walk to a desired value.
         * @param {$$rhino.Nilable<QueryOperator>} operator - Optional operator used in the where clause.
         * If you do not pass an argument, the system uses the = operator.
         * @param {*} value - Value used in the where clause.
         * @return {GlideQuery} The query object being built.
         */
        orWhere(fieldOrQuery: $$rhino.String | GlideQuery, operator: $$rhino.Nilable<QueryOperator>, value: any): GlideQuery;
    
        /**
         * Adds an OR clause that returns records that do not contain a null value in a given field.
         * @param {$$rhino.String} field - Field on which to perform the operation.
         * @return {GlideQuery} The query object being built.
         */
        orWhereNotNull(field: $$rhino.String): GlideQuery;
    
        /**
         * Adds an OR clause to a query that returns records that contain a null value in a given field.
         * @param {$$rhino.String} field - Field on which to perform the operation.
         * @return {GlideQuery} The query object being built.
         */
        orWhereNull(field: $$rhino.String): GlideQuery;
    
        /**
         * Returns the results of the query as a Stream object containing the specified fields.
         * @param {($$rhino.String | $$rhino.String[])} fields - Fields to display in the result.
         * You can provide any number of fields as arguments, dot-walk to a desired value, or use a flag.
         * @return {Stream<{ [key: string]: $$rhino.String; }>} Object used to interact with a stream of items such as records.
         * @description You can append a flag to a field name to return the field's metadata instead of the field's value.
         * For example, using the field name company$DISPLAY returns the display value of a company field. Possible flags include:
         * DISPLAY=Returns the display value of a field;
         * CURRENCY_CODE=Returns the currency code of a currency field;
         * CURRENCY_DISPLAY=Returns the currency display value of a currency field;
         * CURRENCY_STRING=Returns the currency string of a currency field.
         */
        select(fields: $$rhino.String | $$rhino.String[]): Stream<{ [key: string]: $$rhino.String; }>;
    
        /**
         * Returns the result of the query as an Optional object containing specified fields.
         * @param {$$rhino.String} [fields] - Fields to display in the result.
         * You can provide any number of fields as arguments, dot-walk to a desired value, or use a flag.
         * @return {Optional<{ [key: string]: $$rhino.String; }>} Object used to interact with a single record.
         * @description You can append a flag to a field name to return the field's metadata instead of the field's value.
         * For example, using the field name company$DISPLAY returns the display value of a company field. Possible flags include:
         * DISPLAY=Returns the display value of a field;
         * CURRENCY_CODE=Returns the currency code of a currency field;
         * CURRENCY_DISPLAY=Returns the currency display value of a currency field;
         * CURRENCY_STRING=Returns the currency string of a currency field.
         */
        selectOne(fields?: $$rhino.String): Optional<{ [key: string]: $$rhino.String; }>;
    
        /**
         * Returns the aggregate sum of a given numeric field.
         * @param {$$rhino.String} field - Field on which to perform the operation.
         * @return {Optional<$$rhino.Number>} Object used to interact with a single record.
         * @description You can only use this method on Integer, Long, Floating Point Number, Double and Currency fields.
         */
        sum(field: $$rhino.String): Optional<$$rhino.Number>;
    
        /**
         * Returns a GlideRecord or GlideAggregate object that represents the current query.
         * @return {(GlideRecord | GlideAggregate)} GlideRecord or GlideAggregate object that contains the query.
         * @description After transforming the query, use the query() method in the GlideRecord or GlideAggregate classes to query the database.
         */
        toGlideRecord(): GlideRecord | GlideAggregate;
    
        /**
         * Updates an existing record that matches the defined conditions.
         * @param {{ [key: string]: any; }} changes - Object containing name-value pairs to update in the record. Names must match fields in the table.
         * @param {$$rhino.String[]} [selectedFields] - Optional additional fields to return in the result.
         * The system always returns the sys_id.
         * @return {Optional<{ [key: string]: $$rhino.String; }>} Object used to interact with a single record.
         */
        update(changes: { [key: string]: any; }, selectedFields?: $$rhino.String[]): Optional<{ [key: string]: $$rhino.String; }>;
    
        /**
         * Updates all existing records that match the defined conditions. Returns the number of records updated.
         * @param {{ [key: string]: any; }} changes - Object containing name-value pairs to update in the record. Names must match fields in the table.
         * @return {{ rowCount: $$rhino.Number; }} Object containing the number of records that were updated.
         */
        updateMultiple(changes: { [key: string]: any; }): { rowCount: $$rhino.Number; };
    
        /**
         * Adds a Where clause to the query that returns values based on a given condition.
         * @param {($$rhino.String | GlideQuery)} fieldOrQuery - Field or another GlideQuery object used in the where clause.
         * @param {$$rhino.Nilable<$$rhino.String>} operator - Optional operator used in the where clause.
         * If you do not pass an argument, the system uses the = operator.
         * @param {*} value - Value used in the where clause.
         * @return {GlideQuery} The query object being built.
         * @description Do not precede this method with the {@link #orWhere}, {@link #orWhereNull}, or {@link #orWhereNotNull} methods.
         */
        where(fieldOrQuery: $$rhino.String | GlideQuery, operator: $$rhino.Nilable<$$rhino.String>, value: any): GlideQuery;
    
        /**
         * Returns records that do not contain a null value in a given field.
         * @param {$$rhino.String} field - Field used in the query.
         * @return {GlideQuery} The query object being built.
         * @description Do not precede this method with the {@link #orWhere}, {@link #orWhereNull}, or {@link #orWhereNotNull} methods.
         */
        whereNotNull(field: $$rhino.String): GlideQuery;
    
        /**
         * Returns records that do not contain a null value in a given field.
         * @param {$$rhino.String} field - Field used in the query.
         * @return {GlideQuery} The query object being built.
         * @description Do not precede this method with the {@link #orWhere}, {@link #orWhereNull}, or {@link #orWhereNotNull} methods.
         */
        whereNull(field: $$rhino.String): GlideQuery;
    
        /**
         * Executes the query using the GlideRecordSecure API to securely query the database while honoring ACLs.
         * @return {GlideQuery} The query object being built.
         */
        withAcls(): GlideQuery;
    
        type: "GlideQuery";
    }

    /**
     * @todo Document global.GlideQueryActions
     */
    export class GlideQueryActions {
        // TODO: Add members for global.GlideQueryActions from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=89cffabe29300010fa9b76addd33871b

        type: "GlideQueryActions";
    }

    /**
     * @todo Document global.GlideQueryEvaluator
     */
    export class GlideQueryEvaluator {
        // TODO: Add members for global.GlideQueryEvaluator from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=d52b3c8a08013300fa9b4300d8d67a76

        type: "GlideQueryEvaluator";
    }

    /**
     * Utility class for working with GlideRecords.
     * @see {@link https://docs.servicenow.com/bundle/utah-api-reference/page/app-store/dev_portal/API_reference/GlideRecordUtil/concept/c_GlideRecordUtilAPI.html}
     * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/utah/server_legacy/c_GlideRecordUtilAPI}
     */
    export class GlideRecordUtil {
        /**
         * Returns the GlideRecord object for the specified configuration item (CI) using just the sys_id of the CI.
         * Use this method to quickly obtain a specific CI without knowing its associated class/table.
         * @param {string} sys_id - Sys_id of the desired CI.
         * @return {(GlideRecord | undefined)} GlideRecord object of the specified CI.
         */
        getCIGR(sys_id: string): GlideRecord | undefined;

        /**
         * Returns an array of all the fields in the specified GlideRecord.
         * Note: If there is a field name which is the same as the table name, the getFields() method does not return the value of the field.
         * @param {GlideRecord} gr - GlideRecord instance positioned to a valid record.
         * @return {string[]} Field names for the specified GlideRecord.
         */
        getFields(gr: GlideRecord): string[];

        /**
         * Returns a GlideRecord instance for the given table, positioned to the given sys_id, and of the right class (table).
         * This method is useful when you need to load a GlideRecord from a sys_id, but you don't know what the actual table is (because it may be extended from the base table).
         * This method always returns a GlideRecord of the correct type base_table: the name of the base table that the specified sys_id is in.
         * @param {string} baseTable - The name of the base table containing the sys_id.
         * @param {string} sys_id - The sys_id of the desired record.
         * @return {(GlideRecord | null)} The GlideRecord for the specified sys_id or null it not found.
         */
        getGR(baseTable: string, sys_id: string): GlideRecord | null;

        /**
         * Returns a Java ArrayList of the ancestors of the specified table name.
         * @param {string} tableName - Name of the table.
         * @return {Packages.java.util.ArrayList<Packages.java.lang.String>} List of ancestors of the specified table.
         */
        getTables(tableName: string): Packages.java.util.ArrayList<Packages.java.lang.String>;

        /**
         * Sets the fields in the specified GlideRecord with the field values contained in the specified hashmap, unless that field name is in the ignore hashmap.
         * @param {{ [key: string]: string; }} hashMap - An Object instance (being used as a hashmap), with properties named for fields and containing the fields' value.
         * @param {GlideRecord} now_GR - The GlideRecord instance to receive the field values.
         * @param {{ [key: string]: boolean; }} [ignore] - An optional hashmap of field names to ignore.
         */
        mergeToGR(hashMap: { [key: string]: string; }, now_GR: GlideRecord, ignore?: { [key: string]: boolean; }): void;
        
        /**
         * Populates the given hashmap from the given GlideRecord instance. Each field in the GlideRecord becomes a property in the hashmap.
         * @param {{ [key: string]: string }} hashMap - An object being used as a hashmap.
         * @param {GlideRecord} now_GR - A GlideRecord instance positioned to a valid record.
         * @param {{ [key: string]: boolean; }} [ignore] - An optional hashmap of file names not to populate.
         */
        populateFromGR(hashMap: { [key: string]: string }, now_GR: GlideRecord, ignore?: { [key: string]: boolean; }): void;

        type: "GlideRecordUtil";
    }

    /**
     * Utility api for supporting client side Grid Canvas layouts.
     */
    export class GridCanvasLoader extends AbstractAjaxProcessor {
        // TODO: Add members for global.GridCanvasLoader from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=264ff6c1d7230200a8228f0b6e6103ff

        type: "GridCanvasLoader";
    }

    /**
     * Make logging and debugging from Script easier by implementing levels of log output, selectable by per-caller identified sys_properties values.
     * This implements both Log4j style logging and BSD Syslog style logging. As default, the logger will use BSD style logging.
     * PLEASE CHOOSE ONE AND STICK TO IT (within a class anyhow)
     */
    export class GSLog {
        // TODO: Add members for global.GSLog from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=2e59987d0a0a2c3946f7118c070c03e3

        type: "GSLog";
    }

    /**
     * @todo Document global.ICalUtil
     */
    export type ICalUtil = Exclude<ICalUtilSNC, "type"> & { type: 'ICalUtil' };

    /**
     * Provides functions to generate iCalendar compliant events.
     * @see {@link https://docs.servicenow.com/bundle/utah-api-reference/page/app-store/dev_portal/API_reference/ICalUtilSNC/concept/c_ICalUtilSNCAPI.html}
     * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/utah/server_legacy/c_ICalUtilSNCAPI}
     */
    export class ICalUtilSNC {
        // TODO: Add members for global.ICalUtilSNC from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=0944d627c3202200b6dcdfdc64d3aebb

        type: "ICalUtilSNC";
    }

    /**
     * Incident state constants, use these constants when determining which incident state to use.
     */
    export class IncidentState extends AbstractAjaxProcessor {
        // TODO: Add members for global.IncidentState from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=3d9e146f9fa302000391b89a442e7005

        type: "IncidentState";
    }

    /**
     * @todo Document global.IncidentUtils
     */
    export type IncidentUtils = Exclude<IncidentUtilsSNC, "type"> & {
        // TODO: Add members for global.IncidentUtils from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=87e5e796531232000600e26b88dc3478
        type: 'IncidentUtils'
    };

    /**
     * This function contains utility functions related to Incident . This function should not be modified by the customer.=
     */
    export class IncidentUtilsSNC {
        // TODO: Add members for global.IncidentUtilsSNC from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=a1b5e796531232000600e26b88dc3472

        // * Public functions :
        // *
        // * ajaxFunction_getIncidentQueryParams
        // * ajaxFunction_makeIncidentCopy
        // * ajaxFunction_getKnowledgeGapMapping
        // * isCopyIncidentFlagValid
        // * makeRelatedTableCopy
        // * copyIncidentRelatedLists
        // * copyIncidentAttachments
        // * getCsvValue
        // * getProblemFromIncident

        type: "IncidentUtilsSNC";
    }

    /**
     * Called by processor to create a generic hierarchy diagram. May be extended to create new types of hierarchy diagrams.
     */
    export class InheritedRoleMapProcessor extends AbstractAjaxProcessor {
        // TODO: Add members for global.InheritedRoleMapProcessor from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=5b354e909f0002003d5c77a0942e7042

        type: "InheritedRoleMapProcessor";
    }

    /**
     * Provides scoped methods to create JSON objects from a string, and to turn JSON objects into strings.
     * @see {@link https://docs.servicenow.com/bundle/utah-api-reference/page/app-store/dev_portal/API_reference/JSON/concept/c_JSONAPI.html}
     * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/utah/server_legacy/c_JSONAPI}
     */
    export interface JSON {
        /**
         * Creates an object or primitive type from a JSON formatted string.
         * @static
         * @param {$$rhino.String} str - A JSON formatted string.
         * @param {(this: any, key: string, value: any) => any} [reviver] - A function that transforms the results. This function is called for each member of the object.
         * If a member contains nested objects, the nested objects are transformed before the parent object is.
         * @return {*} An object created from the specified string.
         * @description Proxies calls to the ES5 JSON object, named NativeJSON in the global scope.
         */
        parse(str: $$rhino.String, reviver?: (this: any, key: string, value: any) => any): any;
    
        /**
         * Creates a string from a JSON object.
         * @static
         * @param {*} jsonObject - JSON object to turn into a string.
         * @param {(this: any, key: string, value: any) => any} [replacer] - A function that transforms the results.
         * @param {(string | number)} [space] - Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
         * @return {string} A JSON formatted string.
         * @description Proxies calls to the ES5 JSON object, named NativeJSON in the global scope.
         * Converts a value to JSON notation using the following guidelines:
         *
         * If the value has a toJSON() method, it is responsible for defining the data that is serialized.
         *
         * Boolean, number, and string objects are converted to the corresponding primitive values during stringification; in accordance with the traditional conversion semantics.
         *
         * If a function, undefined, or a symbol is encountered during conversion, it is either omitted (when it is found in an object) or censored to null (when it is found in an array). JSON.stringify() also returns undefined when passing in "pure" values, such as JSON.stringify(function(){}) or JSON.stringify(undefined).
         *
         * All symbol-keyed properties are ignored, even when using a replacer() function.
         *
         * Instances of Date implement the toJSON() function by returning a string (the same as date.toISOString()), thus they are treated as strings.
         *
         * The numbers Infinity and NaN, as well as the value null, are all considered null.
         *
         * For all other object instances, only their enumerable properties are serialized.
         */
        stringify(jsonObject: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    
        /**
         * Creates a string from a JSON object.
         * @static
         * @param {*} jsonObject - JSON object to turn into a string.
         * @param {((number | string)[] | null)} [replacer] - An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
         * @param {(string | number)} [space] - Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
         * @return {string} A JSON formatted string.
         * @description Proxies calls to the ES5 JSON object, named NativeJSON in the global scope.
         * Converts a value to JSON notation using the following guidelines:
         *
         * If the value has a toJSON() method, it is responsible for defining the data that is serialized.
         *
         * Boolean, number, and string objects are converted to the corresponding primitive values during stringification; in accordance with the traditional conversion semantics.
         *
         * If a function, undefined, or a symbol is encountered during conversion, it is either omitted (when it is found in an object) or censored to null (when it is found in an array). JSON.stringify() also returns undefined when passing in "pure" values, such as JSON.stringify(function(){}) or JSON.stringify(undefined).
         *
         * All symbol-keyed properties are ignored, even when using a replacer() function.
         *
         * Instances of Date implement the toJSON() function by returning a string (the same as date.toISOString()), thus they are treated as strings.
         *
         * The numbers Infinity and NaN, as well as the value null, are all considered null.
         *
         * For all other object instances, only their enumerable properties are serialized.
         */
        stringify(jsonObject: any, replacer?: (number | string)[] | null, space?: string | number): string;
    
        type: "JSON";
    }
    
    /**
     * JavaScript utility functions.
     * @see {@link https://docs.servicenow.com/bundle/utah-api-reference/page/app-store/dev_portal/API_reference/JSUtil/concept/c_JSUtilAPI.html}
     * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/utah/server_legacy/c_JSUtilAPI}
     */
    export class JSUtil {
        /**
         * Returns a map (Object) that is the union of all the given maps.
         */
        static union(...maps: { [key: string]: any }[]): { [key: string]: any };
    
        /**
        * Removes entries from the given map. The second argument defines what will be removed. If it
        * is an array, it is treated as an array of names to remove. If it is an object, the names of
        * its properties are the names to remove. Otherwise, it is coerced to a string as the name of
        * the single item to remove.
        */
        static removeFromMap(map: { [key: string]: any }, names: any): void;
    
        /*
        *  Returns true if item is defined but has no properties or functions. (handy for associative arrays)
        */
        static isEmpty(item: any): boolean;
    
        /*
        * Returns true if the given item is not null and is not undefined.
        */
        static has(item: any): boolean;
    
        /*
        * Returns true if the given item is null or is undefined (the logical inverse of .has(), above).
        */
        static doesNotHave(item: any): boolean;
    
        /*
        * Returns true if the given item is null, undefined, or evaluates to the empty string.
        */
        static nil(item: any): boolean;
    
        /*
        * Returns true if the given item exists and is not empty (the logical inverse of .nil(), above).
        */
        static notNil(item: any): boolean;
    
        /*
        * Returns the Rhino global object.
        */
        static getGlobal(): any;
    
        /**
         * Returns true if the given item is a member of the given class.
         * For JavaScript objects, this method behaves exactly like the JavaScript operator "instanceof". However, this method (unlike the JavaScript operator) also tests Java objects.
         * @static
         * @param {*} item - The object to be tested.
         * @param {string} klass - The class to be tested (for Java objects, must be the complete class name, like "java.util.ArrayList").
         * @return {boolean}
         */
        static instance_of(item: any, klass: string): boolean;
    
        /**
         * Returns the type of the given value as a string, as follows.
         * @static
         * @param {*} value - The object to test.
         * @return {GlideJSType} A string value indicating the objec type.
         */
        static type_of(value: any | undefined): string;
    
    
        /**
        * Returns the type of the given value.
        *
        * If 'x' is JavaObject, then this is the class name,
        *
        * If 'x' is a JavaScript object from a JS Class (like our Script Include boilerplate)
        * then this is the value of the 'type' property which is meant to be the JavaScript
        * class name,
        *
        * If 'x' is a JavaScript Array, then this returns 'array',
        *
        * If 'x' is a JavaScript Date, this returns 'date'
        *
        * Otherwise this returns the JavaScript type: string, number, boolean or object as per
        * the type_of method (above).
        *
        * See Also: type_of
        */
        static typeOf(x: any): string;
    
        /*
        * Returns true if the given value is an instance of a Java object.
        */
        static isJavaObject(value: any): boolean;
    
        /*
        * Coerces the given item to a boolean. If the given item is a boolean, it is passed through. Non-zero numbers return true. Null or
        * undefined returns false. Strings return true only if exactly equal to 'true'.
        */
        static toBoolean(item: any): boolean;
    
        /*
        * Returns the value in a boolean GlideRecord field.
        */
        static getBooleanValue(gr: GlideRecord, field: string): boolean;
    
        /**
        * Determines whether a value exists within an object or not.
        * @param {} container The haystack to search within.
        * @param {} value The expected needle value to compare against.
        * @param boolean|undefined compareByIdentity If true, uses === for comparison; == otherwise.
        * @return True if value exists in container, False otherwise.
        */
        static contains(container: any, value: any, compareByIdentity?: boolean): boolean;
    
        /*
        * Returns true if the two given values are equivalent, and optionally logs any differences. The two
        * values may be any value - JavaScript primitives or objects. Objects of classes Object, Array, Date,
        * String, Boolean, and Number are all compared correctly and (as necessary) recursively. Note that
        * comparand types much match exactly - for the purposes of this comparison, 'abc' does NOT match
        * new String('abc'). If differences are logged, they may be retrieved from JSUtil.areEqualLog.
        */
        static areEqual(val1: any, val2: any, logDiff?: boolean): boolean;
    
        /*
        * Logs all the properties (recursively) in the given object: name, type, and value. The optional second parameter is a name for the logged object.
        */
        static logObject(obj: any, name: string): void;
    
        /*
        * Returns a string that recursively describes all the properties in the given object: name, type, and value.
        * The optional second parameter is a name for the logged object.
        */
        static describeObject(obj: any, name?: string): string;
    
        /*
        * NOTE: between this banner and the following banner, several string literals are specified in an odd way: by the contatenation of a single
        *       character ('&') and the remainder of the HTML entity (such as 'amp;'). This method was employed to avoid having the entities translated
        *       into the equivalent characters when the script include is edited in the instance.
        */
        static readonly AMP: RegExp;
        static readonly GT: RegExp;
        static readonly LT: RegExp;
        static readonly QT: RegExp;
        static readonly AMP_ENT: RegExp;
        static readonly GT_ENT: RegExp;
        static readonly LT_ENT: RegExp;
        static readonly QT_ENT: RegExp;
    
        static escapeText(text: string): string;
    
        static unescapeText(text: string): string;
    
        static escapeAttr(attr: string): string;
    
        static unescapeAttr(attr: string): string;
    
        /** Render an expanded/evaluted string from a string that may contain one
        *  or more Javascript expressions, each wrapped in a dolloar-braces
        *  delimiter pattern.
        *
        *     'The timeis:${newGlideDateTime()}'
        *
        *  will displaythecurrenttime.
        *
        *  When used in specific contexts, such as inside a workflow context
        *  certain global variables might be usable such as 'current' or 'workflow':
        *
        *      'WF State:${context.state},rec:${current.sys_id}'
        *
        *  and content can be substituted into data from various Javascripts:
        *
        *      <CREATED>${newGlideDateTime()}</CREATED>
        *
        *  WARNING: This is used heavily by workflows. If this is changed, then
        *           be sure to run all workflow tests. Test Log Message activity
        *           with ${workflow.variables.somevariable} and similar usages.
        */
        static strEval(str: string): string;
    }

    /**
     * Script for checking if table is many to many table
     */
    export class ManyToManyChecker extends AbstractAjaxProcessor {
        // TODO: Add members for global.ManyToManyChecker from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=8984a7c10f023300fd3e3632d4767e2a

        type: "ManyToManyChecker";
    }

    /**
     * @todo Document global.NiceError
     */
    export class NiceError {
        // TODO: Add members for global.NiceError from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=fc70ddc629230010fa9bf7f97d737e2e

        type: "NiceError";
    }

    /**
     * @todo Document global.Optional
     * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/utah/server/no-namespace/OptionalGlobalAPI}
     * @see {@link https://docs.servicenow.com/bundle/utah-api-reference/page/app-store/dev_portal/API_reference/Optional/concept/OptionalGlobalAPI.html}
     */
    export class Optional<T> {
        /**
         * Creates an instance of Optional.
         * @param {(T | null | undefined)} value - Value to be contained by Optional.
         * @param {({ (): T | null | undefined })} [lazyGetFn] - Function which returns a value.
         * Used when you want the Optional to contain data which may be costly to retrieve (like a query) and may not be necessary.
         * @param {string} [reason] - Reason given when an empty Optional is unwrapped (e.g. using `get()`)
         */
        constructor(value: T | null | undefined, lazyGetFn?: { (): T | null | undefined }, reason?: string);
    
        /**
         * Applies a predicate function, a function that takes a single value and returns true or false, to the record inside the Optional object.
         * If the function returns true, the method returns the Optional record unchanged. If the function returns false, it returns an empty Optional object.
         * @param {{ (value: T): boolean }} predicate - Predicate function to apply to the value inside the Optional object.
         * @return {Optional<U>} Object used to interact with a single record.
         */
        filter(predicate: { (value: T): boolean }): Optional<T>;
    
        /**
         * Function to apply to the results of the query that returned the Optional object.
         * @template U - The record type.
         * @param {{ (value: T): Optional<U> }} fn - Function to apply to the results of the query that returned the Optional object.
         * @return {Optional<U>} Object used to interact with a single record.
         */
        flatMap<U>(fn: { (value: T): Optional<U> }): Optional<U>;
    
        /**
         * Returns the record inside the Optional object, or throws an error if the query does not return a record.
         * @return {T} The record inside the Optional object. If the value is null or undefined, the system throws an error.
         */
        get(): T;
    
        /**
         * Applies a function to the record within an Optional object. If the Optional object does not contain a record, the function does not execute.
         * @param {{ (value: T): void }} fn - The function to apply to the record within the Optional object.
         */
        ifPresent(fn: { (value: T): void }): void;
    
        /**
         * Tests whether the current Optional contains no value.
         * @return {boolean} True if the current Optional contains no value; otherwise, false.
         */
        isEmpty(): boolean;
    
        /**
         * Tests whether the current Optional object contains a value.
         * @return {boolean} True if the current Optional contains a value; otherwise, false.
         */
        isPresent(): boolean;
    
        /**
         * Applies a function to the result of a query.
         * @template U - The mapped record type.
         * @param {{ (value: T): U }} fn - Function to apply to the result of the query.
         * @return {Optional<U>} Object used to interact with a single record.
         */
        map<U>(fn: { (value: T): U }): Optional<U>;
    
        /**
         * Provides an alternate value if the current Optional is empty.
         * @template U - The alternate value type.
         * @param {T} defaultValue - Alternate value to return if the current Optional is empty.
         * @return {(T | U)} Value within the current Optional object or the alternate value if the current Optional is empty.
         */
        orElse<U>(defaultValue: U): T | U;
    
        toString(): string;
    
        /**
         * Returns an empty Optional object. Use this method in an Else clause to handle a query that might not return a result.
         * @static
         * @template U - Optional value type.
         * @param {string} [reason] - Optional reason displayed in the log when Optional.get() is called on the empty Optional object.
         * @return {Optional<U>} Object used to interact with a single record.
         */
        static empty<U>(reason?: string): Optional<U>;
    
        /**
         * Returns a new Optional object. Instead of containing the record,
         * the object contains a function to get the record that is only called if and when requested in the code.
         * @static
         * @template U - The record type.
         * @param {({ (): U | null | undefined })} lazyGetFn - Function that returns a single record as a result of a query.
         * @return {Optional<U>} Object used to interact with a single record.
         */
        static lazy<U>(lazyGetFn: { (): U | null | undefined }): Optional<U>;
    
        /**
         * Wraps a given value in an Optional object. For example, you can wrap the result of a GlideRecord query in an Optional object to use the associated methods.
         * @static
         * @template U - The record type.
         * @param {U} value - Value inside the Optional object.
         * @return {Optional<U>} Object used to interact with a single record.
         */
        static of<U>(value: U): Optional<U>;
    }

    /**
     * The singleton type for {@link Stream.END}.
     * @hideconstructor
     */
    export abstract class STREAM_END { private constructor(); }

    /**
     * Interacts with a stream of items such as records.
     * @template T The element type.
     * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/StreamGlobalAPI}
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/Stream/concept/StreamGlobalAPI.html}
     */
    export class Stream<T> {
        /**
         * Creates an instance of Stream.
         * @param {({ (): T | STREAM_END })} nextFn - A function that retrieves the next item in the stream or returns {@link Stream.END} if there are no more items.
         */
        constructor(nextFn: { (): T | STREAM_END });

        /**
         * Limits the number of results returned by the stream.
         * @param {number} count - Number of records to return.
         * @return {Stream<T>} Object used to interact with a stream of items such as records.
         */
        limit(count: number): Stream<T>;

        /**
         * Returns results in batches of arrays, each containing the number of records passed to the method.
         * @param {number} count - Number of records in each array returned from the stream.
         * @return {Stream<T[]>} Object used to interact with a stream of items such as records.
         */
        chunk(count: number): Stream<T[]>;

        /**
         * Applies a function to each item in a stream and returns the updated Stream object.
         * @template U - The result element type.
         * @param {{ (obj: T): U }} fn - Function to apply to the result of the query that takes the each item in the stream as input.
         * @return {Stream<U>} Object containing the stream of records updated after applying the function.
         */
        map<U>(fn: { (obj: T): U }): Stream<U>;

        /**
         * Applies a function to every item in a stream. Returns another stream that you can iterate over.
         * @template U - The result stream element type.
         * @param {{ (obj: T): Stream<U> }} fn - Function to apply to the result of the query that returns a Stream object.
         * @return {Stream<U>} Object containing the stream of records updated after applying the function.
         */
        flatMap<U>(fn: { (obj: T): Stream<U> }): Stream<U>;

        /**
         * Applies a predicate function to each item in the Stream object.
         * If the predicate returns true, the method returns the stream.
         * If the predicate returns false, it returns an empty Stream object.
         * @param {{ (obj: T): boolean }} predicate - Predicate function to apply to every record or item inside the Stream object.
         * The function must take each item in the stream as input and return a boolean.
         * @return {Stream<T>} Object used to interact with a stream of items such as records.
         */
        filter(predicate: { (obj: T): boolean }): Stream<T>;

        /**
         * Returns the first record or item in the Stream object that matches the predicate function.
         * If no predicate function is provided, then the method returns the first record or item in the Stream.
         * @param {{ (obj: T): boolean }} [predicate] - Optional predicate function to apply to the items inside the Stream object.
         * The function must take each item in the stream as input and return a boolean.
         * @return {Optional<T>} Object containing the returned record.
         */
        find(predicate?: { (obj: T): boolean }): Optional<T>;

        /**
         * Applies a predicate function, a function that takes a single value and returns true or false, to each item in the stream.
         * If the predicate returns true for any item in the stream, the method returns true.
         * @param {{ (obj: T): boolean }} predicate - Predicate function to apply to the items inside the Stream object.
         * @return {boolean} True if the predicate function returned true for an item in the stream; otherwise, false.
         */
        some(predicate: { (obj: T): boolean }): boolean;

        /**
         * Applies a predicate function to every item in the Stream object.
         * If the predicate returns true for every item in the stream, the method returns true.
         * If the predicate returns false for any item in the stream, the method returns false.
         * @param {{ (obj: T): boolean }} predicate - Predicate function to apply to every record or item inside the Stream object.
         * The function must take each item in the stream as input and return a boolean.
         * @return {boolean} True if the predicate function returns true for every item in the stream; otherwise, false.
         */
        every(predicate: { (obj: T): boolean }): boolean;

        /**
         * Returns an array containing the given number of items from the stream.
         * @param {number} count - The maximum number of items from the stream to return in the array.
         * @return {T[]} Array containing the given number of items from the stream.
         */
        toArray(count: number): T[];

        /**
         * Executes a reducer function on each item in the stream, resulting in single output value.
         * @template U - The accumulated value type.
         * @param {{ (acc: U, cur: T): U }} reducerFn - Function to apply to each item in the stream that reduces the stream to a single value.
         * @param {U} initialValue - Value passed to the function as the initial value.
         * @return {U} Accumulated total of all items returned by the reducer function.
         */
        reduce<U>(reducerFn: { (acc: U, cur: T): U }, initialValue: U): U;

        /**
         * Applies the specified function to each record or item in the stream.
         * @param {{ (obj: T): void }} fn - Function to apply to each item in the stream.
         */
        forEach(fn: { (obj: T): void }): void;

        toString(): "Stream";

        /**
         * Returns a Stream object that contains the values from the provided array.
         * @static
         * @template U - The element type.
         * @param {U[]} arr - Array of values to create the stream from.
         * @return {Stream<U>} Object used to interact with a stream of items such as records.
         */
        static fromArray<U>(arr: U[]): Stream<U>;

        /**
         * Combines multiple Streams using a combiner function
         * @static
         * @template U - The input stream element type.
         * @template V - The result stream element type.
         * @param {{ (...values: U[]): V}} combinerFn - Function which has a N number parameters, one for each Stream, and return a combined value.
         * @param {...Stream<U>[]} streams - The streams to combine.
         * @return {Stream<V>} The merged stream.
         */
        static zip<U, V>(combinerFn: { (...values: U[]): V}, ...streams: Stream<U>[]): Stream<V>;

        static readonly END: STREAM_END;
    }

    /**
     * Locates the list that should be used for a table and view and parent (related list).
     * @description 1. Search for this table, this view, this related list
     * 2. Search for parents of this table, this view, this related list
     * 3. Search for this table, this view
     * 4. Search for parents of this table, this view
     * 5. Search for this table, default view
     * 6. Search for parents of this table, default view
     * 7. Construct and return the default list
     */
    export class SysList extends AbstractAjaxProcessor {
        // TODO: Add members for global.SysList from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=7d8f32c3c0a8016400e609be97b96d89

        type: "SysList";
    }

    /**
     * @todo Document global.SysRelatedList
     */
    export class SysRelatedList {
        // TODO: Add members for global.SysRelatedList from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=89171ef2c0a8016800449d9d0407bb27

        type: "SysRelatedList";
    }

    /**
     * Locate the list associated with the current user for the table and view
     */
    export class SysUserList extends AbstractAjaxProcessor {
        // TODO: Add members for global.SysUserList from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=7dc9266bc0a80164003bff257b3ff216

        type: "SysUserList";
    }

    /**
     * Task State Management Utility
     * @deprecated Helper functions for working with task-type table state attributes, primarily used by the Task Active State Management business rule to set the active field based on state changes
     * Can be called by any server script to determine inactive states, default work, or default close states for a given table
     * Configurations are define in the task.state dictionary element, usually using dictionary overrides since state values vary by table.
     */
    export class TaskStateUtil {
        // TODO: Add members for global.TaskStateUtil from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=96e1ade7c0a80a6d381ba0c6aeb4ad61

        type: "TaskStateUtil";
    }

    /**
     * @todo Document global.TaskUtils
     */
    export type TaskUtils = Exclude<TaskUtilsSNC, "type"> & { type: 'TaskUtils' };

    /**
     * @todo Document global.TaskUtilsSNC
     */
    export class TaskUtilsSNC {
        // TODO: Add members for global.TaskUtilsSNC from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=1cf5818a878010100e3dd61e36cb0b4a

        type: "TaskUtilsSNC";
    }

    /**
     * @todo Document global.UnifiedConversationUtil
     */
    export class UnifiedConversationUtil {
        // TODO: Add members for global.UnifiedConversationUtil from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=72ef5784e7431010748b42d6c2f6a9d1

        type: "UnifiedConversationUtil";
    }

    /**
     * Analyzes user skills against skills required to complete work items.
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/UserSkillAnalyzer/concept/UserSkillAnalyzerAPI.html}
     */
    export class UserSkillAnalyzer {
        // TODO: Add members for global.UserSkillAnalyzer

        type: "UserSkillAnalyzer";
    }

    /**
     * Used to configure options for choosing the right user and getting a sorted list of qualified users based on number of matching skills and skill-level gap.
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/UserSkillRanking/concept/UserSkillRankingAPI.html}
     */
    export class UserSkillRanking {
        // TODO: Add members for global.UserSkillRanking

        type: "UserSkillRanking";
    }

    /**
     * Validates field input values.
     */
    export class VAFieldValidator {
        // TODO: Add members for global.VAFieldValidator from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=1e2e643a5bd200101f254d3ba881c7d9

        type: "VAFieldValidator";
    }

    /**
     * Checks if schedule spans start and end dates are valid and that they don't overlap with any other rotation schdedule
     */
    export class ValidateSchedule extends AbstractAjaxProcessor {
        // TODO: Add members for global.ValidateSchedule from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=ecae190bbf1211003f07e2c1ac0739fb

        type: "ValidateSchedule";
    }

    /**
     * Used to parse the query and then evaluate the values of the variables starting with 'javascript:'.
     * Values are evaluated within the sandbox environment and doesn't throw an error in case of an exception.
     */
    export class VariableQueryParser extends AbstractAjaxProcessor {
        // TODO: Add members for global.VariableQueryParser from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=dadc4af05fa023008e6b1f9f2f731340

        type: "VariableQueryParser";
    }

    /**
     * @todo Document global.VariableUtil
     */
    export class VariableUtil {
        // TODO: Add members for global.VariableUtil from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=15f2285773011300f49d0690fdf6a721

        type: "VariableUtil";
    }

    /**
     * Walks the workflow and gets the list of successors for each activity along with a shortest path order that indicates the activity depth in the workflow.
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/Walkworkflow/concept/c_WalkWorkflowAPI.html}
     */
    export class WalkWorkflow {
        // TODO: Add members for global.WalkWorkflow

        type: "WalkWorkflow";
    }

    /**
     * The base class for all workflow activities.
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WFACtivityHandler/concept/c_WFACtivityHandlerAPI.html}
     */
    export class WFActivityHandler {
        // TODO: Add members for global.WFActivityHandler

        type: "WFActivityHandler";
    }

    /**
     * Handles the formatting of Windows OS names.
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WindowsOSNameHelper/concept/c_WindowsOSNameHelperAPI.html}
     */
    export class WindowsOSNameHelper {
        // TODO: Add members for global.WindowsOSNameHelper

        type: "WindowsOSNameHelper";
    }

    /**
     * This class calculates the duration (in seconds) based on the variables of a workflow activity.
     * It is an interface between Workflow Timer() and DurationCalculator().
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WorkflowDuration/concept/c_WorkflowDurationAPI.html}
     */
    export class WorkflowDuration {
        // TODO: Add members for global.WorkflowDuration

        type: "WorkflowDuration";
    }

    /**
     * Provides a way to query the workflow model, to step backwards and forwards between specified wf_history items,
     * and to query the history for activity and transition-specific information.
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WorkflowModelManagerAjax/concept/c_WorkflowModelManagerAjaxAPI.html}
     */
    export class WorkflowModelManager {
        // TODO: Add members for global.WorkflowModelManager

        type: "WorkflowModelManager";
    }

    /**
     * Provides an AjaxProcessor wrapper for the WorkflowModelManager.
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WorkflowModelManagerAjax/concept/c_WorkflowModelManagerAjaxAPI.html}
     */
    export class WorkflowModelManagerAjax extends AbstractAjaxProcessor {
        // TODO: Add members for global.WorkflowModelManagerAjax

        type: "WorkflowModelManagerAjax";
    }

    /**
     * This code is executed in business rule Set workflow scheduler script on table wf_workflow_schedule.
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WorkflowScheduler/concept/c_WorkflowSchedulerAPI.html}
     */
    export class WorkflowScheduler {
        // TODO: Add members for global.WorkflowScheduler

        type: "WorkflowScheduler";
    }

    /**
     * Generates a view that shows a workflow context on the timeline.
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WorkflowTimeLine/concept/c_WorkflowTimelineAPI.html}
     */
    export class WorkflowTimeline {
        // TODO: Add members for global.WorkflowTimeline

        type: "WorkflowTimeline";
    }

    /**
     * @todo Document global.CIUtils
     */
    export class CIUtils {
        // TODO: Add members for global.CIUtils from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=c93a87d20a0a0b1d0196af61b0ca8db5

        type: "CIUtils";
    }

    /**
     * @todo Document global.CIRelatedList
     */
    export class CIRelatedList {
        // TODO: Add members for global.CIRelatedList from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=b09a6c4b0a0a0b0200b8e7e041e95496

        type: "CIUtils";
    }

    /**
     * @todo Document global.GlideQueryParser
     */
    export class GlideQueryParser {
        // TODO: Add members for global.GlideQueryParser from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=ba60fb9545002010fa9b3a618d2297e1

        type: "CIUtils";
    }

    /**
     * @todo Document global.GlobalKnowledgeUtil
     */
    export type GlobalKnowledgeUtil = Exclude<GlobalKnowledgeUtilSNC, "type"> & { type: 'GlobalKnowledgeUtil' };

    /**
     * @todo Document global.GlobalKnowledgeUtilSNC
     */
    export class GlobalKnowledgeUtilSNC {
        // TODO: Add members for global.GlobalKnowledgeUtilSNC from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=bff2647bb712230026778d78ee11a936

        type: "GlobalKnowledgeUtilSNC";
    }

    /**
     * @todo Document global.GlobalServiceCatalogUtil
     */
    export class GlobalServiceCatalogUtil {
        // TODO: Add members for global.GlobalServiceCatalogUtil from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=c22bf956c3330200d68d3b0ac3d3aeb1

        type: "GlobalServiceCatalogUtil";
    }

    /**
     * @todo Document global.HostnameJS
     */
    export class HostnameJS {
        // TODO: Add members for global.HostnameJS from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=8998a2500ab3015300e6ebbf8bc77f26

        type: "HostnameJS";
    }

    /**
     * @todo Document global.IncidentUtils2
     */
    export type IncidentUtils2 = Exclude<IncidentUtils2SNC, "type"> & { type: 'IncidentUtils2' };

    /**
     * @todo Document global.IncidentUtils2SNC
     */
    export class IncidentUtils2SNC extends AbstractAjaxProcessor {
        // TODO: Add members for global.IncidentUtils2SNC from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=0ebbe74fc7001010c24ae122c7c26009

        type: "IncidentUtils2SNC";
    }

    /**
     * @todo Document global.ListCis
     */
    export class ListCis {
        // TODO: Add members for global.ListCis from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=84881a35c73320108c74759ab8c26087

        type: "ListCis";
    }

    /**
     * @todo Document global.MakeAndModelJS
     */
    export class MakeAndModelJS {
        // TODO: Add members for global.MakeAndModelJS from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=d7c58843ef72010098d5925495c0fb82

        type: "MakeAndModelJS";
    }

    /**
     * @todo Document global.ModelUtils
     */
    export class ModelUtils {
        // TODO: Add members for global.ModelUtils from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=e5e5e63edbdf33001f9b765f369619d9

        type: "ModelUtils";
    }

    /**
     * @todo Document global.OSChoice
     * @todo Add this as a 'see' reference to the {@link $$tableFields.cmdb_ci_computer#os} field.
     */
    export class OSChoice {
        // TODO: Add members for global.OSChoice from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=5107787137203000dcd48c00dfbe5da7

        type: "OSChoice";
    }

    /**
     * @todo Document global.ProblemState
     */
    export class ProblemState extends AbstractAjaxProcessor {
        // TODO: Add members for global.ProblemState from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=91d5739b875b13000e3dd61e36cb0b7f

        type: "ProblemState";
    }

    /**
     * @todo Document global.ProblemStateSNC
     */
    export class ProblemStateSNC {
        // TODO: Add members for global.ProblemStateSNC from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=7b547b5b875b13000e3dd61e36cb0b55

        type: "ProblemStateSNC";
    }

    /**
     * @todo Document global.ProblemStateUtils
     */
    export type ProblemStateUtils = Exclude<ProblemStateUtilsSNC, "type"> & { type: 'ProblemStateUtils' };

    /**
     * @todo Document global.ProblemStateUtilsSNC
     */
    export class ProblemStateUtilsSNC {
        // TODO: Add members for global.ProblemStateUtilsSNC from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=f8b66716871313000e3dd61e36cb0b77

        type: "ProblemStateUtilsSNC";
    }

    /**
     * @todo Document global.ProblemTaskState
     */
    export class ProblemTaskState extends AbstractAjaxProcessor {
        // TODO: Add members for global.ProblemTaskState from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=91d5739b875b13000e3dd61e36cb0b7f

        type: "ProblemTaskState";
    }

    /**
     * @todo Document global.ProblemTaskStateSNC
     */
    export class ProblemTaskStateSNC {
        // TODO: Add members for global.ProblemTaskStateSNC from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=7b547b5b875b13000e3dd61e36cb0b55

        type: "ProblemTaskStateSNC";
    }

    /**
     * @todo Document global.ProblemTaskStateUtils
     */
    export type ProblemTaskStateUtils = Exclude<ProblemTaskStateUtilsSNC, "type"> & { type: 'ProblemTaskStateUtils' };

    /**
     * @todo Document global.ProblemTaskStateUtilsSNC
     */
    export class ProblemTaskStateUtilsSNC {
        // TODO: Add members for global.ProblemTaskStateUtilsSNC from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=d12653fa535b13004247ddeeff7b12cb

        type: "ProblemTaskStateUtilsSNC";
    }

    /**
     * @todo Document global.ProductCatalogUtils
     */
    export class ProductCatalogUtils {
        // TODO: Add members for global.ProductCatalogUtils from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=f393dc7c37703000158bbfc8bcbe5d1d

        type: "ProductCatalogUtils";
    }

    /**
     * @todo Document global.RecursionTester
     */
    export class RecursionTester {
        // TODO: Add members for global.RecursionTester from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=b791a62e0a0a0b1200f3078481aaee5d

        type: "RecursionTester";
    }

    /**
     * @todo Document global.Schema
     */
    export class Schema {
        // TODO: Add members for global.Schema from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=4e115aed73512300bb513198caf6a749

        type: "Schema";
    }

    /**
     * @todo Document global.UserProfileService
     */
    export class UserProfileService {
        // TODO: Add members for global.UserProfileService from https://usmskdev2.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=0efb5d910f09230096f9d6892f767e6f

        type: "UserProfileService";
    }
}