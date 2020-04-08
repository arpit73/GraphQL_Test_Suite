export type Expectations =
  | 'Success'
  | 'Syntax Error'
  | 'Execution Result'
  | 'Error Count'
  | 'Error Message'
  | 'Execution Exception';

interface Successful<T> {
  /**
   * The Parsing or Validation was successful.
   * @Action_Type `"Parsing"` | `"Validation"`
   * @Type `"Success"`
   */
  Expectation: T;
}

interface SyntaxError<T> {
  /**
   * A syntax error occurred while parsing.
   * @Action_Type `"Parsing"`
   * @Type `"Syntax Error"`
   */
  Expectation: T;
}

interface ExecutionResult<T> {
  /**
   * Expect a result a after execution.
   * @Action_Type `"Execution"`
   * @Type `"Execution Result"`
   */
  Expectation: T;
  /**
   * The result of the execution.
   */
  Result: object;
}

interface ErrorCount<T> {
  /**
   * Expect an error count when error has occurred.
   * @Action_Type `"validation"` | `"Execution"`
   * @Type `"Error Count"`
   */
  Expectation: T;
  /**
   * The number of errors encountered.
   */
  ErrorCount: number;
}

interface Location {
  Line: number;
  Column: number;
}

interface ErrorMessage<T> {
  /**
   * Expect an error message while validation or execution.
   * @Action_Type `"validation"` | `"Execution"`
   * @Type `"Error Message"`
   */
  Expectation: T;
  /**
   * The error message to be matched.
   */
  ErrorMessage: string;
  /**
   * The location of where a error occurred | and a of locations where error occurred.
   */
  Locations?: Location | Location[];
}

interface ExecutionException<T> {
  /**
   * Expect an an exception to occur during execution.
   * @Action_Type `"Execution"`
   * @Type `"Execution Exception"`
   */
  Expectation: T;
  /**
   * The exception string to be matched.
   */
  Exception: string;
}

type Assertion<T extends Expectations> = T extends 'Success'
  ? Successful<T>
  : T extends 'Syntax Error'
  ? SyntaxError<T>
  : T extends 'Execution Result'
  ? ExecutionResult<T>
  : T extends 'Error Count'
  ? ErrorCount<T>
  : T extends 'Error Message'
  ? ErrorMessage<T>
  : T extends 'Execution Exception'
  ? ExecutionException<T>
  : never;

export default Assertion;
