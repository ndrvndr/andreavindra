import { ElementType } from "react"
import {
  SiCloudflare,
  SiDocker,
  SiFilament,
  SiGoogle,
  SiLaravel,
  SiLua,
  SiNestjs,
  SiNodedotjs,
  SiNuxt,
  SiPhp,
  SiPinia,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiZod,
} from "react-icons/si"

interface Tool {
  label: string
  icon: ElementType
}

export interface Project {
  title: string
  description: string
  image: string
  githubUrl: string
  liveDemo?: string
  tools: Tool[]
}

export const projects: Project[] = [
  {
    title: "Flash Sale Backend",
    description:
      "A high-concurrency flash sale backend designed to prevent overselling using atomic Redis operations, asynchronous order processing, and real payment gateway integration.",
    image:
      "https://res.cloudinary.com/dqqmzgesp/image/upload/v1790782196/flash-sale-ticket-engine_siktwg.webp",
    githubUrl: "https://github.com/ndrvndr/flash-sale-backend",
    tools: [
      {
        label: "TypeScript",
        icon: SiTypescript,
      },
      {
        label: "NestJS",
        icon: SiNestjs,
      },
      {
        label: "Lua",
        icon: SiLua,
      },
      {
        label: "Redis",
        icon: SiRedis,
      },
      {
        label: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        label: "BullMQ",
        icon: SiNodedotjs,
      },
      {
        label: "Prisma",
        icon: SiPrisma,
      },
    ],
  },
  {
    title: "Ecommerce Frontend",
    description:
      "A modern e-commerce storefront with product filtering, persistent cart, checkout, authentication, and address management, built with Nuxt and Vue.",
    image:
      "https://res.cloudinary.com/dqqmzgesp/image/upload/v1790782196/e-commerce-frontend_ctdl7f.webp",
    githubUrl: "https://github.com/ndrvndr/e-commerce-frontend",
    liveDemo: "https://e-commerce-frontend-zeta-lac.vercel.app/",
    tools: [
      {
        label: "TypeScript",
        icon: SiTypescript,
      },
      {
        label: "Vue",
        icon: SiVuedotjs,
      },
      {
        label: "Nuxt",
        icon: SiNuxt,
      },
      {
        label: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        label: "Pinia",
        icon: SiPinia,
      },
      {
        label: "Zod",
        icon: SiZod,
      },
    ],
  },
  {
    title: "E-Commerce Backend",
    description:
      "A production-ready e-commerce REST API and admin panel with product variations, stock management, authentication, role-based access control, and cloud file storage.",
    image:
      "https://res.cloudinary.com/dqqmzgesp/image/upload/v1790782195/e-commerce-backend_nj5tns.webp",
    githubUrl: "https://github.com/ndrvndr/e-commerce-backend",
    liveDemo: "https://e-commerce-backend-6m2p.onrender.com/",
    tools: [
      {
        label: "PHP",
        icon: SiPhp,
      },
      {
        label: "Laravel",
        icon: SiLaravel,
      },
      {
        label: "Filament",
        icon: SiFilament,
      },
      {
        label: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        label: "Google OAuth",
        icon: SiGoogle,
      },
      {
        label: "Docker",
        icon: SiDocker,
      },
      {
        label: "Cloudflare R2",
        icon: SiCloudflare,
      },
    ],
  },
]
