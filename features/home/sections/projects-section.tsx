import { IconChevronRight } from "@tabler/icons-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Highlight } from "@/components/ui/hero-highlight"
import { Separator } from "@/components/ui/separator"
import { ProjectCard } from "@/features/projects/components/project-card"

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="layout relative z-10 py-12 pt-20 md:py-20 lg:pt-36">
        <div className="relative text-center">
          <p
            aria-hidden={true}
            className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-[250px] leading-0 font-bold text-secondary opacity-5 lg:block"
          >
            Projects
          </p>
          <h2
            id="projects-heading"
            className="text-center text-5xl leading-16 font-bold md:text-6xl"
          >
            Somethings I’ve <Highlight>Built</Highlight>
          </h2>
        </div>

        <div className="mt-20 flex items-start gap-x-16">
          <div aria-hidden="true" className="hidden flex-col gap-y-4 lg:flex">
            <p className="flex flex-col gap-y-px text-sm text-muted-foreground uppercase">
              {"projects".split("").map((letter, idx) => (
                <span key={idx} className="rotate-90">
                  {letter}
                </span>
              ))}
            </p>

            <Separator orientation="vertical" className="mx-auto h-10" />
          </div>

          <div className="space-y-4">
            <ul className="space-y-8 lg:space-y-0">
              {Array.from({ length: 2 }).map((_, idx) => {
                const isReversed = idx % 2 === 1

                return (
                  <li key={idx}>
                    <ProjectCard isReversed={isReversed} />
                  </li>
                )
              })}
            </ul>

            <div className="mx-auto w-fit">
              <Button asChild variant="ghost" size="lg">
                <Link href="/projects">
                  <span>See more projects</span>
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
