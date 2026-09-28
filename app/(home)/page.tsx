import { Spotlight } from "@/components/ui/spotlight-new"
import { HeroSection, ProjectsSection } from "@/features/home"

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <Spotlight />
      <HeroSection />
      <ProjectsSection />
    </div>
  )
}
