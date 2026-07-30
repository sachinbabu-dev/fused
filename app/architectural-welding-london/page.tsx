import type { Metadata } from "next"
import Image from "next/image"
import Pricing from "@/components/sections/Pricing"
import HowItWorks from "@/components/sections/HowItWorks"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import FAQ from "@/components/sections/FAQ"
import QuoteForm from "@/components/sections/QuoteForm"
import Areas from "@/components/sections/Areas"
import CTABanner from "@/components/sections/CTABanner"
import { localBusinessSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Architectural Welding London | Bespoke Metalwork & Steel — Ironforge",
  description:
    "Architectural welding across London. Staircases, balustrades, railings, gates, canopies and structural steelwork. Bespoke fabrication and on-site welding. Call Ironforge.",
}

const gallery = [
  {
    src: "/images/architectural-welding.jpg",
    alt: "Bespoke architectural steelwork welded on-site in London",
    caption: "Structural steel & staircases",
  },
  {
    src: "/images/architectural-railings.jpg",
    alt: "Custom fabricated steel railings and balustrades",
    caption: "Railings & balustrades",
  },
  {
    src: "/images/architectural-gates.jpg",
    alt: "Bespoke wrought iron and steel gates welded in London",
    caption: "Gates & wrought iron",
  },
  {
    src: "/images/architectural-balcony.jpg",
    alt: "Bespoke Juliet balcony with steel railing welded and installed on-site",
    caption: "Balconies & Juliet balconies",
  },
]

export default function ArchitecturalWeldingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema({
              name: "Ironforge — Architectural Welding London",
              description:
                "Bespoke architectural welding and metal fabrication across London. Staircases, balustrades, railings, gates, canopies and structural steel — welded and fitted on-site.",
            })
          ),
        }}
      />

      <section className="bg-[#1a1a1a] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Architectural Welding in London —{" "}
              <span className="text-[#FF6B00]">Bespoke Metalwork & Structural Steel</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Ironforge designs, fabricates and installs bespoke architectural metalwork across
              London. From feature staircases and glass-panel balustrades to steel railings, gates,
              canopies and structural framework, our mobile welders bring workshop-grade craftsmanship
              directly to your site. Whether you&apos;re a homeowner adding a statement piece, an
              architect specifying custom steelwork, or a contractor needing on-site welding for a
              live build, we deliver clean, precise welds and professional finishes.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our architectural welding service covers mild steel, stainless steel, aluminium and
              wrought iron. We regularly work on internal and external staircases, mezzanine
              structures, handrails and balustrades, driveway gates and pedestrian gates, security
              grilles, Juliet balconies, structural beams and columns, garden and courtyard features,
              and shopfront steelwork. Every project is measured, designed and fabricated to suit the
              space — with hot-dip galvanising, powder coating or paint finishes available on
              request.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We work with private clients, architects, main contractors and interior designers
              across London and the surrounding areas. Send us a drawing, a photo of the space, or a
              rough sketch of what you have in mind — we&apos;ll visit to measure, agree the spec and
              provide a clear fixed price. Structural work is welded to appropriate British
              Standards, and our team is fully insured for on-site fabrication and installation.
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

      <section className="py-14 md:py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-10">
            <p className="text-[#FF6B00] text-xs font-bold tracking-[0.15em] uppercase mb-2">
              Recent Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Architectural welding in action
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="group relative h-[260px] sm:h-[300px] rounded-xl overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="w-6 h-0.5 bg-[#FF6B00] mb-2" />
                  <p className="text-white text-sm font-semibold">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
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
