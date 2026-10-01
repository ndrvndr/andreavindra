import { NextRequest, NextResponse } from "next/server"
import { createHmac, randomUUID, timingSafeEqual } from "node:crypto"

import { getPost } from "@/features/blog/lib/data"
import { getRedis, INCREMENT_VIEW_SCRIPT } from "@/features/blog/lib/views"

export const runtime = "nodejs"
const COOKIE_NAME = "blog-visitor"

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const origin = request.headers.get("origin")
  if (origin && origin !== request.nextUrl.origin)
    return NextResponse.json({ error: "Invalid origin" }, { status: 403 })
  const { slug } = await params
  if (!slug || slug.length > 200 || /[\s/\\?#]/.test(slug))
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 })

  try {
    if (!(await getPost(slug)))
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    const redis = getRedis()
    const secret = process.env.UPSTASH_REDIS_REST_TOKEN
    if (!redis || !secret)
      return NextResponse.json(
        { views: 0 },
        { headers: { "Cache-Control": "no-store" } }
      )
    const sign = (id: string) =>
      createHmac("sha256", secret).update(id).digest("hex")
    const [cookieId, signature] = (
      request.cookies.get(COOKIE_NAME)?.value || ""
    ).split(".")
    const valid =
      cookieId &&
      /^[a-f0-9-]{36}$/.test(cookieId) &&
      signature &&
      /^[a-f0-9]{64}$/.test(signature) &&
      timingSafeEqual(Buffer.from(signature), Buffer.from(sign(cookieId)))
    const visitorId = valid ? cookieId : randomUUID()
    const views = await redis.eval<[], number>(
      INCREMENT_VIEW_SCRIPT,
      [`view-dedupe:${slug}:${sign(visitorId)}`, `views:${slug}`],
      []
    )
    const response = NextResponse.json(
      { views },
      { headers: { "Cache-Control": "no-store" } }
    )
    if (!valid)
      response.cookies.set(COOKIE_NAME, `${visitorId}.${sign(visitorId)}`, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      })
    return response
  } catch {
    return NextResponse.json(
      { views: 0 },
      { headers: { "Cache-Control": "no-store" } }
    )
  }
}
