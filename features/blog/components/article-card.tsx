import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { IconClockHour4, IconEye } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

export function ArticleCard() {
  return (
    <article className="@container/blog-card">
      <Link href="#" className="block">
        <div className="flex flex-col gap-4 @lg/blog-card:flex-row-reverse @lg/blog-card:items-center @lg/blog-card:gap-6">
          <figure className="overflow-hidden rounded-md @lg/blog-card:w-44 @lg/blog-card:shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog"
              width={1440}
              height={864}
              className="aspect-5/3 h-full w-full object-cover"
            />
          </figure>

          <div className="w-full">
            <time
              dateTime="2024-12-17T20:00:00"
              className="text-sm text-muted-foreground"
            >
              December 17, 2024
            </time>

            <h3 className="mt-3 text-xl font-bold">
              List Animation using Motion for React
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              An in-depth guide on how to animate enter and exit animation for
              list using Motion for React (previously Framer Motion).
            </p>

            <div className="mt-5 flex flex-col gap-4 @lg/blog-card:flex-row @lg/blog-card:items-center @lg/blog-card:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <IconClockHour4
                    aria-hidden="true"
                    className="size-3.5 text-[rgb(179,255,171)]"
                  />
                  <span className="text-xs">6 min read</span>
                </div>

                <div className="flex items-center gap-2">
                  <IconEye
                    aria-hidden="true"
                    className="size-3.5 text-[rgb(179,255,171)]"
                  />
                  <span className="text-xs">10.000 views</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["react", "animation"].map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
