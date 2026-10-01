import { parseBody } from "next-sanity/webhook"
import { revalidatePath, revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET
  if (!secret)
    return NextResponse.json(
      { error: "Webhook is not configured" },
      { status: 503 }
    )
  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(
      request,
      secret
    )
    if (!isValidSignature)
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
    if (!body?._type || !["post", "tag", "category"].includes(body._type))
      return NextResponse.json(
        { error: "Unsupported document type" },
        { status: 400 }
      )
    revalidateTag(body._type, { expire: 0 })
    revalidatePath("/blog")
    // Covers new slugs, previously cached 404s, renamed/deleted articles, and
    // category/tag changes. Regeneration happens on the next visit, not here.
    revalidatePath("/blog/[slug]", "page")
    revalidatePath("/")
    revalidatePath("/sitemap.xml")
    revalidatePath("/rss.xml")
    return NextResponse.json({ revalidated: true })
  } catch {
    return NextResponse.json({ error: "Invalid webhook" }, { status: 400 })
  }
}
