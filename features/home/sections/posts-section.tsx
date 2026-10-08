import { IconChevronRight } from "@tabler/icons-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Highlight } from "@/components/ui/hero-highlight"
import { Separator } from "@/components/ui/separator"
import { getAllPosts } from "@/features/blog/lib/data"

import { RecentPostsList } from "../components/recent-posts-list"

export async function PostsSection() {
  const posts = (await getAllPosts()).slice(0, 3)

  return (
    <section id="blog" aria-labelledby="blog-heading">
      <div className="layout relative z-10 py-12 pt-20 md:py-20 lg:pt-36">
        <div className="relative text-center">
          <p
            aria-hidden={true}
            className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-[250px] leading-0 font-bold text-secondary opacity-10 lg:block"
          >
            Posts
          </p>
          <h2
            id="blog-heading"
            className="text-center text-5xl leading-16 font-bold text-foreground md:text-6xl"
          >
            Latest <Highlight>Articles</Highlight>
          </h2>
        </div>

        <div className="mt-20 flex items-start gap-x-16">
          <div aria-hidden="true" className="hidden flex-col gap-y-4 lg:flex">
            <p className="flex flex-col gap-y-px text-sm text-muted-foreground uppercase">
              {"posts".split("").map((letter, idx) => (
                <span key={idx} className="rotate-90">
                  {letter}
                </span>
              ))}
            </p>

            <Separator orientation="vertical" className="mx-auto h-10" />
          </div>

          <div className="flex-1 space-y-16">
            <RecentPostsList posts={posts} />

            <div className="mx-auto w-fit">
              <Button asChild variant="ghost" size="lg">
                <Link href="/blog">
                  <span>View All Articles</span>
                  <IconChevronRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
