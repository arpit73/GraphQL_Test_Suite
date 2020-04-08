import _Action, { QueryType } from './Actions';
import _Assertion, { Expectations } from './Assertions';

interface _CommonData {
  Schema: string;
  SchemaFile: string;
  TestData: string;
  TestDataFile: string;
}

interface _Mock extends Partial<_CommonData> {
  Query: string;
}

interface _Test {
  Name: string;
  Mock: _Mock;
  Action: _Action<QueryType>;
  Assertion: _Assertion<Expectations>;
}

// type GT = <T extends QueryType, U extends Expectations>() => _Test<T, U>;

/**
 * TODO
 */
interface Scenario {
  Description: string;
  CommonData?: Partial<_CommonData>;
  Tests: _Test[];
}

export default Scenario;
