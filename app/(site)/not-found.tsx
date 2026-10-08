import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="layout flex min-h-screen flex-col items-center justify-center gap-y-4 text-center">
      <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
        404
      </p>

      <h1 className="text-4xl font-bold text-foreground">Page Not Found</h1>

      <p className="text-sm text-muted-foreground">
        The page you’re looking for may have moved or no longer exists.
      </p>

      <Button asChild variant="outline" size="lg">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  )
}
