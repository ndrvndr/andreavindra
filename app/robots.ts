import type { MetadataRoute } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/studio"],
    },
    sitemap: `${DEFAULT_METADATA.url}/sitemap.xml`,
  }
}
