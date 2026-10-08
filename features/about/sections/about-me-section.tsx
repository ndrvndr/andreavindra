import { IconUser } from "@tabler/icons-react"
import Link from "next/link"

import { PageHeader } from "@/components/layouts/page-header"
import { ChromaticImage } from "@/components/ui/chromatic-image"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { techStack } from "@/constants/about"

export function AboutMeSection() {
  return (
    <>
      <PageHeader
        backgroundText="about"
        icon={IconUser}
        title="Meet"
        highlight="Andre"
        description="My background, professional experience, and journey in software development."
      />

      <section
        aria-labelledby="profile-name"
        className="layout flex max-w-5xl flex-col items-center justify-center gap-20 pt-10 pb-12 md:pb-20 lg:flex-row"
      >
        <ChromaticImage
          src="https://res.cloudinary.com/dqqmzgesp/image/upload/v1790697774/profile-picture_ebqnwb.webp"
          alt="A person standing beneath a red light"
          className="aspect-4/5 w-full max-w-xs rounded-xl"
        />

        <div className="w-full flex-1">
          <h2 id="profile-name" className="text-4xl font-bold text-foreground">
            Andre Avindra
          </h2>

          <p className="mt-8 text-foreground/80">
            I’m a software engineer with a background in frontend development
            and a growing focus on backend systems and deployment. I started
            learning web development during the pandemic through online
            communities and tutorials, turning that curiosity into a
            professional career.
          </p>
          <p className="mt-4 text-foreground/80">
            My experience spans building web interfaces, integrating APIs, and
            improving application performance. Alongside my frontend work, I’ve
            expanded my skills in backend development and DevOps to better
            understand how applications are built, deployed, and maintained.
          </p>
          <p className="mt-4 text-foreground/80">
            This website brings together my projects, technical writing, and
            lessons from that process. I use it to share what I learn and
            connect with people who are building useful software.
          </p>

          <p id="tech-stack-label" className="mt-8 text-foreground/80">
            Technologies I use across frontend, backend, and deployment.
          </p>

          <ul
            aria-labelledby="tech-stack-label"
            className="mt-6 flex flex-wrap gap-4"
          >
            {techStack.map(({ name, url, icon: Icon, content }) => (
              <li key={name}>
                <Tooltip>
                  <TooltipTrigger aria-label={name}>
                    <Icon
                      aria-hidden="true"
                      className="size-8 text-muted-foreground"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-x-1">
                        <Icon aria-hidden="true" className="size-4.5" />
                        <Link
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold underline"
                          aria-label={`${name} (opens in a new tab)`}
                        >
                          {name}
                        </Link>
                      </div>

                      <p className="text-sm">{content}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
