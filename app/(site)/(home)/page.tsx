import { Metadata } from "next"

import { Spotlight } from "@/components/ui/spotlight-new"
import {
  HeroSection,
  HowIWorkSection,
  JournalSection,
  PostsSection,
  ProjectsSection,
} from "@/features/home"
import { DEFAULT_METADATA } from "@/constants/metadata"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Personal website and blog by Andre Avindra. Showcase of my projects, thoughts and skills on website development.",
  alternates: {
    canonical: `${DEFAULT_METADATA.url}`,
  },
}

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <Spotlight />
      <HeroSection />
      <HowIWorkSection />
      <PostsSection />
      <JournalSection />
      <ProjectsSection />
    </div>
  )
}
