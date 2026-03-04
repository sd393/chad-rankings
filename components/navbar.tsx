"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Home,
  BookOpen,
  ThumbsUp,
  Swords,
  MessageCircle,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Rankings", icon: Home },
  { href: "/rules", label: "Rules", icon: BookOpen },
  { href: "/battle", label: "Mog Off", icon: Swords },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl" style={{ fontFamily: "var(--font-national2)" }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <rect x="3" y="8.5" width="18" height="7" rx="3.5" />
            </svg>
          </div>
          <span className="text-lg font-normal text-foreground tracking-tight" style={{ fontFamily: "var(--font-ruzicka)" }}>
            Dartmouth Chad Rankings
          </span>
        </Link>

        {/* Center nav links (desktop) */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary/20 text-accent"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right side CTA */}
        <div className="hidden md:block">
          <button className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:brightness-110">
            Join
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/20 text-accent"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              )
            })}
            <div className="mt-2 border-t border-border pt-3">
              <button className="w-full rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground">
                Join
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
