import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { LinkPreview } from "@/components/ui/link-preview"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Project } from "@/constants/projects"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  project: Project
  isReversed?: boolean
}

export function ProjectCard({ project, isReversed = false }: ProjectCardProps) {
  const { title, description, image, githubUrl, liveDemo, tools } = project

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
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
            loading="eager"
          />
        </figure>

        <figure className="pointer-events-none isolate z-1 aspect-video overflow-hidden rounded-xl rounded-b-none border border-b-0 border-dashed border-neutral-900 shadow lg:hidden lg:border-solid dark:shadow-none">
          <Image
            src={image}
            alt={title}
            width={1440}
            height={810}
            loading="eager"
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
        <h3 className="text-4xl font-bold">{title}</h3>

        <div className="lg:mt-6 lg:rounded-xl lg:border lg:border-dashed lg:border-neutral-900 lg:bg-background lg:p-6">
          <p className="mt-6 text-sm text-muted-foreground lg:mt-0">
            {description}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <p className="text-xs text-muted-foreground">Tools:</p>
          <ul className="flex flex-wrap gap-3">
            {tools.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Tooltip>
                  <TooltipTrigger aria-label={label}>
                    <Icon aria-hidden="true" className="size-5" />
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>

                <span className="sr-only">Tech Name</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex gap-x-2">
          <Button
            asChild
            variant="outline"
            size="icon-lg"
            className="dark:bg-background"
          >
            <LinkPreview
              url={githubUrl}
              aria-label="View Dimension AI source code on GitHub"
            >
              <IconBrandGithub />
            </LinkPreview>
          </Button>

          {liveDemo && (
            <Button
              asChild
              variant="outline"
              size="icon-lg"
              className="dark:bg-background"
            >
              <LinkPreview
                url={liveDemo}
                aria-label="Visit Dimension AI website"
              >
                <IconExternalLink />
              </LinkPreview>
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}
