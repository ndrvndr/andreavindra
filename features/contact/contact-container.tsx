import { IconSend } from "@tabler/icons-react"

import { PageHeader } from "@/components/layouts/page-header"
import { Separator } from "@/components/ui/separator"

import { ContactFormSection, SocialMediaSection } from "./sections"

export default function ContactContainer() {
  return (
    <div>
      <PageHeader
        backgroundText="contact"
        icon={IconSend}
        title="Let's"
        highlight="Connect"
        description="Have a role, project, or technical question in mind? I’d love to hear from you."
      />

      <div className="layout py-16">
        <SocialMediaSection />
        <Separator className="my-8" />
        <ContactFormSection />
      </div>
    </div>
  )
}
