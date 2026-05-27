import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Phone } from "lucide-react"
import { boroughs } from "@/data/boroughs"
import TrustBar from "@/components/sections/TrustBar"
import Services from "@/components/sections/Services"
import Pricing from "@/components/sections/Pricing"
import HowItWorks from "@/components/sections/HowItWorks"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import FAQ from "@/components/sections/FAQ"
import QuoteForm from "@/components/sections/QuoteForm"
import CTABanner from "@/components/sections/CTABanner"
import { localBusinessSchema } from "@/lib/schema"

type Props = {
  params: Promise<{ borough: string }>
}

export async function generateStaticParams() {
  return boroughs.map((b) => ({ borough: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { borough: slug } = await params
  const borough = boroughs.find((b) => b.slug === slug)
  if (!borough) return {}
  return {
    title: `Mobile Welder ${borough.name} | Exhaust & MOT Welding — Weldsmith`,
    description: `Mobile welding in ${borough.name}, ${borough.area}. Exhaust repairs, MOT welding and commercial vehicle welding from £80. Weldsmith comes to you — call 07700 000000.`,
  }
}

export default async function BoroughPage({ params }: Props) {
  const { borough: slug } = await params
  const borough = boroughs.find((b) => b.slug === slug)
  if (!borough) notFound()

  const nearbyBoroughs = boroughs
    .filter((b) => b.area === borough.area && b.slug !== borough.slug)
    .slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema({
              name: `Weldsmith — Mobile Welder ${borough.name}`,
              description: `Mobile welding service in ${borough.name}, ${borough.area}. Exhaust, MOT and commercial vehicle welding from £80.`,
            })
          ),
        }}
      />

      <section className="bg-[#1a1a1a] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Mobile Welder in {borough.name} —{" "}
              <span className="text-[#FF6B00]">Exhaust, MOT & Commercial Welding</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Weldsmith provides professional mobile welding in {borough.name}, {borough.area}.
              Whether you need exhaust welding, MOT chassis repairs or commercial vehicle welding in{" "}
              {borough.name}, we come to your location — your driveway, your workplace, your garage
              forecourt — fully equipped and ready to work. No towing, no workshop wait, no hassle.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              We&apos;ve carried out hundreds of weld repairs across {borough.name} and {borough.area},
              working on everything from family cars with blowing exhausts to commercial van fleets and
              HGVs at local depots. Our {borough.name} mobile welding service covers exhaust pipe and
              silencer repairs, sill and floorpan welding for MOT failures, chassis work, and
              heavy-duty commercial repairs — all priced clearly before we travel.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We regularly cover {borough.name} and surrounding areas
              {nearbyBoroughs.length > 0
                ? `, including nearby boroughs such as ${nearbyBoroughs.map((b) => b.name).join(", ")}`
                : ""}
              . Send us a photo and your {borough.name} postcode via WhatsApp and we&apos;ll quote you
              fast — usually within the hour.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="tel:07700000000"
                className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-lg px-6 py-3 rounded transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now — 07700 000000
              </a>
              <a
                href="#quote-form"
                className="inline-block border-2 border-white hover:bg-white hover:text-[#1a1a1a] text-white font-bold text-lg px-6 py-3 rounded transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Send us a photo and postcode — we&apos;ll quote you fast.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />
      <Services />
      <Pricing />
      <HowItWorks />
      <WhyChooseUs />
      <FAQ />
      <QuoteForm />
      <CTABanner />
    </>
  )
}
