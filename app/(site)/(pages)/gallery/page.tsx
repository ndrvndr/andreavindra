import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import GalleryContainer from "@/features/gallery/gallery-container"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore Andre Avindra’s personal photo gallery, capturing places, experiences, and memorable moments beyond software development.",
  alternates: { canonical: `${DEFAULT_METADATA.url}/gallery` },
}

export default function Page() {
  return <GalleryContainer />
}
