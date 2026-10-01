import type { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import { BlogContainer } from "@/features/blog/blog-container"

export const revalidate = false

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, experiments, and lessons from building for the web.",
  alternates: { canonical: `${DEFAULT_METADATA.url}/blog` },
}

export default function Page() {
  return <BlogContainer />
}
