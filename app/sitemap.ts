import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rabbiteksolutions.com";
  return ["", "/about", "/services", "/work", "/work/kaklinx-auto", "/work/plant-power-analytics", "/contact"].map((path) => ({
    url: base + path,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/work/") ? 0.7 : 0.8,
  }));
}
