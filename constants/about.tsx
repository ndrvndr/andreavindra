import { ElementType } from "react"

import {
  IconBrandDocker,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconDatabase,
} from "@tabler/icons-react"

interface TechStack {
  name: string
  url: string
  icon: ElementType
  content: string
}

export const techStack: TechStack[] = [
  {
    name: "Next.js",
    url: "https://nextjs.org/",
    icon: IconBrandNextjs,
    content:
      "My go-to framework for building full-stack apps. Routing, server rendering, and API routes in one place means I can go from idea to production without juggling tools.",
  },
  {
    name: "React",
    url: "https://react.dev/",
    icon: IconBrandReact,
    content:
      "Where my web development journey really took off. I love the component-based, declarative approach and the huge ecosystem around it.",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    icon: IconBrandTypescript,
    content:
      "I can't imagine writing JavaScript without it anymore. Catching bugs before they run and getting solid autocomplete makes refactoring far less scary.",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    icon: IconBrandTailwind,
    content:
      "Styling without leaving my markup is a game changer. It keeps designs consistent and makes building reusable components so much faster.",
  },
  {
    name: "NestJS",
    url: "https://nestjs.com/",
    icon: IconBrandNodejs,
    content:
      "My pick when the backend needs real structure. Modules, dependency injection, and first-class TypeScript keep large APIs organized and easy to maintain.",
  },
  {
    name: "Prisma",
    url: "https://www.prisma.io/",
    icon: IconBrandPrisma,
    content:
      "A simple and type-safe ORM. Defining the schema once and getting a fully typed client out of it makes working with databases a joy.",
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
    icon: IconDatabase,
    content:
      "Reliable, powerful, and battle-tested. It's my default database for almost everything, from small side projects to production apps.",
  },
  {
    name: "Docker",
    url: "https://www.docker.com/",
    icon: IconBrandDocker,
    content:
      "No more 'it works on my machine'. Containers let me run the same setup locally and in production, and spin up a database in seconds.",
  },
]

interface Experience {
  title: string
  content: React.ReactNode
}

export const experiences: Experience[] = [
  {
    title: "OCT 2023 - MAY 2026",
    content: (
      <div>
        <h3 className="text-xl font-bold">Frontend Developer</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          PT. Teknologi Digital Terdepan - Bandung, Indonesia
        </p>

        <div className="mt-4 space-y-3 text-sm text-muted-foreground">
          <p>
            Teknologi Digital Terdepan is an Indonesia-based software
            development and IT consulting company. True to our tagline,
            "Empowering Your Digital Dominance," we help companies grow by
            bringing digital innovations to life.
          </p>

          <ul className="list-disc space-y-1.5 pl-4">
            <li>
              Core Development: Built scalable web apps via Next.js, React, and
              TypeScript in Agile environments.
            </li>
            <li>
              Cost Optimization: Refactored Google Maps code, significantly
              reducing API billing costs.
            </li>
            <li>
              State & Data: Managed state and data fetching using Zustand and
              React Query for performance.
            </li>
            <li>
              Integrations: Integrated Midtrans (payment), Biteship (shipping),
              and Google Maps services.
            </li>
            <li>
              UI/UX: Developed responsive interfaces using Tailwind CSS and
              Shadcn UI components.
            </li>
            <li>
              R&D: Researched and adopted latest tech to enhance app performance
              and developer workflows.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
]
