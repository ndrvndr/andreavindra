import { IconChevronRight } from "@tabler/icons-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Highlight } from "@/components/ui/hero-highlight"
import { ProjectCard } from "@/features/projects/components/project-card"

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-28"
    >
      <div className="relative">
        <div className="layout relative z-10 py-12 pt-20 md:py-20">
          <h2
            id="projects-heading"
            className="text-5xl leading-16 font-bold md:text-6xl"
          >
            Things I’ve <Highlight>Built</Highlight>
          </h2>

          <ul className="mt-20">
            {Array.from({ length: 2 }).map((_, idx) => {
              const isReversed = idx % 2 === 1

              return (
                <li key={idx}>
                  <ProjectCard isReversed={isReversed} />
                </li>
              )
            })}
          </ul>

          <div className="mx-auto mt-4 w-fit">
            <Button asChild variant="ghost" size="lg">
              <Link href="/projects">
                <span>See more projects</span>
                <IconChevronRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

{
  /* <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "dark:bg-[radial-gradient(var(--secondary)_4px,transparent_4px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background" /> */
}
