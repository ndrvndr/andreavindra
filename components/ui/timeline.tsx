"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { Highlight } from "./hero-highlight"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <section
      ref={containerRef}
      aria-labelledby="experience-heading"
      className="layout dark:bg-background"
    >
      <header className="flex flex-col items-start justify-center gap-4 px-4 py-20 md:px-8 lg:px-10">
        <h2
          id="experience-heading"
          className="text-4xl font-bold text-foreground"
        >
          Work <Highlight>Experience</Highlight>
        </h2>

        <p className="max-w-sm text-muted-foreground">
          A closer look at my professional experience and technical
          contributions.
        </p>
      </header>

      <div ref={ref} className="relative mt-16 pb-10 md:mt-0 md:pb-6.5">
        <ul>
          {data.map((item) => (
            <li
              key={item.title}
              className="flex justify-start md:gap-10 md:pt-40"
            >
              <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
                <div
                  aria-hidden="true"
                  className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full md:left-3 dark:bg-black"
                >
                  <div className="h-4 w-4 rounded-full border border-neutral-300 p-2 dark:border-secondary dark:bg-card" />
                </div>
                <h3 className="hidden text-xl font-bold text-muted-foreground md:block md:pl-20 md:text-sm">
                  {item.title}
                </h3>
              </div>

              <div className="relative w-full pr-4 pl-20 md:pl-4">
                <h3 className="mb-4 block text-left text-sm font-bold text-muted-foreground md:hidden">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </li>
          ))}
        </ul>

        <div
          aria-hidden="true"
          style={{
            height: height + "px",
          }}
          className="absolute top-0 left-8 w-0.5 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 rounded-full bg-linear-to-t from-[rgb(18,255,247)] via-[rgb(99,255,209)] to-[rgb(179,255,171)]"
          />
        </div>
      </div>
    </section>
  )
}
