
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tarun-salesforce.vercel.app/",
      lastModified: new Date("2025-03-23"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
   
  ];
}