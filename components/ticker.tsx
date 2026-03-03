export function Ticker() {
  const message =
    "Tell us who to add in the Community chat!   \u2022   Tell us who to add in the Community chat!   \u2022   Tell us who to add in the Community chat!   \u2022   Tell us who to add in the Community chat!   \u2022   Tell us who to add in the Community chat!   \u2022   "

  return (
    <div className="overflow-hidden border-b border-border bg-primary/5 py-2">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="px-4 text-sm font-medium text-primary">
          {message}
        </span>
        <span className="px-4 text-sm font-medium text-primary">
          {message}
        </span>
      </div>
    </div>
  )
}
