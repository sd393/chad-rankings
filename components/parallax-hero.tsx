"use client"

import { useEffect, useState, type ReactNode } from "react"

export function ParallaxHero({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const progress = Math.min(scrollY / 600, 1)
  const opacity = 1 - progress * 0.9
  const translateY = -scrollY * 0.3
  const scale = 1 - progress * 0.05

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}
