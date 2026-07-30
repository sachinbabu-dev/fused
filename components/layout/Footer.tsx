import Link from "next/link"
import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"
import { boroughs } from "@/data/boroughs"

export default function Footer() {
  const footerBoroughs = boroughs.slice(0, 8)

  return (
    <footer className="bg-[#080808] border-t border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="rounded p-1 shrink-0">
                <Image
                  src="/images/logo-large.png"
                  alt="Ironforge logo"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed mb-5">
              Mobile welding across London.
              <br />
              Exhaust · MOT · Commercial · HGV · Architectural
            </p>
            <a
              href="tel:+447570167631"
              className="flex items-center gap-2 text-[#FF6B00] font-semibold text-sm mb-3 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +44-7570 167631
            </a>
            <a
              href="https://wa.me/4407570167631"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white font-medium text-sm transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
          </div>

          {/* Column 2 — Services */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Services</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/exhaust-welding-london"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Exhaust Welding London
                </Link>
              </li>
              <li>
                <Link
                  href="/mot-welding-london"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  MOT Welding London
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial-welding-london"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Commercial Welding London
                </Link>
              </li>
              <li>
                <Link
                  href="/architectural-welding-london"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Architectural Welding London
                </Link>
              </li>
              <li>
                <Link
                  href="/areas"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  All Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Areas */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Areas We Cover</p>
            <ul className="space-y-2.5 text-sm">
              {footerBoroughs.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/areas/${b.slug}`}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#quote-form"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Get a Free Quote
                </a>
              </li>
              <li>
                <a
                  href="tel:+447570167631"
                  className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Us
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/4407570167631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-300 gap-2">
          <p>© 2025 Ironforge. All rights reserved.</p>
          <p>Mobile Welding London</p>
        </div>
      </div>
    </footer>
  )
}
