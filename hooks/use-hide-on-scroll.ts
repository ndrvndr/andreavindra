"use client"

import { useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react"

export function useHideOnScroll(offset = 80) {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0

    if (latest <= offset) {
      setHidden(false)
      return
    }

    setHidden(latest > previous)
  })

  return hidden
}
