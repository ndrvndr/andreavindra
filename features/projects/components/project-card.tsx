import {
  IconBrandGithub,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandTypescript,
  IconExternalLink,
} from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  isReversed?: boolean
}

export function ProjectCard({ isReversed = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "items-center gap-8 bg-background lg:flex lg:bg-transparent",
        isReversed ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      <div className="relative z-0 shrink-0 lg:w-[55%]">
        <figure className="pointer-events-none relative hidden aspect-video w-full overflow-hidden rounded-xl border border-neutral-900 shadow lg:mb-15.5 lg:block dark:shadow-none">
          <Image
            src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dimension AI"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </figure>

        <figure className="pointer-events-none isolate z-1 aspect-video overflow-hidden rounded-xl rounded-b-none border border-b-0 border-dashed border-neutral-900 shadow lg:hidden lg:border-solid dark:shadow-none">
          <Image
            src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dimension AI"
            width={1440}
            height={810}
          />
        </figure>
      </div>

      <div
        className={cn(
          "grow rounded-xl rounded-t-none border border-dashed border-neutral-900 p-6",
          "lg:relative lg:z-10 lg:flex lg:max-w-2/3 lg:flex-col lg:rounded-t-xl lg:border-none lg:p-0",
          isReversed
            ? "lg:-ml-24 lg:items-end lg:text-right"
            : "lg:-mr-24 lg:text-left"
        )}
      >
        <h3 className="text-4xl font-bold">Dimension AI</h3>

        <div className="lg:mt-6 lg:rounded-xl lg:border lg:border-dashed lg:border-neutral-900 lg:bg-background lg:p-6">
          <p className="mt-6 text-sm text-muted-foreground lg:mt-0">
            Having struggled with understanding how the Spotify OAuth flow
            works, I made the course I wish I could have had. Unlike tutorials
            that only cover a few concepts and leave you with half-baked GitHub
            repositories, this course covers everything from explaining the
            principles of REST APIs to implementing Spotify's OAuth flow and
            fetching API data in a React app. By the end of the course, you’ll
            have an app deployed to the internet you can add to your portfolio.
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <p className="text-xs text-muted-foreground">Tools:</p>
          <ul className="flex gap-x-2">
            {[IconBrandNextjs, IconBrandTailwind, IconBrandTypescript].map(
              (Icon) => (
                <li key={Icon.displayName}>
                  <Icon aria-hidden="true" />
                  <span className="sr-only">Tech Name</span>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="mt-10 flex gap-x-2">
          <Button
            asChild
            variant="outline"
            size="icon-lg"
            className="dark:bg-background"
          >
            <Link href="#" aria-label="View Dimension AI source code on GitHub">
              <IconBrandGithub />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="icon-lg"
            className="dark:bg-background"
          >
            <Link href="#" aria-label="Visit Dimension AI website">
              <IconExternalLink />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
