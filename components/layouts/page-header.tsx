import type { Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Highlight } from "@/components/ui/hero-highlight"

interface PageHeaderProps {
  backgroundText: string
  icon: Icon
  title: string
  highlight: string
  description: string
}

export function PageHeader({
  backgroundText,
  icon: IconComponent,
  title,
  highlight,
  description,
}: PageHeaderProps) {
  return (
    <header className="relative">
      <p
        aria-hidden={true}
        className="absolute bottom-42.5 left-0 hidden text-[250px] leading-0 font-bold text-secondary opacity-5 lg:block"
      >
        {backgroundText}
      </p>

      <div className="layout flex flex-col items-center pt-28 pb-12 text-center md:pt-48 md:pb-20">
        <Button
          asChild
          size="icon-lg"
          variant="secondary"
          className="pointer-events-none"
        >
          <span aria-hidden="true">
            <IconComponent />
          </span>
        </Button>
        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          {title} <Highlight>{highlight}</Highlight>
        </h1>
        <p className="mt-3 text-muted-foreground">{description}</p>
      </div>
    </header>
  )
}
