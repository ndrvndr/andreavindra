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

      <div className="layout flex flex-col items-center py-12 pt-20 md:py-20">
        <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
          How I Work
        </p>

        <h2
          id="how-i-work-heading"
          className="mt-9 text-center text-5xl leading-16 font-bold md:text-6xl"
        >
          Built Around <Highlight>What Matters</Highlight>
        </h2>

        <p className="mt-9 max-w-sm text-center text-muted-foreground">
          I focus on clarity, structure, and thoughtful decisions that make
          products easier to use, build, and maintain.
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
