import "./globals.css"

import { Geist_Mono, Inter } from "next/font/google"

import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark",
        inter.variable,
        fontMono.variable,
        "font-sans antialiased",
        "scroll-smooth"
      )}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
