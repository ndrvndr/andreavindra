import { Timeline } from "@/components/ui/timeline"
import { experiences } from "@/constants/about"

export function TimelineSection() {
  return (
    <section className="pt-24 pb-12 md:pt-0 md:pb-20">
      <div className="relative w-full overflow-clip">
        <p
          aria-hidden={true}
          className="absolute top-28 left-0 hidden text-[250px] leading-0 font-bold text-secondary opacity-10 lg:block"
        >
          experience
        </p>
        <Timeline data={experiences} />
      </div>
    </section>
  )
}
