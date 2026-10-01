"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import type { BlogFilters } from "../lib/filters"
import { CtaSection } from "@/features/home/sections"

type Tag = { _id: string; title: string; slug: string | null }

export function BlogControls({
  filters,
  tags,
  children,
  onFiltersChange,
}: {
  filters: BlogFilters
  tags: Tag[]
  children: React.ReactNode
  onFiltersChange: (filters: BlogFilters, replace?: boolean) => void
}) {
  const [search, setSearch] = useState({
    value: filters.q,
    urlValue: filters.q,
  })
  // Preserve whitespace while typing and sync with URL changes.
  if (search.urlValue !== filters.q) {
    setSearch({
      value: filters.q,
      urlValue: filters.q,
    })
  }
  const query = search.value
  const setQuery = (value: string) =>
    setSearch({ value, urlValue: value.trim() })

  return (
    <div>
      <fieldset>
        <legend className="sr-only">Search articles</legend>
        <form
          className="mx-auto mb-12 max-w-lg"
          onSubmit={(event) => {
            event.preventDefault()
            onFiltersChange({ ...filters, q: query, page: 1 })
          }}
        >
          <Input
            id="blog-search"
            type="search"
            value={query}
            maxLength={200}
            placeholder="Search titles and descriptions…"
            onChange={(event) => {
              const q = event.target.value
              setQuery(q)
              onFiltersChange({ ...filters, q, page: 1 }, true)
            }}
          />
        </form>
      </fieldset>

      <div className="border-t">
        <div className="layout">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_18rem] md:gap-8 md:[&>aside]:order-1">
            <aside
              role="group"
              aria-label="Filter by tags"
              className="mt-8 md:sticky md:top-16 md:mt-6 md:self-start"
            >
              <p className="text-sm">Choose topics</p>

              <div className="mt-6 flex flex-wrap items-baseline justify-start gap-2">
                {tags.map(
                  (tag) =>
                    tag.slug && (
                      <Button
                        key={tag._id}
                        type="button"
                        size="xs"
                        variant={
                          filters.tags.includes(tag.slug)
                            ? "default"
                            : "outline"
                        }
                        aria-pressed={filters.tags.includes(tag.slug)}
                        onClick={() =>
                          onFiltersChange({
                            q: query,
                            page: 1,
                            tags: filters.tags.includes(tag.slug!)
                              ? filters.tags.filter((slug) => slug !== tag.slug)
                              : [...filters.tags, tag.slug!],
                          })
                        }
                        className="rounded-sm"
                      >
                        {tag.title}
                      </Button>
                    )
                )}
              </div>
            </aside>

            <div className="grid flex-1 gap-8 border-neutral-900 py-6 md:border-r md:pr-8">
              {children}
            </div>
          </div>

          <div className="pt-14 pb-24 md:pt-8">
            <CtaSection />
          </div>
        </div>
      </div>
    </div>
  )
}
