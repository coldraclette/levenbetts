// same schema as housesOverview.ts but for educationOverview
export const educationOverview = {
  title: 'Education Overview',
  name: 'educationOverview',
  type: 'document',
  groups: [
    {
      name: 'educationOverviewGroup',
      title: 'Education Overview fields',
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
      title: 'Education Projects',
      description:
        'The projects that are shown on the education overview page.',
      group: 'educationOverviewGroup',
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
            filterParams: { categoryTitle: 'education' },
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
