import { IconChevronDown } from "@tabler/icons-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { LinkPreview } from "@/components/ui/link-preview"
import { socialLinks } from "@/constants/footer"

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="min-h-svh">
      <div className="layout flex min-h-svh flex-col items-center justify-center">
        <header className="text-center">
          <h1
            id="hero-heading"
            className="text-5xl font-bold text-foreground md:text-7xl"
          >
            Andre Avindra
          </h1>

          <p className="mt-4 max-w-120 text-foreground/80">
            I build web applications with a focus on clear interfaces,
            performance, and maintainable code. Here, you&apos;ll find my
            projects, technical writing, and approach to software development.
          </p>
        </header>

        <div
          role="group"
          aria-label="Hero actions"
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          <HoverBorderGradient as="div" containerClassName="rounded-xl">
            <Button variant="secondary" size="lg" asChild>
              <a href="#how-i-work">
                <span>How I Work</span>
                <IconChevronDown aria-hidden="true" />
              </a>
            </Button>
          </HoverBorderGradient>

          <Button variant="outline" size="lg" asChild className="h-13">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        <nav aria-label="Social links" className="mt-10">
          <ul className="flex gap-3">
            {socialLinks.map(({ icon: Icon, ...social }) => (
              <li key={social.href}>
                {social.newTab ? (
                  <LinkPreview
                    url={social.href}
                    aria-label={social.label}
                    className="inline-flex"
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-muted-foreground"
                    />
                  </LinkPreview>
                ) : (
                  <Link
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex"
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-muted-foreground"
                    />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
