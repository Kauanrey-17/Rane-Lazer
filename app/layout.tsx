import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rane Lazer - Espaço de Lazer para Festas e Eventos",
  description:
    "Seu espaço ideal para momentos inesquecíveis. Piscinas, churrasqueiras, área verde e muito mais para suas festas e eventos em São Paulo.",
  generator: "v0.app",
  keywords:
    "lazer, espaço para festas, aluguel de espaço de lazer, eventos, piscina, churrasqueira, São Paulo, festa de aniversário, casamento, confraternização",
  authors: [{ name: "Rane Lazer" }],
  creator: "Rane Lazer",
  publisher: "Rane Lazer",
  openGraph: {
    title: "Rane Lazer - Espaço de Lazer para Festas e Eventos",
    description: "Seu espaço ideal para momentos inesquecíveis. Piscinas, churrasqueiras, área verde e muito mais.",
    url: "https://ranelazer.com.br",
    siteName: "Rane Lazer",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/beautiful-leisure-area-with-pool--bbq-area--green-.jpg",
        width: 1200,
        height: 630,
        alt: "Rane Lazer - Espaço de Lazer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rane Lazer - Espaço de Lazer para Festas e Eventos",
    description: "Seu espaço ideal para momentos inesquecíveis. Piscinas, churrasqueiras, área verde e muito mais.",
    images: ["/beautiful-leisure-area-with-pool--bbq-area--green-.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
