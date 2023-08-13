export const housesOverview = {
  title: 'Houses Overview',
  name: 'housesOverview',
  type: 'document',
  groups: [
    {
      name: 'housesOverviewGroup',
      title: 'Houses Overview fields',
      default: true,
    },
    {
      name: 'seoGroup',
      title: 'SEO fields',
    },
  ],
  fields: [
    {
      name: 'projects',
      title: 'Houses Projects',
      description: 'The projects that are shown on the houses overview page.',
      group: 'housesOverviewGroup',
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
            filter: 'category->title == $categoryTitle',
            filterParams: { categoryTitle: 'houses' },
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
