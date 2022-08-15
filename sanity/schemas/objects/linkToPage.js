export default {
    name: 'linkToPage',
    title: 'Link',
    type: 'object',
    options: {
        columns: 2 // Defines a grid for the fields and how many columns it should have
      },
    fields: [
        {
            name: 'texto',
            title: 'Texto',
            type: 'string'
        },
        {
            name: 'pagina',
            title: 'Página',
            type: 'reference',
            to: [
                {
                    type: 'paginas'
                }
            ]
        }
    ]
}