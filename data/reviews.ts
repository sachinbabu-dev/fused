export interface Review {
  name: string
  location: string
  body: string
  rating: number
}

export const reviews: Review[] = [
  {
    name: "Marcus T.",
    location: "Hackney",
    rating: 5,
    body: "Exhaust was blowing badly on my van. Fused Welding Services came out the same afternoon, welded it on my driveway and it's been solid ever since. Saved me a fortune compared to the garage quote I'd had.",
  },
  {
    name: "Diane R.",
    location: "Lewisham",
    rating: 5,
    body: "Failed my MOT on a corroded sill. They came to my house, repaired both sills and I went straight back for the retest. Passed no problem. Really professional, clean job.",
  },
  {
    name: "Steve H.",
    location: "Park Royal",
    rating: 5,
    body: "We use Fused Welding Services for our van fleet. They come to our yard, no fuss, get the work done fast. Can't recommend them enough if you need reliable trade welding in London.",
  },
]
