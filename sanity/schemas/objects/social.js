export default {
    name: 'social',
    title: 'Social',
    type: 'object',
    fields: [
        {
            name: 'nombre',
            title: 'Nombre',
            type: 'string'
        },
        {
            name: 'icono',
            title: 'Icono',
            type: 'imageType'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        }
    ]
}