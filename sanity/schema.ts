import { type SchemaTypeDefinition } from 'sanity';

import { awardsPage } from './schema/awardsPage';
import { category } from './schema/category';
import { landingPage } from './schema/landingPage';
import { officePage } from './schema/officePage';
import { peoplePage } from './schema/peoplePage';
import { project } from './schema/project';
import { projectListPage } from './schema/projectListPage';
import { researchPage } from './schema/researchPage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category,
    project,
    officePage,
    awardsPage,
    peoplePage,
    projectListPage,
    landingPage,
    researchPage,
  ],
};
