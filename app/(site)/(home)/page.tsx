import { Spotlight } from "@/components/ui/spotlight-new"
import {
  HeroSection,
  HowIWorkSection,
  JournalSection,
  PostsSection,
  ProjectsSection,
} from "@/features/home"

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
