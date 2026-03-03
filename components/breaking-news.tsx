import Image from "next/image"

interface BreakingNewsProps {
  headline: string
  imageUrl: string
  description: string
}

export function BreakingNews({
  headline,
  imageUrl,
  description,
}: BreakingNewsProps) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8">
      {/* Banner */}
      <div className="overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-background p-6 md:p-8">
        <div className="animate-pulse-glow mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          BREAKING NEWS
        </div>
        <h2 className="text-xl font-bold leading-snug text-foreground md:text-2xl text-balance">
          {headline}
        </h2>
      </div>

      {/* Image + description card */}
      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm">
        <div className="relative aspect-video w-full bg-muted">
          <Image
            src={imageUrl}
            alt="Breaking news image"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-5">
          <p className="text-sm font-medium italic leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
