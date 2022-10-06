export default {
    name: 'heroHome',
    title: 'Sección Principal',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    fields: [
        {
            name: 'title',
            title: 'Título Principal',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'imagen',
            title: 'Imagen Temporal para Video',
            type: 'imageType'
        },
        {
            name: 'videoEmbed',
            title: 'Código Video',
            type: 'string'
        },
    ]
}