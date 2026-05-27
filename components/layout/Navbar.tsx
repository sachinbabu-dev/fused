"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Pricing", href: "/#pricing" },
    { label: "About", href: "/#about" },
    { label: "Areas", href: "/areas" },
    { label: "Reviews", href: "/#reviews" },
    { label: "FAQs", href: "/#faq" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#080808] border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl tracking-tight">
            Weld<span className="text-[#FF6B00]">smith</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-500 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:07700000000"
              className="flex items-center gap-1.5 text-[#FF6B00] font-semibold text-sm hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              07700 000000
            </a>
            <a
              href="#quote-form"
              className="bg-[#FF6B00] hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-400 hover:text-white p-2 -mr-1 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#080808] border-t border-[#1a1a1a] px-4 pb-5">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white font-medium py-2 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#1a1a1a]">
            <a
              href="tel:07700000000"
              className="flex items-center gap-2 text-[#FF6B00] font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              07700 000000
            </a>
            <a
              href="#quote-form"
              onClick={() => setOpen(false)}
              className="bg-[#FF6B00] hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2.5 rounded text-center transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
