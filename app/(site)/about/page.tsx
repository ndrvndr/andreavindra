import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import { AboutMeSection, TimelineSection } from "@/features/about"

export const metadata: Metadata = {
  title: "About",
  description:
    "Andre, a front-end developer who embarked on his learning journey in 2022, shares his insights and thoughts for comprehending various aspects of front-end development through his blog posts.",
  alternates: {
    canonical: `${DEFAULT_METADATA.url}/about`,
  },
}

export default function Page() {
  return (
    <div>
      <AboutMeSection />
      <TimelineSection />
    </div>
  )
}
