import type { StructureResolver } from 'sanity/structure'


// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Authors') // Display name in the menu
        .child(S.documentTypeList('author').title('Authors')), // Reference schema type
      S.listItem()
        .title('Startups')
        .child(S.documentTypeList('startup').title('Startups')),
    ]);
