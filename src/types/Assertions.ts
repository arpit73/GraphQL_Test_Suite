export type Expectations =
  | 'Success'
  | 'Syntax Error'
  | 'Execution Result'
  | 'Error Count'
  | 'Error Code'
  | 'Execution Exception';

interface Successful<T> {
  Expectation: T;
  Successful: boolean;
}

interface SyntaxError<T> {
  Expectation: T;
  SyntaxError: boolean;
}

interface ExecutionResult<T> {
  Expectation: T;
  Result: object;
}

interface ErrorCount<T> {
  Expectation: T;
  ErrorCount: number;
}

interface Location {
  Line: number;
  Column: number;
}

interface ErrorCode<T> {
  Expectation: T;
  Error: string;
  Locations?: Location | Location[];
}

interface ExecutionException<T> {
  Expectation: T;
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
  : T extends 'Error Code'
  ? ErrorCode<T>
  : T extends 'Execution Exception'
  ? ExecutionException<T>
  : never;

export default Assertion;
