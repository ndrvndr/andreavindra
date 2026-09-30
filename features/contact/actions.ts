"use server"

import nodemailer from "nodemailer"

import { formSchema, type FormValues } from "./contact-schema"

type ContactResult = { ok: true } | { ok: false }

const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD

const transporter =
  GMAIL_USER && GMAIL_APP_PASSWORD
    ? nodemailer.createTransport({
        service: "gmail",
        auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
      })
    : null

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim()
}

export async function sendContactEmail(
  values: FormValues
): Promise<ContactResult> {
  const parsed = formSchema.safeParse(values)
  if (!parsed.success) return { ok: false }

  const { name, email, subject, message, website } = parsed.data

  if (website) return { ok: true }

  if (!transporter || !GMAIL_USER) {
    console.error("Contact email is not configured: missing GMAIL_* env vars")
    return { ok: false }
  }

  // Optional: rate limiting (see section below)
  // const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim()
  // if (!(await isAllowed(ip))) return { ok: false }

  const safeName = sanitizeHeader(name)
  const safeEmail = sanitizeHeader(email)
  const safeSubject = sanitizeHeader(subject)

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: `"${safeName.replace(/"/g, "")}" <${safeEmail}>`,
      subject: `[Contact] ${safeSubject}`,
      text: `${message}\n\n---\nFrom: ${safeName} <${safeEmail}>`,
    })
    return { ok: true }
  } catch (error) {
    console.error("Failed to send contact email:", error)
    return { ok: false }
  }
}

// import { Ratelimit } from "@upstash/ratelimit"
// import { Redis } from "@upstash/redis"

// const ratelimit = new Ratelimit({
//   redis: Redis.fromEnv(),
//   limiter: Ratelimit.slidingWindow(3, "10 m"), // 3 messages per 10 minutes per IP
// })

// async function isAllowed(ip: string | undefined) {
//   if (!ip) return true // or false, at your discretion
//   const { success } = await ratelimit.limit(`contact:${ip}`)
//   return success
// }
