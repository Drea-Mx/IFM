export default {
    //
    name: 'homePage',
    title: 'Página Principal',
    type: 'document',
    icon: () => `🏠`,
    fields: [
        {
            name: 'title',
            title: ' Título',
            type: 'string',
            hidden: true
        },
        {
            name: 'heroSection',
            title: 'Sección Principal',
            type: 'heroHome'
        },
        {
            name: 'servicios',
            title: 'Servicios',
            type: 'servicios'
        },
        {
            name: 'anuncios',
            title: 'Anuncios',
            type: 'anuncios'
        },
        {
            name: 'calidad',
            title: 'Educación de Calidad',
            type: 'calidad'
        },
        {
            name: 'sliderHome',
            title: 'Galería de Imágenes',
            type: 'sliderHome'
        }
    ],
}