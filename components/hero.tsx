import Link from "next/link"
import Image from "next/image"
import { Info, TrendingUp, TrendingDown, Crown } from "lucide-react"
import { rankedEntries } from "@/lib/data"
import { ScrollIndicator } from "./scroll-indicator"
import { FadeIn } from "./fade-in"
import { ParallaxHero } from "./parallax-hero"

export function Hero() {
  const champion = rankedEntries[0]
  const risers = [...rankedEntries]
    .filter((e) => e.change > 0)
    .sort((a, b) => b.change - a.change)
    .slice(0, 3)
  const fallers = [...rankedEntries]
    .filter((e) => e.change < 0)
    .sort((a, b) => a.change - b.change)
    .slice(0, 3)

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <ParallaxHero>
      <div className="relative mx-auto w-full max-w-5xl px-4 py-16" style={{ fontFamily: "var(--font-national2)" }}>
        {/* Title */}
        <FadeIn direction="down" duration={800}>
          <div className="text-center">
            <h1 className="text-glow-green text-3xl font-normal tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance" style={{ fontFamily: "var(--font-ruzicka)" }}>
              Dartmouth Chad Rankings
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={200} duration={800}>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground md:text-xl">
            Uncovering the unknown slayers of Dartmouth College
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={400} duration={600}>
          <div className="mt-8 text-center">
            <Link
              href="/rules"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Info className="h-4 w-4" />
              How Rankings Work
            </Link>
          </div>
        </FadeIn>

        {/* #1 Champion Spotlight */}
        <FadeIn delay={600} duration={800}>
          <div className="mx-auto mt-12 max-w-sm">
            <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-card/80 p-5 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
              <div className="relative flex items-center gap-4">
                <div className="relative shrink-0">
                  <Image src={champion.avatar} alt={champion.name} width={64} height={64} className="h-16 w-16 rounded-full object-cover ring-2 ring-gold ring-offset-2 ring-offset-background" />
                  <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold">
                    <Crown className="h-3.5 w-3.5 text-background" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">{champion.name}</p>
                  <div className="mt-0.5 flex items-center gap-2">
                    <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-ruzicka)" }}>{champion.title}</h2>
                    <span className="rounded-md bg-gold/15 px-1.5 py-0.5 text-[10px] font-semibold text-gold">{champion.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Risers & Fallers */}
        <div className="mx-auto mt-4 grid max-w-md grid-cols-2 gap-3">
          <FadeIn delay={800} direction="right" duration={600}>
            <div className="rounded-lg border border-border bg-card/40 px-4 py-3 backdrop-blur-sm">
              <div className="mb-2 flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-green-400" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-green-400">Risers</span>
              </div>
              <div className="space-y-1.5">
                {risers.map((entry) => (
                  <div key={entry.rank} className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{entry.name} <span className="text-muted-foreground/60">{entry.year}</span></span>
                    <span className="text-xs font-bold text-green-400">+{entry.change}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={900} direction="left" duration={600}>
            <div className="rounded-lg border border-border bg-card/40 px-4 py-3 backdrop-blur-sm">
              <div className="mb-2 flex items-center gap-1.5">
                <TrendingDown className="h-3.5 w-3.5 text-red-400" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-red-400">Fallers</span>
              </div>
              <div className="space-y-1.5">
                {fallers.map((entry) => (
                  <div key={entry.rank} className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{entry.name} <span className="text-muted-foreground/60">{entry.year}</span></span>
                    <span className="text-xs font-bold text-red-400">{entry.change}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      </ParallaxHero>

      <ScrollIndicator />
    </section>
  )
}
