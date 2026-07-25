import { MetadataRoute } from "next";

// TODO: replace with the real production domain.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://verbizo.example.com/sitemap.xml",
  };
}

