export default {
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
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
    ],
    preview: {
        select: {
          title: 'pagina.title',
          media: 'pagina.thumbnail'
        }
      }
}