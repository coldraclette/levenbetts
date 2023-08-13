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
                .title('Projects Overview Pages')
                .child(
                  S.list()
                    .title('Overview Pages')
                    .items([
                      S.listItem()
                        .title('Houses')
                        .child(
                          S.document()
                            .schemaType('housesOverview')
                            .documentId('housesOverview')
                            .title('Houses Overview Page')
                        ),
                      S.listItem()
                        .title('Adaptations')
                        .child(
                          S.document()
                            .schemaType('adaptationsOverview')
                            .documentId('adaptationsOverview')
                            .title('Adaptations Overview Page')
                        ),
                      S.listItem()
                        .title('Arts')
                        .child(
                          S.document()
                            .schemaType('artsOverview')
                            .documentId('artsOverview')
                            .title('Arts Overview Page')
                        ),
                      S.listItem()
                        .title('Cities')
                        .child(
                          S.document()
                            .schemaType('citiesOverview')
                            .documentId('citiesOverview')
                            .title('Cities Overview Page')
                        ),
                      S.listItem()
                        .title('Education')
                        .child(
                          S.document()
                            .schemaType('educationOverview')
                            .documentId('educationOverview')
                            .title('Education Overview Page')
                        ),
                      S.listItem()
                        .title('Furniture')
                        .child(
                          S.document()
                            .schemaType('furnitureOverview')
                            .documentId('furnitureOverview')
                            .title('Furniture Overview Page')
                        ),
                      S.listItem()
                        .title('Housing')
                        .child(
                          S.document()
                            .schemaType('housingOverview')
                            .documentId('housingOverview')
                            .title('Housing Overview Page')
                        ),
                      S.listItem()
                        .title('Libraries')
                        .child(
                          S.document()
                            .schemaType('librariesOverview')
                            .documentId('librariesOverview')
                            .title('Libraries Overview Page')
                        ),
                      S.listItem()
                        .title('Workspaces')
                        .child(
                          S.document()
                            .schemaType('workspacesOverview')
                            .documentId('workspacesOverview')
                            .title('Workspaces Overview Page')
                        ),
                      S.listItem()
                        .title('Publications')
                        .child(
                          S.document()
                            .schemaType('publicationsOverview')
                            .documentId('publicationsOverview')
                            .title('Publications Overview Page')
                        ),
                    ])
                ),
            ])
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'category',
            'housesOverview',
            'adaptationsOverview',
            'artsOverview',
            'citiesOverview',
            'educationOverview',
            'furnitureOverview',
            'housingOverview',
            'librariesOverview',
            'workspacesOverview',
            'publicationsOverview',
            'officePage',
            'awardsPage',
          ].includes(listItem.getId())
      ),
    ]);
