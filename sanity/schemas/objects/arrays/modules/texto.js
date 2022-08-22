export default {
    name: 'texto',
    title: 'Texto',
    type: 'object',
    fields: [
        {
            name: 'campoDeTexto',
            title: 'Campo de texto',
            type: 'blockModule'
        },
    ],
    preview: {
        select: {
          title: 'campoDeTexto',
        }
      }
}