import { SparklesIcon, StarIcon } from '@sanity/icons';

export const awardsPage = {
  name: 'awardsPage',
  title: 'Awards Page',
  type: 'document',
  groups: [
    {
      name: 'awardsPageGroup',
      title: 'Awards Page fields',
      default: true,
    },
    {
      name: 'seoGroup',
      title: 'SEO fields',
    },
  ],
  fields: [
    {
      name: 'awards',
      title: 'Awards',
      group: 'awardsPageGroup',
      description: 'The awards that are shown on the awards page.',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: SparklesIcon,
          fields: [
            {
              name: 'year',
              title: 'Year',
              type: 'string',
            },
            {
              name: 'awardDetails',
              title: 'Award',
              type: 'array',
              of: [
                {
                  type: 'object',
                  icon: StarIcon as any,
                  fields: [
                    {
                      name: 'award',
                      title: 'Award',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
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
