import assert from "node:assert/strict"
import { test } from "node:test"
// Sanity's installed GROQ evaluator lets us exercise the real queries offline.
import { evaluate, parse } from "groq-js"
import {
  ALL_POSTS_QUERY,
  POSTS_QUERY,
  POST_QUERY,
  TAGS_QUERY,
} from "../sanity/lib/queries"
import { filterPosts } from "../features/blog/lib/filter-posts"
import {
  blogHref,
  formatPostDate,
  parseFilters,
  searchPattern,
} from "../features/blog/lib/filters"
import { getViewCounts } from "../features/blog/lib/views"
import type { POSTS_QUERY_RESULT, TAGS_QUERY_RESULT } from "../sanity/types"
import {
  getArticleHeadings,
  headingId,
  type ArticleBody,
} from "../features/blog/lib/headings"

test("article dates use Jakarta time at the UTC date boundary", () => {
  assert.equal(formatPostDate("2023-09-18T17:00:00.000Z"), "September 19, 2023")
  assert.equal(formatPostDate("2023-09-18T16:59:00.000Z"), "September 18, 2023")
})

test("table of contents preserves heading order, styled text, and unique stable anchors", () => {
  const content: ArticleBody = [
    {
      _type: "block",
      _key: "intro",
      style: "normal",
      children: [{ _type: "span", _key: "a", text: "Not a heading" }],
    },
    {
      _type: "block",
      _key: "one",
      style: "h2",
      children: [
        { _type: "span", _key: "b", text: "Getting " },
        { _type: "span", _key: "c", marks: ["strong"], text: "started" },
      ],
    },
    {
      _type: "block",
      _key: "two",
      style: "h3",
      children: [{ _type: "span", _key: "d", text: "Getting started" }],
    },
    {
      _type: "block",
      _key: "three",
      style: "h4",
      children: [{ _type: "span", _key: "e", text: "Details" }],
    },
    {
      _type: "block",
      _key: "empty",
      style: "h2",
      children: [{ _type: "span", _key: "f", text: "  " }],
    },
    { _type: "codeBlock", _key: "code", code: "h2 example" },
  ]
  assert.deepEqual(getArticleHeadings(content), [
    { id: headingId("one"), title: "Getting started", level: 2 },
    { id: headingId("two"), title: "Getting started", level: 3 },
    { id: headingId("three"), title: "Details", level: 4 },
  ])
  assert.deepEqual(getArticleHeadings([]), [])
})

const ref = (_ref: string) => ({ _type: "reference", _ref })
const post = (
  id: string,
  title: string,
  tags: string[],
  publishedAt: string,
  description = "Notes"
) => ({
  _id: id,
  _type: "post",
  _createdAt: publishedAt,
  title,
  description,
  slug: { current: id },
  tags: tags.map(ref),
  publishedAt,
  content: [
    { _type: "block", children: [{ _type: "span", text: "Hello world" }] },
  ],
})
const dataset = [
  { _id: "react", _type: "tag", title: "React", slug: { current: "react" } },
  { _id: "css", _type: "tag", title: "CSS", slug: { current: "css" } },
  { _id: "unused", _type: "tag", title: "Unused", slug: { current: "unused" } },
  post("one", "React patterns", ["react"], "2025-01-01T00:00:00Z"),
  post(
    "two",
    "Layouts",
    ["css"],
    "2025-02-01T00:00:00Z",
    "Reactive interfaces"
  ),
  post("three", "Combined", ["react", "css"], "2025-03-01T00:00:00Z"),
  post("future", "Later", ["unused"], "2099-01-01T00:00:00Z"),
]

async function posts(
  params: Record<string, unknown> = {}
): Promise<POSTS_QUERY_RESULT> {
  const queryParams = {
    q: "",
    pattern: "*",
    tags: [],
    tagMode: "any",
    start: 0,
    end: 9,
    ...params,
  }
  const result = await evaluate(parse(POSTS_QUERY, { params: queryParams }), {
    dataset,
    params: queryParams,
  })
  return result.get()
}

test("search matches title OR description, case-insensitively with prefixes", async () => {
  const result = await posts({ q: "rEaC", pattern: searchPattern("rEaC") })
  assert.deepEqual(
    result.posts.map((item) => item.slug),
    ["two", "one"]
  )
  assert.equal(result.total, 2)
  assert.equal((await posts({ q: "missing", pattern: "missing*" })).total, 0)
})

test("all-posts query returns more than one page and excludes future posts", async () => {
  const extra = Array.from({ length: 12 }, (_, index) =>
    post(`extra-${index}`, `Article ${index}`, [], "2024-01-01T00:00:00Z")
  )
  const result = await (
    await evaluate(parse(ALL_POSTS_QUERY), {
      dataset: [...dataset, ...extra],
    })
  ).get()
  assert.equal(result.length, 15)
  assert.equal(result[0].slug, "three")
  assert.ok(!result.some((item: { slug: string }) => item.slug === "future"))
})

test("browser search and tags combine without pagination", async () => {
  const { posts: articles } = await posts()
  const slugs = (q: string, tags: string[]) =>
    filterPosts(articles, { q, tags }).map((item) => item.slug)
  assert.deepEqual(slugs(" rEaC ", []), ["two", "one"])
  assert.deepEqual(slugs("", ["react", "css"]), ["three", "two", "one"])
  assert.deepEqual(slugs("react", ["css"]), ["two"])
  assert.deepEqual(slugs("missing", []), [])
  assert.deepEqual(slugs("", ["unknown"]), [])
  assert.deepEqual(slugs("", []), ["three", "two", "one"])
  assert.equal(
    filterPosts([{ ...articles[0], tags: [] }], { q: "", tags: ["react"] })
      .length,
    0
  )
})
test("multi-tag OR and switchable AND semantics", async () => {
  assert.equal((await posts({ tags: ["react", "css"] })).total, 3)
  assert.deepEqual(
    (await posts({ tags: ["react", "css"], tagMode: "all" })).posts.map(
      (item) => item.slug
    ),
    ["three"]
  )
  assert.equal((await posts({ tags: ["unused"] })).total, 0)
})
test("pagination preserves total, newest first, minimum reading time is one", async () => {
  const result = await posts({ start: 1, end: 2 })
  assert.equal(result.total, 3)
  assert.deepEqual(
    result.posts.map((item) => item.slug),
    ["two"]
  )
  assert.equal(result.posts[0].minRead, 1)
})
test("only used tags are returned, sorted by title", async () => {
  const result = await evaluate(parse(TAGS_QUERY), { dataset })
  const tags: TAGS_QUERY_RESULT = await result.get()
  assert.deepEqual(
    tags.map((tag) => tag.slug),
    ["css", "react"]
  )
})
test("unknown and future article slugs are absent", async () => {
  for (const slug of ["missing", "future", '\" || true || \"']) {
    const params = { slug }
    assert.equal(
      await (await evaluate(parse(POST_QUERY), { dataset, params })).get(),
      null
    )
  }
})
test("reading time is computed from long Portable Text", async () => {
  const longPost = {
    ...dataset[3],
    content: [
      {
        _type: "block",
        children: [{ _type: "span", text: "word ".repeat(1000) }],
      },
    ],
  }
  const params = { slug: "one" }
  const result = await (
    await evaluate(parse(POST_QUERY), { dataset: [longPost], params })
  ).get()
  assert.equal(result.minRead, 5)
})
test("URL filters round-trip and reject invalid pagination", () => {
  const parsed = parseFilters({
    q: " React ",
    tag: ["react", "css", "react"],
    page: "-1",
  })
  assert.deepEqual(parsed, { q: "React", tags: ["react", "css"], page: 1 })
  assert.equal(
    blogHref({ ...parsed, page: 2 }),
    "/blog?q=React&tag=react&tag=css&page=2"
  )
  assert.equal(searchPattern("rea*?\\"), "rea*")
  assert.equal(parseFilters({ page: "Infinity" }).page, 1)
  assert.equal(blogHref({ q: "", tags: [], page: 1 }), "/blog")
})
test("views fall back to zero with Redis unconfigured", async () => {
  const originalUrl = process.env.UPSTASH_REDIS_REST_URL
  delete process.env.UPSTASH_REDIS_REST_URL
  try {
    assert.deepEqual(await getViewCounts(["one", "two"]), { one: 0, two: 0 })
    assert.deepEqual(await getViewCounts([]), {})
  } finally {
    if (originalUrl !== undefined)
      process.env.UPSTASH_REDIS_REST_URL = originalUrl
  }
})
