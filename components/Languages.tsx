// Language-pair showcase. This replaces the typical "Portfolio" section since
// a translation business's core "product" is language pairs, not visual work.
// Add more pairs here as the business grows beyond EN-HI/DE/FR.

const pairs = [
  {
    from: "English",
    to: "Hindi",
    sample: "आपका स्वागत है",
    tag: "Most requested",
    color: "bg-accent/10 text-accent",
  },
  {
    from: "English",
    to: "German",
    sample: "Herzlich willkommen",
    tag: "Business & legal",
    color: "bg-coral/10 text-coral",
  },
  {
    from: "English",
    to: "French",
    sample: "Bienvenue",
    tag: "Marketing & lifestyle",
    color: "bg-teal/10 text-teal-hover",
  },
];

export default function Languages() {
  return (
    <section
      id="languages"
      aria-label="Languages we translate"
      className="py-24 sm:py-32 lg:py-40 bg-surface-muted"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-sm font-medium uppercase tracking-wide text-ink-muted">
            Language Pairs
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
            Fluent in the languages that matter to you
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pairs.map((pair) => (
            <div
              key={pair.to}
              className="reveal group rounded-3xl backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span
                className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-6 ${pair.color}`}
              >
                {pair.tag}
              </span>
              <div className="flex items-center gap-3 text-lg font-semibold text-ink mb-3">
                <span>{pair.from}</span>
                <span className="text-ink-muted">→</span>
                <span>{pair.to}</span>
              </div>
              <p className="text-2xl font-medium text-ink" lang={pair.to === "Hindi" ? "hi" : undefined}>
                {pair.sample}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

