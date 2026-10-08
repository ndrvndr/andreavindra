import { IconBook } from "@tabler/icons-react"

import { PageHeader } from "@/components/layouts/page-header"
import { Comments } from "@/components/ui/comment"
import Link from "next/link"

export default function GuestbookContainer() {
  return (
    <div>
      <PageHeader
        backgroundText="say hi"
        icon={IconBook}
        title="Sign the"
        highlight="Guestbook"
        description="Leave a message, share a thought, or simply say hello."
      />

      <section
        aria-labelledby="guestbook-comments-title"
        className="layout pt-16 pb-12 md:pt-8 md:pb-20"
      >
        <h2
          className="text-sm text-foreground/80"
          id="guestbook-comments-title"
        >
          Sign in with GitHub to leave a public message below. Prefer a private
          conversation? Send me an{" "}
          <Link href="/contact" className="underline">
            email
          </Link>
          .
        </h2>

        <div className="mt-6">
          <Comments term="guestbook" />
        </div>
      </section>
    </div>
  )
}
