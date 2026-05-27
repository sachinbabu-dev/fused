import type { Metadata } from "next"
import Link from "next/link"
import { boroughs } from "@/data/boroughs"
import QuoteForm from "@/components/sections/QuoteForm"
import CTABanner from "@/components/sections/CTABanner"

export const metadata: Metadata = {
  title: "Mobile Welding London — All Areas We Cover",
  description:
    "Fused Welding Services covers all 32 London boroughs. Find your area for local mobile welding information — exhaust, MOT and commercial vehicle repairs from £80.",
}

const grouped = boroughs.reduce<Record<string, typeof boroughs>>((acc, borough) => {
  const area = borough.area
  if (!acc[area]) acc[area] = []
  acc[area].push(borough)
  return acc
}, {})

export default function AreasPage() {
  return (
    <>
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            London Areas We Cover
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Fused Welding Services covers all 32 London boroughs. Click your area for local welding information,
            pricing and to request a quote.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {Object.entries(grouped)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([area, areaBooughs]) => (
                <div key={area}>
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-4 pb-2 border-b border-[#e5e5e5]">
                    {area}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {areaBooughs.map((borough) => (
                      <Link
                        key={borough.slug}
                        href={`/areas/${borough.slug}`}
                        className="bg-[#f8f8f8] border border-[#e5e5e5] rounded-lg px-4 py-3 text-sm font-medium text-[#333333] hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors text-center"
                      >
                        {borough.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-12 bg-[#f8f8f8] rounded-lg p-6 text-center">
            <p className="text-[#666666] text-sm">
              Don&apos;t see your exact area listed? We cover all of Greater London and some surrounding
              areas — send your postcode to{" "}
              <a href="tel:07700000000" className="text-[#FF6B00] font-semibold hover:underline">
                07700 000000
              </a>{" "}
              and we&apos;ll confirm availability.
            </p>
          </div>
        </div>
      </section>

      <QuoteForm />
      <CTABanner />
    </>
  )
}
