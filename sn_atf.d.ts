/// <reference path="./Packages.d.ts" />
/// <reference path="./$$rhino.d.ts" />
/// <reference path="./ElementTypes.d.ts" />
/// <reference path="./RecordTypes.d.ts" />

declare namespace $$GlideRecord {
    /**
     * "Output Variables" GlideRecord.
     */
    export type atf_output_variable = $$tableFields.atf_output_variable & sys_atf_variable;

    /**
     * "Test Variable" GlideRecord.
     * Extendable: true
     */
    export type sys_atf_variable = $$tableFields.sys_atf_variable & var_dictionary;
    
    /**
     * "Test Step Config" GlideRecord.
     */
    export type sys_atf_step_config = $$tableFields.sys_atf_step_config & sys_metadata;
    
    /**
     * "Test Step Config Category" GlideRecord.
     */
    export type sys_atf_step_config_category = $$tableFields.sys_atf_step_config_category & sys_metadata;
    
    /**
     * "Input Variables" GlideRecord.
     */
    export type atf_input_variable = $$tableFields.atf_input_variable & sys_atf_variable;
    
    /**
     * "Test Step Environment" GlideRecord.
     */
    export type sys_atf_step_env = $$tableFields.sys_atf_step_env & sys_metadata;
}

declare namespace $$GlideElement {
    /**
     * Reference element for the "Output Variables" record type.
     */
    export type atf_output_variable = Reference<$$tableFields.atf_output_variable, $$GlideRecord.atf_output_variable> & sys_atf_variable;
    
    /**
     * Reference element for the "Test Variable" record type.
     */
    export type sys_atf_variable = Reference<$$tableFields.sys_atf_variable, $$GlideRecord.sys_atf_variable> & var_dictionary;
    
    /**
     * Reference element for the "Test Step Config" record type.
     */
    export type sys_atf_step_config = Reference<$$tableFields.sys_atf_step_config, $$GlideRecord.sys_atf_step_config> & sys_metadata;
    
    /**
     * Reference element for the "Test Step Config Category" record type.
     */
    export type sys_atf_step_config_category = Reference<$$tableFields.sys_atf_step_config_category, $$GlideRecord.sys_atf_step_config_category> & sys_metadata;
    
    /**
     * Reference element for the "Input Variables" record type.
     */
    export type atf_input_variable = Reference<$$tableFields.atf_input_variable, $$GlideRecord.atf_input_variable> & sys_atf_variable;
    
    /**
     * Reference element for the "Test Step Environment" record type.
     */
    export type sys_atf_step_env = Reference<$$tableFields.sys_atf_step_env, $$GlideRecord.sys_atf_step_env> & sys_metadata;
}

declare namespace $$tableFields {
    /**
     * "Output Variables" GlideRecord fields.
     * @see {@link $$GlideRecord.atf_output_variable}
     * @see {@link $$GlideElement.atf_output_variable}
     */
    export interface atf_output_variable extends sys_atf_variable { }
    
    /**
     * "Test Variable" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_atf_variable}
     * @see {@link $$GlideElement.sys_atf_variable}
     */
    export interface sys_atf_variable extends var_dictionary {
        /**
         * "Model" column element.
         * Read-only: true; Max Length: 32.
         */
        model: $$GlideElement.sys_atf_step_config;
    }
    
    /**
     * "Test Step Config" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_atf_step_config}
     * @see {@link $$GlideElement.sys_atf_step_config}
     */
    export interface sys_atf_step_config extends sys_metadata {
        /**
         * "Active" column element.
         * Type: "True/False" (boolean).
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElement;
        
        /**
         * "Batch order constraint" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        batch_order_constraint: GlideElement;
        
        /**
         * "Can mutate page" column element.
         * Type: "True/False" (boolean).
         * Max Length: 40.
         * Default Value: false.
         */
        can_mutate_page: GlideElement;
        
        /**
         * "Category" column element.
         * Max Length: 32.
         */
        category: $$GlideElement.sys_atf_step_config_category;
        
        /**
         * "Class Name" column element.
         * Max Length: 200.
         */
        class_name: GlideElement;
        
        /**
         * "Class type" column element.
         * Max Length: 40.
         * Default Value: "script".
         */
        class_type: GlideElement;
        
        /**
         * "Deprecated" column element.
         * Type: "True/False" (boolean).
         * Max Length: 40.
         * Default Value: false.
         */
        deprecated: GlideElement;
        
        /**
         * "Description generation script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         */
        description_generator: GlideElement;
        
        /**
         * "HTML description" column element.
         * Type: "Translated HTML" (translated_html).
         * Mandatory: true; Max Length: 8000.
         */
        html_description: GlideElement;
        
        /**
         * "Icon" column element.
         * Max Length: 100.
         * Default Value: "icon-article-document".
         */
        icon: GlideElement;
        
        /**
         * "Input variables" column element.
         * Type: "Glide Var" (glide_var).
         * Max Length: 32.
         */
        inputs: $$GlideElement.atf_input_variable;
        
        /**
         * "Name" column element.
         * Type: "Translated Field" (translated_field).
         * Mandatory: true; Display: true; Max Length: 250.
         */
        name: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         */
        order: GlideElement;
        
        /**
         * "Output variables" column element.
         * Type: "Glide Var" (glide_var).
         * Max Length: 32.
         */
        outputs: $$GlideElement.atf_output_variable;
        
        /**
         * "Step environment" column element.
         * Mandatory: true; Max Length: 32.
         * Default Value: "6c2bcea1870312009dccc9ded0e3ecca".
         */
        step_env: $$GlideElement.sys_atf_step_env;
        
        /**
         * "Step execution script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         */
        step_execution_generator: GlideElement;
        
        /**
         * "Template reminder" column element.
         * Type: "Translated Text" (translated_text).
         * Mandatory: true; Max Length: 255.
         */
        template_reminder: GlideElement;
        
        /**
         * "Type" column element.
         * Mandatory: true; Max Length: 32.
         */
        type: $$GlideElement.sys_db_object;
        
        /**
         * "Wizard Redirect" column element.
         * Max Length: 255.
         */
        wizard_redirect: GlideElement;
    }

    /**
     * "Test Step Config Category" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_atf_step_config_category}
     * @see {@link $$GlideElement.sys_atf_step_config_category}
     */
    export interface sys_atf_step_config_category extends sys_metadata {
        /**
         * "Display name" column element.
         * Mandatory: true; Max Length: 100.
         */
        display_name: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Step environment" column element.
         * Mandatory: true; Max Length: 32.
         */
        step_env: $$GlideElement.sys_atf_step_env;
    }
    
    /**
     * "Input Variables" GlideRecord fields.
     * @see {@link $$GlideRecord.atf_input_variable}
     * @see {@link $$GlideElement.atf_input_variable}
     */
    export interface atf_input_variable extends sys_atf_variable { }
    
    /**
     * "Test Step Environment" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_atf_step_env}
     * @see {@link $$GlideElement.sys_atf_step_env}
     */
    export interface sys_atf_step_env extends sys_metadata {
        /**
         * "Class name" column element.
         * Max Length: 200.
         */
        class_name: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 1000.
         */
        description: GlideElement;
        
        /**
         * "Has batch constraint" column element.
         * Type: "True/False" (boolean).
         * Max Length: 40.
         * Default Value: true.
         */
        has_batch_constraint: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        order: GlideElement;
        
        /**
         * "Class type" column element.
         * Max Length: 40.
         * Default Value: "java".
         */
        type: GlideElement;
    }
}

declare namespace sn_atf {
    export interface ITestStepOutputs {
        [key: string]: $$GlideElement.atf_output_variable;
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