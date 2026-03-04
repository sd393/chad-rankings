"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 100)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href="#rankings"
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex animate-bounce flex-col items-center gap-1 text-muted-foreground transition-all duration-500 hover:text-foreground ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-widest">Rankings</span>
      <ChevronDown className="h-5 w-5" />
    </a>
  )
}
