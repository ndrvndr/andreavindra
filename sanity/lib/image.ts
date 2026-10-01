import type { SanityImageSource } from "@sanity/image-url"
import { createImageUrlBuilder } from "@sanity/image-url"

import { dataset, projectId } from "../env"

const builder = createImageUrlBuilder({ projectId, dataset })
// Blog images use next/image's unoptimized prop: Sanity handles resizing and
// format negotiation, so its CDN URLs do not pass through Next's IP checks.
export function urlFor(source: SanityImageSource) {
  return builder.image(source).auto("format")
}
