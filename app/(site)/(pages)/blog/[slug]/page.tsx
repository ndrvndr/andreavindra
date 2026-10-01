import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { DEFAULT_METADATA } from "@/constants/metadata"
import { ArticleContainer } from "@/features/blog/article-container"
import { getPost, getPostSlugs } from "@/features/blog/lib/data"
import { urlFor } from "@/sanity/lib/image"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = true

export async function generateStaticParams() {
  return (await getPostSlugs()).flatMap(({ slug }) => (slug ? [{ slug }] : []))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()
  const url = `${DEFAULT_METADATA.url}/blog/${slug}`
  const images = post.coverImage?.asset
    ? [
        {
          url: urlFor(post.coverImage)
            .width(1200)
            .height(630)
            .format("jpg")
            .url(),
          width: 1200,
          height: 630,
          alt: post.coverImage.alt || post.title,
        },
      ]
    : [DEFAULT_METADATA.image]
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      images,
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images,
    },
  }
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return <ArticleContainer params={params} />
}
