import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import GuestbookContainer from "@/features/guestbook/guestbook-container"

export const metadata: Metadata = {
  title: "Guestbook",
  description:
    "Visit Andre Avindra’s guestbook to leave a message, share your thoughts, or say hello. Connect with others who have stopped by the website.",
  alternates: { canonical: `${DEFAULT_METADATA.url}/guestbook` },
}

export default function Page() {
  return <GuestbookContainer />
}
