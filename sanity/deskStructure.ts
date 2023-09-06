import { DocumentIcon } from '@sanity/icons';

export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages Content')
            .items([
              S.listItem()
                .title('Landing Page')
                .icon(DocumentIcon)
                .child(
                  S.document()
                    .schemaType('landingPage')
                    .documentId('landingPage')
                    .title('Landing Page')
                ),
              S.divider(),
              S.listItem()
                .title('Research Page')
                .icon(DocumentIcon)
                .child(
                  S.document()
                    .schemaType('researchPage')
                    .documentId('researchPage')
                    .title('Research Page')
                ),
              S.divider(),
              S.listItem()
                .title('Office Page')
                .icon(DocumentIcon)
                .child(
                  S.document()
                    .schemaType('officePage')
                    .documentId('officePage')
                    .title('Office Page')
                ),
              S.listItem()
                .title('Awards Page')
                .icon(DocumentIcon)
                .child(
                  S.document()
                    .schemaType('awardsPage')
                    .documentId('awardsPage')
                    .title('Awards Page')
                ),
              S.listItem()
                .title('People Page')
                .icon(DocumentIcon)
                .child(
                  S.document()
                    .schemaType('peoplePage')
                    .documentId('peoplePage')
                    .title('People Page')
                ),
            ])
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'houses',
            'officePage',
            'awardsPage',
            'peoplePage',
            'projectListPage',
            'landingPage',
            'researchPage',
          ].includes(listItem.getId())
      ),
    ]);
