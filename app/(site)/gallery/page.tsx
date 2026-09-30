import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import GalleryContainer from "@/features/gallery/gallery-container"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A gallery of photos I've taken, from places and people to random moments worth keeping.",
  alternates: {
    canonical: `${DEFAULT_METADATA.url}/gallery`,
  },
}

export default function Page() {
  return <GalleryContainer />
}
