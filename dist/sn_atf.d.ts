/**
 * GlideElement values from the Test Step Environment table.
 * @interface sys_atf_step_configFields
 * @extends {sys_metadataFields}
 */
declare interface sys_atf_step_envFields extends sys_metadataFields {
    /**
     * Class name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_envFields
     */
    class_name: $$rhino.Nilable<$$property.Element>;
    
    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_envFields
     */
    description: $$rhino.Nilable<$$property.Element>;
    
    /**
     * Has batch constraint
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_atf_step_envFields
     */
    has_batch_constraint: $$rhino.Nilable<$$property.Boolean>;
    
    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_envFields
     */
    name: $$rhino.Nilable<$$property.Element>;
    
    /**
     * Order
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_atf_step_envFields
     */
    order: $$rhino.Nilable<$$property.Numeric>;
    
    /**
     * Class type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_envFields
     */
    type: $$rhino.Nilable<$$property.Element>;
}
/**
 * Record for items from the 'sys_atf_step_env' table
 * @typedef {(sys_metadataGlideRecord & sys_atf_step_envFields)} sys_atf_step_envGlideRecord
 */
declare type sys_atf_step_envGlideRecord = sys_metadataGlideRecord & sys_atf_step_envFields;
declare type sys_atf_step_envElement = $$element.Reference<sys_atf_step_envFields, sys_atf_step_envGlideRecord>;
declare type sys_atf_step_envProperty = $$property.generic.ReferenceProperty<sys_atf_step_envFields, sys_atf_step_envGlideRecord, sys_atf_step_envElement>;

/**
 * GlideElement values from the Test Step Config Category table.
 * @interface sys_atf_step_config_categoryFields
 * @extends {sys_metadataFields}
 */
declare interface sys_atf_step_config_categoryFields extends sys_metadataFields {
    /**
     * Display name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_config_categoryFields
     */
    display_name: $$rhino.Nilable<$$property.Element>;
    
    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_config_categoryFields
     */
    name: $$rhino.Nilable<$$property.Element>;
    
    /**
     * Step environment
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_atf_step_envFields, sys_atf_step_envGlideRecord>>}
     * @memberof sys_atf_step_config_categoryFields
     * @description Refers to sys_atf_step_env (Table)
     */
    step_env: $$rhino.Nilable<$$property.generic.Reference<sys_atf_step_envFields, sys_atf_step_envGlideRecord>>;
}
/**
 * Record for items from the 'sys_atf_step_config_category' table
 * @typedef {(sys_metadataGlideRecord & sys_atf_step_config_categoryFields)} sys_atf_step_config_categoryGlideRecord
 */
declare type sys_atf_step_config_categoryGlideRecord = sys_metadataGlideRecord & sys_atf_step_config_categoryFields;
declare type sys_atf_step_config_categoryElement = $$element.Reference<sys_atf_step_config_categoryFields, sys_atf_step_config_categoryGlideRecord>;
declare type sys_atf_step_config_categoryProperty = $$property.generic.ReferenceProperty<sys_atf_step_config_categoryFields, sys_atf_step_config_categoryGlideRecord, sys_atf_step_config_categoryElement>;

/**
 * GlideElement values from the Test Step Config table.
 * @interface sys_atf_step_configFields
 * @extends {sys_metadataFields}
 */
declare interface sys_atf_step_configFields extends sys_metadataFields {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_atf_step_configFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;
    
    /**
     * Batch order constraint
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_configFields
     */
    batch_order_constraint: $$rhino.Nilable<$$property.Element>;

    /**
     * Can mutate page
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_atf_step_configFields
     */
    can_mutate_page: $$rhino.Nilable<$$property.Boolean>;
    
    /**
     * Category
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_atf_step_config_categoryFields, sys_atf_step_config_categoryGlideRecord>>}
     * @memberof sys_atf_step_configFields
     * @description Refers to sys_atf_step_config_category (Table)
     */
    category: $$rhino.Nilable<$$property.generic.Reference<sys_atf_step_config_categoryFields, sys_atf_step_config_categoryGlideRecord>>;
    
    /**
     * Class Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_configFields
     */
    class_name: $$rhino.Nilable<$$property.Element>;
    
    /**
     * Class type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_configFields
     */
    class_type: $$rhino.Nilable<$$property.Element>;

    /**
     * Deprecated
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_atf_step_configFields
     */
    deprecated: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Description generation script
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sys_atf_step_configFields
     */
    description_generator: $$rhino.Nilable<$$property.Script>;

    /**
     * HTML description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_configFields
     * @description Internal type is "html"
     */
    html_description: $$rhino.Nilable<$$property.Element>;

    /**
     * Icon
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_configFields
     */
    icon: $$rhino.Nilable<$$property.Element>;

    /**
     * Input variables
     * @type {$$rhino.Nilable<$$property.generic.Reference<atf_input_variableFields, atf_input_variableGlideRecord>>}
     * @memberof sys_atf_step_configFields
     * @description Refers to atf_input_variable (Table)
     */
    inputs: $$rhino.Nilable<$$property.generic.Reference<atf_input_variableFields, atf_input_variableGlideRecord>>;
    
    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_configFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Order
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_atf_step_configFields
     */
    order: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Output variables
     * @type {$$rhino.Nilable<$$property.generic.Reference<atf_output_variableFields, atf_output_variableGlideRecord>>}
     * @memberof sys_atf_step_configFields
     * @description Refers to atf_output_variable (Table)
     */
    outputs: $$rhino.Nilable<$$property.generic.Reference<atf_output_variableFields, atf_output_variableGlideRecord>>;
    
    /**
     * Step environment
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_atf_step_envFields, sys_atf_step_envGlideRecord>>}
     * @memberof sys_atf_step_configFields
     * @description Refers to sys_atf_step_env (Table)
     */
    step_env: $$rhino.Nilable<$$property.generic.Reference<sys_atf_step_envFields, sys_atf_step_envGlideRecord>>;

    /**
     * Step execution script
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sys_atf_step_configFields
     */
    step_execution_generator: $$rhino.Nilable<$$property.Script>;

    /**
     * Template reminder
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_configFields
     */
    template_reminder: $$rhino.Nilable<$$property.Element>;
    
    /**
     * Type
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>}
     * @memberof sys_atf_step_configFields
     * @description Refers to sys_db_object (Table)
     */
    type: $$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>;

    /**
     * Wizard Redirect
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_atf_step_configFields
     */
    wizard_redirect: $$rhino.Nilable<$$property.Element>;
}
/**
 * Record for items from the 'sys_atf_step_config' table
 * @typedef {(sys_metadataGlideRecord & sys_atf_step_configFields)} sys_atf_step_configGlideRecord
 */
declare type sys_atf_step_configGlideRecord = sys_metadataGlideRecord & sys_atf_step_configFields;
declare type sys_atf_step_configElement = $$element.Reference<sys_atf_step_configFields, sys_atf_step_configGlideRecord>;
declare type sys_atf_step_configProperty = $$property.generic.ReferenceProperty<sys_atf_step_configFields, sys_atf_step_configGlideRecord, sys_atf_step_configElement>;

/**
 * GlideElement values from the Test Variable table.
 * @interface sys_atf_variableFields
 * @extends {var_dictionaryFields}
 */
declare interface sys_atf_variableFields extends var_dictionaryFields {
    /**
     * Model
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_atf_step_configFields, sys_atf_step_configGlideRecord>>}
     * @memberof sys_atf_variableFields
     * @description Refers to sys_atf_step_config (Table)
     */
    model: $$rhino.Nilable<$$property.generic.Reference<sys_atf_step_configFields, sys_atf_step_configGlideRecord>>;
}
/**
 * Record for items from the 'sys_atf_variable' table
 * @typedef {(var_dictionaryGlideRecord & sys_atf_variableFields)} sys_atf_variableGlideRecord
 */
declare type sys_atf_variableGlideRecord = var_dictionaryGlideRecord & sys_atf_variableFields;
declare type sys_atf_variableElement = $$element.Reference<sys_atf_variableFields, sys_atf_variableGlideRecord>;
declare type sys_atf_variableProperty = $$property.generic.ReferenceProperty<sys_atf_variableFields, sys_atf_variableGlideRecord, sys_atf_variableElement>;

/**
 * GlideElement values from the Input Variables table.
 * @interface atf_input_variableFields
 * @extends {sys_atf_variableFields}
 */
declare interface atf_input_variableFields extends sys_atf_variableFields {
}
/**
 * Record for items from the 'atf_input_variable' table
 * @typedef {(sys_atf_variableGlideRecord & atf_input_variableFields)} atf_input_variableGlideRecord
 */
declare type atf_input_variableGlideRecord = sys_atf_variableGlideRecord & atf_input_variableFields;
declare type atf_input_variableElement = $$element.Reference<atf_input_variableFields, atf_input_variableGlideRecord>;
declare type atf_input_variableProperty = $$property.generic.ReferenceProperty<atf_input_variableFields, atf_input_variableGlideRecord, atf_input_variableElement>;

/**
 * GlideElement values from the Output Variables table.
 * @interface atf_output_variableFields
 * @extends {sys_atf_variableFields}
 */
declare interface atf_output_variableFields extends sys_atf_variableFields {
}
/**
 * Record for items from the 'atf_output_variable' table
 * @typedef {(sys_atf_variableGlideRecord & atf_output_variableFields)} atf_output_variableGlideRecord
 */
declare type atf_output_variableGlideRecord = sys_atf_variableGlideRecord & atf_output_variableFields;
declare type atf_output_variableElement = $$element.Reference<atf_output_variableFields, atf_output_variableGlideRecord>;
declare type atf_output_variableProperty = $$property.generic.ReferenceProperty<atf_output_variableFields, atf_output_variableGlideRecord, atf_output_variableElement>;

declare namespace sn_atf {
    export interface ITestStepOutputs {
        [key: string]: atf_output_variableElement;
    }

    /**
     * Represents the steps function that exists for ATF server script tests
     * @export
     * @interface ITestStepsFunc
     * @example declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
     * declare function assertEqual(assertion: sn_atf.ITestAssertion): void;
     * declare var outputs: sn_atf.ITestStepOutputs;
     * declare var stepResult: sn_atf.ITestStepResult;
     * (function constructorTest(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc) {
     * })(outputs, steps, stepResult, assertEqual);
     */
    export interface ITestStepsFunc { (sys_id: string): ITestStepOutputs }

    /**
     * Represents the stepResult object for ATF server script tests.
     * @export
     * @interface ITestStepResult
     * @example declare var stepResult: sn_atf.ITestStepResult;
     * declare var outputs: sn_atf.ITestStepOutputs;
     * declare function assertEqual(assertion: sn_atf.ITestAssertion): void;
     * declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
     * (function constructorTest(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual: sn_atf.IAssertEqualFunc) {
     * })(outputs, steps, stepResult, assertEqual);
     */
    export interface ITestStepResult {
        setOutputMessage(message: string): void;
        setSuccess(): void;
        /**
         * @memberof ITestStepResult
         * @throws When the setFailed method is invoked on stepResult, an exception will be thrown.
         */
        setFailed(): never;
    }

    /**
     * Interface for object that is passed to the assertEqual function.
     * @export
     * @interface ITestAssertion
     */
    export interface ITestAssertion {
        name: string;
        shouldbe: any;
        value: any
    }

    /**
     * Represents the assertEqual function that exists for ATF server script tests
     * @export
     * @interface IAssertEqualFunc
     * @example declare function assertEqual(assertion: sn_atf.ITestAssertion): void;
     * declare function steps(sys_id: string): sn_atf.ITestStepOutputs;
     * declare var outputs: sn_atf.ITestStepOutputs;
     * declare var stepResult: sn_atf.ITestStepResult;
     * (function constructorTest(outputs: sn_atf.ITestStepOutputs, steps: sn_atf.ITestStepsFunc, stepResult: sn_atf.ITestStepResult, assertEqual:sn_atf. IAssertEqualFunc) {
     * })(outputs, steps, stepResult, assertEqual);
     */
    export interface IAssertEqualFunc { (assertion: ITestAssertion): void }
}