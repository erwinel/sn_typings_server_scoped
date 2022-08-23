/// <reference path="$$rhino.d.ts" />
/// <reference path="$$element.d.ts" />
/// <reference path="$$property.d.ts" />

declare interface IAbstractAjaxProcessor {
    CALLABLE_PREFIX: 'ajaxFunction_';
    
    prototype: IAbstractAjaxProcessor;
    
    initialize(request?: GlideServletRequest, responseXML?: XMLDocument2, gc?: GlideController): void;

    process(): any;

    newItem(name?: string): IXMLElement;

    /**
     * returns value of parameter as a Java String instance
     * @param {string} name - The name of the parameter
     * @return {$$rhino.String} The value of the parameter.
     * @memberof IAbstractAjaxProcessor
     */
    getParameter(name: string): $$rhino.String;

    getDocument(): XMLDocument2 | undefined;

    getRootElement(): IXMLElement;

    /**
     * Returns value of "sysparm_name" as a Java String instance
     * @return {$$rhino.Stringg}
     * @memberof IAbstractAjaxProcessor
     */
    getName(): $$rhino.String;
    
    /**
     * Returns value of "sysparm_value" as a Java String instance
     * @return {$$rhino.String}
     * @memberof IAbstractAjaxProcessor
     */
    getValue(): $$rhino.String;
    
    /**
     * Returns value of "sysparm_type" as a Java String instance
     * @return {$$rhino.String}
     * @memberof IAbstractAjaxProcessor
     */
    getType(): $$rhino.String;

    getChars(): $$rhino.String;
    
    setAnswer(value: any): void;
    
    setError(error: any): void;
}

/**
 * Names of workflow events availablein the base system.
 * 
 * This was created by referencing {@link https://docs.servicenow.com/bundle/rome-servicenow-platform/page/administer/workflow-administration/reference/r_WorkflowEventsInTheBaseSystem.html}
 * @enum {string}
 */
declare enum BaseSystemWorkflowEventNames {
    /**
     * String value used by activity definitions to respond to the onActivityComplete event handler.
     * @description Informs records in the Workflow Executing Activity [wf_executing] table about the completion of other activities in the same workflow context.
     * If the activity is allowed to set the boolean value for wf_executing.notify_termination, then set the value to true (activity.notify_termination = true) during the onExecute event.
     * Source: Workflow Engine, Process Terminations; Thread: Current thread, current mutex; Listeners: Join activity
     * @memberof BaseSystemWorkflowEventNames
     */
    activityComplete = "activityComplete",
    /**
     * String value used by workflow activities to respond to a request for cancellation.
     * @description From within activity definitions:
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
     * @memberof BaseSystemWorkflowEventNames
     */
    cancel = "cancel",
    /**
     * String value used by approval activities to respond to a change in the overall approval status of the current record.
     * @description Informs wf_executing records for approval activities about an approval that completed and triggered the timer event.
     * Approval Coordinator both registers for the event and triggers the event. The child approvals have listeners that determine their approval state.
     * Source: Approval Coordinator triggers the event during its onExecute; Thread: Current thread, current mutex;
     * Listeners: Approval Coordinator, Approval - User, and Approval - Group all have onDetermineApprovalState event handlers.
     * If the state is anything but Requested, the activity is considered finished, and the approval state (Approved, Rejected, Cancelled) is set to the wf_executing.result column
     * @memberof BaseSystemWorkflowEventNames
     */
    determineApprovalState = "determineApprovalState",
    /**
     * String value used by workflow activities to respond to a Timer activity that has expired.
     * @description Informs a record in the wf_executing table with the initial state of Executing to proceed with its primary work.
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
     * @memberof BaseSystemWorkflowEventNames
     */
    execute = "execute",
    /**
     * String value that the workflow (subflow) activity triggers as an event.
     * @description When a main workflow calls a subflow, the workflow keeps the ID of the subflow's context in the scratchpad. When the subflow is complete, it triggers the listener event via a business rule.
     * The listener event is passed to the parent context on completion of a subflow and is managed by the onListener action of the workflow activity.
     * Source: Business rule that is triggered by the update of a workflow that has a parent; Thread: Current thread, current mutex;
     * Listeners: This event is used by a subflow to inform it's parent flow that it is complete. The parent workflow will react to this event and continue.
     * @memberof BaseSystemWorkflowEventNames
     */
    listener = "listener",
    /**
     * String value sent to a workflow from an SLA to pause the Timer activity.
     * @description When an SLA is paused, the SLA workflows must be paused if there is a timer running.
     * Use is exclusive to the SLA timer.
     * Source: SLA; Thread: Business rule thread, private mutex; Listeners: Timer activity
     * @memberof BaseSystemWorkflowEventNames
     */
    pause = "pause",
    /**
     * String value triggered in the workflow by an Orchestration activity indicating that the MID Server has completed a task.
     * @description String value triggered in the workflow by an Orchestration activity indicating that the MID Server has completed a task.
     * The onProbe_complete event handler is in the WebServiceActivityHandler and is used by most Orchestration activities.
     * Source: Event used to restate a workflow that is waiting for the MID Server to process a task or activity; Thread: Worker thread, private mutex; Listeners: Orchestration activities
     * @memberof BaseSystemWorkflowEventNames
     */
    probe_complete = "probe_complete",
    /**
     * String value used by the Timer activity to resume a paused timer (see {@link BaseSystemWorkflowEventNames#pause}).
     * @description When an SLA is resumed, the SLA workflows must be resumed as well.
     * Use is exclusive to the SLA timer.
     * Source: SLA; Thread: Business rule thread, private mutex; Listeners: Timer activity
     * @memberof BaseSystemWorkflowEventNames
     */
    resume = "resume",
    /**
     * The End activity checks for this event.
     * @description The End activity checks for this event. This is only in the End activity.
     * Source: Any script can trigger or broadcast the stop event via a script include or workflow Run Script activity; Thread: Current thread, current mutex;
     * Listeners: This event is used by the End activity to exclude the Cancel activity and allow a workflow to end, even if canceled.
     * @memberof BaseSystemWorkflowEventNames
     */
    stop = "stop",
    /**
     * String value used by workflow activities to respond to a Timer activity that has expired.
     * @description Allows wf_executing records to be informed about a timer activity that has completed and has fired the timer event.
     * The Timer activity schedules a job that calls a script. The script calls fireEvent (wf_executing, timer).
     * Source: Timer activity via a scheduled job; Thread: Worker thread, private mutex; Listeners: Timer activity, onTimer event handler
     * @memberof BaseSystemWorkflowEventNames
     */
    timer = "timer",
    /**
     * String value used by the Join activity to respond to an otherEvent.
     * @description Informs records in the Workflow Executing Activity [wf_executing] table about an otherEvent that has completed.
     * The Join activity transitions from n number of preceding activities. These preceding activities all create a wf_executing record, which causes a check to see if the record already exists.
     * If the Join already exists, then the Join created by the executing transition sets the wf_executing record for deletion.
     * Source: Join activity; Thread: Current thread, current mutex; Listeners: Join activity, onOtherEvent event handler
     * @memberof BaseSystemWorkflowEventNames
     */
    otherEvent = "otherEvent"
}

declare type WorkflowOperationType = "insert" | "update" | "delete";

declare namespace global {
    /**
     * Various utility functions to assist with javascript Arrays
     * @export
     * @class ArrayUtil
     * @description https://inscomscd.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=fb32a2d8c0a80a6000e907036f484b5b
     */
    export class ArrayUtil {
        concat<T>(parent: Array<T>, child: Array<T>): Array<T>;
        contains(array: Array<any>, element: any): boolean;
        convertArray(a: any): Array<any>;
        diff<T>(a: Array<T>, b: Array<T>): Array<T>;
        ensureArray(a: any): Array<any>;
        indexOf(array: Array<any>, element: any, startIndex?: number): number;
        intersect<T>(a: Array<T>, b: Array<T>): Array<T>;
        union<T>(a: Array<T>, b: Array<T>): Array<T>;
        unique<T>(a: Array<T>): Array<T>;
    }

    /**
     * Utility class for working with GlideRecords.
     * @export
     * @class GlideRecordUtil
     * @description https://inscomscd.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=e403d6dc0ab301530055d5d1ee14f1db
     */
    export class GlideRecordUtil {
        getCIGR(sys_id: string): GlideRecord;
        getFields(gr: GlideRecord): string[];
        getGR(baseTable: string, sys_id: string): GlideRecord;
        getTables(tableName: string): IJavaArray<$$rhino.String>;
        mergeToGR(hashMap: { [key: string]: any }, now_GR: GlideRecord, ignore?: { [key: string]: boolean }): void;
        populateFromGR(hashMap: { [key: string]: any }, now_GR: GlideRecord, ignore?: { [key: string]: boolean }): void;
    }

    export class JSON {
        indentFlag: boolean;
        indentLevel: number;
        INDENT_SPACES: string;
        prettify(): void;
        startIndent(a: string[]): void;
        endIndent(a: string[]): void;
        indentLine(a: string[], skipNewLine: boolean): boolean;
        pad(n: number): string;
        encodeString(s: string): string;
        encodeArray<T>(o: T[]): string;
        getKeys(o: any): string[];
        encodeObject(o: any): string;
        encodeDate(o: GlideDateTime): string;
        encode(o: any): string;
        decode(source: string): any;
        type: "JSON";
        static parse(text: string, reviver?: any): any;
        static stringify(value: any, replacer?: any, space?: string): string;
    }

    /**
     * JavaScript utility functions.
     * @export
     * @class JSUtil
     * @description https://inscomscd.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=8d5571660a0a0b5000fc97b926f7f750
     */
    export class JSUtil {
        /**
         * Returns a map (Object) that is the union of all the given maps.
         */
        static union(...maps: { [key: string]: any }[]): { [key: string]: any };

        /**
        * Removes entries from the given map.  The second argument defines what will be removed.  If it 
        * is an array, it is treated as an array of names to remove.  If it is an object, the names of
        * its properties are the names to remove.  Otherwise, it is coerced to a string as the name of
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

        /*
        * Returns true if the given item is a member of the given class.  For JavaScript objects, this method behaves exactly
        * like the JavaScript operator "instanceof".  However, this method (unlike the JavaScript operator) also tests Java
        * objects.
        * 
        * item: the object to be tested.
        * klass: the class to be tested (for Java objects, must be the complete class name, like "java.util.ArrayList").
        */
        static instance_of(item: any, klass: string): boolean;

        /*
        * Returns the type of the given value as a string, as follows:
        *   'null'     if the given value is null or undefined
        *   'string'   if the given value is a primitive string or a String wrapper instance
        *   'number'   if the given value is a primitive number or a Number wrapper instance
        *   'boolean'  if the given value is a primitive boolean or a Boolean wrapper instance
        *   'function' if the given value is a function
        *   'object'   otherwise (including if it is a Java object)
        * 
        * See also: typeOf() which returns these or for Objects implented with 'type:' (such as 
        *           Script Includes that use our default boilerplate), this returns that type
        *           which is intended to be the Javascript 'className' of the object.  
        */
        static type_of(value: any): string;


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
        * Coerces the given item to a boolean.  If the given item is a boolean, it is passed through.  Non-zero numbers return true.  Null or
        * undefined returns false.  Strings return true only if exactly equal to 'true'.  
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
        * Returns true if the two given values are equivalent, and optionally logs any differences.  The two
        * values may be any value - JavaScript primitives or objects.  Objects of classes Object, Array, Date,
        * String, Boolean, and Number are all compared correctly and (as necessary) recursively.  Note that 
        * comparand types much match exactly - for the purposes of this comparison, 'abc' does NOT match
        * new String('abc').  If differences are logged, they may be retrieved from JSUtil.areEqualLog.
        */
        static areEqual(val1: any, val2: any, logDiff?: boolean): boolean;

        /*
        * Logs all the properties (recursively) in the given object: name, type, and value.  The optional second parameter is a name for the logged object.
        */
        static logObject(obj: any, name: string): void;

        /*
        * Returns a string that recursively describes all the properties in the given object: name, type, and value.  
        * The optional second parameter is a name for the logged object.
        */
        static describeObject(obj: any, name?: string): string;

        /*
        * NOTE: between this banner and the following banner, several string literals are specified in an odd way: by the contatenation of a single
        *       character ('&') and the remainder of the HTML entity (such as 'amp;').  This method was employed to avoid having the entities translated 
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
        *  WARNING: This is used heavily by workflows.  If this is changed, then 
        *           be sure to run all workflow tests. Test Log Message activity
        *           with ${workflow.variables.somevariable} and similar usages.
        */
        static strEval(str: string): string;
    }

    /**
     * 
     * @export
     * @class TaskUtilsSNC
     * @description https://inscomscd.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=1cf5818a878010100e3dd61e36cb0b4a
     */
    export class TaskUtilsSNC {
        getConfigurationItemFilter(current: any): string | undefined;
        getPCFilterEvaluated(className: string): string;
        refreshRelatedLists(task: GlideRecord | GlideElement): void;
        getManuallyAddedRecords(taskSysId: string, targetTable: string, targetField: string): string[];
        unpackDynamicGroup(recordId: string, userId: string): void;
        deleteUnpackedCIs(taskId: string, groupId: string, userId: string): void;
        createWorker(recordId: string, groupId: string, userId: string, deleteCIs?: boolean): string;
        type: 'TaskUtilsSNC'
    }

    /**
     * 
     * @export
     * @class TaskUtils
     */
    export class TaskUtils extends TaskUtilsSNC {
    }

    export interface AbstractAjaxProcessorConstructor {
        new(value?: any): IAbstractAjaxProcessor;
        (): any;
        (value: any): any;
    }
    
    /**
     * Workflow scripts provide an interface with the workflow engine.
     * @class Workflow
     */
    export class Workflow {
        /**
         * Creates an instance of the Workflow class.
         * @memberof Workflow
         */
        public constructor();

        /**
         * Sends the specified event (message) into the workflow context to pass along to the executing activities.
         * @param {string} contextId - The context ID.
         * @param {string} eventName - The name of the event.
         * @memberof Workflow
         * @description Typical use of this method is to enable activities that wait for some action to occur before proceeding.
         * For additional information on using broadcastEvent, refer to Workflow event-specific functions ({@link https://docs.servicenow.com/bundle/rome-servicenow-platform/page/administer/workflow-administration/reference/r_WorkflowEventSpecificFunctions.html}).
         * See {@link BaseSystemWorkflowEventNames} for available OOB events.
         */
        broadcastEvent(contextId: string, eventName: string): void;

        /**
         * Cancels all running workflows on this record by broadcasting the cancel event to activities in all running workflows on this record.
         * @param {GlideRecord} record - GlideRecord on any table. All workflows running on this record will be cancelled.
         * @memberof Workflow
         */
        cancel(record: GlideRecord): void;

        /**
         * Cancels this running context by broadcasting a cancel event to activities in this workflow context.
         * @param {GlideRecord} context - GlideRecord of the running context to cancel.
         * @memberof Workflow
         */
        cancelContext(context: GlideRecord): void;

        /**
         * Deletes all the workflows on the record.
         * @param {GlideRecord} current - GlideRecord for which the caller wants to delete all workflows. This can be any record on any table.
         * @memberof Workflow
         */
        deleteWorkflow(current: GlideRecord): void;

        /**
         * Fires the named event on the input record.
         *
         * Used in ActivitiesApproval Coordinator, Timer, Lock, and some others.
         * @param {GlideRecord} eventRecord - The event record.
         * @param {string} eventName - The name of the event to send to the executing workflow.
         * @memberof Workflow
         */
        fireEvent(eventRecord: GlideRecord, eventName: string): void;

        /**
         * Fires the named event on the record specified by record ID.
         *
         * Used in Activities Approval Coordinator, Timer, Lock, and some others.
         * @param {string} eventRecordId - The sys_id of the glide record.
         * @param {string} eventName - The name of the event to send to the executing workflow.
         * @memberof Workflow
         */
        fireEventById(eventRecordId: string, eventName: string): void;

        /**
         * Returns all workflow contexts for a specified record.
         * @param {GlideRecord} record - GlideRecord for which the caller wants a list of all workflow contexts. This can be any record on any table for which the caller wants the running workflow contexts.
         * @returns {GlideRecord} GlideRecord in the Workflow context [wf_context] table filtered for all workflow contexts for the specified record (in any state, such as running, cancelled, finished).
         * @memberof Workflow
         */
        getContexts(record: GlideRecord): GlideRecord;

        /**
         * Gets the estimated time for a workflow to complete.
         * @param {string} workflowId - Sys_id of the workflow (table wf_workflow) to get the estimated run time.
         * @returns {string} Display value from a GlideDuration (e.g., 3 days), or blank if unknown.
         * @memberof Workflow
         */
        getEstimatedDeliveryTime(workflowId: string): string;

        /**
         * Get the estimated elapsed execution time for the workflow version.
         * @param {GlideRecord} wfVersion - GlideRecord on table wf_workflow_version of a specific workflow version for which the caller wants the estimated during of executing.
         * @returns {string}
         * @memberof Workflow Display value from a GlideDuration (e.g., 3 days), or blank if unknown.
         */
        getEstimatedDeliveryTimeFromWFVersion(wfVersion: GlideRecord): string;

        /**
         * Gets the appropriate workflow return value for the input workflow ID.
         *
         * This is either the workflow checked out by the current user or the published workflow with the most recent date.
         * @param {string} workflowID - The sys_id of the workflow (table wf_workflow)
         * @param {number} amount - amount
         * @param {boolean} result - True, if true
         * @returns {*} The return value of the workflow as specified by the Return Value activity. Workflows without a Return Value activity return a null value.
         * @memberof Workflow
         */
        getReturnValue(workflowID: string, amount: number, result: boolean): any;

        /**
         * Gets all the currently running workflow contexts for the input record.
         *
         * The input record is any record on any table for which the caller wants the running workflow contexts.
         * @param {GlideRecord} record - GlideRecord of the record for which the caller wants a list of all running workflows.
         * @returns {GlideRecord} GlideRecord on table wf_context and filtered for all executing workflow contexts.
         * @memberof Workflow
         */
        getRunningFlows(record: GlideRecord): GlideRecord;

        /**
         * Gets the appropriate workflow version for the input workflow ID.
         * 
         * This is either the workflow checked out by the current user or the published workflow with the most recent date.
         * @param {string} workflowID - The sys_id of the workflow (table wf_workflow)
         * @returns {string} The workflow version.
         * @memberof Workflow
         */
        getVersion(workflowID: string): string;

        /**
         * Returns the appropriate workflow version for the input workflow name.
         * @param {string} workflowName - Name of the workflow (table wf_workflow)
         * @returns {string} The workflow version.
         * @memberof Workflow
         */
        getVersionFromName(workflowName: string): string;

        /**
         * Returns the sys_id of the workflow associated with the specified workflow name.
         * @param {string} workflowName - Name of the workflow.
         * @returns {string}The sys_id of the workflow associated with the passed in name.
         * @memberof Workflow 
         */
        getWorkflowFromName(workflowName: string): string;

        /**
         * Determines if a specified record has any workflow contexts associated to it.
         *
         * This includes running and completed workflow contexts.
         * @param {GlideRecord} record - GlideRecord under scrutiny. This GlideRecord can be from any table.
         * @returns {boolean} True, if record has associated workflow; otherwise, returns False.
         * @memberof Workflow
         */
        hasWorkflow(record: GlideRecord): boolean;

        /**
         * Recalculates the approvals and tasks for a workflow by adding new approvals and tasks, while not resetting current approvals and tasks.
         *
         * You can use this method to perform such tasks as adding a company to a change request, without resetting the current approvals for companies already in the workflow.
         * @param {GlideRecord} current - GlideRecord of the record this workflow is executing. This can by any record on any table.
         * @param {boolean} maintainStateFlag - Flag that indicates whether to maintain all approvals and tasks in their current state.
         *                                      true: Maintain all approvals and tasks in their current state; false: Update all approval and task states.
         * @memberof Workflow
         */
        restartWorkflow(current: GlideRecord, maintainStateFlag: boolean): void;

        /**
         * Runs all workflows for a given record in a given table and its descendant tables.
         * @param {GlideRecord} record - GlideRecord to run workflows against.
         * @param {WorkflowOperationType} operation - Database operation.
         * @memberof Workflow
         */
        runFlows(record: GlideRecord, operation: WorkflowOperationType): void;

        /**
         * Starts a specified workflow.
         * @param {string} workflowId - The sys_id of the workflow to start. This sys_id refers to table wf_workflow.
         * @param {GlideRecord} current - The record to use as current in this workflow. This is normally from the Table field of the workflow properties for this workflow.
         * @param {WorkflowOperationType} operation - The operation to perform on current.
         * @param {Array<any>} vars - Collection of variables to add to the workflow.
         * @returns {GlideRecord} GlideRecord on table wf_context for the newly created workflow context.
         * @memberof Workflow
         */
        startFlow(workflowId: string, current: GlideRecord, operation: WorkflowOperationType, vars: Array<any>): GlideRecord;

        /**
         * Helper method for business rule Auto start on context.
         * @param {GlideRecord} context - GlideRecord on table wf_context of a new record (the "current" record in the business rule).
         * @param {WorkflowOperationType} operation - Database operation being performed.
         * @memberof Workflow
         */
        startFlowFromContextInsert(context: GlideRecord, operation: WorkflowOperationType): void;
        
        /**
         * Used by business rule Start Workflow on table task_sla.
         * 
         * This starts a workflow and the extra arguments to this method are used by activity "Timer" to pause the execution of the workflow for some duration.
         * @param {string} workflowId - The sys_id of the workflow to start. This sys_id refers to table wf_workflow.
         * @param {number} retroactiveMSecs - Delay in milliseconds used by Activity Timer.
         * @param {GlideRecord} current - GlideRecord of the record to use as current in this workflow. This is normally from the Table field of the workflow properties for this workflow.
         * @param {WorkflowOperationType} operation - Database operation being performed.
         * @param {Array<any>} vars - Collection of variables to add to the workflow.
         * @param {*} [withSchedule] - Schedule used by Activity Timer
         * @returns {GlideRecord}
         * @memberof Workflow A GlideRecord on table wf_context on the inserted record for this newly created workflow context.
         */
        startFlowRetroactive(workflowId: string, retroactiveMSecs: number, current: GlideRecord, operation: WorkflowOperationType, vars: Array<any>, withSchedule?: any): GlideRecord;
    }

    export var AbstractAjaxProcessor: IAbstractAjaxProcessor;

    export class TaskStateUtil { }

    export class WorkflowApprovalUtils { }
}