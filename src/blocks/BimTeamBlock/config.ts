import { Block } from 'payload'

export const BimTeamBlock: Block = {
  slug: 'bimTeamBlock',
  labels: {
    singular: 'Blocco collaboratori',
    plural: 'Blocchi collaboratori',
  },
  interfaceName: 'BimTeamProps',
  fields: [
    {
      name: 'sectionTitle',
      label: 'Titolo della sezione',
      type: 'text',
    },
    {
      name: 'reference',
      label: 'Reference',
      type: 'text',
    },
    {
      name: 'people',
      label: 'Profili persone',
      type: 'relationship',
      relationTo: 'people',
      hasMany: true,
      required: true,
    },
  ],
}
