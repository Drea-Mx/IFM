// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import imageType from './objects/imageType'

import link from './objects/menu/link'
import categoria from './objects/menu/categoria'
import menu from './objects/menu/menu'

import social from './objects/social'
import generalLink from './objects/generalLink'

import settingsPage from './documents/settingsPage'
import pagina from './documents/pagina'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    imageType,

    link,
    categoria,
    menu,
    social,

    generalLink,

    settingsPage,
    pagina
  ]),
})
