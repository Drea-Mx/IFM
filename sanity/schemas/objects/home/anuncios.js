export default {
    name: 'anuncios',
    title: 'Anuncios',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    fields: [
        {
            name: 'titulo',
            title: 'Título',
            type: 'string'
        },
        {
            name: 'anuncioPrincipal',
            title: 'Anuncio Principal',
            type: 'reference',
            to: [{type: 'paginas'}]
        },
        {
            name: 'anunciosHome',
            title: 'Anuncios',
            type: 'array',
            of: [{type: 'anuncio'}]
        }
    ]
}