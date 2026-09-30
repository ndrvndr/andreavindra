"use client"

import Giscus from "@giscus/react"

interface CommentsProps {
  term: string
}

export function Comments({ term }: CommentsProps) {
  return (
    <Giscus
      id="comments"
      repo={process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID!}
      category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY!}
      categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!}
      mapping="specific"
      term={term}
      strict="1"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="top"
      theme="noborder_dark"
      lang="en"
      loading="lazy"
    />
  )
}
