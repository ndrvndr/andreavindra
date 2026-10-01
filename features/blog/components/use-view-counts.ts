"use client"

import { useEffect, useState } from "react"

export function useViewCounts(): Record<string, number> | null {
  const [views, setViews] = useState<Record<string, number> | null>(null)

  useEffect(() => {
    let controller: AbortController | undefined

    function refreshViews() {
      controller?.abort()
      controller = new AbortController()

      void fetch("/api/views", {
        cache: "no-store",
        signal: controller.signal,
      })
        .then(async (response) => {
          if (!response.ok) return
          const data: unknown = await response.json()
          if (data && typeof data === "object" && "views" in data) {
            const nextViews = data.views
            if (nextViews && typeof nextViews === "object")
              setViews(nextViews as Record<string, number>)
          }
        })
        .catch(() => {
          // Leave counts unavailable if Redis cannot be read.
        })
    }

    refreshViews()
    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) return
      setViews(null)
      refreshViews()
    }
    window.addEventListener("pageshow", onPageShow)

    return () => {
      controller?.abort()
      window.removeEventListener("pageshow", onPageShow)
    }
  }, [])

  return views
}
