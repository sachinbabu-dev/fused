export function localBusinessSchema(overrides: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Weldsmith",
    telephone: "07700000000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    areaServed: {
      "@type": "City",
      name: "London",
    },
    priceRange: "££",
    openingHours: "Mo-Su 07:00-20:00",
    description:
      "Mobile welding service across London. Exhaust, MOT and commercial vehicle welding from £80.",
    ...overrides,
  }
}
