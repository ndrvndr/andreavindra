import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import AboutContainer from "@/features/about/about-container"

export const metadata: Metadata = {
  title: "About",
  description:
    "Andre Avindra is a full-stack engineer who started as a frontend developer. Learn about my journey, the tools I use, and my work experience.",
  alternates: {
    canonical: `${DEFAULT_METADATA.url}/about`,
  },
}

export default function Page() {
  return <AboutContainer />
}
