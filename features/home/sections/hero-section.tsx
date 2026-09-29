import { IconChevronDown } from "@tabler/icons-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { socialLinks } from "@/constants/footer"

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="min-h-svh">
      <div className="layout flex min-h-svh flex-col items-center justify-center">
        <header className="max-w-120 text-center">
          <h1 id="hero-heading" className="text-5xl font-bold md:text-7xl">
            I&apos;m Andre
          </h1>

          <p className="mt-4 text-muted-foreground">
            I build thoughtful web experiences with React, focusing on clarity,
            performance, and maintainable systems.
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

          <Button variant="outline" size="lg" asChild>
            <Link href="/about">Get to Know Me</Link>
          </Button>
        </div>

        <nav aria-label="Social links" className="mt-10">
          <ul className="flex gap-3">
            {socialLinks.map(({ icon: Icon, ...social }) => (
              <li key={social.href}>
                <Link
                  href={social.href}
                  aria-label={social.label}
                  target={social.newTab ? "_blank" : undefined}
                  rel={social.newTab ? "noopener noreferrer" : undefined}
                  className="inline-flex"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-5 text-muted-foreground"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
