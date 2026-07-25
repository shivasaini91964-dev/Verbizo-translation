"use client";

// Contact section: form + direct contact info.
// Wired up to Formspree (form ID: xeeypanb) — submissions go to whatever
// email is registered on that Formspree account.

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeeypanb";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!message) newErrors.message = "Please tell us a bit about your document.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" aria-label="Contact us" className="py-24 sm:py-32 lg:py-40 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="reveal">
            <span className="text-sm font-medium uppercase tracking-wide text-ink-muted">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
              Let's talk about your document
            </h2>
            <p className="mt-4 text-lg text-ink-muted leading-relaxed max-w-md">
              Send us your file or a few details, and we'll come back with a
              quote and timeline within a few hours.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-black/5 text-accent">
                  <Mail size={18} />
                </div>
                <a href="mailto:shivasaini91964@gmail.com" className="text-ink hover:text-accent transition-colors">
                  shivasaini91964@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-black/5 text-coral">
                  <Phone size={18} />
                </div>
                <a href="tel:+917060541389" className="text-ink hover:text-coral transition-colors">
                  +91 70605 41389
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-black/5 text-teal-hover">
                  <MapPin size={18} />
                </div>
                <span className="text-ink">Moradabad, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="reveal rounded-3xl backdrop-blur-xl bg-white/80 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1.5 text-xs text-coral-hover">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1.5 text-xs text-coral-hover">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="language-pair" className="block text-sm font-medium text-ink mb-1.5">
                Language pair
              </label>
              <select
                id="language-pair"
                name="language-pair"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                defaultValue="en-hi"
              >
                <option value="en-hi">English ↔ Hindi</option>
                <option value="en-de">English ↔ German</option>
                <option value="en-fr">English ↔ French</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                Tell us about your document
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent resize-none"
                placeholder="Document type, approximate word count, deadline..."
              />
              {errors.message && <p className="mt-1.5 text-xs text-coral-hover">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-white font-medium transition-all duration-300 hover:bg-accent-hover hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
              {status !== "submitting" && <Send size={16} />}
            </button>

            {status === "success" && (
              <p className="text-sm text-teal-hover text-center" role="status">
                Thanks! We'll get back to you within a few hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-coral-hover text-center" role="alert">
                Something went wrong sending your message — please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
      }
