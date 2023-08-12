import { project } from './schema/project';

export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      // S.listItem()
      //   .title('Projects')
      //   .child(
      //     S.list()
      //       .title('Projects')
      //       .items([
      //         S.listItem()
      //           .title('Projects')
      //           .child(
      //             S.document()
      //               .schemaType('project')
      //               .documentId('project')
      //               .title('project')
      //           ),
      //       ])
      //   ),

      ...S.documentTypeListItems().filter(
        (listItem: any) => !['category'].includes(listItem.getId())
      ),
    ]);

// https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
// https://www.sanity.io/docs/manually-group-items-in-a-pane
