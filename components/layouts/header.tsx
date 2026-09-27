import { FloatingDock } from "@/components/ui/floating-dock"
import { navigationLinks } from "@/constants/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header
      className={cn(
        "fixed right-4 bottom-8 z-50 w-fit",
        "md:top-0 md:right-auto md:bottom-auto md:left-1/2 md:mt-16 md:-translate-x-1/2"
      )}
    >
      <nav aria-label="Primary navigation">
        <FloatingDock
          items={navigationLinks.map(({ icon: Icon, ...item }) => ({
            ...item,
            icon: <Icon className="h-full w-full" />,
          }))}
        />
      </nav>
    </header>
  )
}
