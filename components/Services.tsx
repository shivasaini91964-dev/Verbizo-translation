here// Services grid: 4 core offerings with icon, title, description.
// Swap icons/copy to match the exact services you offer.

import { FileText, Scale, Globe2, MessagesSquare } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Document Translation",
    description:
      "Resumes, letters, academic records, and personal documents translated with care and precision.",
    color: "from-accent to-accent-hover",
  },
  {
    icon: Scale,
    title: "Certified & Legal Translation",
    description:
      "Contracts, affidavits, and visa paperwork translated to meet embassy and institutional standards.",
    color: "from-coral to-coral-hover",
  },
  {
    icon: Globe2,
    title: "Business & Website Localization",
    description:
      "Marketing copy, product listings, and full websites adapted to feel native in every market.",
    color: "from-teal to-teal-hover",
  },
  {
    icon: MessagesSquare,
    title: "Interpretation Support",
    description:
      "Live written interpretation for calls, meetings, and correspondence when timing matters.",
    color: "from-accent to-teal",
  },
];

export default function Services() {
  return (
    <section id="services" aria-label="Services" className="py-24 sm:py-32 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-sm font-medium uppercase tracking-wide text-ink-muted">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
            Translation services built around{" "}
            <span className="bg-gradient-to-r from-accent to-teal bg-clip-text text-transparent">
              your context
            </span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            Every project is handled by a human translator fluent in both the
            language and the subject matter — never a raw machine pass.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="reveal group rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 transition-transform duration-300 group-hover:scale-110`}
              >
                <service.icon size={22} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">{service.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
