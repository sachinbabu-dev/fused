import { pricingTiers } from "@/data/pricing"
import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <section id="pricing" className="py-14 md:py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Straightforward Pricing
          </h2>
          <p className="text-gray-200 text-base max-w-xl mx-auto leading-relaxed">
            No hidden call-out fees. No vague quotes. Send us a photo and we&apos;ll give you a clear
            price before we travel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl p-5 sm:p-7 flex flex-col ${
                tier.popular
                  ? "bg-[#141414] ring-1 ring-[#FF6B00] shadow-[0_0_40px_rgba(255,107,0,0.08)]"
                  : "bg-[#0d0d0d] border border-[#1e1e1e]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-[#FF6B00] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-lg mb-1">{tier.name}</h3>
                <p className="text-gray-300 text-sm">{tier.subtext}</p>
                <p className="text-3xl font-bold text-[#FF6B00] mt-4">{tier.price}</p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-7">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#FF6B00]" />
                    <span className="text-gray-200 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#quote-form"
                className={`block text-center font-semibold text-sm py-3 px-5 rounded transition-colors ${
                  tier.popular
                    ? "bg-[#FF6B00] hover:bg-orange-600 text-white"
                    : "border border-[#2a2a2a] hover:border-[#FF6B00]/50 text-gray-200 hover:text-white"
                }`}
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-200 mt-8">
          Not sure which applies to you?{" "}
          <a href="tel:+447570167631" className="text-[#FF6B00] hover:underline font-medium">
            Send a photo and your postcode to +44-7570 167631
          </a>{" "}
          and we&apos;ll tell you exactly what&apos;s needed.
        </p>
      </div>
    </section>
  )
}
