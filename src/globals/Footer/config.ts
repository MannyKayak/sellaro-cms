import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer con contatti',
  fields: [
    {
      name: 'title',
      label: 'Titolo sezione',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Descrizione',
      type: 'textarea',
    },
    {
      name: 'mail',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'socialLinks',
      label: 'Link social',
      type: 'array',
      fields: [
        {
          name: 'socialName',
          type: 'radio',
          options: ['Linkedin', 'Instagram', 'Facebook', 'Altro'],
        },
        {
          name: 'socialLink',
          label: 'Social URL',
          type: 'text',
        },
      ],
    },
  ],
}
