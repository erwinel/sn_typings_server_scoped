/// <reference path="$$rhino.d.ts" />
/// <reference path="$$element.d.ts" />
/// <reference path="$$property.d.ts" />

declare interface IAbstractAjaxProcessor {
    CALLABLE_PREFIX: 'ajaxFunction_';
    process(): any;
    newItem(name: string): XMLNode;
    getParameter(name: string): $$rhino.String;
    getDocument(): XMLDocument2;
    getRootElement(): XMLNode;
    getName(): $$rhino.String;
    getType(): $$rhino.String;
    getChars(): $$rhino.String;
    setAnswer(value: any): void;
    setError(error: any): void;
    type: "AbstractAjaxProcessor";
}

/**
 * Names of workflow events availablein the base system.
 * 
 * This was created by referencing {@link https://docs.servicenow.com/bundle/rome-servicenow-platform/page/administer/workflow-administration/reference/r_WorkflowEventsInTheBaseSystem.html}
 * @enum {string}
 */
 declare enum BaseSystemWorkflowEventNames {
    /**
     * Informs records in the Workflow Executing Activity [wf_executing] table about the completion of other activities in the same workflow context.
     * If the activity is allowed to set the boolean value for wf_executing.notify_termination, then set the value to true (activity.notify_termination = true) during the onExecute event.
     * Source: Workflow Engine, Process Terminations; Thread: Current thread, current mutex; Listeners: Join activity
     * @summary String value used by activity definitions to respond to the onActivityComplete event handler.
     * @memberof BaseSystemWorkflowEventNames
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
     * @memberof BaseSystemWorkflowEventNames
     */
    cancel = "cancel",
    /**
     * Informs wf_executing records for approval activities about an approval that completed and triggered the timer event.
     * Approval Coordinator both registers for the event and triggers the event. The child approvals have listeners that determine their approval state.
     * Source: Approval Coordinator triggers the event during its onExecute; Thread: Current thread, current mutex;
     * Listeners: Approval Coordinator, Approval - User, and Approval - Group all have onDetermineApprovalState event handlers.
     * If the state is anything but Requested, the activity is considered finished, and the approval state (Approved, Rejected, Cancelled) is set to the wf_executing.result column
     * @summary String value used by approval activities to respond to a change in the overall approval status of the current record.
     * @memberof BaseSystemWorkflowEventNames
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
     * @memberof BaseSystemWorkflowEventNames
     */
    execute = "execute",
    /**
     * When a main workflow calls a subflow, the workflow keeps the ID of the subflow's context in the scratchpad. When the subflow is complete, it triggers the listener event via a business rule.
     * The listener event is passed to the parent context on completion of a subflow and is managed by the onListener action of the workflow activity.
     * Source: Business rule that is triggered by the update of a workflow that has a parent; Thread: Current thread, current mutex;
     * Listeners: This event is used by a subflow to inform it's parent flow that it is complete. The parent workflow will react to this event and continue.
     * @summary String value that the workflow (subflow) activity triggers as an event.
     * @memberof BaseSystemWorkflowEventNames
     */
    listener = "listener",
    /**
     * When an SLA is paused, the SLA workflows must be paused if there is a timer running.
     * Use is exclusive to the SLA timer.
     * Source: SLA; Thread: Business rule thread, private mutex; Listeners: Timer activity
     * @summary String value sent to a workflow from an SLA to pause the Timer activity.
     * @memberof BaseSystemWorkflowEventNames
     */
    pause = "pause",
    /**
     * String value triggered in the workflow by an Orchestration activity indicating that the MID Server has completed a task.
     * The onProbe_complete event handler is in the WebServiceActivityHandler and is used by most Orchestration activities.
     * Source: Event used to restate a workflow that is waiting for the MID Server to process a task or activity; Thread: Worker thread, private mutex; Listeners: Orchestration activities
     * @summary String value triggered in the workflow by an Orchestration activity indicating that the MID Server has completed a task.
     * @memberof BaseSystemWorkflowEventNames
     */
    probe_complete = "probe_complete",
    /**
     * When an SLA is resumed, the SLA workflows must be resumed as well.
     * Use is exclusive to the SLA timer.
     * Source: SLA; Thread: Business rule thread, private mutex; Listeners: Timer activity
     * @summary String value used by the Timer activity to resume a paused timer (see {@link BaseSystemWorkflowEventNames#pause}).
     * @memberof BaseSystemWorkflowEventNames
     */
    resume = "resume",
    /**
     * The End activity checks for this event. This is only in the End activity.
     * Source: Any script can trigger or broadcast the stop event via a script include or workflow Run Script activity; Thread: Current thread, current mutex;
     * Listeners: This event is used by the End activity to exclude the Cancel activity and allow a workflow to end, even if canceled.
     * @summary The End activity checks for this event.
     * @memberof BaseSystemWorkflowEventNames
     */
    stop = "stop",
    /**
     * Allows wf_executing records to be informed about a timer activity that has completed and has fired the timer event.
     * The Timer activity schedules a job that calls a script. The script calls fireEvent (wf_executing, timer).
     * Source: Timer activity via a scheduled job; Thread: Worker thread, private mutex; Listeners: Timer activity, onTimer event handler
     * @summary String value used by workflow activities to respond to a Timer activity that has expired.
     * @memberof BaseSystemWorkflowEventNames
     */
    timer = "timer",
    /**
     * Informs records in the Workflow Executing Activity [wf_executing] table about an otherEvent that has completed.
     * The Join activity transitions from n number of preceding activities. These preceding activities all create a wf_executing record, which causes a check to see if the record already exists.
     * If the Join already exists, then the Join created by the executing transition sets the wf_executing record for deletion.
     * Source: Join activity; Thread: Current thread, current mutex; Listeners: Join activity, onOtherEvent event handler
     * @summary String value used by the Join activity to respond to an otherEvent.
     * @memberof BaseSystemWorkflowEventNames
     */
    otherEvent = "otherEvent"
}

export type WorkflowOperationType = "insert" | "update" | "delete";

declare namespace global {
    export interface AbstractAjaxProcessorConstructor {
        new(value?: any): IAbstractAjaxProcessor;
        (): any;
        (value: any): any;
    }
    
    export interface TaskStateUtilConstructor {
        new (task?: taskGlideRecord): TaskStateUtil;
        (task?: taskGlideRecord): TaskStateUtil;
    }

    export interface WorkflowApprovalUtilsConstructor {
        new(): WorkflowApprovalUtils;
        (): WorkflowApprovalUtils;
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
         * Typical use of this method is to enable activities that wait for some action to occur before proceeding.
         * For additional information on using broadcastEvent, refer to Workflow event-specific functions ({@link https://docs.servicenow.com/bundle/rome-servicenow-platform/page/administer/workflow-administration/reference/r_WorkflowEventSpecificFunctions.html}).
         * See {@link BaseSystemWorkflowEventNames} for available OOB events.
         *
         * @param {string} contextId - The context ID.
         * @param {string} eventName - The name of the event.
         * @memberof Workflow
         * @summary Sends the specified event (message) into the workflow context to pass along to the executing activities.
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

    export var TaskStateUtil: TaskStateUtilConstructor;

    export var  WorkflowApprovalUtils: WorkflowApprovalUtilsConstructor;
}