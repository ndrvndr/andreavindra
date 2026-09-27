"use client"

import { Separator as SeparatorPrimitive } from "radix-ui"
import * as React from "react"

import { cn } from "cn"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0",
        "data-horizontal:h-px data-horizontal:w-full",
        "data-vertical:w-px data-vertical:self-stretch",
        "data-horizontal:bg-linear-to-r",
        "data-horizontal:from-[rgb(18,255,247)]",
        "data-horizontal:via-[rgb(99,255,209)]",
        "data-horizontal:to-[rgb(179,255,171)]",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
