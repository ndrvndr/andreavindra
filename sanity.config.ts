"use client"

import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

import { dataset, projectId } from "./sanity/env"
import { schemaTypes } from "./sanity/schemaTypes"

export default defineConfig({
  name: "portfolio",
  title: "Portfolio Blog",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Blog")
          .items([
            S.documentTypeListItem("post").title("Posts"),
            S.divider(),
            S.documentTypeListItem("tag").title("Tags"),
            S.documentTypeListItem("category").title("Categories"),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
  document: {
    // Taxonomy creation remains available inside its own document list only.
    newDocumentOptions: (options, { creationContext }) =>
      creationContext.type === "global"
        ? options.filter(
            (option) => !["tag", "category"].includes(option.templateId)
          )
        : options,
  },
})
