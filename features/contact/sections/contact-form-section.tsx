"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Field, FieldGroup } from "@/components/ui/field"

import { sendContactEmail } from "../actions"
import { ContactField } from "../components/contact-field"
import { CONTACT_LIMITS, formSchema, type FormValues } from "../contact-schema"

const TOAST_MESSAGES = {
  loading: "Sending message...",
  success: "Message sent. Thanks for reaching out!",
  error: "Failed to send message. Please try again.",
} as const

export function ContactFormSection() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: FormValues) {
    if (values.website) return

    const request = (async () => {
      const { ok } = await sendContactEmail(values)
      if (!ok) throw new Error("Send failed")
    })()

    toast.promise(request, TOAST_MESSAGES)

    try {
      await request
      form.reset()
    } catch {}
  }

  const { control, formState } = form

  return (
    <section aria-labelledby="contact-form-heading">
      <h2 id="contact-form-heading" className="text-4xl font-bold">
        Or send me an email
      </h2>

      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="mt-8">
        <FieldGroup>
          <div className="grid gap-6 sm:grid-cols-2">
            <ContactField
              control={control}
              name="name"
              label="Name"
              placeholder="Enter your name"
              autoComplete="name"
              maxLength={CONTACT_LIMITS.name}
            />
            <ContactField
              control={control}
              name="email"
              label="Email"
              type="email"
              inputMode="email"
              placeholder="Enter your email"
              autoComplete="email"
              maxLength={CONTACT_LIMITS.email}
            />
          </div>

          <ContactField
            control={control}
            name="subject"
            label="Subject"
            placeholder="Enter your subject"
            autoComplete="off"
            maxLength={CONTACT_LIMITS.subject}
          />

          <ContactField
            control={control}
            name="message"
            label="Message"
            placeholder="Enter your message"
            maxLength={CONTACT_LIMITS.message}
            multiline
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden"
          >
            <label htmlFor="contact-website">Leave this field empty</label>
            <input
              id="contact-website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...form.register("website")}
            />
          </div>

          <Field>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={formState.isSubmitting}
              aria-busy={formState.isSubmitting}
            >
              {formState.isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </section>
  )
}
