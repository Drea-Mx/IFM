export default {
    name: 'servicios',
    title: 'Servicios',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    fields: [
        {
            name: 'imagenDeFondo',
            title: 'Imagen de Fondo',
            type: 'imageType'
        },
        {
            name: 'servicios',
            title: 'Servicios',
            type: 'array',
            of: [
                {
                    type: 'servicio'
                }
            ]
        }
    ]
}