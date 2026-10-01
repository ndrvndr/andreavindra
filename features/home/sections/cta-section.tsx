import { IconExternalLink } from "@tabler/icons-react"
import Link from "next/link"

import { BackgroundBeams } from "@/components/ui/background-beams"
import { Button } from "@/components/ui/button"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export function CtaSection() {
  return (
    <section
      aria-labelledby="newsletter-title"
      className="relative overflow-hidden py-12 md:py-20"
    >
      <div className="layout relative z-10 text-center">
        <p className="mb-4 text-sm text-muted-foreground">Stay in the loop</p>

        <h2
          id="newsletter-title"
          className="text-5xl font-bold text-foreground md:text-6xl"
        >
          Subscribe to new posts
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground md:text-base">
          Get new articles on software engineering, technology, and things
          I&apos;m learning delivered straight to your inbox. No spam.
        </p>

        <HoverBorderGradient containerClassName="mx-auto mt-8 rounded-xl">
          <Button asChild variant="secondary" size="lg">
            <Link
              href="https://andreavindra.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe
              <IconExternalLink />
            </Link>
          </Button>
        </HoverBorderGradient>
      </div>

      <BackgroundBeams />
    </section>
  )
}
