import { defineArrayMember, defineField, defineType } from "sanity"

export const table = defineType({
  name: "table",
  title: "Table",
  type: "object",

  fields: [
    defineField({
      name: "headerRows",
      title: "Header rows",
      type: "number",
    }),

    defineField({
      name: "rows",
      title: "Rows",
      type: "array",
      of: [
        defineArrayMember({
          name: "row",
          type: "object",
          fields: [
            defineField({
              name: "cells",
              title: "Cells",
              type: "array",
              of: [
                defineArrayMember({
                  name: "cell",
                  type: "object",
                  fields: [
                    defineField({
                      name: "value",
                      title: "Value",
                      type: "array",
                      of: [
                        defineArrayMember({
                          type: "block",
                          styles: [
                            { title: "Normal", value: "normal" },
                            { title: "Heading 2", value: "h2" },
                            { title: "Heading 3", value: "h3" },
                          ],
                          lists: [
                            { title: "Bullet", value: "bullet" },
                            { title: "Numbered", value: "number" },
                          ],
                          marks: {
                            decorators: [
                              { title: "Strong", value: "strong" },
                              { title: "Emphasis", value: "em" },
                              { title: "Code", value: "code" },
                            ],
                            annotations: [
                              {
                                name: "link",
                                type: "object",
                                fields: [
                                  defineField({
                                    name: "href",
                                    type: "url",
                                    validation: (rule) =>
                                      rule.required().uri({
                                        allowRelative: true,
                                        scheme: ["http", "https", "mailto"],
                                      }),
                                  }),
                                  defineField({
                                    name: "variant",
                                    title: "Style",
                                    type: "string",
                                    options: {
                                      list: [
                                        {
                                          title: "Underline",
                                          value: "underline",
                                        },
                                        {
                                          title: "Button",
                                          value: "button",
                                        },
                                      ],
                                      layout: "radio",
                                    },
                                    initialValue: "underline",
                                  }),
                                ],
                              },
                            ],
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
