// Pricing: rate is $5 per 500 words (~$0.01/word) across standard translation work.
// Two tiers: the flat per-word rate, and a custom quote for bulk/business work.

import { Check } from "lucide-react";

const tiers = [
  {
    name: "Standard Translation",
    price: "$5",
    unit: "/ 500 words",
    description: "For documents, letters, and certified translation requests.",
    features: [
      "Any language pair (EN-HI/DE/FR)",
      "24–48h turnaround",
      "1 round of revisions",
      "Certified translation option",
      "Delivered as Word/PDF",
    ],
    highlighted: true,
  },
  {
    name: "Business & Bulk",
    price: "Custom",
    unit: "",
    description: "For ongoing volume, websites, and localization projects.",
    features: [
      "Dedicated translator team",
      "Discounted bulk/monthly rate",
      "Website & UI localization",
      "Priority support",
      "Custom turnaround SLA",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="py-24 sm:py-32 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <span className="text-sm font-medium uppercase tracking-wide text-ink-muted">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
            Simple, transparent rates
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            $5 per 500 words for standard translation work — every quote is
            confirmed before work begins, no surprise charges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`reveal rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                tier.highlighted
                  ? "backdrop-blur-xl bg-white/80 border-2 border-accent shadow-[0_20px_60px_rgba(79,70,229,0.15)]"
                  : "border border-black/5 bg-white shadow-sm hover:shadow-xl"
              }`}
            >
              {tier.highlighted && (
                <span className="inline-block text-xs font-medium uppercase tracking-wide text-white bg-accent px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-ink">{tier.name}</h3>
              <p className="mt-2 text-sm text-ink-muted">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-ink">
                  {tier.price}
                </span>
                <span className="text-ink-muted text-sm">{tier.unit}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ink-muted">
                    <Check size={16} className="text-teal shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block text-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  tier.highlighted
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "border border-black/10 text-ink hover:bg-surface-muted"
                }`}
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

