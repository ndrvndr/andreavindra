import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import { BucketListContainer } from "@/features/bucket-list/bucket-list-container"

export const metadata: Metadata = {
  title: "Bucket List",
  description:
    "A collection of goals, experiences, and things I hope to do someday.",
  alternates: {
    canonical: `${DEFAULT_METADATA.url}/bucket-list`,
  },
}

export default function Page() {
  return <BucketListContainer />
}
