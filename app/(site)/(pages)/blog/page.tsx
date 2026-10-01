import type { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import { BlogContainer } from "@/features/blog/blog-container"

export const revalidate = false

const title = "Blog"
const description =
  "Thoughts, experiments, and lessons from building for the web."
const url = `${DEFAULT_METADATA.url}/blog`
const images = [DEFAULT_METADATA.image]

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { type: "website", title, description, url, images },
  twitter: { card: "summary_large_image", title, description, images },
}

export default function Page() {
  return <BlogContainer />
}
