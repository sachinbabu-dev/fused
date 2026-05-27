import type { Metadata } from "next"
import Pricing from "@/components/sections/Pricing"
import HowItWorks from "@/components/sections/HowItWorks"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import FAQ from "@/components/sections/FAQ"
import QuoteForm from "@/components/sections/QuoteForm"
import Areas from "@/components/sections/Areas"
import CTABanner from "@/components/sections/CTABanner"
import { localBusinessSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Exhaust Welding London | Mobile Exhaust Repairs — Weldsmith",
  description:
    "Mobile exhaust welding across London. On-site exhaust pipe repairs, silencers, manifolds and brackets from £80. MIG and TIG welding — we come to you. Call Weldsmith.",
}

export default function ExhaustWeldingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema({
              name: "Weldsmith — Exhaust Welding London",
              description:
                "Mobile exhaust welding service across London. On-site MIG and TIG welding for cars and vans from £80.",
            })
          ),
        }}
      />

      <section className="bg-[#1a1a1a] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Exhaust Welding in London —{" "}
              <span className="text-[#FF6B00]">On-Site Exhaust Repairs From £80</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Weldsmith provides professional mobile exhaust welding across all London boroughs. Whether
              your car or van has a cracked exhaust pipe, a blowing silencer, a snapped bracket or a
              leaking manifold, we come to your location fully equipped to carry out a lasting MIG or
              TIG weld repair on-site. No workshop, no towing, no waiting — just a skilled welder at
              your door from £80.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our London exhaust welding service covers everything from minor patch repairs on rusty
              pipes to full exhaust section replacements. We regularly work on cars, vans, motorbikes
              and light commercials, using MIG welding for mild steel and TIG welding for stainless
              steel systems and aluminium components. Exhaust brackets, hangers, flanges, downpipes and
              silencers — if it&apos;s part of the exhaust system, we can weld it, same day where schedule
              allows.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              A blowing exhaust isn&apos;t just noisy — it can be dangerous, cause an MOT failure, and lead
              to further corrosion if left unrepaired. Weldsmith gives you a fast, affordable fix
              without the cost and hassle of a main dealer or exhaust specialist. Send us a photo of
              the damage via WhatsApp, include your postcode, and we&apos;ll give you a clear, fixed price
              — usually within the hour.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:07700000000"
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-lg px-6 py-3 rounded transition-colors"
              >
                Call Now — 07700 000000
              </a>
              <a
                href="#quote-form"
                className="inline-block border-2 border-white hover:bg-white hover:text-[#1a1a1a] text-white font-bold text-lg px-6 py-3 rounded transition-colors text-center"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <HowItWorks />
      <WhyChooseUs />
      <FAQ />
      <QuoteForm />
      <Areas />
      <CTABanner />
    </>
  )
}
