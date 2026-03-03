import Link from "next/link"
import { Lock, Info } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-glow-green text-4xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          Dartmouth Chad Rankings
        </h1>

        <div className="mt-5 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Weekly Updated
          </span>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Weekly-updated rankings of the most harmonious faces at Dartmouth College.
        </p>

        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-xs text-muted-foreground backdrop-blur-sm">
            <Lock className="h-3.5 w-3.5 text-primary" />
            Verified & Confirmed by the Dartmouth Chad Ranking
            Association
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/rules"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
          >
            <Info className="h-4 w-4" />
            How Rankings Work
          </Link>
        </div>
      </div>
    </section>
  )
}
