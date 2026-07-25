// "Why Choose Us" trust section — used in place of testimonials since there
// are no real client reviews yet. Swap this out for a Testimonials section
// once you have a few genuine client quotes to feature (do not fabricate
// reviews in the meantime — that's misleading to visitors).

import { ShieldCheck, Clock3, Languages as LanguagesIcon, BadgeCheck } from "lucide-react";

const points = [
  {
    icon: LanguagesIcon,
    title: "Native-level fluency",
    description: "Every translation is handled by someone fluent in both the language and the subject matter.",
  },
  {
    icon: Clock3,
    title: "Fast, honest turnaround",
    description: "24–48 hours for most documents, with clear timelines confirmed before work begins.",
  },
  {
    icon: ShieldCheck,
    title: "Full confidentiality",
    description: "Your documents are never shared with third parties, no exceptions.",
  },
  {
    icon: BadgeCheck,
    title: "Satisfaction guaranteed",
    description: "Not happy with the first draft? We revise it until it reads right.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" aria-label="Why choose Verbizo" className="py-24 sm:py-32 lg:py-40 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-sm font-medium uppercase tracking-wide text-ink-muted">
            Why Verbizo
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
            New studio, same standards you'd expect from a decade-old agency
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            We're just getting started — which means your project gets full
            attention, not a queue.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point) => (
            <div key={point.title} className="reveal">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-black/5 text-accent mb-5">
                <point.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">{point.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
