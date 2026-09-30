import { z } from "zod"

export const CONTACT_LIMITS = {
  name: 100,
  email: 100,
  subject: 150,
  message: 2000,
} as const

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(
      CONTACT_LIMITS.name,
      `Name must be at most ${CONTACT_LIMITS.name} characters.`
    ),
  email: z
    .string()
    .trim()
    .max(
      CONTACT_LIMITS.email,
      `Email must be at most ${CONTACT_LIMITS.email} characters.`
    )
    .pipe(z.email("Enter a valid email address.")),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(
      CONTACT_LIMITS.subject,
      `Subject must be at most ${CONTACT_LIMITS.subject} characters.`
    ),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(
      CONTACT_LIMITS.message,
      `Message must be at most ${CONTACT_LIMITS.message} characters.`
    ),
  // Honeypot: harus kosong
  website: z.string().optional(),
})

export type FormValues = z.infer<typeof formSchema>
