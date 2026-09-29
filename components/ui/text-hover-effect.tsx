import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { useId, useRef, useState } from "react"

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string
  duration?: number
}) => {
  const uid = useId().replace(/:/g, "")
  const gradientId = `textGradient-${uid}`
  const revealId = `revealMask-${uid}`
  const maskId = `textMask-${uid}`

  const svgRef = useRef<SVGSVGElement>(null)
  const [hovered, setHovered] = useState(false)

  const xPct = useMotionValue(50)
  const yPct = useMotionValue(50)

  const smoothX = useSpring(xPct, { stiffness: 300, damping: 50 })
  const smoothY = useSpring(yPct, { stiffness: 300, damping: 50 })

  const cx = useTransform(smoothX, (v) => `${v}%`)
  const cy = useTransform(smoothY, (v) => `${v}%`)

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = svgRef.current?.getBoundingClientRect()
    if (!rect) return
    xPct.set(((e.clientX - rect.left) / rect.width) * 100)
    yPct.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="select-none"
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="rgb(18, 255, 247)" />
          <stop offset="50%" stopColor="rgb(99, 255, 209)" />
          <stop offset="100%" stopColor="rgb(179, 255, 171)" />
        </linearGradient>

        <motion.radialGradient
          id={revealId}
          gradientUnits="userSpaceOnUse"
          r="20%"
          cx={cx}
          cy={cy}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id={maskId}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${revealId})`}
          />
        </mask>
      </defs>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>

      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-[#131313] font-[helvetica] text-7xl font-bold dark:stroke-secondary"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: duration ?? 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke={`url(#${gradientId})`}
        strokeWidth="0.3"
        mask={`url(#${maskId})`}
        className="fill-transparent font-[helvetica] text-7xl font-bold"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        {text}
      </text>
    </svg>
  )
}
