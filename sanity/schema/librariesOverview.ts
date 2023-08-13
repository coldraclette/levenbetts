export const librariesOverview = {
  title: 'Libraries Overview',
  name: 'librariesOverview',
  type: 'document',
  groups: [
    {
      name: 'librariesOverviewGroup',
      title: 'Libraries Overview fields',
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
      title: 'Libraries Projects',
      description:
        'The projects that are shown on the libraries overview page.',
      group: 'librariesOverviewGroup',
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
            filterParams: { categoryTitle: 'libraries' },
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
