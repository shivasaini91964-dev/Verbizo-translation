import type { Metadata } from "next";
import "./globals.css";

// TODO: swap https://verbizo.example.com for your real domain once you have one,
// and update every occurrence below (openGraph.url, metadataBase, JSON-LD).
export const metadata: Metadata = {
  title: "Verbizo Translations — English to Hindi, German & French",
  description:
    "Professional English-Hindi, English-German, and English-French translation services. Fast, accurate, human-reviewed translations for business, legal, and personal documents.",
  keywords: [
    "translation services",
    "English to Hindi translation",
    "English to German translation",
    "English to French translation",
    "certified translator",
    "document translation",
    "professional translation agency",
  ],
  openGraph: {
    title: "Verbizo Translations — English to Hindi, German & French",
    description:
      "Professional, human-reviewed translations across Hindi, German, and French. Fast turnaround, confidential handling, native-level accuracy.",
    url: "https://verbizo.example.com",
    siteName: "Verbizo Translations",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verbizo Translations — English to Hindi, German & French",
    description:
      "Professional, human-reviewed translations across Hindi, German, and French.",
  },
  metadataBase: new URL("https://verbizo.example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Organization structured data for SEO — update url/sameAs once live */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Verbizo Translations",
              description:
                "Professional English-Hindi, English-German, and English-French translation services.",
              url: "https://verbizo.example.com",
              areaServed: "Worldwide",
              knowsLanguage: ["en", "hi", "de", "fr"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

