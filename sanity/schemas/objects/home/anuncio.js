export default {
    name: 'anuncio',
    title: 'Anuncio',
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
    ]
}