import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"

export default function CTABanner() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background — angle grinder sparks */}
      <Image
        src="/images/grinder-sparks.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/88" />
      {/* Top + bottom orange accent lines */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#FF6B00]" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B00]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#FF6B00] text-xs font-bold tracking-[0.15em] uppercase mb-3 sm:mb-4">
          Get Started Today
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
          Ready to get your vehicle fixed?
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
          Call or WhatsApp us with a photo and your postcode — we&apos;ll quote you fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="tel:07700000000"
            className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded transition-colors"
          >
            <Phone className="w-5 h-5 shrink-0" />
            Call Now — 07700 000000
          </a>
          <a
            href="https://wa.me/4407700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/35 bg-white/5 hover:bg-white/10 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded backdrop-blur-sm transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
