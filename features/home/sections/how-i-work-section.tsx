import { Highlight } from "@/components/ui/hero-highlight"
import { howIWorkPrinciples } from "@/constants/how-i-work"
import { cn } from "@/lib/utils"

import { PrincipleCard } from "../components/principle-card"

export function HowIWorkSection() {
  return (
    <section
      id="how-i-work"
      aria-labelledby="how-i-work-heading"
      className="relative scroll-mt-28"
    >
      <div
        className={cn(
          "absolute inset-0 opacity-15",
          "bg-size-[40px_40px]",
          "dark:bg-[radial-gradient(var(--secondary)_4px,transparent_4px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background" />

      <div className="layout relative z-10 flex flex-col items-center py-12 pt-20 md:py-20">
        <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
          HOW I WORK
        </p>

        <h2
          id="how-i-work-heading"
          className="mt-9 text-center text-5xl leading-16 font-bold text-foreground md:text-6xl"
        >
          Built with <Highlight>Purpose</Highlight>
        </h2>

        <p className="mt-9 max-w-sm text-center text-muted-foreground">
          Understand the why. Be intentional with the how.
        </p>

        <ul className="relative z-10 mx-auto mt-10 mb-12 grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {howIWorkPrinciples.map((principle, index) => (
            <li key={principle.title}>
              <PrincipleCard {...principle} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
