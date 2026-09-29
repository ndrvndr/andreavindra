"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="layout flex min-h-screen flex-col items-center justify-center gap-y-4 text-center">
      <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
        500
      </p>

      <h1 className="text-4xl font-bold">Well, This Is Awkward</h1>

      <p className="text-sm text-muted-foreground">
        Something went wrong on our side. Try giving it another shot.
      </p>

      <div className="mt-8 flex gap-3">
        <Button onClick={reset} variant="secondary" size="lg">
          Try Again
        </Button>

        <Button asChild variant="outline" size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  )
}
