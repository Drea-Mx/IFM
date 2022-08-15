export default {
    name: 'sliderHome',
    title: 'Galería de Imágenes',
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
            name: 'slider',
            title: 'Slider',
            type: 'array',
            of: [{type: 'imageType'}]
        }
    ]
}