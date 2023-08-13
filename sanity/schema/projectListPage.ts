export const projectListPage = {
    title: 'Project List Page',
    name: 'projectListPage',
    type: 'document',
    groups: [
        {
            name: 'projectListPageGroup',
            title: 'Project List Page fields',
            default: true,
        },
        {
            name: 'seoGroup',
            title: 'SEO fields',
        },
    ],
    fields: [
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
}