import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import ContactContainer from "@/features/contact/contact-container"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Andre Avindra to discuss software engineering roles, web development projects, collaborations, or technical questions.",
  alternates: { canonical: `${DEFAULT_METADATA.url}/contact` },
}

export default function Page() {
  return <ContactContainer />
}
