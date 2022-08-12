export default {
    name: 'categoria',
    title: 'Secciones',
    type: 'object',
    fields: [
        {
            name: 'titulo',
            title: 'Título',
            type: 'string'
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
                {
                    type: 'link'
                }
            ]
        }
    ]
}