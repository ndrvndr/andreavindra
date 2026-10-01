import { Footer } from "@/components/layouts/footer"
import { Header } from "@/components/layouts/header"
import { ScrollbarActivity } from "@/components/scrollbar-activity"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <TooltipProvider>
        <ScrollbarActivity />
        <Header />
        <main>{children}</main>
        <Footer />
      </TooltipProvider>
      <Toaster />
    </>
  )
}
