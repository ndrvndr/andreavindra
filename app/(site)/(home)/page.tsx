import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import HomeContainer from "@/features/home/home-container"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Personal website and blog by Andre Avindra. Showcase of my projects, thoughts and skills on website development.",
  alternates: {
    canonical: `${DEFAULT_METADATA.url}`,
  },
}

export default function Page() {
  return <HomeContainer />
}
