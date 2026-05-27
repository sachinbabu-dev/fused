import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Send us a photo",
    description:
      "WhatsApp or message us a photo of the damage, your postcode, and vehicle type. The more detail the better — it lets us quote accurately.",
  },
  {
    number: "02",
    title: "Get a clear quote",
    description:
      "We'll come back to you with a fixed price. No surprise charges, no vague estimates. You only proceed if you're happy.",
  },
  {
    number: "03",
    title: "We come to you",
    description:
      "We arrive at your home, workplace, garage or roadside — fully equipped. No need to move the vehicle.",
  },
  {
    number: "04",
    title: "Job done, pay on completion",
    description:
      "We complete the weld, do a final check with you, and take payment only once the work is finished to your satisfaction.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: steps */}
          <div className="px-4 sm:px-8 lg:px-16 py-14 lg:py-24">
            <p className="text-[#FF6B00] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-2">
              Simple booking.
              <br />
              No faff.
            </h2>
            <p className="text-gray-500 text-sm mb-12">No waiting rooms, no vague estimates.</p>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#FF6B00]/30 group-hover:border-[#FF6B00] flex items-center justify-center transition-colors">
                    <span className="text-[#FF6B00] font-bold text-xs tracking-wider">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-12 pt-8 border-t border-[#1a1a1a]">
              <a
                href="tel:07700000000"
                className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-sm px-5 py-3 rounded transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/4407700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#2a2a2a] hover:border-[#FF6B00]/40 text-gray-400 hover:text-white font-bold text-sm px-5 py-3 rounded transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative min-h-[260px] sm:min-h-[360px] lg:min-h-auto">
            <Image
              src="/images/welder-onsite.jpg"
              alt="Mobile welder fully equipped and ready to work"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Left fade into dark background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent lg:block hidden" />
            {/* Top fade on mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-transparent lg:hidden" />
            {/* Bottom left caption */}
            <div className="absolute bottom-5 left-5 bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#1e1e1e] rounded-lg px-4 py-2.5 hidden lg:block">
              <p className="text-white text-xs font-bold">Fully equipped van</p>
              <p className="text-gray-500 text-[11px]">Generator included for off-grid sites</p>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />
    </section>
  )
}
