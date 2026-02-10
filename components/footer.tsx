import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/logo-rane-lazer.png"
                  alt="Rane Lazer - Momentos de Alegria e Celebração"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </Link>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Seu espaço ideal para momentos inesquecíveis. Oferecemos a melhor estrutura de lazer para suas festas e
              eventos, com piscinas, churrasqueiras e muito mais.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 98777-2482</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>ranelazer@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  Rua Valdemar Pereira Da Silva, 226
                  <br />
                  Jardim Jaragu&aacute; - SP, CEP 05267-180
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <Link href="/sobre" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
              <Link href="/estrutura" className="block text-muted-foreground hover:text-primary transition-colors">
                Nossa Estrutura
              </Link>
              <Link href="/precos" className="block text-muted-foreground hover:text-primary transition-colors">
                Preços
              </Link>
              <Link href="/contato" className="block text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Rane Lazer. Todos os direitos reservados. | Desenvolvido por Kauanrey</p>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Rane Lazer",
                description: "Espaço de lazer para festas e eventos com piscinas, churrasqueiras e área verde",
                url: "https://ranelazer.com.br",
                telephone: "+5511987772482",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Rua Valdemar Pereira Da Silva, 226",
                  addressLocality: "Jardim Jaragu\u00e1",
                  addressRegion: "SP",
                  postalCode: "05267-180",
                  addressCountry: "BR",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: -23.4529,
                  longitude: -46.7578,
                },
                openingHours: "Mo-Su 08:00-22:00",
                priceRange: "$$",
                image: "/beautiful-leisure-area-with-pool--bbq-area--green-.jpg",
              }),
            }}
          />
        </div>
      </div>
    </footer>
  )
}
