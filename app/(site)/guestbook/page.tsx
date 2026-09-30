import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import GuestbookContainer from "@/features/guestbook/guestbook-container"

export const metadata: Metadata = {
  title: "Guestbook",
  description:
    "Leave a note, a greeting, or a thought. Sign in with GitHub and say hi in my guestbook.",
  alternates: {
    canonical: `${DEFAULT_METADATA.url}/guestbook`,
  },
}

export default function Page() {
  return <GuestbookContainer />
}
