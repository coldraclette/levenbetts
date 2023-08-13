import { type SchemaTypeDefinition } from 'sanity';

import { adaptationsOverview } from './schema/adaptationsOverview';
import { artsOverview } from './schema/artsOverview';
import { awardsPage } from './schema/awardsPage';
import { category } from './schema/category';
import { citiesOverview } from './schema/citiesOverview';
import { educationOverview } from './schema/educationOverview';
import { furnitureOverview } from './schema/furnitureOverview';
import { housesOverview } from './schema/housesOverview';
import { housingOverview } from './schema/housingOverview';
import { landingPage } from './schema/landingPage';
import { librariesOverview } from './schema/librariesOverview';
import { officePage } from './schema/officePage';
import { peoplePage } from './schema/peoplePage';
import { project } from './schema/project';
import { projectListPage } from './schema/projectListPage';
import { publicationsOverview } from './schema/publicationsOverview';
import { workspacesOverview } from './schema/workspacesOverview';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category,
    project,
    housesOverview,
    adaptationsOverview,
    artsOverview,
    citiesOverview,
    educationOverview,
    furnitureOverview,
    publicationsOverview,
    workspacesOverview,
    librariesOverview,
    housingOverview,
    officePage,
    awardsPage,
    peoplePage,
    projectListPage,
    landingPage,
  ],
};
