import type { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import { BlogContainer } from "@/features/blog/blog-container"

export const revalidate = 604800

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore articles and practical notes by Andre Avindra on software development, React, Next.js, and lessons from building web applications.",
  alternates: {
    canonical: `${DEFAULT_METADATA.url}/blog`,
    types: { "application/rss+xml": `${DEFAULT_METADATA.url}/rss.xml` },
  },
}

export default function Page() {
  return <BlogContainer />
}
