import type { Metadata } from "next"
import Image from "next/image"
import Hero from "@/components/sections/Hero"
import TrustBar from "@/components/sections/TrustBar"
import Services from "@/components/sections/Services"
import Pricing from "@/components/sections/Pricing"
import HowItWorks from "@/components/sections/HowItWorks"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import Reviews from "@/components/sections/Reviews"
import Areas from "@/components/sections/Areas"
import FAQ from "@/components/sections/FAQ"
import QuoteForm from "@/components/sections/QuoteForm"
import CTABanner from "@/components/sections/CTABanner"
import { localBusinessSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Mobile Welder London | Exhaust, MOT & Commercial Welding — Fused Welding Services",
  description:
    "Mobile welding across London. Exhaust repairs, MOT chassis welding and commercial vehicle repairs from £80. We come to you — 7 days a week. Call Fused Welding Services.",
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <Hero />
      <TrustBar />
      <Services />
      <Pricing />
      <HowItWorks />
      <WhyChooseUs />

      {/* About Section — image left, text right */}
      <section id="about" className="py-14 md:py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative h-[300px] sm:h-[380px] md:h-[460px] rounded-xl overflow-hidden order-2 md:order-1">
              <Image
                src="/images/exhaust-weld-closeup.jpg"
                alt="Fused Welding Services — professional mobile welder at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Orange bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B00]" />
              {/* Subtle dark top gradient */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0f0f0f]/40 to-transparent" />
              {/* Floating caption */}
              <div className="absolute bottom-4 right-4 bg-[#0a0a0a]/85 backdrop-blur-sm border border-[#1e1e1e] rounded-lg px-4 py-2.5">
                <p className="text-white text-xs font-bold">10+ Years Experience</p>
                <p className="text-gray-500 text-[11px]">1,000+ jobs across London</p>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <p className="text-[#FF6B00] text-xs font-bold tracking-[0.15em] uppercase mb-3">
                About Fused Welding Services
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                Built to come<br />to you
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  Fused Welding Services is a London-based mobile welding service built on one simple idea — your
                  vehicle shouldn&apos;t need to go to a workshop for a quality weld repair.
                </p>
                <p>
                  We&apos;ve been doing this for over 10 years, working on everything from rusty family
                  cars failing their MOT to commercial vehicle fleets that can&apos;t afford downtime.
                </p>
                <p>
                  We show up fully equipped, we do the job properly, and we leave the site clean. No
                  workshops. No waiting lists. No towing fees. Just reliable welding, at your
                  location, at a fair price.
                </p>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#1a1a1a]">
                {[
                  { v: "10+", l: "Years experience" },
                  { v: "1,000+", l: "Jobs completed" },
                  { v: "7", l: "Days a week" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-2xl font-bold text-[#FF6B00]">{s.v}</p>
                    <p className="text-gray-600 text-xs mt-1">{s.l}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-8">
                <a
                  href="#services"
                  className="inline-block bg-[#FF6B00] hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors"
                >
                  See Our Services
                </a>
                <a
                  href="tel:07700000000"
                  className="inline-block border border-[#2a2a2a] hover:border-[#FF6B00]/40 text-gray-400 hover:text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors"
                >
                  Call 07700 000000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
      <Areas />
      <FAQ />
      <QuoteForm />
      <CTABanner />
    </>
  )
}
