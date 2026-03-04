import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const national2 = localFont({
  src: [
    { path: "./fonts/National2-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/National2-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/National2-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-national2",
  display: "swap",
})
const ruzicka = localFont({
  src: [
    { path: "./fonts/DartmouthRuzicka-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/DartmouthRuzicka-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-ruzicka",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dartmouth Chad Rankings | Dartmouth's Facial Harmony Leaderboard",
  description:
    "Weekly-updated rankings of the most harmonious faces at Dartmouth College. Community voting, leaderboards, and head-to-head battles.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0D1E1C",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} ${ruzicka.variable} ${national2.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
