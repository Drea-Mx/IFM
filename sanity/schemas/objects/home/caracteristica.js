export default {
    name: 'caracteristica',
    title: 'Caracteristica',
    type: 'object',
    fields: [
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
            title: 'linkToPage.title',
            subtitle: 'linkToPage.description',
            media: 'linkToPage.thumbnail'
        }
    }
}