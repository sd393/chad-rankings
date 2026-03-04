"use client"

import { useState } from "react"
import { Trophy, ChevronDown } from "lucide-react"
import { Hero } from "@/components/hero"
import { LeaderboardCard } from "@/components/leaderboard-card"
import { FadeIn } from "@/components/fade-in"
import { battleRoster } from "@/lib/data"

export default function RankingsPage() {
  const [expanded, setExpanded] = useState(false)
  const entries = expanded ? battleRoster : battleRoster.slice(0, 10)

  return (
    <>
      <Hero />

      {/* Rankings */}
      <section id="rankings" className="mx-auto max-w-4xl px-4 pb-16 pt-16">
        <FadeIn>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/15">
              <Trophy className="h-5 w-5 text-gold" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Rankings</h2>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-2.5">
          {entries.map((entry, index) => (
            <LeaderboardCard key={entry.rank} entry={entry} index={index} immediate={expanded && index >= 10} />
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex w-full items-center justify-center gap-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {expanded ? "Show Less" : "Show All Rankings"}
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </section>
    </>
  )
}
