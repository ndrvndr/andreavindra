// Public configuration only. Never import Redis or webhook secrets into Studio.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "unconfigured"
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-10-01"
export const isSanityConfigured = projectId !== "unconfigured"
