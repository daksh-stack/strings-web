import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["/", "/services", "/work", "/process", "/about", "/insights", "/contact", "/privacy"];
  return [
    ...staticPaths.map((path) => ({ url: `${site.url}${path}`, lastModified: now })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now })),
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}`, lastModified: now })),
    ...insights.map((i) => ({ url: `${site.url}/insights/${i.slug}`, lastModified: new Date(`${i.date}T00:00:00Z`) })),
  ];
}
