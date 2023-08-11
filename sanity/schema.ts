import { type SchemaTypeDefinition } from "sanity";
import { category } from "./schema/category";
import { project } from "./schema/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, project],
};
