import type { MetadataRoute } from "next";
import { servicesData } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aarogyaone.com";

  // Base pages
  const routes = ["", "/about", "/services", "/appointments", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Dynamic services pages
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes];
}
