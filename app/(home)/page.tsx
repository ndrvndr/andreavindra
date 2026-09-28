import { Spotlight } from "@/components/ui/spotlight-new"
import { HeroSection, PostsSection, ProjectsSection } from "@/features/home"
import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <Spotlight />
      <HeroSection />
      <section className="relative min-h-96">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "dark:bg-[radial-gradient(var(--secondary)_4px,transparent_4px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background" />
      </section>
      <PostsSection />
      <ProjectsSection />
    </div>
  )
}
