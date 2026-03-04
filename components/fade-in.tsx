"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type Direction = "up" | "down" | "left" | "right"

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 700,
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  duration?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const translate = {
    up: "translate-y-6",
    down: "-translate-y-6",
    left: "translate-x-6",
    right: "-translate-x-6",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        visible ? "translate-x-0 translate-y-0 opacity-100" : `${translate[direction]} opacity-0`,
        className,
      )}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
