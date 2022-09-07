export default {
    name: 'archivo',
    title: 'Archivo',
    type: 'object',
    fields: [
        {
            name: 'documento',
            title: 'Documento',
            type: 'file',
        },
    ],
    preview: {
        select: {
          title: 'documento.asset.originalFilename'
        }
      }
}