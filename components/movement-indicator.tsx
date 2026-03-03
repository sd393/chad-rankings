import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export function MovementIndicator({ change }: { change: number }) {
  if (change > 0) {
    return (
      <div className="flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
        <TrendingUp className="h-3.5 w-3.5" />
        <span>+{change}</span>
      </div>
    )
  }

  if (change < 0) {
    return (
      <div className="flex items-center gap-1.5 rounded-full bg-destructive/15 px-2.5 py-1 text-xs font-semibold text-destructive">
        <TrendingDown className="h-3.5 w-3.5" />
        <span>{change}</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1 text-xs text-muted-foreground">
      <Minus className="h-3.5 w-3.5" />
      <Minus className="h-3.5 w-3.5" />
    </div>
  )
}
