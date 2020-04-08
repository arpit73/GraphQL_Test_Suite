import * as YAML from 'js-yaml';

import * as fs from 'fs';
import * as path from 'path';

import { Query_Tests, Nested_Queries } from './StarWars/StarWarsQuery';

const StarWarsOutput = path.join(__dirname, '../dist/StarWars/StarWars_Query.yaml');
fs.writeFileSync(StarWarsOutput, YAML.safeDump([Query_Tests, Nested_Queries]));
