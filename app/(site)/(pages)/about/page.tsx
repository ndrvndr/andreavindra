import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import AboutContainer from "@/features/about/about-container"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Andre Avindra’s background in frontend development, professional experience, and expanding skills in backend systems and deployment.",
  alternates: { canonical: `${DEFAULT_METADATA.url}/about` },
}

export default function Page() {
  return <AboutContainer />
}
