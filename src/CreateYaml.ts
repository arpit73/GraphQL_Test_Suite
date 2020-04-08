import * as YAML from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';

import { StarWars } from './StarWars/StarWarsQuery';

const outPath = path.join(__dirname, '../dist/StarWars.yaml');

fs.writeFileSync(outPath, YAML.safeDump(StarWars));
