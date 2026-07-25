// Process/"How it works" section: 4-step horizontal flow on desktop,
// stacked vertical flow on mobile.

import { Upload, PenLine, ShieldCheck, Send } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Share your document",
    description: "Upload your file or paste your text through our contact form — any format works.",
  },
  {
    icon: PenLine,
    title: "We translate",
    description: "A native speaker in the target language translates with full context in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Quality review",
    description: "A second pass checks tone, accuracy, and formatting before anything goes out.",
  },
  {
    icon: Send,
    title: "Delivered on time",
    description: "You receive the finished translation in your preferred format, ready to use.",
  },
];

export default function Process() {
  return (
    <section id="process" aria-label="Our process" className="py-24 sm:py-32 lg:py-40 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-sm font-medium uppercase tracking-wide text-ink-muted">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
            From document to delivery in four steps
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="reveal relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white text-sm font-semibold">
                  {i + 1}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white border border-black/5 text-accent">
                  <step.icon size={18} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">{step.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

