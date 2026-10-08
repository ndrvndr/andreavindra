import { IconListCheck } from "@tabler/icons-react"

import { PageHeader } from "@/components/layouts/page-header"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { bucketList } from "@/constants/bucket-list"

import { EvidenceImages } from "./components/evidence-images"

export function BucketListContainer() {
  const completedCount = bucketList.filter(
    (item) => item.status === "completed"
  ).length

  return (
    <div>
      <PageHeader
        backgroundText="someday"
        icon={IconListCheck}
        title="My"
        highlight="Bucket List"
        description="Experiences I want to try, goals I’m working toward, and milestones along the way."
      />

      <section
        aria-labelledby="bucket-list-heading"
        className="mx-auto w-11/12 max-w-160"
      >
        <h2 id="bucket-list-heading" className="sr-only">
          Bucket List Items
        </h2>

        <ul className="divide-y divide-secondary">
          {bucketList.map((item) => {
            const isCompleted = item.status === "completed"

            return (
              <li key={item.title} className="px-3 py-6">
                <article className="flex flex-wrap items-center justify-end gap-5">
                  <div className="flex grow items-start gap-3">
                    <Checkbox
                      checked={isCompleted}
                      disabled
                      aria-label={`${item.title}: ${
                        isCompleted ? "completed" : "not completed"
                      }`}
                    />

                    <div>
                      <h3 className="leading-4">{item.title}</h3>

                      {isCompleted && item.description && (
                        <p className="mt-2 text-xs text-muted-foreground">
                          {item.description}

                          {item.completedAt && (
                            <>
                              {" - "}
                              <time>{item.completedAt}</time>
                            </>
                          )}
                        </p>
                      )}
                    </div>
                  </div>

                  {item.evidenceImages?.length ? (
                    <EvidenceImages
                      title={item.title}
                      images={item.evidenceImages}
                    />
                  ) : null}
                </article>
              </li>
            )
          })}
        </ul>

        <Separator className="mb-6" />

        <p
          className="mb-6 text-right text-xs text-muted-foreground italic"
          aria-label={`${completedCount} of ${bucketList.length} bucket list items completed`}
        >
          {completedCount} of {bucketList.length} completed.
        </p>
      </section>
    </div>
  )
}
