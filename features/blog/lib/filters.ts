export const PAGE_SIZE = 9
export const TAG_MATCH_MODE: "any" | "all" = "any"
export type BlogSearchParams = Record<string, string | string[] | undefined>
export type BlogFilters = { q: string; tags: string[]; page: number }

export function parseFilters(params: BlogSearchParams): BlogFilters {
  const first = (value: string | string[] | undefined) =>
    Array.isArray(value) ? value[0] : value
  const q = (first(params.q) || "").trim().slice(0, 200)
  const tags = [
    ...new Set(
      (Array.isArray(params.tag) ? params.tag : [params.tag]).filter(
        (tag): tag is string =>
          typeof tag === "string" && tag.length > 0 && tag.length <= 200
      )
    ),
  ].slice(0, 30)
  const page = Number(first(params.page))
  return {
    q,
    tags,
    page: Number.isSafeInteger(page) && page > 0 ? Math.min(page, 10000) : 1,
  }
}

export function blogHref({ q, tags, page }: BlogFilters) {
  const params = new URLSearchParams()
  if (q.trim()) params.set("q", q.trim())
  tags.forEach((tag) => params.append("tag", tag))
  if (page > 1) params.set("page", String(page))
  return `/blog${params.size ? `?${params}` : ""}`
}

export function searchPattern(q: string) {
  // Users search words; only our trailing wildcard controls prefix matching.
  return q.replace(/[*?\\]/g, "").trim() + "*"
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "Asia/Jakarta",
  }).format(new Date(date))
}
