import Link from "next/link"
import {
  ArrowLeft,
  ShieldCheck,
  Scale,
  Clock,
  Target,
  Zap,
  RefreshCw,
  Users,
} from "lucide-react"

const methodologyCards = [
  {
    icon: Scale,
    title: "Fair & Transparent Methodology",
    description:
      "Rankings use a proprietary algorithm weighing media presence, social impact, influence, and achievements. No paid placements or sponsorships can affect position.",
  },
  {
    icon: Clock,
    title: "Daily Updates",
    description:
      "Refreshed every 24 hours at midnight UTC. A 7-day rolling window of activity ensures rankings reflect recent momentum and relevance.",
  },
  {
    icon: Target,
    title: "Influence Score (0\u2013100)",
    description:
      "Calculated from media mentions, social engagement, public recognition, and documented achievements. This score directly impacts rank position.",
  },
  {
    icon: Zap,
    title: "Movement Indicators",
    description:
      "Green means rising, red means declining, and gray means stable. Any movement of 3+ spots in 24 hours earns a special \u201CHot\u201D badge.",
  },
  {
    icon: RefreshCw,
    title: "Rank Change Explanations",
    description:
      "Every significant movement is documented with transparent reasoning. We believe accountability is essential to maintaining trust.",
  },
  {
    icon: Users,
    title: "Community Voice",
    description:
      "Rankings are primarily algorithmic, but community votes and comments provide valuable sentiment data that may influence future considerations.",
  },
]

export default function RulesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
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
          <ShieldCheck className="h-7 w-7 text-primary" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl text-balance">
          How Dartmouth Chad Rankings Work
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Our methodology is designed to be fair, transparent, and reflective of
          real-world Dartmouth chad energy and momentum.
        </p>
      </div>

      {/* Methodology grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {methodologyCards.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.title}
              className="group rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.06)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-bold text-foreground">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
