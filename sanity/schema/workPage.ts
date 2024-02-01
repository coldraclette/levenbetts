import { CustomFeaturedProjectsInput } from '../utils/CustomFeaturedProjectsInput';

export const workPage = {
  title: 'Work Page',
  name: 'workPage',
  type: 'document',
  groups: [
    {
      name: 'workPageGroup',
      title: 'Work Page fields',
      default: true,
    },
    {
      name: 'seoGroup',
      title: 'SEO fields',
    },
  ],
  fields: [
    {
      title: 'Featured Projects',
      name: 'featuredProjects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
      description:
        'Select and order projects that will be displayed on the work page. To update the list of projects, click the "Update Projects" button below.',
      group: 'workPageGroup',
      validation: (Rule: any) => Rule.required(),
      components: {
        input: CustomFeaturedProjectsInput,
      },
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
