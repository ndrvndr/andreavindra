import {
  IconArticle,
  IconBriefcase,
  IconHome,
  IconLibraryPhoto,
  IconSend,
  IconUser,
} from "@tabler/icons-react"

import type { NavigationItem } from "@/types/navigation"

export const navigationLinks: NavigationItem[] = [
  {
    title: "Home",
    icon: IconHome,
    href: "/",
  },
  {
    title: "Blog",
    icon: IconArticle,
    href: "/blog",
  },
  {
    title: "Projects",
    icon: IconBriefcase,
    href: "/projects",
  },
  {
    title: "Gallery",
    icon: IconLibraryPhoto,
    href: "/gallery",
  },
  {
    title: "About",
    icon: IconUser,
    href: "/about",
  },
  {
    title: "Contact",
    icon: IconSend,
    href: "/contact",
  },
]
