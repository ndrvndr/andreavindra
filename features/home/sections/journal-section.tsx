import { Highlight } from "@/components/ui/hero-highlight"
import { cn } from "@/lib/utils"

import { ExpandableJournal } from "../components/expandable-journal"

export function JournalSection() {
  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="relative"
    >
      <div
        className={cn(
          "absolute inset-0 opacity-15",
          "bg-size-[40px_40px]",
          "dark:bg-[radial-gradient(var(--secondary)_4px,transparent_4px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background" />

      <div className="layout relative z-10 py-12 pt-20 md:py-20">
        <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
          JOURNAL / LOOKING BACK
        </p>

        <h2
          id="journal-heading"
          className="mt-9 text-5xl leading-16 font-bold md:text-6xl"
        >
          The <Highlight>Journey</Highlight> So Far
        </h2>

        <p className="mt-9 text-muted-foreground">
          A short look back at the moments and memories that stood out along the
          way.
        </p>

        <ExpandableJournal />
      </div>
    </section>
  )
}
