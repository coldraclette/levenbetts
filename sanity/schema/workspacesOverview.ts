export const workspacesOverview = {
  title: 'Workspaces Overview',
  name: 'workspacesOverview',
  type: 'document',
  groups: [
    {
      name: 'workspacesOverviewGroup',
      title: 'Workspaces Overview fields',
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
      title: 'Workspaces Projects',
      description:
        'The projects that are shown on the workspaces overview page.',
      group: 'workspacesOverviewGroup',
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
            filterParams: { categoryTitle: 'workspaces' },
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
