"use client"
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { IconLayoutNavbarCollapse } from "@tabler/icons-react"
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"
import Link from "next/link"
import { useRef, useState } from "react"

import { useHideOnScroll } from "@/hooks/use-hide-on-scroll"
import { cn } from "@/lib/utils"

const dockVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 24 },
  },
  hidden: {
    y: -100,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
} as const

function useDockTransition() {
  const reduceMotion = useReducedMotion()
  return reduceMotion
    ? { duration: 0 }
    : ({ duration: 0.3, ease: "easeInOut" } as const)
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  desktopClassName?: string
  mobileClassName?: string
}) => {
  const scrolledDown = useHideOnScroll()
  const [keyboardFocus, setKeyboardFocus] = useState(false)

  const hidden = scrolledDown && !keyboardFocus

  const focusHandlers = {
    onFocus: (e: React.FocusEvent) => {
      if (e.target.matches(":focus-visible")) setKeyboardFocus(true)
    },
    onBlur: () => setKeyboardFocus(false),
  }

  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        hidden={hidden}
        {...focusHandlers}
      />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        hidden={hidden}
        {...focusHandlers}
      />
    </>
  )
}

const FloatingDockMobile = ({
  items,
  className,
  hidden,
  onFocus,
  onBlur,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  className?: string
  hidden: boolean
  onFocus: React.FocusEventHandler
  onBlur: React.FocusEventHandler
}) => {
  const [open, setOpen] = useState(false)
  const transition = useDockTransition()

  const isHidden = hidden && !open

  return (
    <motion.nav
      initial={false}
      variants={dockVariants}
      animate={isHidden ? "hidden" : "visible"}
      transition={transition}
      onFocus={onFocus}
      onBlur={onBlur}
      className={cn(
        "relative block md:hidden",
        isHidden && "pointer-events-none",
        className
      )}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  aria-label={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-gray-50 dark:bg-card"
                >
                  <div className="h-4 w-4" aria-hidden="true">
                    {item.icon}
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-gray-50 dark:bg-card"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </motion.nav>
  )
}

const FloatingDockDesktop = ({
  items,
  className,
  hidden,
  onFocus,
  onBlur,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  className?: string
  hidden: boolean
  onFocus: React.FocusEventHandler
  onBlur: React.FocusEventHandler
}) => {
  const mouseX = useMotionValue(Infinity)
  const transition = useDockTransition()

  return (
    <motion.div
      initial={false}
      variants={dockVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={transition}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl border border-border bg-gray-50 px-4 pb-3 md:flex dark:bg-card",
        hidden && "pointer-events-none",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue
  title: string
  icon: React.ReactNode
  href: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  )
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  )

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const [hovered, setHovered] = useState(false)

  return (
    <Link href={href} aria-label={title}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-secondary"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="dark:border-primary-foregroundi absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:bg-secondary dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
          aria-hidden="true"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  )
}
