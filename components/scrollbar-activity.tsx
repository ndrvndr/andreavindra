"use client"

import * as React from "react"

export function ScrollbarActivity() {
  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    function handleScroll() {
      document.documentElement.classList.add("is-scrolling")

      clearTimeout(timeout)

      timeout = setTimeout(() => {
        document.documentElement.classList.remove("is-scrolling")
      }, 700)
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll, {
        capture: true,
      })

      clearTimeout(timeout)
    }
  }, [])

  return null
}
