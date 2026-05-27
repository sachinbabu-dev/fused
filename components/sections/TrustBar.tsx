import Image from "next/image"

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "1,000+", label: "Jobs Completed" },
  { value: "25+", label: "London Boroughs Covered" },
  { value: "7", label: "Days Available" },
]

export default function TrustBar() {
  return (
    <section className="relative py-14 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/sparks-warm.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/88" />
      {/* Top/bottom orange lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF6B00] leading-none">{stat.value}</p>
              <p className="text-gray-400 text-sm font-medium mt-2 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
