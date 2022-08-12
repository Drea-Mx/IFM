export default {
    name: 'menu',
    title: 'Menú',
    type: 'object',
    fields: [
        {
            name: 'categoria',
            title: 'Secciones',
            type: 'array',
            of: [
                {
                    type: 'categoria'
                }
            ]
        }
    ]
}