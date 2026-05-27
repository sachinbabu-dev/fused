"use client"

import { useState, FormEvent } from "react"

type FormData = {
  name: string
  phone: string
  postcode: string
  vehicle: string
  service: string
  description: string
}

const initialForm: FormData = {
  name: "",
  phone: "",
  postcode: "",
  vehicle: "",
  service: "",
  description: "",
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("success")
      setForm(initialForm)
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full bg-[#111111] border border-[#222222] rounded-lg text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00]/60 transition-colors"

  return (
    <section id="quote-form" className="py-14 md:py-20 bg-[#080808]">
      {/* Top orange line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#FF6B00]/40 to-transparent mb-10 md:mb-20 -mt-14 md:-mt-20" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#FF6B00] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Free Quote
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Get a Free Quote Today
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Tell us what&apos;s wrong, where you are, and send a photo. We&apos;ll come back with a clear
            price — usually within the hour.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-green-950/50 border border-green-800/50 rounded-xl p-10 text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-green-300 font-semibold text-lg">Quote request sent!</p>
            <p className="text-gray-500 text-sm mt-2">
              We&apos;ll review your details and be in touch shortly — usually within the hour during working hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Full Name <span className="text-[#FF6B00]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Phone Number <span className="text-[#FF6B00]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="07700 000000"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Postcode <span className="text-[#FF6B00]">*</span>
                </label>
                <input
                  type="text"
                  name="postcode"
                  value={form.postcode}
                  onChange={handleChange}
                  required
                  placeholder="E8 1AA"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Vehicle Type <span className="text-[#FF6B00]">*</span>
                </label>
                <input
                  type="text"
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                  required
                  placeholder="Ford Transit, BMW 3 Series…"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Service Needed <span className="text-[#FF6B00]">*</span>
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full bg-[#111111] border border-[#222222] rounded-lg text-white px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00]/60 transition-colors"
              >
                <option value="" disabled>
                  Select a service…
                </option>
                <option value="Exhaust Welding">Exhaust Welding</option>
                <option value="MOT / Chassis Repair">MOT / Chassis Repair</option>
                <option value="Commercial / HGV">Commercial / HGV</option>
                <option value="Not Sure">Not Sure</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Describe the Problem <span className="text-[#FF6B00]">*</span>
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us what's wrong — the more detail the better…"
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please call us directly on{" "}
                <a href="tel:07700000000" className="underline">
                  07700 000000
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#FF6B00] hover:bg-orange-600 disabled:opacity-50 text-white font-bold text-base py-4 px-6 rounded-lg transition-colors mt-2"
            >
              {status === "loading" ? "Sending…" : "Send My Quote Request →"}
            </button>
          </form>
        )}

        <p className="text-center text-xs text-gray-600 mt-6">
          Prefer to talk?{" "}
          <a href="tel:07700000000" className="text-[#FF6B00] hover:underline">
            Call us on 07700 000000
          </a>{" "}
          · WhatsApp works great for photos — same number
        </p>
      </div>
    </section>
  )
}
