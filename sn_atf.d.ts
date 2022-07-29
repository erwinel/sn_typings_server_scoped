declare namespace sn_atf {
    export interface ITestStepsFunc { (sys_id: string): { [key: string]: string; } }
    export interface ITestStepResult {
        setOutputMessage(message: string): void;
        setSuccess(): void;
        setFailed(): void;
    }
    export interface ITestAssertion {
        name: string;
        shouldBe: any;
        value: any
    }
    export interface IAssertEqualFunc { (assertion: ITestAssertion): void }
    export var inputs: { [key: string]: string; };
    export var outputs: { [key: string]: string; };
    export function steps(sys_id: string): { [key: string]: string; }
    export var stepResult: ITestStepResult;
    export function assertEqual(assertion: ITestAssertion): void;
}