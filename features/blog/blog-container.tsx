import { IconArticle } from "@tabler/icons-react"

import { PageHeader } from "@/components/layouts/page-header"

import { BlogListing } from "./components/blog-listing"
import { getAllPosts, getTags } from "./lib/data"

export async function BlogContainer() {
  const [posts, tags] = await Promise.all([getAllPosts(), getTags()])

  return (
    <>
      <PageHeader
        backgroundText="logbook"
        icon={IconArticle}
        title="Things I'm"
        highlight="Learning"
        description="Notes on software engineering, technology, and the lessons I pick up along the way."
      />

      <section aria-label="Blog articles">
        <BlogListing initial={{ posts, tags }} />
      </section>
    </>
  )
}
