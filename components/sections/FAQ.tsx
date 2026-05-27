import { faqs } from "@/data/faqs"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section id="faq" className="py-14 md:py-20 bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="text-white">
          <Accordion
            multiple={false}
            className="divide-y divide-[#1a1a1a] border border-[#1a1a1a] rounded-xl overflow-hidden"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="px-5 bg-[#111111]">
                <AccordionTrigger className="py-4 text-sm font-semibold text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
