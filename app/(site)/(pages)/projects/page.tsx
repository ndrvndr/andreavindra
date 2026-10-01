import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import { ProjectsContainer } from "@/features/projects/projects-container"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects I've built, explored, and learned from across web development and software engineering.",
  alternates: { canonical: `${DEFAULT_METADATA.url}/projects` },
}

export default function Page() {
  return <ProjectsContainer />
}
