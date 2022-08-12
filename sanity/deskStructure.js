// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'


export default () =>
  S.list()
    .title('General')
    .items([
        S.listItem()
          .title('Configuración General')
          .icon(() => '⚙️')
          .child(
            S.document()
              .schemaType('settingsPage')
              .documentId('settingsPage')
        ),
        ...S.documentTypeListItems().filter(listItem => !['settingsPage'].includes(listItem.getId()))
    ])