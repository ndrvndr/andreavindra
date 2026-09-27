import type { ElementType } from "react"

export interface LinkItem {
  label: string
  href: string
  newTab?: boolean
}

export interface NavigationItem {
  title: string
  href: string
  icon: ElementType
}

export interface FooterContent {
  title: string
  links: LinkItem[]
}

export interface SocialLink {
  label: string
  href: string
  icon: ElementType
  newTab?: boolean
}
