export default {
    name: 'calidad',
    title: 'Calidad',
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
            name: 'description',
            title: 'Descripción',
            type: 'text',
        },
        {
            name: 'caracteristicas',
            title: 'Características',
            type: 'array',
            of: [{type: 'caracteristica'}]
        }
    ]
}