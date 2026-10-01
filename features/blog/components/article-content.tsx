import { PortableText, type PortableTextComponents } from "@portabletext/react"
import Image from "next/image"

import { urlFor } from "@/sanity/lib/image"
import type { POST_QUERY_RESULT } from "@/sanity/types"

import { headingId } from "../lib/headings"
import { CopyCodeButton } from "./copy-code-button"

type Content = NonNullable<POST_QUERY_RESULT>["content"]
type ImageBlock = Extract<Content[number], { _type: "image" }>
type CodeBlock = Extract<Content[number], { _type: "codeBlock" }>

function safeHref(href: unknown) {
  if (typeof href !== "string") return undefined
  return /^(https?:\/\/|mailto:|\/(?!\/)|#)/i.test(href) ? href : undefined
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="my-5 leading-8 text-muted-foreground">{children}</p>
    ),
    h2: ({ children, value }) => (
      <h2
        id={headingId(value._key)}
        tabIndex={-1}
        className="mt-12 mb-4 scroll-mt-8 text-3xl font-bold first-of-type:mt-0 md:scroll-mt-40"
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        id={headingId(value._key)}
        tabIndex={-1}
        className="mt-9 mb-3 scroll-mt-8 text-2xl font-semibold md:scroll-mt-40"
      >
        {children}
      </h3>
    ),
    h4: ({ children, value }) => (
      <h4
        id={headingId(value._key)}
        tabIndex={-1}
        className="mt-8 mb-3 scroll-mt-8 text-xl font-semibold md:scroll-mt-40"
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primary pl-5 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 list-disc space-y-2 pl-6 text-muted-foreground">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 list-decimal space-y-2 pl-6 text-muted-foreground">
        {children}
      </ol>
    ),
  },
  marks: {
    code: ({ children }) => (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = safeHref(value?.href)
      return href ? (
        <a
          href={href}
          className="underline underline-offset-4 hover:text-primary"
        >
          {children}
        </a>
      ) : (
        <>{children}</>
      )
    },
  },
  types: {
    image: ({ value }: { value: ImageBlock }) =>
      value.asset ? (
        <figure className="my-8">
          <Image
            unoptimized
            src={urlFor(value).width(1440).fit("max").url()}
            alt={value.alt || ""}
            width={1440}
            height={960}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full rounded-lg"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          )}
        </figure>
      ) : null,
    codeBlock: ({ value }: { value: CodeBlock }) => (
      <figure className="my-6 overflow-hidden rounded-lg border bg-muted/40">
        <figcaption className="flex items-center justify-between gap-3 border-b px-4 py-2 text-xs text-muted-foreground">
          <span>{value.language || "Code"}</span>
          <CopyCodeButton code={value.code ?? ""} />
        </figcaption>
        <pre
          tabIndex={0}
          aria-label={`${value.language || "Plain text"} code block`}
          className="overflow-x-auto p-4 text-sm leading-7"
        >
          <code>{value.code}</code>
        </pre>
      </figure>
    ),
  },
}

export function ArticleContent({ content }: { content: Content }) {
  return (
    <div className="min-w-0 wrap-break-word">
      <PortableText value={content} components={components} />
    </div>
  )
}
