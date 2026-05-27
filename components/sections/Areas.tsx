import Link from "next/link"
import { boroughs } from "@/data/boroughs"
import { ArrowRight } from "lucide-react"

export default function Areas() {
  const displayed = boroughs.slice(0, 12)

  return (
    <section id="areas" className="py-14 md:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Coverage
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            London Boroughs We Cover
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            We cover all of Greater London. Click your area for local information.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-8">
          {displayed.map((borough) => (
            <Link
              key={borough.slug}
              href={`/areas/${borough.slug}`}
              className="bg-[#111111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm font-medium text-gray-400 hover:border-[#FF6B00]/40 hover:text-white hover:bg-[#141414] transition-all text-center"
            >
              {borough.name}
            </Link>
          ))}
        </div>

        <div className="text-center mb-3">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 text-[#FF6B00] font-semibold text-sm hover:gap-3 transition-all"
          >
            View all 32 boroughs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-center text-xs text-gray-600">
          Don&apos;t see your area? We cover all of London — send your postcode and we&apos;ll confirm.
        </p>
      </div>
    </section>
  )
}
