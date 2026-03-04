"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { RankBadge } from "./rank-badge"
import { MovementIndicator } from "./movement-indicator"
import { cn } from "@/lib/utils"
import type { RankedEntry } from "@/lib/data"

export function LeaderboardCard({
  entry,
  index,
  immediate = false,
}: {
  entry: RankedEntry
  index: number
  immediate?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (immediate) {
      requestAnimationFrame(() => setVisible(true))
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate])

  return (
    <div
      ref={ref}
      className={cn(
        "group flex items-center gap-4 rounded-xl border border-border bg-card/50 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-primary/40 hover:shadow-[0_0_20px_rgba(0,105,62,0.08)] md:px-5",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
      style={{ transitionDelay: `${(immediate ? (index - 10) : index) * 40}ms` }}
    >
      {/* Rank */}
      <RankBadge rank={entry.rank} />

      {/* Avatar */}
      <div
        className={cn(
          "relative h-12 w-12 shrink-0 overflow-hidden rounded-full",
          entry.rank <= 3 && "ring-2 ring-primary/50 ring-offset-2 ring-offset-background"
        )}
      >
        <Image
          src={entry.avatar}
          alt={entry.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name + title */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate text-sm font-bold text-foreground md:text-base">
            {entry.name}
          </span>
          <span className="shrink-0 rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">{entry.year}</span>
          {entry.tags?.map((tag) => (
            <span
              key={tag}
              className="hidden shrink-0 rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold text-primary sm:inline-block"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{entry.title}</span>
      </div>

      {/* Movement */}
      <div className="hidden sm:block">
        <MovementIndicator change={entry.change} />
      </div>

      {/* Chevron */}
      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
    </div>
  )
}
