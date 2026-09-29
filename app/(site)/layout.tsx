import { Footer } from "@/components/layouts/footer"
import { Header } from "@/components/layouts/header"
import { ScrollbarActivity } from "@/components/scrollbar-activity"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ScrollbarActivity />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
