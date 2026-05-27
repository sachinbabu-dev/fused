import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-welder.jpg"
          alt="Professional mobile welder at work in London"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Left-to-right fade: text area is fully dark, image shows on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 md:via-[#0a0a0a]/75 to-[#0a0a0a]/70 md:to-[#0a0a0a]/25" />
        {/* Top + bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-0 md:min-h-screen md:flex md:items-center">
        <div className="max-w-2xl">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/25 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse shrink-0" />
            <span className="text-[#FF6B00] text-xs font-bold tracking-[0.15em] uppercase">
              London&apos;s Mobile Welding Specialists
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-5">
            Mobile Welder<br />
            <span className="text-[#FF6B00]">in London</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-2">
            On-site welding repairs across London. We come to you — no towing, no workshop wait.
          </p>
          <p className="text-[#FF6B00] font-bold text-sm tracking-wide mb-8">
            FROM £80 &nbsp;·&nbsp; 7 DAYS A WEEK &nbsp;·&nbsp; ALL VEHICLES WELCOME
          </p>

          {/* Bullets */}
          <ul className="space-y-2.5 mb-10">
            {[
              "Exhaust welding, MOT chassis repairs & commercial vehicles",
              "Fully equipped van — ready at your home, workplace or roadside",
              "10+ years experience · Public liability insured",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#FF6B00] font-bold text-base leading-tight mt-0.5 shrink-0">✔</span>
                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <a
              href="tel:07700000000"
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 rounded transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              Call Now — 07700 000000
            </a>
            <a
              href="https://wa.me/4407700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/15 border border-white/15 text-white font-bold text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 rounded backdrop-blur-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href="#quote-form"
              className="inline-flex items-center text-gray-400 hover:text-white font-semibold text-sm underline underline-offset-4 py-3.5 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>

          <p className="mt-5 text-gray-600 text-xs tracking-wide">
            Send us a photo and postcode — we&apos;ll quote you fast.
          </p>
        </div>
      </div>

      {/* Bottom orange line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/60 to-transparent" />
    </section>
  )
}
