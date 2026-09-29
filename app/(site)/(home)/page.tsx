import { Spotlight } from "@/components/ui/spotlight-new"
import {
  HeroSection,
  HowIWorkSection,
  PostsSection,
  ProjectsSection,
} from "@/features/home"
import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <Spotlight />
      <HeroSection />
      <HowIWorkSection />
      <PostsSection />
      <HowIWorkSection />
      <ProjectsSection />
    </div>
  )
}
