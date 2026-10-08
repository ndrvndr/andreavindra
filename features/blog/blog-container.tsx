import { IconArticle } from "@tabler/icons-react"

import { PageHeader } from "@/components/layouts/page-header"

import { BlogListing } from "./components/blog-listing"
import { getAllPosts, getTags } from "./lib/data"

export async function BlogContainer() {
  const [posts, tags] = await Promise.all([getAllPosts(), getTags()])

  return (
    <>
      <PageHeader
        backgroundText="articles"
        icon={IconArticle}
        title="Articles &"
        highlight="Notes"
        description="Practical guides and notes on software development, technology, and what I’m learning."
      />

      <section aria-label="Blog articles">
        <BlogListing initial={{ posts, tags }} />
      </section>
    </>
  )
}
