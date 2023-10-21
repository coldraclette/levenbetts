
export const officePage = {
  title: 'Office Page',
  name: 'officePage',
  type: 'document',
  groups: [
    {
      name: 'officePageGroup',
      title: 'Office Page fields',
      default: true,
    },
    {
      name: 'seoGroup',
      title: 'SEO fields',
    },
  ],
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      group: 'officePageGroup',
      description: 'The text of the project.',
      of: [{ type: 'block' }],
    },
    {
      title: 'Additional Text',
      name: 'additionalText',
      type: 'array',
      group: 'officePageGroup',
      description:
        'This text will be displayed on the right column on desktop and below the main text on mobile.',
      of: [{ type: 'block' }],
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      group: 'officePageGroup',
      description:
        'These images will be displayed under the text. There can be more than one image.',
      of: [
        {
          type: 'image',
          name: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description:
                'Important for SEO and accessiblity. Describe what the image is about.',
              validation: (Rule: any) =>
                Rule.error(
                  'You have to fill out the alternative text.'
                ).required(),
            },
          ],
        },
      ],
      preview: {
        select: {
          image: 'image',
          alt: 'image.alt',
        },
        prepare({ image, alt }: any) {
          return {
            title: alt,
            media: image,
          };
        },
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
