"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Scale,
  Smile,
  Dumbbell,
  Ruler,
  Flame,
  User,
  TrendingUp,
} from "lucide-react"

const sampleScores = [
  { icon: Smile, label: "Face Card", score: 29, max: 30 },
  { icon: Dumbbell, label: "Frame", score: 24, max: 25 },
  { icon: Ruler, label: "PSL", score: 23, max: 25 },
  { icon: Flame, label: "Appeal", score: 19, max: 20 },
]

const scoringCriteria = [
  {
    icon: Smile,
    label: "Face Card",
    weight: 30,
    description: "Bone structure, symmetry, and overall facial harmony. The raw genetic hand you were dealt.",
  },
  {
    icon: Dumbbell,
    label: "Frame",
    weight: 25,
    description: "Physique, proportions, and how you carry yourself. Height, shoulder-to-waist ratio, and posture.",
  },
  {
    icon: Ruler,
    label: "PSL",
    weight: 25,
    description: "Probabilistic Soft Logic — the objective, data-driven looksmax metric. Canthal tilt, midface ratio, and FWHR.",
  },
  {
    icon: Flame,
    label: "Appeal",
    weight: 20,
    description: "The X-factor. Vibe, aura, style, and that unquantifiable thing that makes people look twice.",
  },
]

export default function RulesPage() {
  const totalScore = sampleScores.reduce((sum, s) => sum + s.score, 0)
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10" style={{ fontFamily: "var(--font-national2)" }}>
      {/* Back link */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Rankings
      </Link>

      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15">
          <Scale className="h-7 w-7 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance" style={{ fontFamily: "var(--font-ruzicka)" }}>
          How Dartmouth Chad Rankings Work
        </h1>
        <div className="mx-auto mt-4">
          <p className="text-sm text-center text-muted-foreground">
            Rankings use a proprietary algorithm weighing four core dimensions of looks. Every score is calculated objectively.
          </p>
        </div>
      </div>

      {/* Overall Looks Breakdown */}
      <div className="mb-8">
        <h2 className="mb-1 text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-ruzicka)" }}>Overall Looks</h2>
        <p className="text-sm text-muted-foreground">Four pillars that determine your final score</p>
      </div>

      {/* Score card + Criteria cards */}
      <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
        {/* Sample profile card */}
        <div className="grid grid-rows-[auto_1fr] rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          {/* Profile header */}
          <button
            onClick={() => setFlipped(!flipped)}
            className="group flex items-center gap-4 border-b border-border p-5"
          >
            <div className="relative h-14 w-14 shrink-0">
              <div className={`absolute inset-0 flex items-center justify-center rounded-full bg-accent/20 transition-opacity duration-300 ${flipped ? "opacity-0" : "opacity-100"}`}>
                <User className="h-7 w-7 text-accent" />
              </div>
              <div className={`absolute inset-0 flex items-center justify-center rounded-full bg-accent/20 transition-opacity duration-300 ${flipped ? "opacity-100" : "opacity-0"}`}>
                <Dumbbell className="h-7 w-7 text-accent" />
              </div>
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-foreground">John D.</p>
                <span className="rounded-md bg-accent/15 px-1.5 py-0.5 text-[10px] font-semibold text-accent">&apos;28</span>
              </div>
              <p className="text-xs text-muted-foreground">The Placeholder</p>
              <div className="mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-accent" />
                <span className="text-[10px] font-semibold text-accent">+4</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-foreground">{totalScore}</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Score</p>
              <p className="text-[10px] text-muted-foreground/50">/ 100</p>
            </div>
          </button>

          {/* Score grid — fills remaining height */}
          <div className="grid grid-cols-2 grid-rows-2">
            {sampleScores.map((s, i) => {
              const Icon = s.icon
              const isTop = i < 2
              const isLeft = i % 2 === 0
              return (
                <div
                  key={s.label}
                  className={`flex flex-col items-center justify-center p-5 ${isTop ? "border-b border-border" : ""} ${isLeft ? "border-r border-border" : ""}`}
                >
                  <Icon className="mb-2 h-5 w-5 text-accent" />
                  <p className="text-2xl font-bold text-foreground">{s.score}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  <p className="text-[10px] text-muted-foreground/50">/ {s.max}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Criteria cards */}
        <div className="flex flex-col gap-3">
          {scoringCriteria.map((c) => {
            const Icon = c.icon
            return (
              <div key={c.label} className="group rounded-xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-foreground">{c.label}</h3>
                      <span className="text-sm font-bold text-foreground">{c.weight}%</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.description}</p>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-primary/10">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${c.weight}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
