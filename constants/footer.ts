import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMeta,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react"

import type { FooterContent, SocialLink } from "@/types/navigation"

export const footerContents: FooterContent[] = [
  {
    title: "Explore",
    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Projects",
        href: "/projects",
      },
      {
        label: "Gallery",
        href: "/gallery",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Personal",
    links: [
      {
        label: "Bucket List",
        href: "/bucket-list",
      },
      // {
      //   label: "Statistics",
      //   href: "/statistics",
      // },
      {
        label: "Guestbook",
        href: "/guestbook",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "RSS",
        href: "/rss.xml",
      },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    icon: IconMail,
    href: "mailto:andreavindra37@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/ndrvndr/",
    newTab: true,
  },
  {
    label: "GitHub",
    icon: IconBrandGithub,
    href: "https://github.com/ndrvndr",
    newTab: true,
  },
  {
    label: "Instagram",
    icon: IconBrandMeta,
    href: "https://www.instagram.com/ndr.vndr/",
    newTab: true,
  },
  {
    label: "X",
    icon: IconBrandX,
    href: "https://x.com/ndrvndr",
    newTab: true,
  },
]
