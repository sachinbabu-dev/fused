export interface PricingTier {
  name: string
  price: string
  subtext: string
  popular: boolean
  features: string[]
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Small Repair",
    price: "From £80",
    subtext: "Local London call-out",
    popular: false,
    features: [
      "Exhaust cracks, holes and patch repairs",
      "Bracket and hanger welding",
      "Minor MOT repair items",
      "Includes travel within London",
      "Ideal for quick, lasting fixes",
    ],
  },
  {
    name: "Half Day",
    price: "From £220",
    subtext: "3–4 hours on site",
    popular: true,
    features: [
      "Exhaust pipe replacement and flange repairs",
      "Sill and floorpan repairs for MOT",
      "Commercial van chassis welding",
      "MIG/TIG with generator if required",
      "Priced by scope and access",
    ],
  },
  {
    name: "Full Day / Commercial",
    price: "From £450",
    subtext: "Full day attendance",
    popular: false,
    features: [
      "HGV and trailer welding",
      "Multiple weld points and complex pipework",
      "Fleet and depot visits",
      "Industrial plant and machinery",
      "Quoted from photos and site info",
    ],
  },
]
