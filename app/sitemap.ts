import { MetadataRoute } from "next";

// TODO: replace with the real production domain.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://verbizo.example.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

