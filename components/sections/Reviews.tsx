import { reviews } from "@/data/reviews"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-yellow-400" : "text-gray-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-14 md:py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Customer Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-300 text-sm">Real jobs, real customers, across London.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[#111111] border border-[#1a1a1a] rounded-xl p-6 flex flex-col"
            >
              <StarRating rating={review.rating} />
              <p className="text-gray-300 leading-relaxed text-sm flex-1 mt-4 mb-5">
                &ldquo;{review.body}&rdquo;
              </p>
              <div className="border-t border-[#1a1a1a] pt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF6B00]/15 flex items-center justify-center shrink-0">
                  <span className="text-[#FF6B00] text-xs font-bold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-gray-300 text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
