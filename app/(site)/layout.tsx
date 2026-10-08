import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import { DEFAULT_METADATA } from "@/constants/metadata"
import { cn } from "@/lib/utils"

import "../globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.METADATA_BASE_URL || DEFAULT_METADATA.url),
  title: {
    default: DEFAULT_METADATA.creator,
    template: `%s | ${DEFAULT_METADATA.creator}`,
  },
  robots: DEFAULT_METADATA.robots,
  keywords: DEFAULT_METADATA.keywords,
  description: DEFAULT_METADATA.description,
  creator: DEFAULT_METADATA.creator,
  authors: {
    name: DEFAULT_METADATA.creator,
    url: DEFAULT_METADATA.url,
  },
  openGraph: {
    type: "website",
    siteName: DEFAULT_METADATA.siteName,
    images: DEFAULT_METADATA.image,
    locale: DEFAULT_METADATA.locale,
  },
  twitter: {
    card: "summary_large_image",
    creator: DEFAULT_METADATA.creator,
    site: DEFAULT_METADATA.siteName,
    images: DEFAULT_METADATA.image,
  },
  verification: {
    google: "ypG4fMOGEDjbZvSZT3uQhf-u8-XqSsOCL1aS4-4MbLQ",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        "dark",
        inter.variable,
        fontMono.variable,
        "font-sans antialiased",
        "scroll-smooth motion-reduce:scroll-auto"
      )}
    >
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
