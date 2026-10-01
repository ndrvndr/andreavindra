"use client"

import { IconEye } from "@tabler/icons-react"
import { useEffect, useRef, useState } from "react"

export function ViewCounter({ slug }: { slug: string }) {
  const sent = useRef<string | null>(null)
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    if (sent.current === slug) return
    sent.current = slug
    void fetch(`/api/views/${encodeURIComponent(slug)}`, {
      method: "POST",
      credentials: "same-origin",
    })
      .then(async (response) => {
        if (!response.ok) return
        const data: unknown = await response.json()
        if (
          data &&
          typeof data === "object" &&
          "views" in data &&
          typeof data.views === "number"
        )
          setViews(data.views)
      })
      .catch(() => {
        // Counting failures must not prevent an article from rendering.
      })
  }, [slug])

  return (
    <span className="flex items-center gap-2">
      <IconEye
        aria-hidden="true"
        className="size-3.5 text-[rgb(179,255,171)]"
      />
      {views === null ? "—" : views.toLocaleString("en")} views
    </span>
  )
}
