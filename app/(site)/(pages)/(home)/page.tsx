import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import HomeContainer from "@/features/home/home-container"

export const metadata: Metadata = {
  title: "Home",
  description: DEFAULT_METADATA.description,
  alternates: { canonical: DEFAULT_METADATA.url },
}

export default function Page() {
  return <HomeContainer />
}
