"use client"

import "./globals.css"
import ErrorPage from "./(site)/error"

export default function GlobalError(props: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <ErrorPage {...props} />
      </body>
    </html>
  )
}
