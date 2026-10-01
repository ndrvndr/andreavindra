import { defineField, defineType } from "sanity"

const fields = [
  defineField({
    name: "title",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "slug",
    type: "slug",
    options: { source: "title" },
    validation: (rule) => rule.required(),
  }),
]
const orderings = [
  {
    title: "Title (A–Z)",
    name: "titleAsc",
    by: [{ field: "title", direction: "asc" as const }],
  },
]

export const tag = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields,
  preview: { select: { title: "title", subtitle: "slug.current" } },
  orderings,
})
export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    ...fields,
    defineField({ name: "description", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
  orderings,
})
