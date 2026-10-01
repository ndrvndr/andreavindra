export type BucketListStatus = "planned" | "completed"

export interface BucketListItem {
  title: string
  status: BucketListStatus
  description?: string
  completedAt?: string
  evidenceImages?: string[]
}

export const bucketList: BucketListItem[] = [
  {
    title: "Relaxing in the hot springs",
    status: "completed",
    description: "Rengganis Crater, Ciwidey",
    completedAt: "May 2024",
    evidenceImages: [
      "https://res.cloudinary.com/dqqmzgesp/image/upload/v1790758927/kawah-rengganis_f49cxx.webp",
    ],
  },
  {
    title: "Mountain climbing",
    status: "completed",
    description: "Mount Putri, Lembang",
    completedAt: "September 2024",
    evidenceImages: [
      "https://res.cloudinary.com/dqqmzgesp/image/upload/v1790758956/camping_aegc7c.webp",
      "https://res.cloudinary.com/dqqmzgesp/image/upload/v1790758955/gunung-putri_zunprx.webp",
    ],
  },
  {
    title: "Playing airsoft",
    status: "planned",
  },
  {
    title: "Spearfishing",
    status: "planned",
  },
  {
    title: "Smoking a cigar while drinking wine",
    status: "planned",
  },
  {
    title: "Seeing the aurora",
    status: "planned",
  },
  {
    title: "Traveling around Japan",
    status: "planned",
  },
  {
    title: "Buying a house",
    status: "planned",
  },
  {
    title: "Buying a car",
    status: "planned",
  },
  {
    title: "To be able to meet at least one member of TWICE",
    status: "planned",
  },
]
