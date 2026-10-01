import { Redis } from "@upstash/redis"

export function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  return url && token ? new Redis({ url, token, cache: "no-store" }) : null
}

export async function getViewCounts(
  slugs: string[]
): Promise<Record<string, number>> {
  if (slugs.length === 0) return {}
  const fallback = Object.fromEntries(slugs.map((slug) => [slug, 0]))
  try {
    const redis = getRedis()
    if (!redis) return fallback
    const counts = await redis.mget<(number | null)[]>(
      ...slugs.map((slug) => `views:${slug}`)
    )
    return Object.fromEntries(
      slugs.map((slug, index) => [slug, Number(counts[index]) || 0])
    )
  } catch {
    return fallback
  }
}

// One transaction: retries/concurrent requests cannot claim the same visit twice.
export const INCREMENT_VIEW_SCRIPT = `
  if redis.call('SET', KEYS[1], '1', 'NX', 'EX', 86400) then
    return redis.call('INCR', KEYS[2])
  end
  return tonumber(redis.call('GET', KEYS[2]) or '0')
`
