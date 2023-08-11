import { ComponentIcon } from '@sanity/icons';

export const category = {
  title: 'Categories',
  name: 'category',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
  ],
};
