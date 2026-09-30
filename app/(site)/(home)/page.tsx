import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import HomeContainer from "@/features/home/home-container"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Personal website of Andre Avindra, a full-stack engineer. Explore my projects, blog posts, and what I'm learning along the way.",
  alternates: {
    canonical: `${DEFAULT_METADATA.url}`,
  },
}

export default function Page() {
  return <HomeContainer />
}
