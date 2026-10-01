"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type EvidenceImagesProps = {
  title: string
  images: string[]
}

export function EvidenceImages({ title, images }: EvidenceImagesProps) {
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const visibleImages = images.slice(0, 3)

  useEffect(() => {
    if (!expanded) return

    const handlePointerDown = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setExpanded(false)
        setActive(null)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [expanded])

  return (
    <div
      ref={containerRef}
      className="flex items-center"
      aria-label={`Evidence for ${title}`}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setExpanded(true)
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") {
          setExpanded(false)
          setActive(null)
        }
      }}
    >
      {visibleImages.map((src, index) => {
        const isActive = active === index

        return (
          <motion.figure
            key={src}
            className="relative size-14 shrink-0 rounded-md border bg-background"
            initial={false}
            animate={{
              marginLeft: index === 0 ? 0 : expanded ? 8 : -40,
              rotate: expanded ? 0 : (index - 1) * 6,
              y: isActive ? -4 : 0,
              scale: isActive ? 1.08 : 1,
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                    delay: expanded ? index * 0.03 : 0,
                  }
            }
            style={{
              zIndex: isActive ? 20 : visibleImages.length - index,
            }}
          >
            <Tooltip open={isActive}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="relative block size-full cursor-zoom-in overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-ring"
                  aria-label={`Lihat ${title} evidence ${index + 1}`}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") setActive(index)
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType === "mouse") setActive(null)
                  }}
                  onFocus={() => setActive(index)}
                  onBlur={() => setActive(null)}
                  onClick={(e) => {
                    if (!expanded) {
                      setExpanded(true)
                      return
                    }
                    e.stopPropagation()
                    setActive((prev) => (prev === index ? null : index))
                  }}
                >
                  <Image
                    src={src}
                    alt={`${title} evidence ${index + 1}`}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </button>
              </TooltipTrigger>

              <TooltipContent
                side="top"
                sideOffset={10}
                collisionPadding={16}
                className="p-2.5 text-foreground shadow-lg"
              >
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  className="relative size-64 overflow-hidden rounded-sm sm:size-80"
                >
                  <Image
                    src={src}
                    alt={`${title} evidence ${index + 1} (large)`}
                    fill
                    sizes="(min-width: 640px) 320px, 256px"
                    className="object-cover"
                  />
                </motion.div>
              </TooltipContent>
            </Tooltip>
          </motion.figure>
        )
      })}
    </div>
  )
}
