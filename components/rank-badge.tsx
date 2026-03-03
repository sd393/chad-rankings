import { cn } from "@/lib/utils"

export function RankBadge({ rank }: { rank: number }) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
        rank === 1 && "bg-gold/20 text-gold",
        rank === 2 && "bg-silver/20 text-silver",
        rank === 3 && "bg-bronze/20 text-bronze",
        rank > 3 && "bg-muted text-muted-foreground"
      )}
    >
      {rank}
    </div>
  )
}
