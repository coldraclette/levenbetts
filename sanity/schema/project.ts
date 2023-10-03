import { PackageIcon } from '@sanity/icons';

import { category } from './category';

export const project = {
  title: 'Projects',
  name: 'project',
  type: 'document',
  icon: PackageIcon as any,
  groups: [
    {
      name: 'projectGroup',
      title: 'Project fields',
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
      group: 'projectGroup',
      description: 'The title of the project.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      group: 'projectGroup',
      description: 'The subtitle of the project. E.g. location',
    },
    {
      title: 'Project status',
      name: 'status',
      type: 'string',
      group: 'projectGroup',
      description: 'The status of the project.',
      options: {
        layout: 'radio',
        list: [
          { title: 'Current', value: 'current' },
          { title: 'Complete', value: 'complete' },
        ],
        direction: 'horizontal',
      },
      initialValue: 'current',
    },
    {
      title: 'Create project page',
      name: 'createProjectPage',
      type: 'boolean',
      group: 'projectGroup',
      description:
        'Check this if you want to create a project page for this project.',
      initialValue: false,
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'projectGroup',
      hidden: ({ parent }: any) => !parent.createProjectPage,
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input: any) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .slice(0, 200),
      },
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      group: 'projectGroup',
      description: 'The category of the project.',
      to: [{ type: 'category' }],
      hidden: ({ parent }: any) => !parent.createProjectPage,
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      group: 'projectGroup',
      description: 'The text of the project.',
      of: [{ type: 'block' }],
      hidden: ({ parent }: any) => !parent.createProjectPage,
    },
    {
      title: 'Specs',
      name: 'specs',
      type: 'array',
      group: 'projectGroup',
      description: 'The specs of the project.',
      of: [{ type: 'block' }],
      hidden: ({ parent }: any) => !parent.createProjectPage,
    },
    {
      title: 'Project Overview Image',
      name: 'projectImage',
      type: 'image',
      group: 'projectGroup',
      description: 'This image will be used in the work overview pages.',
      hidden: ({ parent }: any) => !parent.createProjectPage,
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
            Rule.error('You have to fill out the alternative text.').required(),
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'position',
          type: 'string',
          title: 'Position',
          description: 'Position of the image',
          options: {
            list: [
              { title: 'Center', value: 'center' },
              { title: 'Top', value: 'top' },
              { title: 'Bottom', value: 'bottom' },
            ],
            layout: 'radio',
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: 'Landing Page Mobile Image',
      name: 'landingPageMobileImage',
      type: 'image',
      group: 'projectGroup',
      description:
        'This image will be used in the landing page for mobile, if the project is selected to be shown on the landing page.',
      hidden: ({ parent }: any) => !parent.createProjectPage,
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description:
            'Important for SEO and accessiblity. Describe what the image is about.',
          validation: (Rule: any) =>
            Rule.error('You have to fill out the alternative text.').required(),
          options: {
            isHighlighted: true,
          },
        },
      ],
    },

    {
      title: 'Show another image on the landing page?',
      name: 'showLandingPageImage',
      type: 'boolean',
      group: 'projectGroup',
      description:
        'Check this if you want to show a different image on the landing page.',
      initialValue: false,
      hidden: ({ parent }: any) => !parent.createProjectPage,
    },
    {
      title: 'Landing Page Image',
      name: 'landingPageImage',
      type: 'image',
      group: 'projectGroup',
      description:
        'This image will be used in the landing page, if it has to be different then the Project Overview Image.',
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
            Rule.error('You have to fill out the alternative text.').required(),
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'position',
          type: 'string',
          title: 'Position',
          description: 'Position of the image',
          options: {
            list: [
              { title: 'Center', value: 'center' },
              { title: 'Top', value: 'top' },
              { title: 'Bottom', value: 'bottom' },
            ],
            layout: 'radio',
            isHighlighted: true,
          },
        },
      ],
      hidden: ({ parent }: any) =>
        !parent.createProjectPage && !parent.showLandingPageImage,
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      group: 'projectGroup',
      hidden: ({ parent }: any) => !parent.createProjectPage,
      description:
        'These images will be used in the project page. There can be more than one image.',
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
              options: {
                isHighlighted: true,
              },
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'projectImage',
      category: 'category.title',
    },
    prepare({ title, subtitle, media, category }: any) {
      return {
        title,
        subtitle: `${category} | ${subtitle}`,
        media: media,
      };
    },
  },
};
