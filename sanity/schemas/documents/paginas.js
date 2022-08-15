export default {
    //
    name: 'paginas',
    title: 'Páginas',
    type: 'document',
    icon: () => `📄`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            }
        },
        {
            name: 'thumbnail',
            title: 'Imagen Principal',
            type: 'imageType',
        }
    ],
}