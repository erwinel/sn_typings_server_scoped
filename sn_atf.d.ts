declare namespace sn_atf {
    export interface ITestStepOutputs {
        [key: string]: string;
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
        setFailed(): void;
    }

    /**
     * Interface for object that is passed to the assertEqual function.
     * @export
     * @interface ITestAssertion
     */
    export interface ITestAssertion {
        name: string;
        shouldBe: any;
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