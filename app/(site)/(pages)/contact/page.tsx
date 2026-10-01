import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import ContactContainer from "@/features/contact/contact-container"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Andre, a full-stack engineer. Find me on social media or send a message through the contact form.",
  alternates: {
    canonical: `${DEFAULT_METADATA.url}/contact`,
  },
}

export default function Page() {
  return <ContactContainer />
}
