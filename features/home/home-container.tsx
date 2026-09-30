import { Spotlight } from "@/components/ui/spotlight-new"
import {
  HeroSection,
  HowIWorkSection,
  JournalSection,
  PostsSection,
  ProjectsSection,
} from "./sections"

export default function HomeContainer() {
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
