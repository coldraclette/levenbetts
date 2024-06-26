export const researchPage = {
  title: 'Research Page',
  name: 'researchPage',
  type: 'document',
  groups: [
    {
      name: 'modelGroup',
      title: 'Model images',
    },
    {
      name: 'drawingGroup',
      title: 'Drawing images',
    },
    {
      name: 'seoGroup',
      title: 'SEO fields',
    },
  ],
  fields: [
    {
      name: 'models_first_row',
      title: 'Models first row',
      description: 'The models that are shown on the research page.',
      group: 'modelGroup',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'models_second_row',
      title: 'Models second row',
      description: 'The models that are shown on the research page.',
      group: 'modelGroup',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'drawings_first_row',
      title: 'Drawings first row',
      description: 'The drawings that are shown on the research page.',
      group: 'drawingGroup',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'drawings_second_row',
      title: 'Drawings second row',
      description: 'The drawings that are shown on the research page.',
      group: 'drawingGroup',
      type: 'array',
      of: [
        {
          type: 'image',
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
