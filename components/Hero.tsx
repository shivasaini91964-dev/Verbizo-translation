// Hero section: eyebrow label, gradient-accented headline, subheadline, dual CTAs,
// and a floating "translation card" visual. Swap copy/stats freely.

import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40"
      style={{
        background:
          "radial-gradient(circle at 15% 20%, rgba(79,70,229,0.14), transparent 50%), radial-gradient(circle at 85% 10%, rgba(251,113,133,0.14), transparent 50%), radial-gradient(circle at 50% 90%, rgba(20,184,166,0.12), transparent 50%), #FFFFFF",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="inline-block text-sm font-medium uppercase tracking-wide text-accent mb-6">
              Human Translation, Not Just Machine Output
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-ink">
              Say it right, in{" "}
              <span className="bg-gradient-to-r from-accent via-coral to-teal bg-clip-text text-transparent">
                every language
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-muted leading-relaxed max-w-xl">
              Verbizo delivers accurate, culturally fluent translations
              between English, Hindi, German, and French — for businesses,
              legal documents, and personal milestones alike.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-white font-medium transition-all duration-300 hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                Get a Free Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-8 py-3.5 text-ink font-medium transition-all duration-300 hover:bg-surface-muted hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {["4 languages, native-level fluency", "24-48hr turnaround", "100% confidential"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-ink-muted">
                    <CheckCircle2 size={16} className="text-teal shrink-0" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="reveal relative hidden lg:block">
            <div className="relative rounded-4xl backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                    English → Hindi
                  </span>
                  <span className="h-2 w-2 rounded-full bg-teal" />
                </div>
                <p className="text-sm text-ink-muted italic">
                  "We are pleased to confirm your appointment for..."
                </p>
                <div className="h-px bg-black/5" />
                <p className="text-lg font-medium text-ink" lang="hi">
                  "हमें आपकी नियुक्ति की पुष्टि करते हुए खुशी हो रही है..."
                </p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 rounded-3xl backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-5 w-56">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-coral" />
                <span className="text-xs font-medium text-ink-muted">EN → DE</span>
              </div>
              <p className="text-sm font-medium text-ink">
                "Herzlichen Glückwunsch zu Ihrem neuen Zuhause."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

