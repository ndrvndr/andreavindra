import { PageHeader } from "@/components/layouts/page-header"
import { IconBriefcase } from "@tabler/icons-react"

import { projects } from "@/constants/projects"

import { ProjectCard } from "./components/project-card"

export function ProjectsContainer() {
  return (
    <div>
      <PageHeader
        backgroundText="my work"
        icon={IconBriefcase}
        title="Featured"
        highlight="Projects"
        description="A collection of projects I've built to solve problems, explore ideas, and sharpen my skills."
      />

      <section aria-labelledby="projects-heading" className="layout pt-6 pb-24">
        <h2 id="projects-heading" className="sr-only">
          Project Collection
        </h2>

        <ul className="space-y-8 lg:space-y-0">
          {projects.map((project, idx) => {
            const isReversed = idx % 2 === 1

            return (
              <li key={project.title}>
                <ProjectCard project={project} isReversed={isReversed} />
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
