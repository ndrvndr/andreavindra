import { Button } from "@/components/ui/button"
import { LinkPreview } from "@/components/ui/link-preview"
import { socialLinks } from "@/constants/footer"

export function SocialMediaSection() {
  return (
    <section>
      <h2 className="text-4xl font-bold text-foreground">Find Me Online</h2>

      <ul
        aria-label="Social media"
        className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {socialLinks
          .filter(({ label }) => label !== "Email")
          .map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Button asChild variant="secondary" size="lg" className="w-full">
                <LinkPreview url={href}>
                  <Icon aria-hidden="true" />
                  {label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </LinkPreview>
              </Button>
            </li>
          ))}
      </ul>
    </section>
  )
}
