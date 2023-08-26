/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { colorInput } from '@sanity/color-input';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { structure } from './sanity/deskStructure';
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [deskTool({ structure }), colorInput()],
});
