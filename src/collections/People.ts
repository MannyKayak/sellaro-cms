import { CollectionConfig } from 'payload'

export const People: CollectionConfig = {
  slug: 'people',
  labels: {
    singular: 'BIM team',
    plural: 'BIM teams',
  },
  fields: [
    {
      name: 'name',
      label: 'Nome',
      required: true,
      type: 'text',
    },
    {
      name: 'image',
      label: 'Foto',
      required: true,
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'role',
      label: 'Ruolo',
      type: 'text',
    },
  ],
}
