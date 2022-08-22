export default {
    name: 'sliderObject',
    title: 'Slider de Imágenes',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    fields: [
        {
            name: 'slider',
            title: 'Slider',
            type: 'array',
            of: [{type: 'imageType'}]
        }
    ],
    preview: {
        select: {
            title: 'slider.0.alt',
            media: 'slider.0'
        }
    }
}