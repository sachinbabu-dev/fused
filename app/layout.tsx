import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ironforge.co.uk"),
  title: {
    default: "Mobile Welder London | Exhaust, MOT & Commercial Welding — Ironforge",
    template: "%s | Ironforge",
  },
  description:
    "Mobile welding across London. Exhaust repairs, MOT chassis welding and commercial vehicle repairs from £80. We come to you — 7 days a week. Call Ironforge.",
  keywords: [
    "mobile welder London",
    "exhaust welding London",
    "MOT welding London",
    "mobile welding London",
    "welder near me London",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Ironforge",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-[#0a0a0a]`}>
      <body className="antialiased bg-[#0a0a0a] text-[#e5e5e5]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
