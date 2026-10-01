"use client"

import { IconCheck, IconCopy } from "@tabler/icons-react"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"

export function CopyCodeButton({ code }: { code: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle")
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    []
  )

  async function copyCode() {
    if (timer.current) clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(code)
      setStatus("copied")
      timer.current = setTimeout(() => setStatus("idle"), 2000)
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span
        role="status"
        className={status === "error" ? "text-destructive" : "sr-only"}
      >
        {status === "copied"
          ? "Code copied to clipboard."
          : status === "error"
            ? "Unable to copy. Select and copy the code manually."
            : ""}
      </span>
      <Button
        type="button"
        variant="ghost"
        size="xs"
        onClick={copyCode}
        disabled={!code}
      >
        {status === "copied" ? (
          <IconCheck aria-hidden="true" />
        ) : (
          <IconCopy aria-hidden="true" />
        )}
        {status === "copied" ? "Copied!" : "Copy"}
      </Button>
    </div>
  )
}
