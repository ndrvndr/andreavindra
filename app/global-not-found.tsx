import { Geist_Mono, Inter } from "next/font/google"

import { cn } from "cn"

import NotFound from "./(site)/not-found"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={cn(
        "dark",
        inter.variable,
        fontMono.variable,
        "font-sans antialiased",
        "scroll-smooth motion-reduce:scroll-auto"
      )}
    >
      <body>
        <NotFound />
      </body>
    </html>
  )
}
