import { IconUser } from "@tabler/icons-react"
import Link from "next/link"

import { PageHeader } from "@/components/layouts/page-header"
import { ChromaticImage } from "@/components/ui/chromatic-image"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { techStack } from "@/constants/about"

export function AboutMeSection() {
  return (
    <>
      <PageHeader
        backgroundText="the journey"
        icon={IconUser}
        title="Meet"
        highlight="Andre"
        description="From lockdown curiosity to full-stack engineer"
      />

      <section
        aria-labelledby="profile-name"
        className="layout flex max-w-5xl flex-col items-center justify-center gap-20 pt-10 pb-12 md:pb-20 lg:flex-row"
      >
        <ChromaticImage
          src="https://res.cloudinary.com/dqqmzgesp/image/upload/v1790697774/profile-picture_ebqnwb.webp"
          alt="A person standing beneath a red light"
          className="aspect-4/5 w-full max-w-xs rounded-xl"
        />

        <div className="w-full flex-1">
          <h2 id="profile-name" className="text-4xl font-bold">
            Andre Avindra
          </h2>

          <p className="mt-8 text-muted-foreground">
            Hi, I'm Andre. My journey into web development began at the start of
            the pandemic. With a lot of free time, I picked up the basics from
            online forums and YouTube, mostly around frontend. Somewhere along
            the way, curiosity turned into a career as a frontend developer.
          </p>
          <p className="mt-4 text-muted-foreground">
            As I grew professionally, I kept running into the parts of a product
            that live beyond the browser. So I started learning backend and
            DevOps on my own to fill those gaps, from building APIs and
            databases to shipping and running apps. I welcome constructive
            feedback because it's the fastest way to get better.
          </p>
          <p className="mt-4 text-muted-foreground">
            I built this site to share what I'm learning and to showcase the
            projects I've worked on. Writing things down helps me understand
            them better, and hopefully it helps someone else too. Feel free to
            reach out, I'd love to hear from you!
          </p>

          <p id="tech-stack-label" className="mt-8 text-muted-foreground">
            These days I work across the full stack. Here are the tools I reach
            for most:
          </p>

          <ul
            aria-labelledby="tech-stack-label"
            className="mt-6 flex flex-wrap gap-4"
          >
            {techStack.map(({ name, url, icon: Icon, content }) => (
              <li key={name}>
                <Tooltip>
                  <TooltipTrigger aria-label={name}>
                    <Icon aria-hidden="true" className="size-8" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-x-1">
                        <Icon aria-hidden="true" className="size-4.5" />
                        <Link
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold underline"
                          aria-label={`${name} (opens in a new tab)`}
                        >
                          {name}
                        </Link>
                      </div>

                      <p className="text-sm">{content}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
