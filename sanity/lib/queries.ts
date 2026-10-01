import { defineQuery } from "next-sanity"

// Literal fragments are resolved by Sanity TypeGen. All user input is a parameter.
const visible = `_type == "post" && defined(slug.current) && defined(publishedAt) && dateTime(publishedAt) <= dateTime(now())`
const matching = `${visible} && ($q == "" || title match $pattern || description match $pattern) && (count($tags) == 0 || ($tagMode == "any" && count(tags[@->slug.current in $tags]) > 0) || ($tagMode == "all" && count(array::unique(tags[]->slug.current)[@ in $tags]) == count($tags)))`
const card = `_id, title, "slug": slug.current, description, "createdAt": _createdAt, publishedAt, coverImage, "category": category->{title, "slug": slug.current}, "tags": tags[]->{_id, title, "slug": slug.current}, "minRead": math::max([1, round(length(pt::text(content)) / 5 / 200)])`

export const POSTS_QUERY = defineQuery(`{
  "posts": *[${matching}] | order(publishedAt desc, _id asc) [$start...$end] {${card}},
  "total": count(*[${matching}])
}`)
export const ALL_POSTS_QUERY = defineQuery(
  `*[${visible}] | order(publishedAt desc, _id asc) {${card}}`
)
export const TAGS_QUERY = defineQuery(
  `*[_type == "tag" && defined(slug.current) && count(*[${visible} && references(^._id)]) > 0] | order(title asc) {_id, title, "slug": slug.current}`
)
export const POST_QUERY = defineQuery(
  `*[${visible} && slug.current == $slug][0] {${card}, content}`
)
export const SLUGS_QUERY = defineQuery(`*[${visible}] {"slug": slug.current}`)
