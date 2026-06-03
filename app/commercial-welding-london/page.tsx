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
  title: "Commercial Welding London | HGV & Fleet Welding — Ironforge",
  description:
    "Mobile commercial and HGV welding across London. On-site fleet welding at depots, yards and industrial sites. Trailers, plant machinery and vans. Call Ironforge.",
}

export default function CommercialWeldingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema({
              name: "Ironforge — Commercial & HGV Welding London",
              description:
                "Mobile commercial and HGV welding service across London. On-site fleet welding at depots and industrial sites.",
            })
          ),
        }}
      />

      <section className="bg-[#1a1a1a] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Commercial & HGV Welding in London —{" "}
              <span className="text-[#FF6B00]">On-Site Fleet Welding</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Ironforge provides professional mobile commercial and HGV welding across London, working
              directly at your depot, yard or industrial site to minimise vehicle downtime. Whether
              you operate a van fleet, a trailer fleet, or heavy plant machinery, we come to you fully
              equipped — carrying our own generator where mains power isn&apos;t available — and carry out
              structural weld repairs, chassis work and bodywork on-site. No towing, no workshop
              booking delays, and no disruption to your operations.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our HGV and commercial welding service covers a wide range of vehicles and repair types.
              We regularly work on trailer chassis and crossmembers, HGV body mounts and subframes,
              van chassis rails and floor supports, tankers, tippers, flatbeds and specialist
              commercial bodies. We also carry out welding on plant machinery, industrial equipment and
              agricultural vehicles — any metalwork that needs a quality weld repair in London or the
              surrounding areas.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Fleets can&apos;t afford long downtime periods, which is why Ironforge&apos;s mobile approach is
              valued by transport operators, fleet managers and depot supervisors across London. We
              attend site, assess the damage, confirm the price, and get to work — often completing
              repairs the same day. For ongoing fleet maintenance contracts or regular depot visits,
              get in touch to discuss how we can support your operation with reliable, professional
              on-site welding.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+447570167631"
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-lg px-6 py-3 rounded transition-colors"
              >
                Call Now — +44-7570 167631
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
