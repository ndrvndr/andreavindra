"use client"

import { IconX } from "@tabler/icons-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react"
import { createPortal } from "react-dom"

import { Button } from "@/components/ui/button"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { JournalItem, journalItems } from "@/constants/journal"
import { useOutsideClick } from "@/hooks/use-outside-click"

const subscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

export function ExpandableJournal() {
  const [active, setActive] = useState<JournalItem | null>(null)
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  )

  const id = useId()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null)
      }
    }

    if (active) {
      document.body.style.overflow = "hidden"
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <>
      {mounted &&
        createPortal(
          <>
            <AnimatePresence>
              {active && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-90 bg-background/50 backdrop-blur-md"
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {active && (
                <div className="fixed inset-0 z-100 grid place-items-center">
                  <motion.div
                    ref={ref}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={`journal-title-${active.year}`}
                    layoutId={`card-${active.year}-${id}`}
                    className="relative h-full w-full max-w-125 overflow-y-auto overscroll-contain bg-card md:h-fit md:max-h-[90dvh] md:rounded-xl"
                  >
                    <div className="sticky top-0 z-10 h-0">
                      <Button
                        type="button"
                        variant="secondary"
                        size="icon"
                        aria-label="Close journal entry"
                        className="absolute top-2 right-2"
                        onClick={() => setActive(null)}
                      >
                        <IconX aria-hidden="true" />
                      </Button>
                    </div>

                    <motion.div
                      layoutId={`year-${active.year}-${id}`}
                      className="flex h-48 items-center justify-center md:h-56"
                    >
                      <TextHoverEffect text={active.year} />
                    </motion.div>

                    <div className="p-4">
                      <motion.h3
                        id={`journal-title-${active.year}`}
                        layoutId={`title-${active.year}-${id}`}
                        className="text-xl font-bold"
                      >
                        {active.title}
                      </motion.h3>

                      <motion.p
                        layoutId={`description-${active.year}-${id}`}
                        className="mt-2 text-sm text-muted-foreground"
                      >
                        {active.description}
                      </motion.p>

                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-5"
                      >
                        {active.content}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </>,
          document.body
        )}

      <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {journalItems.map((item) => (
          <li key={item.year}>
            <motion.article
              layoutId={`card-${item.year}-${id}`}
              onClick={() => setActive(item)}
              className="relative min-h-72 w-full overflow-hidden rounded-xl border border-border bg-card p-6 text-left"
            >
              <motion.h3
                layoutId={`title-${item.year}-${id}`}
                className="text-xl font-bold"
              >
                {item.title}
              </motion.h3>

              <motion.p
                layoutId={`description-${item.year}-${id}`}
                className="mt-2 text-sm text-muted-foreground"
              >
                {item.description}
              </motion.p>

              <motion.div
                layoutId={`year-${item.year}-${id}`}
                className="absolute -right-16.5 -bottom-6.5"
              >
                <TextHoverEffect text={item.year} />
              </motion.div>
            </motion.article>
          </li>
        ))}
      </ul>
    </>
  )
}
