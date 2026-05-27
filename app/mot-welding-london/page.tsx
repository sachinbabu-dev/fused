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
  title: "MOT Welding London | Chassis & Sill Repairs to Pass MOT — Fused Welding Services",
  description:
    "Mobile MOT welding in London. Sill repairs, floorpan welding, chassis rail and subframe repairs to pass your MOT. On-site, from £80. Call Fused Welding Services.",
}

export default function MOTWeldingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema({
              name: "Fused Welding Services — MOT Welding London",
              description:
                "Mobile MOT welding repairs across London. Sills, floorpans, chassis rails and subframe mounts repaired on-site to pass your MOT.",
            })
          ),
        }}
      />

      <section className="bg-[#1a1a1a] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              MOT Welding in London —{" "}
              <span className="text-[#FF6B00]">Chassis, Sill & Floorpan Repairs</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Failed your MOT on a welding advisory or structural failure? Fused Welding Services provides
              specialist mobile MOT welding repairs across London — coming to your vehicle wherever it
              is to carry out the structural weld repairs needed to get you through your retest.
              Corrosion to sills, floorpans, chassis rails and subframe mounts are among the most
              common MOT failure points we repair, and we do it on-site, without you needing to move
              the vehicle.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              MOT welding failures are taken seriously by DVSA inspectors — only properly executed
              structural repairs will pass a retest. Our experienced mobile welders work to a high
              standard on all bodywork and chassis repairs, cutting out corroded sections and welding
              in clean steel plate where required. Whether you have a specific MOT failure note or a
              category advisory you want to address before your test, send us the details and we&apos;ll
              tell you exactly what&apos;s needed and what it will cost.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We regularly repair sills, inner sills, floorpans, jacking points, chassis legs and
              subframe mounting points across all vehicle makes and models. Our mobile welding service
              means you don&apos;t need to transport a car that may not be road-legal — we come to your
              driveway, your mechanic&apos;s forecourt, or wherever the vehicle is sitting. With over 10
              years of MOT repair experience across London, Fused Welding Services gets vehicles through their
              retests properly and affordably.
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
