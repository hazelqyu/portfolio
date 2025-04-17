import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'game',
  title: 'Game',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          options: {
            list: [
              { title: 'Image', value: 'image' },
              { title: 'Video', value: 'video' },
              { title: 'WebGL', value: 'webgl' }
            ]
          },
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'string',
          validation: Rule => Rule.required()
        })
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'shortDesc',
      title: 'Short Description',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'longDesc',
      title: 'Long Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' }
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' }
            ]
          }
        }
      ],
      validation: Rule => Rule.required()
    })
  ]
}) 