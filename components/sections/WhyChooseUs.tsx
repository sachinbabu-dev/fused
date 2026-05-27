import { Truck, BadgeCheck, Clock, ShieldCheck, Wrench, MapPin } from "lucide-react"

const reasons = [
  {
    icon: Truck,
    title: "Fully equipped van",
    description:
      "Everything we need travels with us — welding equipment, consumables, generator if required. One visit, job done.",
  },
  {
    icon: BadgeCheck,
    title: "Honest, upfront pricing",
    description:
      "We quote before we travel. You'll know the price before we turn up — no surprises when the invoice arrives.",
  },
  {
    icon: Clock,
    title: "Same-day slots available",
    description:
      "Where our schedule allows, we can attend the same day. Call us with your postcode and we'll tell you honestly what's possible.",
  },
  {
    icon: ShieldCheck,
    title: "Fully insured",
    description:
      "Public liability insurance in place for every job. You're covered, we're covered, and the work is done properly.",
  },
  {
    icon: Wrench,
    title: "All vehicles, all metals",
    description:
      "Cars, vans, HGVs, trailers, plant machinery. Mild steel, stainless steel, aluminium. If it needs welding, we can handle it.",
  },
  {
    icon: MapPin,
    title: "All of London covered",
    description:
      "We cover all London boroughs and surrounding areas. Send your postcode and we'll confirm availability straight away.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-14 md:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#FF6B00] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Why Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Why London Chooses Fused Welding Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="bg-[#111111] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#FF6B00]/25 transition-colors group"
              >
                <div className="w-10 h-10 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FF6B00]/15 transition-colors">
                  <Icon className="w-4.5 h-4.5 text-[#FF6B00]" strokeWidth={1.75} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
