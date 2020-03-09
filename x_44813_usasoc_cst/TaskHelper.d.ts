/// <reference path="../index.d.ts" />

declare namespace x_44813_usasoc_cst {
    export interface IRuleCacheItem {
        building?: string;
        location?: string;
        department?: string;
        business_unit?: string;
        company?: string;
        type: USASOC_CST_LOCATION_APPROVERS_TYPE;
        approval_group: sys_user_groupFields;
    }
    export class TaskHelper {
        static readonly TASKSTATE_PENDING: -5;
        static readonly TASKSTATE_OPEN: 1;
        static readonly TASKSTATE_WORK_IN_PROGRESS: 2;
        static readonly TASKSTATE_CLOSED_COMPLETE: 3;
        static readonly TASKSTATE_CLOSED_INCOMPLETE: 4;
        static readonly TASKSTATE_CLOSED_SKIPPED: 7;
        static readonly TASKAPPPROVAL_NOT_REQUESTED: "not requested";
        static readonly TASKAPPPROVAL_CANCELLED: "cancelled";
        static readonly TASKAPPPROVAL_REQUESTED: "requested";
        static readonly TASKAPPPROVAL_DUPLICATE: "duplicate";
        static readonly TASKAPPPROVAL_NOT_REQUIRED: "not_required";
        static readonly TASKAPPPROVAL_APPROVED: "approved";
        static readonly TASKAPPPROVAL_REJECTED: "rejected";
        constructor(task: string | taskFields);
        static getCaller(task: taskFields): sys_userFields | undefined;
        static isVip(task: taskFields): boolean;
        static getDefaultApprovalGroupByLocation(user: sys_userFields): sys_user_groupFields | undefined;
        static getLocationApproverRules(): IRuleCacheItem[];
        /**
         * Gets the caller or requestor.
         */
        getCaller(): sys_userFields;
        /**
         * Indicates whether the caller/requestor is VIP.
         */
        isVip(): boolean;
        /**
         * Gets approval group according to location-based rules.
         */
        getDefaultApprovalGroupByCallerLocation(): sys_user_groupFields;
        /**
         * Indicates whether a task is in one of the closed states.
         */
        isClosed(): boolean;
        /**
         * Indicates whether a task is in one of the closed states or is in the pending state.
         */
        isPendingOrClosed(): boolean;
        /**
         * Indicates whether a task is in the in-progress or pending state.
         */
        isInProgressOrPending(): boolean;
        /**
         * Indicates whether a task awaiting approval or approval has not been requested.
         */
        isPreApproval(): boolean;
        /**
         * Indicates whether a task is approved or approval is not required.
         */
        isApprovedOrNotRequired(): boolean;
        /**
         * Indicates whether a task approval status is rejected, cancelled or it is marked as duplicate.
         */
        isUnapproved(): boolean;
        /**
         * Indicates whether a task approval status is rejected or it is marked as duplicate.
         */
        isRejectedOrDuplicate(): boolean;
        /**
         * Indicates whether a task is in the pending state.
         */
        isPending(): boolean;
        /**
         * Indicates whether a task is in the open state.
         */
        isOpen(): boolean;
        /**
         * Indicates whether a task is in the in-progress state.
         */
        isInProgress(): boolean;
        /**
         * Indicates whether a task is in the closed-complete state.
         */
        isClosedComplete(): boolean;
        /**
         * Indicates whether a task is in the closed-incomplete state.
         */
        isClosedIncomplete(): boolean;
        /**
         * Indicates whether a task is in the closed-skipped state.
         */
        isClosedSkipped(): boolean;
        /**
         * Sets the status to pending.
         * @param {boolean} [force] if true, set status to pending even if it is in a closed state.
         * @returns {boolean} true if the status was changed; otherwise, false.
         */
        setPending(force?: boolean): boolean;
        /**
         * Sets the status to open.
         * @param {boolean} [force] if true, set status to open even if it is in a closed state.
         * @returns {boolean} true if the status was changed; otherwise, false.
         */
        setOpen(force?: boolean): boolean;
        /**
         * Sets the status to work-in-progress.
         * @param {boolean} [force] if true, set status to work-in-progress even if it is in a closed state.
         * @returns {boolean} true if the status was changed; otherwise, false.
         */
        setInProgress(force?: boolean): boolean;
        /**
         * Sets the status to closed-complete.
         * @param {boolean} [force] if true, set status to closed-complete even if it is already in a closed state.
         * @returns {boolean} true if the status was changed; otherwise, false.
         */
        setClosedComplete(force?: boolean): boolean;
        /**
         * Sets the status to closed-incomplete.
         * @param {boolean} [force] if true, set status to closed-incomplete even if it is already in a closed state.
         * @returns {boolean} true if the status was changed; otherwise, false.
         */
        setClosedIncomplete(force?: boolean): boolean;
        /**
         * Sets the status to closed-skipped.
         * @param {boolean} [force] if true, set status to closed-skipped even if it is already in a closed state.
         * @returns {boolean} true if the status was changed; otherwise, false.
         */
        setClosedSkipped(force?: boolean): boolean;
    }
}