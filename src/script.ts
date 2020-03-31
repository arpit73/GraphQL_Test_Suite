// import * as YAML from 'yaml';
import * as YAML from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';

import { Scenario } from './types';

const outPath = path.join(__dirname, '../dist/StarWars.yaml');

const StarWars: Scenario = {
  Name: 'Star Wars Query Tests',
  Tests: [
    {
      Description: 'Correctly identifies R2-D2 as the hero of the Star Wars Saga',
      Mock: {
        Query: `
        query HeroNameQuery {
          hero {
            name
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

fs.writeFileSync(outPath, YAML.safeDump(StarWars));
