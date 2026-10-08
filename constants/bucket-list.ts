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
    title: "Relax in a hot spring",
    status: "completed",
    description: "Rengganis Crater, Ciwidey",
    completedAt: "May 2024",
    evidenceImages: [
      "https://res.cloudinary.com/dqqmzgesp/image/upload/v1790758927/kawah-rengganis_f49cxx.webp",
    ],
  },
  {
    title: "Climb a mountain",
    status: "completed",
    description: "Mount Putri, Lembang",
    completedAt: "September 2024",
    evidenceImages: [
      "https://res.cloudinary.com/dqqmzgesp/image/upload/v1790758956/camping_aegc7c.webp",
      "https://res.cloudinary.com/dqqmzgesp/image/upload/v1790758955/gunung-putri_zunprx.webp",
    ],
  },
  {
    title: "Play airsoftt",
    status: "planned",
  },
  {
    title: "Go spearfishing",
    status: "planned",
  },
  {
    title: "Enjoy a cigar with a glass of wine",
    status: "planned",
  },
  {
    title: "See the aurora",
    status: "planned",
  },
  {
    title: "Travel around Japan",
    status: "planned",
  },
  {
    title: "Buy a house",
    status: "planned",
  },
  {
    title: "Buy a car",
    status: "planned",
  },
  {
    title: "Meet a member of TWICE",
    status: "planned",
  },
]
