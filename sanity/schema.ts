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
import { librariesOverview } from './schema/librariesOverview';
import { officePage } from './schema/officePage';
import { project } from './schema/project';
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
  ],
};
