export default {
    name: 'imagenTexto',
    title: 'Imagen + Texto',
    type: 'object',
    fields: [
        {
            name: 'imagen',
            title: 'Imagen',
            type: 'imageType'
        },
        {
            name: 'texto',
            title: 'Texto',
            type: 'blockModule'
        },
    ],
    preview: {
        select: {
          title: 'texto',
          media: 'imagen'
        }
      }
    
}