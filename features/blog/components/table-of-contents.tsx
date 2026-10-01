"use client"

import { useEffect, useMemo, useState } from "react"

import { cn } from "@/lib/utils"

import { getArticleHeadings, type ArticleBody } from "../lib/headings"

export function TableOfContents({ content }: { content: ArticleBody }) {
  const headings = useMemo(() => getArticleHeadings(content), [content])
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = headings.flatMap(({ id }) => {
      const element = document.getElementById(id)
      return element ? [element] : []
    })
    if (!elements.length) return

    let frame = 0
    let offset = 0

    function updateActiveHeading() {
      frame = 0
      let current: string | null = null
      for (const element of elements) {
        if (element.getBoundingClientRect().top > offset + 1) break
        current = element.id
      }

      // Short final sections may never reach the top before scrolling ends.
      const last = elements[elements.length - 1]
      const atBottom =
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2
      if (atBottom && last.getBoundingClientRect().top < window.innerHeight) {
        current = last.id
      }
      setActiveId(current)
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateActiveHeading)
    }

    function onResize() {
      // Match the responsive scroll margin used by article anchor links.
      offset = parseFloat(getComputedStyle(elements[0]).scrollMarginTop) || 0
      scheduleUpdate()
    }

    onResize()
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", onResize)
    const observer = new ResizeObserver(scheduleUpdate)
    observer.observe(elements[0].closest("article") ?? document.body)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", onResize)
      observer.disconnect()
    }
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav
      aria-labelledby="table-of-contents-title"
      className="h-fit rounded-xl border px-6 py-5 lg:sticky lg:top-16"
    >
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={cn(
              heading.level === 3 && "pl-4",
              heading.level === 4 && "pl-8"
            )}
          >
            <a
              href={`#${heading.id}`}
              aria-current={activeId === heading.id ? "location" : undefined}
              className={cn(
                "block hover:text-foreground focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-ring",
                activeId === heading.id
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
