import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const serviceCards = [
  {
    title: "Exhaust Welding",
    description:
      "Cracked pipes, broken brackets, leaking silencers and manifold repairs. MIG, TIG and stick welding on-site for cars and vans.",
    href: "/exhaust-welding-london",
    image: "/images/exhaust-weld-closeup.jpg",
    tag: "From £80",
  },
  {
    title: "MOT Welding & Chassis Repairs",
    description:
      "Failing your MOT due to corrosion? Sills, floorpans, chassis rails and subframe mounts repaired on-site wherever your vehicle is.",
    href: "/mot-welding-london",
    image: "/images/mot-chassis-weld.jpg",
    tag: "Most Requested",
  },
  {
    title: "Commercial & HGV Welding",
    description:
      "Heavy-duty welding for vans, trucks, trailers and plant machinery. On-site at your depot, yard or industrial site.",
    href: "/commercial-welding-london",
    image: "/images/commercial-vehicle-weld.jpg",
    tag: "Fleet Welcome",
  },
  {
    title: "Architectural Welding Works",
    description:
      "Staircases, balustrades, railings, gates, canopies and structural steel. Bespoke architectural metalwork welded and fitted on-site.",
    href: "/architectural-welding-london",
    image: "/images/architectural-welding.jpg",
    tag: "Bespoke",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8 md:mb-10">
          <div>
            <p className="text-[#FF6B00] text-xs font-bold tracking-[0.15em] uppercase mb-2">
              What We Fix
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Expert welding repairs —<br className="hidden md:block" />
              at your location
            </h2>
          </div>
          <p className="text-gray-200 max-w-xs text-sm leading-relaxed md:text-right">
            Mobile welding for cars, vans, commercial vehicles and HGVs across all of London.
          </p>
        </div>

        {/* Image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceCards.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative h-[280px] sm:h-[380px] md:h-[460px] rounded-xl overflow-hidden block"
            >
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Dark gradient overlay — deepens on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10 group-hover:via-black/70 transition-all duration-500" />

              {/* Tag pill */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#FF6B00] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {service.tag}
                </span>
              </div>

              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-7 h-0.5 bg-[#FF6B00] mb-3" />
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">{service.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-[#FF6B00] font-semibold text-sm">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
