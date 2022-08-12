export default {
    name: 'generalLink',
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
            name: 'link',
            title: 'Link',
            type: 'url'
        }
    ]
}