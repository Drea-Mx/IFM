export default {
    name: 'objeto',
    title: 'Objeto',
    type: 'object',
    fields: [
        {
            name: 'titulo',
            title: 'Título',
            type: 'string'
        },
        {
            name: 'imagen',
            title: 'Imagen',
            type: 'imageType'
        },
        {
            name: 'description',
            title: 'Descripción',
            type: 'text'
        },
    ],
    preview: {
        select: {
            title: 'titulo',
            subtitle: 'description',
            media: 'imagen'
        }
    }
}