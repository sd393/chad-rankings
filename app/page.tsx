import { Trophy } from "lucide-react"
import { Hero } from "@/components/hero"
import { BreakingNews } from "@/components/breaking-news"
import { LeaderboardCard } from "@/components/leaderboard-card"
import { rankedEntries } from "@/lib/data"

export default function RankingsPage() {
  return (
    <>
      <Hero />

      <BreakingNews
        headline="Alexander Dreymon holds the #1 spot for a record-breaking 12th consecutive week as challengers crumble under the weight of his unprecedented facial symmetry scores."
        imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop&crop=face"
        description="&lsquo;We have never seen dominance like this in the history of the rankings,&rsquo; said lead analyst Dr. Helena Voss. &lsquo;His midface ratio is textbook perfection. The competition is playing for second place.&rsquo;"
      />

      {/* Top 10 Leaderboard */}
      <section className="mx-auto max-w-4xl px-4 pb-16 pt-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/15">
            <Trophy className="h-5 w-5 text-gold" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Top 10</h2>
        </div>

        <div className="flex flex-col gap-2.5">
          {rankedEntries.map((entry, index) => (
            <LeaderboardCard key={entry.rank} entry={entry} index={index} />
          ))}
        </div>
      </section>
    </>
  )
}
