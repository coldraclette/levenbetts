import { ComponentIcon } from '@sanity/icons';

export const category = {
  title: 'Categories & featured Projects',
  name: 'category',
  type: 'document',
  icon: ComponentIcon as any,
  groups: [
    {
      name: 'categoryGroup',
      title: 'Category Fields',
      default: true,
    },
    {
      name: 'seoGroup',
      title: 'SEO fields',
    },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'categoryGroup',
      validation: (Rule: any) =>
        Rule.custom((title: any) => {
          if (title && /\s/.test(title)) {
            return 'Title should not contain any white spaces.';
          }
          return true;
        }),
    },
    {
      name: 'projects',
      title: "Category's Overview Page Projects",
      hidden: ({ document }: any) => !document.title,
      description:
        'The projects that are shown on the this category overview page.',
      group: 'categoryGroup',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'project',
            },
          ],
          options: {
            filter: ({ document }: any) => {
              if (document && document.title) {
                return {
                  filter: 'category->title == $categoryTitle',
                  params: { categoryTitle: document.title },
                };
              }
              return { filter: '', params: {} };
            },
          },
        },
      ],
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seoGroup',
      description: 'This is the title that appears in the browser tab.',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seoGroup',
      description: 'This is the description that appears on search engines.',
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      group: 'seoGroup',
      description: 'This is the image that appears when the page is shared.',
    },
  ],
};
