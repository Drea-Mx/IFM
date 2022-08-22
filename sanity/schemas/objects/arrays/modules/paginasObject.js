export default {
    name: 'paginasObject',
    title: 'Páginas',
    type: 'object',
    fields: [
        {
            name: 'objetos',
            title: 'Objetos',
            type: 'array',
            of: [
                {
                    type: 'anuncio'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'objetos.0.linkToPage.title',
            subtitle: 'objetos.0.linkToPage.description',
            media: 'objetos.0.linkToPage.thumbnail'
        }
    }
}