import { Block } from 'payload'

export const SectionWithMediaAndText: Block = {
  slug: 'sectionWithMediaAndText',
  labels: {
    singular: 'Sezione con foto e testo',
    plural: 'Sezioni con foto e testo',
  },
  interfaceName: 'SectionWithMediaAndText',
  fields: [
    {
      name: 'title',
      label: 'Titolo',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Contenuto',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      label: 'Foto',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'radio',
      options: [
        {
          label: 'Immagine a destra',
          value: 'right',
        },
        {
          label: 'Immagine a sinistra',
          value: 'left',
        },
      ],
      defaultValue: 'right',
    },
  ],
}
