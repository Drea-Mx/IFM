// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import imageType from './objects/imageType'

import link from './objects/menu/link'
import categoria from './objects/menu/categoria'
import menu from './objects/menu/menu'
import social from './objects/social'
import blockModule from './objects/blockModule'

//Array Module
import texto from './objects/arrays/modules/texto'
import imagenTexto from './objects/arrays/modules/imagenTexto'
import codigo from './objects/arrays/modules/codigo'
import objeto from './objects/arrays/objeto'
import galeria from './objects/arrays/modules/galeria'
import paginasObject from './objects/arrays/modules/paginasObject'
import sliderObject from './objects/arrays/modules/sliderObject'
import moduleArray from './objects/arrays/moduleArray'
import archivo from './objects/arrays/modules/archivo'

import heroHome from './objects/home/heroHome'
import servicio from './objects/home/servicio'
import servicios from './objects/home/servicios'
import anuncios from './objects/home/anuncios'
import anuncio from './objects/home/anuncio'
import caracteristica from './objects/home/caracteristica'
import calidad from './objects/home/calidad'
import sliderHome from './objects/home/sliderHome'

import generalLink from './objects/generalLink'
import linkToPage from './objects/linkToPage'

import seo from './objects/seo'

import settingsPage from './documents/settingsPage'
import paginas from './documents/paginas'
import homePage from './documents/homePage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    imageType,
    blockModule,

    texto,
    imagenTexto,
    codigo,
    objeto,
    galeria,
    paginasObject,
    sliderObject,
    archivo,
    moduleArray,

    link,
    categoria,
    menu,
    social,

    heroHome,
    servicio,
    servicios,
    anuncio,
    anuncios,
    caracteristica,
    calidad,
    sliderHome,

    generalLink,
    linkToPage,

    seo,
    
    settingsPage,
    paginas,
    homePage
  ]),
})
