import type { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import { BlogContainer } from "@/features/blog/blog-container"

export const revalidate = 604800

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, experiments, and lessons from building for the web.",
  alternates: {
    canonical: `${DEFAULT_METADATA.url}/blog`,
    types: { "application/rss+xml": `${DEFAULT_METADATA.url}/rss.xml` },
  },
}

export default function Page() {
  return <BlogContainer />
}
