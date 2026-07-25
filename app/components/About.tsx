// About section: brand story + stat row. Replace stats/copy with real numbers
// as the business grows — never leave placeholder claims unchanged in production.

const stats = [
  { value: "1,200+", label: "Documents translated" },
  { value: "4", label: "Languages covered" },
  { value: "24-48h", label: "Typical turnaround" },
  { value: "100%", label: "Human-reviewed" },
];

export default function About() {
  return (
    <section id="about" aria-label="About Verbizo" className="py-24 sm:py-32 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-sm font-medium uppercase tracking-wide text-ink-muted">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
              Translation with a human touch
            </h2>
            <div className="mt-6 space-y-4 text-base text-ink-muted leading-relaxed">
              <p>
                Verbizo was built on a simple belief: translation isn't
                just swapping words, it's carrying meaning, tone, and intent
                across a language barrier without losing any of it.
              </p>
              <p>
                Every document that comes through is handled by a translator
                who understands both the language and the context — whether
                that's a legal contract, a wedding invitation, or a product
                page going live in a new market.
              </p>
              <p>
                We keep turnaround fast without cutting corners, and every
                project stays completely confidential from start to finish.
              </p>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-black/5 bg-surface-muted p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-accent to-teal bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

