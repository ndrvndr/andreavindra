import { ElementType } from "react"

import {
  SiDocker,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

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
    icon: SiNextdotjs,
    content:
      "My go-to framework for building full-stack apps. Routing, server rendering, and API routes in one place means I can go from idea to production without juggling tools.",
  },
  {
    name: "React",
    url: "https://react.dev/",
    icon: SiReact,
    content:
      "Where my web development journey really took off. I love the component-based, declarative approach and the huge ecosystem around it.",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    icon: SiTypescript,
    content:
      "I can't imagine writing JavaScript without it anymore. Catching bugs before they run and getting solid autocomplete makes refactoring far less scary.",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    icon: SiTailwindcss,
    content:
      "Styling without leaving my markup is a game changer. It keeps designs consistent and makes building reusable components so much faster.",
  },
  {
    name: "NestJS",
    url: "https://nestjs.com/",
    icon: SiNestjs,
    content:
      "My pick when the backend needs real structure. Modules, dependency injection, and first-class TypeScript keep large APIs organized and easy to maintain.",
  },
  {
    name: "Prisma",
    url: "https://www.prisma.io/",
    icon: SiPrisma,
    content:
      "A simple and type-safe ORM. Defining the schema once and getting a fully typed client out of it makes working with databases a joy.",
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
    icon: SiPostgresql,
    content:
      "Reliable, powerful, and battle-tested. It's my default database for almost everything, from small side projects to production apps.",
  },
  {
    name: "Docker",
    url: "https://www.docker.com/",
    icon: SiDocker,
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
        <h3 className="text-xl font-bold text-foreground">
          Frontend Developer
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          PT. Teknologi Digital Terdepan - Bandung, Indonesia
        </p>

        <div className="mt-4 space-y-3 text-sm text-foreground/80">
          <p>An Indonesian software development and IT consulting company.</p>

          <ul className="list-disc space-y-1.5 pl-4">
            <li>
              Built web applications with Next.js, React, and TypeScript in an
              Agile team.
            </li>
            <li>
              Refactored Google Maps integration to reduce API usage costs.
            </li>
            <li>
              Managed application state and data fetching with Zustand and React
              Query.
            </li>
            <li>
              Integrated Midtrans payments, Biteship shipping, and Google Maps
              services.
            </li>
            <li>
              Developed responsive interfaces using Tailwind CSS and shadcn/ui.
            </li>
            <li>
              Researched and adopted tools to improve application performance
              and development workflows.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
]
