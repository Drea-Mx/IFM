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
        S.listItem()
          .title('Página Principal')
          .icon(() => '🏠')
          .child(
            S.document()
              .schemaType('homePage')
              .documentId('homePage')
        ),
        ...S.documentTypeListItems().filter(listItem => !['settingsPage', 'homePage'].includes(listItem.getId()))
    ])