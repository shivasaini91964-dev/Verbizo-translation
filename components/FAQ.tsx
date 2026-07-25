// FAQ: native <details>/<summary> accordion for a no-JS baseline with
// smooth CSS transitions. Multi-open (each item independent).

const faqs = [
  {
    question: "Which languages do you translate between?",
    answer:
      "We specialize in English to Hindi, English to German, and English to French — and the reverse direction for each pair.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "Most projects are priced per word, based on complexity and language pair. Business and volume projects get a custom quote.",
  },
  {
    question: "How long does a translation take?",
    answer:
      "Standard documents are typically delivered in 24–48 hours. Larger projects like websites or bulk documents get a custom timeline upfront.",
  },
  {
    question: "Do you provide certified translations for visa or legal use?",
    answer:
      "Yes. Our Professional tier includes a certified translation option accepted by embassies, universities, and government offices.",
  },
  {
    question: "Is my document kept confidential?",
    answer:
      "Always. Every document is handled under strict confidentiality, and files are never shared with third parties.",
  },
  {
    question: "Can you handle ongoing or bulk translation work?",
    answer:
      "Yes — our Business tier is built for recurring content, product catalogs, and website localization with dedicated translators.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" aria-label="Frequently asked questions" className="py-24 sm:py-32 lg:py-40 bg-surface">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-sm font-medium uppercase tracking-wide text-ink-muted">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
            Questions, answered
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="reveal group rounded-2xl border border-black/5 bg-surface-muted open:bg-white open:shadow-sm px-6 py-2 transition-colors duration-300"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none py-4 font-medium text-ink focus-visible:ring-2 focus-visible:ring-accent rounded-lg">
                {faq.question}
                <span className="ml-4 shrink-0 text-ink-muted transition-transform duration-300 group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm text-ink-muted leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

