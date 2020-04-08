export type QueryType = 'Parsing' | 'Validation' | 'Execution';

interface QueryParsing<T> {
  Type: T;
}

interface QueryValidation<T> {
  Type: T;
  Validate: string;
}

interface Operation {
  Execution_Target: string;
  Variables: object;
  Validation: boolean;
  Data_Target: string;
}

interface QueryExecution<T> {
  Type: T;
  Execute: boolean | Partial<Operation>;
}

type Action<T extends QueryType> = T extends 'Parsing'
  ? QueryParsing<T>
  : T extends 'Validation'
  ? QueryValidation<T>
  : T extends 'Execution'
  ? QueryExecution<T>
  : never;

export default Action;

