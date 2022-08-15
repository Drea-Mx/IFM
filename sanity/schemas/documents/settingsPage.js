export default {
    //
    name: 'settingsPage',
    title: 'Configuración General',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: ' Título',
            type: 'string',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'imageType'
        },
        {
            name: 'menu',
            title: 'Menú',
            type: 'menu'
        },
        {
            name: 'tel',
            title: 'Tel',
            type: 'string'
        },
        {
            name: 'mail',
            title: 'Mail',
            type: 'string'
        },
        {
            name: 'direccion',
            title: 'Dirección',
            type: 'text'
        },
        {
            name: 'iconoFooter',
            title: 'Icono Footer',
            type: 'imageType'
        },
        {
            name: 'mapaCodigo',
            title: 'Código del mapa',
            type: 'text'
        },
        {
            name: 'redesSociales',
            title: 'Redes Sociales',
            type: 'array',
            of: [
                {
                    type: 'social'
                }
            ]
        },
        {
            name: 'sesweb',
            title: 'Sesweb',
            type: 'generalLink'
        },
        {
            name: 'licenciaKnotion',
            title: 'Licencia Knotion',
            type: 'generalLink'
        },
        {
            name: 'terminios',
            title: 'Terminos y Condiciones',
            type: 'linkToPage'
        },
        {
            name: 'politicas',
            title: 'Politica de Privacidad',
            type: 'linkToPage'
        },
        {
            name: 'derechos',
            title: 'Derechos reservados',
            type: 'string'
        }
    ],
}