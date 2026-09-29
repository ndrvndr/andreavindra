import type { Icon } from "@tabler/icons-react"

import { cn } from "@/lib/utils"

type PrincipleCardProps = {
  title: string
  description: string
  icon: Icon
  index: number
}

export function PrincipleCard({
  title,
  description,
  icon: Icon,
  index,
}: PrincipleCardProps) {
  return (
    <article
      className={cn(
        "group/feature relative flex h-full flex-col bg-card py-10 lg:border-r dark:border-border",
        (index === 0 || index === 3) && "lg:border-l dark:border-border",
        index < 3 && "lg:border-b dark:border-border"
      )}
    >
      {index < 3 && (
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-secondary" />
      )}

      {index >= 3 && (
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-secondary" />
      )}

      <div
        aria-hidden="true"
        className="relative z-10 mb-4 px-10 dark:text-muted-foreground"
      >
        <Icon />
      </div>

      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-secondary" />

        <h3 className="inline-block transition duration-200 group-hover/feature:translate-x-2">
          {title}
        </h3>
      </div>

      <p className="relative z-10 max-w-xs px-10 text-sm dark:text-muted-foreground">
        {description}
      </p>
    </article>
  )
}
