import { Metadata } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import { BucketListContainer } from "@/features/bucket-list/bucket-list-container"

export const metadata: Metadata = {
  title: "Bucket List",
  description:
    "Explore Andre Avindra’s personal bucket list, from travel and new experiences to life goals, with updates on completed milestones.",
  alternates: { canonical: `${DEFAULT_METADATA.url}/bucket-list` },
}

export default function Page() {
  return <BucketListContainer />
}
