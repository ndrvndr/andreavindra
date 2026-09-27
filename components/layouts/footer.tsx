import { IconExternalLink } from "@tabler/icons-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { NoiseBackground } from "@/components/ui/noise-background"
import { Separator } from "@/components/ui/separator"
import { footerContents, socialLinks } from "@/constants/footer"

export function Footer() {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer>
      <Separator />

      <div className="mx-auto grid w-11/12 max-w-7xl gap-8 py-24 md:grid-cols-[1fr_1.8fr_1fr] md:gap-16">
        <div>
          <p className="text-2xl font-bold text-foreground">Andre Avindra</p>

          <p className="mt-3 text-xs text-muted-foreground">
            Software engineer building things, sharing ideas, and documenting
            the journey.
          </p>

          <ul aria-label="Social links" className="mt-6 flex gap-3">
            {socialLinks.map(({ icon: Icon, ...social }) => (
              <li key={social.href}>
                <Link
                  href={social.href}
                  aria-label={social.label}
                  target={social.newTab ? "_blank" : undefined}
                  rel={social.newTab ? "noopener noreferrer" : undefined}
                >
                  <Icon className="size-5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <nav className="@container" aria-label="Footer navigation">
          <div className="grid grid-cols-2 gap-4 gap-y-10 @sm:grid-cols-3">
            {footerContents.map((content) => (
              <div key={content.title}>
                <h3 className="text-sm text-muted-foreground">
                  {content.title}
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                  {content.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target={link.newTab ? "_blank" : undefined}
                        rel={link.newTab ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <section aria-labelledby="newsletter-title">
          <h3 id="newsletter-title" className="text-foreground">
            Subscribe to new posts
          </h3>

          <p className="mt-3 text-xs text-muted-foreground">
            Get new articles delivered straight to your inbox. No spam.
          </p>

          <NoiseBackground
            containerClassName="mt-6 w-fit rounded-full p-1"
            gradientColors={[
              "rgb(18, 255, 247)",
              "rgb(99, 255, 209)",
              "rgb(179, 255, 171)",
            ]}
          >
            <Button variant="secondary" asChild>
              <Link
                href="https://andreavindra.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Subscribe</span>
                <IconExternalLink className="size-4" />
              </Link>
            </Button>
          </NoiseBackground>
        </section>
      </div>

      <Separator className="mx-auto w-11/12 max-w-7xl" />

      <div className="mx-auto max-w-7xl px-4 py-10 text-center">
        <small className="text-sm text-muted-foreground">
          Copyright © {currentYear} Andre Avindra. All rights reserved.
        </small>
      </div>
    </footer>
  )
}
