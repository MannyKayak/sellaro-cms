import { Block } from 'payload'

export const PageTitleBlock: Block = {
  slug: 'pageTitleBlock',
  labels: {
    singular: 'Sezione titolo pagina',
    plural: 'Sezioni titolo pagina',
  },
  interfaceName: 'PageTitleBlock',
  fields: [
    {
      name: 'title',
      label: 'Titolo della pagina',
      type: 'text',
      required: true,
    },
    {
      name: 'titleColor',
      label: 'Colore del titolo',
      type: 'radio',
      required: true,
      defaultValue: 'black',
      options: [
        {
          value: 'black',
          label: 'Nero',
        },
        {
          value: 'white',
          label: 'Bianco',
        },
        {
          value: 'teal-600',
          label: 'Verde BIM(K)now',
        },
      ],
    },
    {
      name: 'image',
      label: 'Immagine',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'layoutSelector',
      type: 'radio',
      required: true,
      defaultValue: 'background',
      options: [
        {
          label: 'Usa immagine come background',
          value: 'background',
        },
        {
          label: "Posiziona l'immagine sotto il titolo",
          value: 'imageDown',
        },
        {
          label: "Posiziona l'immagine sopra il titolo",
          value: 'imageUp',
        },
      ],
    },
    {
      name: 'paragraphTitle',
      type: 'text',
      label: 'Titolo del paragrafo',
    },
    {
      name: 'paragraph',
      type: 'richText',
      label: 'Paragrafo sotto il titolo',
    },
  ],
}
