/// <reference path="index.d.ts" />

//#region Class.create

//#region Base definitions

declare interface ICustomClassBase<B extends ICustomClassBase<B, N>, N extends string> {
    /**
     * The type name of the class.
     * @type {N}
     * @memberof ICustomClass
     */
    type: N;
}

// #endregion

//#region Prototype definitions

/**
 * Prototype for objects whose constructor has no arguments.
 * @interface ICustomClassPrototype0
 * @template B - The base type shared by the prototype and the object instance.
 * @template P - The type of prototype (self-referencing type)
 * @template N - The value of the name property for objects constructed with this prototype.
 */
declare interface ICustomClassPrototype0<B extends ICustomClassBase<B, N>, P extends B & ICustomClassPrototype0<B, P, N>, N extends string> extends ICustomClassBase<B, N> {
    /**
     * Called by {@see Class#create} to initialize the newly instantiated object
     * @this {P} The current "this" object.
     * @memberof ICustomClassPrototype0
     */
    initialize(this: P): void;
}

/**
 * Prototype for objects whose constructor has one argument.
 * @interface ICustomClassPrototype1
 * @template B - The base type shared by the prototype and the object instance.
 * @template P - The type of prototype (self-referencing type)
 * @template N - The value of the type property for objects constructed with this prototype.
 * @template A - The argument type.
 */
declare interface ICustomClassPrototype1<B extends ICustomClassBase<B, N>, P extends B & ICustomClassPrototype1<B, P, N, A>, N extends string, A> extends ICustomClassBase<B, N> {
    /**
     * Called by {@see Class#create} to initialize the newly instantiated object
     * @this {P} The current "this" object.
     * @param {A} arg - The argument provided to the constructor.
     * @memberof ICustomClassPrototype1
     */
    initialize(this: P, arg: A): void;
}

/**
 * Prototype for objects whose constructor has 2 arguments.
 * @interface ICustomClassPrototype2
 * @template B - The base type shared by the prototype and the object instance.
 * @template P - The type of prototype (self-referencing type)
 * @template N - The value of the type property for objects constructed with this prototype.
 * @template A0 - The first argument type.
 * @template A1 - The second argument type.
 */
declare interface ICustomClassPrototype2<B extends ICustomClassBase<B, N>, P extends B & ICustomClassPrototype2<B, P, N, A0, A1>, N extends string, A0, A1> extends ICustomClassBase<B, N> {
    /**
     * Called by {@see Class#create} to initialize the newly instantiated object
     * @this {P} The current "this" object.
     * @param {A0} arg0 - The first argument provided to the constructor.
     * @param {A1} arg1 - The second argument provided to the constructor.
     * @memberof ICustomClassPrototype2
     */
    initialize(this: P, arg0: A0, arg1: A1): void;
}

/**
 * Prototype for objects whose constructor has 3 arguments.
 * @interface ICustomClassPrototype3
 * @template B - The base type shared by the prototype and the object instance.
 * @template P - The type of prototype (self-referencing type)
 * @template N - The value of the type property for objects constructed with this prototype.
 * @template A0 - The first argument type.
 * @template A1 - The second argument type.
 * @template A2 - The third argument type.
 */
declare interface ICustomClassPrototype3<B extends ICustomClassBase<B, N>, P extends B & ICustomClassPrototype3<B, P, N, A0, A1, A2>, N extends string, A0, A1, A2> extends ICustomClassBase<B, N> {
    /**
     * Called by {@see Class#create} to initialize the newly instantiated object
     * @this {P} The current "this" object.
     * @param {A0} arg0 - The first argument provided to the constructor.
     * @param {A1} arg1 - The second argument provided to the constructor.
     * @param {A2} arg2 - The third argument provided to the constructor.
     * @memberof ICustomClassPrototype3
     */
    initialize(this: P, arg0: A0, arg1: A1, arg2: A2): void;
}

/**
 * Prototype for objects whose constructor has 4 arguments.
 * @interface ICustomClassPrototype4
 * @template B - The base type shared by the prototype and the object instance.
 * @template P - The type of prototype (self-referencing type)
 * @template N - The value of the type property for objects constructed with this prototype.
 * @template A0 - The first argument type.
 * @template A1 - The second argument type.
 * @template A2 - The third argument type.
 * @template A3 - The fourth argument type.
 */
declare interface ICustomClassPrototype4<B extends ICustomClassBase<B, N>, P extends B & ICustomClassPrototype4<B, P, N, A0, A1, A2, A3>, N extends string, A0, A1, A2, A3> extends ICustomClassBase<B, N> {
    /**
     * Called by {@see Class#create} to initialize the newly instantiated object
     * @this {P} The current "this" object.
     * @param {A0} arg0 - The first argument provided to the constructor.
     * @param {A1} arg1 - The second argument provided to the constructor.
     * @param {A2} arg2 - The third argument provided to the constructor.
     * @param {A3} arg3 - The fourth argument provided to the constructor.
     * @memberof ICustomClassPrototype4
     */
    initialize(this: P, arg0: A0, arg1: A1, arg2: A2, arg3: A3): void;
}

/**
 * Prototype for objects whose constructor has a variable nubmer of arguments.
 * @interface ICustomClassPrototypeN
 * @template B - The base type shared by the prototype and the object instance.
 * @template P - The type of prototype (self-referencing type)
 * @template N - The value of the type property for objects constructed with this prototype.
 */
declare interface ICustomClassPrototypeN<B extends ICustomClassBase<B, N>, P extends B & ICustomClassPrototypeN<B, P, N>, N extends string> extends ICustomClassBase<B, N> {
    /**
     * Called by {@see Class#create} to initialize the newly instantiated object
     * @this {P} The current "this" object.
     * @param {...any[]} args- The arguments provided to the constructor.
     * @memberof ICustomClassPrototypeN
     */
    initialize(this: P, ...args: any[]): void;
}

// #endregion

//#region Constructor definitions

/**
 * A class constructor that has no arguments.
 * @interface CustomClassConstructor0
 * @template B - The base type shared by the prototype and the object instance.
 * @template P - The type of prototype.
 * @template I - The constructed object type.
 */
declare interface CustomClassConstructor0<B extends ICustomClassBase<B, string>, P extends B & ICustomClassPrototype0<B, P, string>, I extends B> {
    /**
     * Creates an instance of CustomClassConstructor0.
     * @param {A} arg - The constructor argument.
     * @memberof CustomClassConstructor0
     */
    new(): I;

    /**
     * Creates an instance of CustomClassConstructor0.
     * @param {A} arg - The constructor argument.
     * @memberof CustomClassConstructor0
     */
    (): I;

    /**
     * The prototype that will be used to create the new object.
     * @type {P}
     * @memberof CustomClassConstructor0
     */
    prototype: P;
}

/**
 * A class constructor that has 1 argument.
 * @interface CustomClassConstructor1
 * @template B - The base type shared by the prototype and the object instance.
 * @template P - The type of prototype.
 * @template I - The constructed object type.
 * @template A - The constructor argument type.
 */
declare interface CustomClassConstructor1<B extends ICustomClassBase<B, string>, P extends B & ICustomClassPrototype1<B, P, string, A>, I extends B, A> {
    /**
     * Creates an instance of CustomClassConstructor1.
     * @param {A} arg - The constructor argument.
     * @memberof CustomClassConstructor1
     * @returns {I} - The new object instance.
     */
    new(arg: A): I;

    /**
     * Creates an instance of CustomClassConstructor1.
     * @param {A} arg - The constructor argument.
     * @memberof CustomClassConstructor1
     * @returns {I} - The new object instance.
     */
    (arg: A): I;

    /**
     * The prototype that will be used to create the new object.
     * @type {P}
     * @memberof CustomClassConstructor1
     */
    prototype: P;
}

/**
 * A class constructor that has 2 arguments.
 * @interface CustomClassConstructor2
 * @template B - The base type shared by the prototype and the object instance.
 * @template P - The type of prototype.
 * @template I - The constructed object type.
 * @template A0 - The argument type for the first constructor argument.
 * @template A1 - The argument type for the second constructor argument.
 */
declare interface CustomClassConstructor2<B extends ICustomClassBase<B, string>, P extends B & ICustomClassPrototype2<B, P, string, A0, A1>, I extends B, A0, A1> {
    /**
     * Creates an instance of CustomClassConstructor2.
     * @param {A0} arg0 - The first constructor argument.
     * @param {A1} arg1 - The second constructor argument.
     * @memberof CustomClassConstructor2
     * @returns {I} - The new object instance.
     */
    new(arg0: A0, arg1: A1): I;

    /**
     * Creates an instance of CustomClassConstructor2.
     * @param {A0} arg0 - The first constructor argument.
     * @param {A1} arg1 - The second constructor argument.
     * @memberof CustomClassConstructor2
     * @returns {I} - The new object instance.
     */
    (arg0: A0, arg1: A1): I;

    /**
     * The prototype that will be used to create the new object.
     * @type {P}
     * @memberof CustomClassConstructor2
     */
    prototype: P;
}

/**
 * A class constructor that has 3 arguments.
 * @interface CustomClassConstructor3
 * @template B - The base type shared by the prototype and the object instance.
 * @template P - The type of prototype.
 * @template I - The constructed object type.
 * @template A0 - The argument type for the first constructor argument.
 * @template A1 - The argument type for the second constructor argument.
 * @template A2 - The argument type for the third constructor argument.
 */
declare interface CustomClassConstructor3<B extends ICustomClassBase<B, string>, P extends B & ICustomClassPrototype3<B, P, string, A0, A1, A2>, I extends B, A0, A1, A2> {
    /**
     * Creates an instance of CustomClassConstructor3.
     * @param {A0} arg0 - The first constructor argument.
     * @param {A1} arg1 - The second constructor argument.
     * @param {A2} arg2 - The third constructor argument.
     * @memberof CustomClassConstructor3
     * @returns {I} - The new object instance.
     */
    new(arg0: A0, arg1: A1, arg2: A2): I;

    /**
     * Creates an instance of CustomClassConstructor3.
     * @param {A0} arg0 - The first constructor argument.
     * @param {A1} arg1 - The second constructor argument.
     * @param {A2} arg2 - The third constructor argument.
     * @memberof CustomClassConstructor3
     * @returns {I} - The new object instance.
     */
    (arg0: A0, arg1: A1, arg2: A2): I;

    /**
     * The prototype that will be used to create the new object.
     * @type {P}
     * @memberof CustomClassConstructor3
     */
    prototype: P;
}

/**
 * A class constructor that has 4 arguments.
 * @interface CustomClassConstructor4
 * @template B - The base type shared by the prototype and the object instance.
 * @template P - The type of prototype.
 * @template I - The constructed object type.
 * @template A0 - The argument type for the first constructor argument.
 * @template A1 - The argument type for the second constructor argument.
 * @template A2 - The argument type for the third constructor argument.
 * @template A3 - The argument type for the fourth constructor argument.
 */
declare interface CustomClassConstructor4<B extends ICustomClassBase<B, string>, P extends B & ICustomClassPrototype4<B, P, string, A0, A1, A2, A3>, I extends B, A0, A1, A2, A3> {
    /**
     * Creates an instance of CustomClassConstructor4.
     * @param {A0} arg0 - The first constructor argument.
     * @param {A1} arg1 - The second constructor argument.
     * @param {A2} arg2 - The third constructor argument.
     * @param {A3} arg3 - The fourth constructor argument.
     * @memberof CustomClassConstructor4
     * @returns {I} - The new object instance.
     */
    new(arg0: A0, arg1: A1, arg2: A2, arg3: A3): I;

    /**
     * Creates an instance of CustomClassConstructor4.
     * @param {A0} arg0 - The first constructor argument.
     * @param {A1} arg1 - The second constructor argument.
     * @param {A2} arg2 - The third constructor argument.
     * @param {A3} arg3 - The fourth constructor argument.
     * @memberof CustomClassConstructor4
     * @returns {I} - The new object instance.
     */
    (arg0: A0, arg1: A1, arg2: A2, arg3: A3): I;

    /**
     * The prototype that will be used to create the new object.
     * @type {P}
     * @memberof CustomClassConstructor4
     */
    prototype: P;
}

/**
 * A class constructor that has a variable number arguments.
 * @interface CustomClassConstructorN
 * @template B - The base type shared by the prototype and the object instance.
 * @template P - The type of prototype.
 * @template I - The constructed object type.
 */
declare interface CustomClassConstructorN<B extends ICustomClassBase<B, string>, P extends B & ICustomClassPrototypeN<B, P, string>, I extends B> {
    /**
     * Creates an instance of CustomClassConstructorN.
     * @param {...any[]} args - The constructor arguments.
     * @memberof CustomClassConstructorN
     * @returns {I} - The new object instance.
     */
    new(...args: any[]): I;

    /**
     * Creates an instance of CustomClassConstructorN.
     * @param {...any[]} args - The constructor arguments.
     * @memberof CustomClassConstructorN
     * @returns {I} - The new object instance.
     */
    (): I;

    /**
     * The prototype that will be used to create the new object.
     * @type {P}
     * @memberof CustomClassConstructorN
     */
    prototype: P;
}

// #endregion

declare var Class: {
    /**
     * Creates a ServiceNow-compatible object constructor.
     * @template B - The base type shared by the prototype and the object instance.
     * @template C - The constructor type.
     * @returns {C} - The ServiceNow-compatible object constructor.
     */
    create<B extends ICustomClassBase<B, string>, C extends CustomClassConstructor0<B, any, any> | CustomClassConstructor1<B, any, any, any> |
        CustomClassConstructor2<B, any, any, any, any> | CustomClassConstructor3<B, any, any, any, any, any> | CustomClassConstructor4<B, any, any, any, any, any, any> |
        CustomClassConstructorN<B, any, any>>(): C;
    create2<C extends CustomClassConstructor0<any, ICustomClassPrototype0<any, any, string>, ICustomClassPrototype0<any, any, string>> |
        CustomClassConstructor1<any, ICustomClassPrototype1<any, any, string, any>, ICustomClassPrototype1<any, any, string, any>, any> |
        CustomClassConstructor2<any, ICustomClassPrototype2<any, any, string, any, any>, ICustomClassPrototype2<any, any, string, any, any>, any, any> |
        CustomClassConstructor3<any, ICustomClassPrototype3<any, any, string, any, any, any>, ICustomClassPrototype3<any, any, string, any, any, any>, any, any, any> |
        CustomClassConstructor4<any, ICustomClassPrototype4<any, any, string, any, any, any, any>, ICustomClassPrototype4<any, any, string, any, any, any, any>, any, any, any, any> |
        CustomClassConstructorN<any, ICustomClassPrototypeN<any, any, string>, ICustomClassPrototypeN<any, any, string>>>(): C;
};

declare interface ObjectConstructor {
    extendsObject<B, E extends Omit<ICustomClassPrototype0<any, any, string>, "initialize">, P extends Omit<B, "type"> & E>(base: { new(): B; }, proto: E): P;
}

declare interface Id {
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

declare interface ObjectConstructor {
    extendsObject<B, E extends Omit<ICustomClassPrototype0<any, any, string>, "initialize">, P extends Omit<B, "type"> & E>(base: B, proto: E): P;
}

// #endregion
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

declare interface AbstractAjaxProcessorConstructor {
    new(value?: any): IAbstractAjaxProcessor;
    (): any;
    (value: any): any;
}

declare interface TaskStateUtil {
    /*
    * static properties and default values
    */
    ATTR_INACTIVE_STATES: "close_states";
    ATTR_DEFAULT_WORK: "default_work_state";
    ATTR_DEFAULT_CLOSE: "default_close_state";
    SYSTEM_DEFAULT_CLOSE: 3; // task closed complete state
    SYSTEM_DEFAULT_WORK: 2; // task work in progress state
    SYSTEM_INACTIVE_STATES: [3, 4, 7]; // task default inactive/close states

    /*
     * Get the active status of a given state
     * @param state value of the state field choice
     * @return boolean true if state is an active state
     */
    isStateInactive(state): boolean;
    /*
     * Get the value for the default work state, defaults to 2 if not specified
     * @return int
     */
    getDefaultWorkState(): number;

    /*
     * Get the value for the default close state, defaults to 3 if not specified
     * @return int
     */
    getDefaultCloseState(): number;

    /*
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

declare interface TaskStateUtilConstructor {
    new (task?: taskGlideRecord): TaskStateUtil;
    (task?: taskGlideRecord): TaskStateUtil;
}

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
    PENDING_STATES: ['not requested', 'not_required', 'requested'];

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

declare namespace NodeJS {
    export interface Global {
        AbstractAjaxProcessor: AbstractAjaxProcessorConstructor;
        TaskStateUtil: TaskStateUtilConstructor;
        WorkflowApprovalUtils: WorkflowApprovalUtilsConstructor;
    }
}