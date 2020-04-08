import _Action, { QueryType } from './Actions';
import _Assertion, { Expectations } from './Assertions';

interface _CommonData {
  /**
   * The GraphQL schema to be used in a test.
   */
  Schema: string;
  /**
   * The location to a .graphql schema file to be used in a test.
   */
  SchemaFile: string;
  /**
   *  Data to be used in a test.
   */
  TestData: string;
  /**
   *  The location to a YAML or JSON file containing data to be used in a test.
   */
  TestDataFile: string;
}

interface _Mock extends Partial<_CommonData> {
  /**
   * The GraphQL query to be used in a test.
   */
  Query: string;
}

interface _Test {
  /**
   * Name of the test.
   */
  Name: string;
  /**
   * Mock data and schema to be used in the test.
   */
  Mock: _Mock;
  /**
   * The kind of operation to be done on the query.
   * @Type `"Parsing"` | `"Validation"` | `"Execution"`
   */
  Action: _Action<QueryType>;
  /**
   * The expected result of the action, to be used for direct comparisons in the test.
   * @Type `"Success"` | `"Syntax Error"` | `"Execution Result"` | `"Error Count"` | `"Error Code"` | `"Execution Exception"`
   */
  Assertion: _Assertion<Expectations>;
}

/**
 * A scenario is generic condition or case for which we are testing.
 */
interface Scenario {
  /**
   * Description of collection of tests in.
   */
  Scenario: string;
  /**
   *  Common data available to all the tests.
   */
  CommonData?: Partial<_CommonData>;
  /**
   *  Array of tests.
   */
  Tests: _Test[];
}

export default Scenario;
