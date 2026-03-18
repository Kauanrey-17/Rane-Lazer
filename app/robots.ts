import { MetadataRoute } from "next"
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/agendar/confirmado"],
      },
    ],
    sitemap: "https://ranelazer.com.br/sitemap.xml",
    host: "https://ranelazer.com.br",
  }
}