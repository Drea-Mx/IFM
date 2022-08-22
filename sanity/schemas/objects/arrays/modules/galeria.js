export default {
    name: 'galeria',
    title: 'Galería',
    type: 'object',
    fields: [
        {
            name: 'objetos',
            title: 'Objetos',
            type: 'array',
            of: [
                {
                    type: 'objeto'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'objetos.0.titulo',
            subtitle: 'objetos.0.description',
            media: 'objetos.0.imagen'
        }
    }
}