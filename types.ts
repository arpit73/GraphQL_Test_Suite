// describe('Basic Queries', () => {
//     it('Correctly identifies R2-D2 as the hero of the Star Wars Saga', async () => {
//       const source = `
//         query HeroNameQuery {
//           hero {
//             name
//           }
//         }
//       `;

//       const result = await graphql({ schema, source });
//       expect(result).to.deep.equal({
//         data: {
//           hero: {
//             name: 'R2-D2',
//           },
//         },
//       });
//     });

interface Mock {
  Query: string;
  Schema?: string;
  Schema_File?: string;
  Mock_Data?: string;
  Mock_Data_File?: string;
}

interface QueryParsing {
  parse: boolean;
}

interface QueryValidation {
  validate: string[];
}

interface Operation {
  operation_name: string;
}

interface QueryExecution {
  execute: boolean | Operation;
}

interface ValidationSuccessful {
  passes: boolean;
}

interface ValidationFailed {
  syntax_error: boolean;
}

interface DataMatch {
  data: object;
}

interface ErrorCount {
  error_count: number;
}

interface Location {
  line: number;
  column: number;
}

interface ErrorCodeMatch {
  error_code: string;
  args?: object;
  loc?: Location[] | Location[][];
}

interface ErrorMatch {
  error: string;
  loc?: Location[] | Location[][];
}

interface ExecutionExceptionMatch {
  exception: string;
}

interface Test {
  Description: string;
  Mock: Mock;

  Action: QueryParsing | QueryValidation | QueryExecution;

  Assertion:
    | ValidationSuccessful
    | ValidationFailed
    | DataMatch
    | ErrorCount
    | ErrorMatch
    | ExecutionExceptionMatch;
}

type TestType = 'Parsing' | 'Validation' | 'Execution';

export interface Scenario {
  Name: string;
  Tests: Test[];
}

export const obj: Scenario = {
  Name: 'Star Wars Query Tests',
  Tests: [
    {
      Description: 'Correctly identifies R2-D2 as the hero of the Star Wars Saga',
      Mock: {
        Query: `
        query HeroNameAndFriendsQuery {
          hero {
            id
            name
            friends {
              name
            }
          }
        }
      `
      },
      Action: { execute: true },
      Assertion: {
        data: {
          data: {
            hero: {
              name: 'R2-D2'
            }
          }
        }
      }
    }
  ]
};
