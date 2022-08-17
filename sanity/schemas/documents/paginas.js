export default {
    //
    name: 'paginas',
    title: 'Páginas',
    type: 'document',
    icon: () => `📄`,
    fields: [
        {
            name: 'title',
            title: 'Nombre de la página',
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
        },
        {
            name: 'description',
            title: 'Descripción',
            type: 'text',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'description',
            media: 'thumbnail'
        }
    }
}