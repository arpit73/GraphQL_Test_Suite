export type QueryType = 'Parsing' | 'Validation' | 'Execution';

interface QueryParsing<T> {
  /**
   * Parse the the given query.
   * @Type `"Parsing"`
   */
  Type: T;
}

interface QueryValidation<T> {
  /**
   * Validate the given query.
   * @Type `"Validation"`
   */
  Type: T;
}

interface Operation {
  /**
   * The name of the operation to execute, in case query contains multiple.
   * @Optional
   */
  Execution_Target: string;
  /**
   * `true` if query should be validated during execution. otherwise `false`.
   * @Optional
   */
  Validated: boolean;
  /**
   * The name of the data object to be used in the test, picked from `TestData` in Mock field.
   * @Optional
   */
  Data_Target: string;
}

interface QueryExecution<T> {
  /**
   * Execute the given query.
   *  @Type `"Validation"`
   */
  Type: T;
  /**
   * Contains extra details about execution.
   * @Type `"Execution"`
   * @Optional
   */
  Execute?: Partial<Operation>;
}

type Action<T extends QueryType> = T extends 'Parsing'
  ? QueryParsing<T>
  : T extends 'Validation'
  ? QueryValidation<T>
  : T extends 'Execution'
  ? QueryExecution<T>
  : never;

export default Action;
