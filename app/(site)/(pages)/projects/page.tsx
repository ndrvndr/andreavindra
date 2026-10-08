import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import { ProjectsContainer } from "@/features/projects/projects-container"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Andre Avindra’s software development projects, from web interfaces to backend systems, with details on features and technologies.",
  alternates: { canonical: `${DEFAULT_METADATA.url}/projects` },
}

export default function Page() {
  return <ProjectsContainer />
}
