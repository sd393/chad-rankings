"use client"

import { useState, useCallback, useMemo, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Swords, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"
import { battleRoster, type RankedEntry } from "@/lib/data"

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type MatchPair = [RankedEntry, RankedEntry]

function generateMatchups(roster: RankedEntry[]): MatchPair[] {
  const shuffled = shuffleArray(roster)
  const pairs: MatchPair[] = []
  for (let i = 0; i < shuffled.length - 1; i += 2) {
    pairs.push([shuffled[i], shuffled[i + 1]])
  }
  return pairs
}

export default function BattlePage() {
  const [matchups, setMatchups] = useState<MatchPair[]>(() =>
    generateMatchups(battleRoster)
  )
  const [currentMatch, setCurrentMatch] = useState(0)
  const [winners, setWinners] = useState<RankedEntry[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [roundNumber, setRoundNumber] = useState(1)
  const [finalWinner, setFinalWinner] = useState<RankedEntry | null>(null)

  const totalMatches = matchups.length
  const progress =
    totalMatches > 0 ? ((currentMatch) / totalMatches) * 100 : 0

  const handleSelect = useCallback(
    (winner: RankedEntry) => {
      if (selectedId) return // prevent double-clicks
      setSelectedId(winner.name)

      setTimeout(() => {
        const newWinners = [...winners, winner]

        if (currentMatch + 1 >= matchups.length) {
          // Round is over
          if (newWinners.length === 1) {
            // Final winner!
            setFinalWinner(newWinners[0])
          } else {
            // Next round
            const nextMatchups = generateMatchups(newWinners)
            setMatchups(nextMatchups)
            setWinners([])
            setCurrentMatch(0)
            setRoundNumber((r) => r + 1)
          }
        } else {
          setWinners(newWinners)
          setCurrentMatch((c) => c + 1)
        }
        setSelectedId(null)
      }, 700)
    },
    [selectedId, winners, currentMatch, matchups.length]
  )

  const handleRestart = useCallback(() => {
    setMatchups(generateMatchups(battleRoster))
    setCurrentMatch(0)
    setWinners([])
    setSelectedId(null)
    setRoundNumber(1)
    setFinalWinner(null)
  }, [])

  if (finalWinner) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10" style={{ fontFamily: "var(--font-national2)" }}>
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Rankings
        </Link>

        <div className="flex flex-col items-center py-16 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/20">
            <Trophy className="h-10 w-10 text-gold" />
          </div>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl" style={{ fontFamily: "var(--font-ruzicka)" }}>
            Mog Off Champion
          </h1>
          <p className="mt-3 text-muted-foreground">
            After {roundNumber} rounds of intense mogging
          </p>

          <div className="mt-10 flex flex-col items-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl ring-4 ring-gold/50 ring-offset-4 ring-offset-background">
              <Image
                src={finalWinner.avatar}
                alt={finalWinner.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-foreground">
              {finalWinner.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              {finalWinner.title}
            </p>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
          >
            Back to Rankings
          </Link>
        </div>
      </div>
    )
  }

  const pair = matchups[currentMatch]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10" style={{ fontFamily: "var(--font-national2)" }}>
      {/* Header */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Rankings
      </Link>

      <div className="mb-10 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
          <Swords className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl" style={{ fontFamily: "var(--font-ruzicka)" }}>
          Dartmouth Mog Off
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          You get to decide who mogs
        </p>
      </div>

      {/* Battle cards */}
      {pair && (
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:gap-8">
          {/* Left card */}
          <BattleCard
            entry={pair[0]}
            isSelected={selectedId === pair[0].name}
            isLosing={selectedId !== null && selectedId !== pair[0].name}
            onSelect={() => handleSelect(pair[0])}
          />

          {/* VS badge */}
          <div className="flex shrink-0 items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-base font-extrabold text-primary">
              VS
            </div>
          </div>

          {/* Right card */}
          <BattleCard
            entry={pair[1]}
            isSelected={selectedId === pair[1].name}
            isLosing={selectedId !== null && selectedId !== pair[1].name}
            onSelect={() => handleSelect(pair[1])}
          />
        </div>
      )}

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Tap a card to choose the winner
      </p>
    </div>
  )
}

function BattleCard({
  entry,
  isSelected,
  isLosing,
  onSelect,
}: {
  entry: RankedEntry
  isSelected: boolean
  isLosing: boolean
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "group relative flex-1 overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300",
        "hover:border-primary/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        isSelected && "animate-select-pulse border-accent scale-[1.02]",
        isLosing && "opacity-40 scale-95"
      )}
    >
      <div className="relative aspect-square w-full">
        <Image
          src={entry.avatar}
          alt={entry.name}
          fill
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>
      <div className="relative px-5 pb-5 pt-2 text-left">
        <span className="text-xs text-muted-foreground">#{entry.rank}</span>
        <h3 className="mt-0.5 text-lg font-bold text-foreground">
          {entry.name}
        </h3>
        <p className="text-sm text-muted-foreground">{entry.title}</p>
      </div>
    </button>
  )
}
