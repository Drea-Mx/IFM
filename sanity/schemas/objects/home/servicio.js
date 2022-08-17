export default {
    name: 'servicio',
    title: 'Servicio',
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
            name: 'description',
            title: 'Descripción',
            type: 'text'
        },
        {
            name: 'linkToPage',
            title: 'Link a página',
            type: 'reference',
            to: [
                {
                    type: 'paginas'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'nombre',
            subtitle: 'description',
            media: 'icono'
        }
    }
}