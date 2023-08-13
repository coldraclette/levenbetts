import { ComponentIcon } from '@sanity/icons';

export const category = {
  title: 'Categories',
  name: 'category',
  type: 'document',
  icon: ComponentIcon as any,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) =>
        Rule.custom((fieldValue: any, context: any) =>
          context.document._rev ? 'This field cannot be edited.' : true
        ),
    },
  ],
};
