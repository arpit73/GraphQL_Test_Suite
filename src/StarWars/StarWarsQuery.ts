import Scenario from '../types';

export const Query_Tests: Scenario = {
  Scenario: 'Star Wars Query Tests',
  CommonData: { SchemaFile: 'StarWarsSchema.graphql' },
  Tests: [
    {
      Name: 'Correctly identifies R2-D2 as the hero of the Star Wars Saga',
      Mock: {
        Query: `query HeroNameQuery {
        hero {
          name
        }
      }`
      },
      Action: { Type: 'Execution' },
      Assertion: {
        Expectation: 'Execution Result',
        Result: {
          data: {
            hero: {
              name: 'R2-D2'
            }
          }
        }
      }
    },

    {
      Name: 'Allows us to query for the ID and friends of R2-D2',
      Mock: {
        Query: `query HeroNameAndFriendsQuery {
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
      Action: { Type: 'Execution' },
      Assertion: {
        Expectation: 'Execution Result',
        Result: {
          data: {
            hero: {
              id: '2001',
              name: 'R2-D2',
              friends: [{ name: 'Luke Skywalker' }, { name: 'Han Solo' }, { name: 'Leia Organa' }]
            }
          }
        }
      }
    }
  ]
};

export const Nested_Queries: Scenario = {
  Scenario: 'Nested Queries',
  CommonData: { SchemaFile: 'StarWarsSchema.graphql' },
  Tests: [
    {
      Name: 'Allows us to query for the friends of friends of R2-D2',
      Mock: {
        Query: `query NestedQuery {
          hero {
            name
            friends {
              name
              appearsIn
              friends {
                name
              }
            }
          }
        }`
      },
      Action: { Type: 'Execution' },
      Assertion: {
        Expectation: 'Execution Result',
        Result: {
          data: {
            hero: {
              name: 'R2-D2',
              friends: [
                {
                  name: 'Luke Skywalker',
                  appearsIn: ['NEW_HOPE', 'EMPIRE', 'JEDI'],
                  friends: [
                    { name: 'Han Solo' },
                    { name: 'Leia Organa' },
                    { name: 'C-3PO' },
                    { name: 'R2-D2' }
                  ]
                },
                {
                  name: 'Han Solo',
                  appearsIn: ['NEW_HOPE', 'EMPIRE', 'JEDI'],
                  friends: [{ name: 'Luke Skywalker' }, { name: 'Leia Organa' }, { name: 'R2-D2' }]
                },
                {
                  name: 'Leia Organa',
                  appearsIn: ['NEW_HOPE', 'EMPIRE', 'JEDI'],
                  friends: [
                    { name: 'Luke Skywalker' },
                    { name: 'Han Solo' },
                    { name: 'C-3PO' },
                    { name: 'R2-D2' }
                  ]
                }
              ]
            }
          }
        }
      }
    }
  ]
};
