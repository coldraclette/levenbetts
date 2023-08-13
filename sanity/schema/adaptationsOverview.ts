export const adaptationsOverview = {
  title: 'Adaptations Overview',
  name: 'adaptationsOverview',
  type: 'document',
  groups: [
    {
      name: 'adaptationsOverviewGroup',
      title: 'Adaptations Overview fields',
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
      title: 'Adaptations Projects',
      description:
        'The projects that are shown on the adaptations overview page.',
      group: 'adaptationsOverviewGroup',
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
            filterParams: { categoryTitle: 'adaptations' },
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
