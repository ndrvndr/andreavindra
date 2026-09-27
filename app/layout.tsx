import "./globals.css"

import { Geist_Mono, Inter } from "next/font/google"

import { Footer } from "@/components/layouts/footer"
import { Header } from "@/components/layouts/header"
import { ScrollbarActivity } from "@/components/scrollbar-activity"
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
        "font-sans antialiased"
      )}
    >
      <body>
        <ScrollbarActivity />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
