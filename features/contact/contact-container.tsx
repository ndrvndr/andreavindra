import { IconSend } from "@tabler/icons-react"

import { PageHeader } from "@/components/layouts/page-header"
import { Separator } from "@/components/ui/separator"

import { ContactFormSection, SocialMediaSection } from "./sections"

export default function ContactContainer() {
  return (
    <div>
      <PageHeader
        backgroundText="say hello"
        icon={IconSend}
        title="Let's"
        highlight="Connect"
        description="Have a question or an idea? I'd love to hear it"
      />

      <div className="layout py-16">
        <SocialMediaSection />
        <Separator className="my-8" />
        <ContactFormSection />
      </div>
    </div>
  )
}
