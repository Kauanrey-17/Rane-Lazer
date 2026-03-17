import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Star } from "lucide-react"
 
const ORANGE = "oklch(0.65 0.18 45)"
const BLUE = "oklch(0.55 0.15 220)"
 
const navLinks = [
  { label: "Home",           href: "/" },
  { label: "Sobre Nós",      href: "/sobre" },
  { label: "Estrutura",      href: "/estrutura" },
  { label: "Bar & Cardápio", href: "/bar" },
  { label: "Preços",         href: "/precos" },
  { label: "Galeria",        href: "/galeria" },
  { label: "Eventos",        href: "/eventos" },
  { label: "Depoimentos",    href: "/depoimentos" },
  { label: "Agenda",         href: "/agendar" },
  { label: "Contato",        href: "/contato" },
]
 
const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@rane_lazer",
    href: "https://www.instagram.com/rane_lazer",
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "Rane Lazer Eventos",
    href: "https://www.facebook.com/ranelazereventos",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    handle: "(11) 98777-2482",
    href: "https://wa.me/5511987772482?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Rane%20Lazer.",
  },
]
 
export function Footer() {
  return (
    <footer className="bg-[oklch(0.08_0.03_220)] text-white border-t border-white/10">
 
      {/* ── CTA TOPO ── */}
      <div
        className="border-b border-white/10"
        style={{
          background: `linear-gradient(135deg, ${ORANGE}15, ${BLUE}15)`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-white mb-1">
                Pronto para reservar seu evento?
              </h3>
              <p className="text-white/60 text-sm">
                Resposta rápida por e-mail, WhatsApp e redes sociais.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: ORANGE }}
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/5511987772482?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Rane%20Lazer."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
 
      {/* ── CORPO PRINCIPAL ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
 
          {/* ── COLUNA 1 — Logo + Descrição ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/Gemini_Generated_Image_45h85n45h85n45h8 (1).png"
                alt="Rane Lazer"
                width={160}
                height={60}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Espaço de lazer completo para festas particulares e eventos corporativos em Jardim Jaraguá, São Paulo. Piscinas, churrasqueiras, bar e muito mais.
            </p>
 
            {/* Avaliação */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: ORANGE }} />
                ))}
              </div>
              <span className="text-white/60 text-xs">5.0 · 500+ eventos</span>
            </div>
 
            {/* Redes sociais */}
            <div className="flex gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/15 hover:border-white/40 hover:bg-white/10 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4 text-white/70" />
                  </a>
                )
              })}
            </div>
          </div>
 
          {/* ── COLUNA 2 — Navegação ── */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: ORANGE }}
            >
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      style={{ color: ORANGE }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* ── COLUNA 3 — Contato ── */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: ORANGE }}
            >
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5511987772482"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-white/40 group-hover:text-white/80 transition-colors" />
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">WhatsApp</div>
                    <div className="text-sm text-white/70 group-hover:text-white transition-colors">
                      (11) 98777-2482
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ranelazer@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-white/40 group-hover:text-white/80 transition-colors" />
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">E-mail</div>
                    <div className="text-sm text-white/70 group-hover:text-white transition-colors">
                      ranelazer@gmail.com
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Rua+Valdemar+Pereira+Da+Silva+226+Jardim+Jaragua+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/40 group-hover:text-white/80 transition-colors" />
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Endereço</div>
                    <div className="text-sm text-white/70 group-hover:text-white transition-colors leading-snug">
                      Rua Valdemar Pereira Da Silva, 226<br />
                      Jardim Jaraguá · SP · 05267-180
                    </div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-white/40" />
                <div>
                  <div className="text-xs text-white/40 mb-0.5">Horário</div>
                  <div className="text-sm text-white/70">Segunda a Domingo · 08h às 22h</div>
                </div>
              </li>
            </ul>
          </div>
 
          {/* ── COLUNA 4 — Pacotes rápidos ── */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: ORANGE }}
            >
              Nossos Pacotes
            </h4>
            <div className="space-y-3">
              {[
                { name: "Pacote Básico",    price: "R$ 800",   period: "6h · até 30 pessoas" },
                { name: "Pacote Completo",  price: "R$ 1.200", period: "8h · até 50 pessoas", popular: true },
                { name: "Pacote Premium",   price: "R$ 1.800", period: "10h · até 70 pessoas" },
              ].map((pkg) => (
                <Link
                  key={pkg.name}
                  href="/precos"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-200 group"
                >
                  <div>
                    <div className="text-sm font-semibold text-white/80 group-hover:text-white flex items-center gap-2">
                      {pkg.name}
                      {pkg.popular && (
                        <span
                          className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
                          style={{ backgroundColor: `${ORANGE}25`, color: ORANGE }}
                        >
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-white/40">{pkg.period}</div>
                  </div>
                  <div className="text-sm font-black" style={{ color: ORANGE }}>
                    {pkg.price}
                  </div>
                </Link>
              ))}
              <Link
                href="/precos"
                className="flex items-center gap-1.5 text-xs font-semibold mt-2 transition-opacity hover:opacity-80"
                style={{ color: ORANGE }}
              >
                Ver todos os pacotes <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
 
      {/* ── RODAPÉ INFERIOR ── */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">
            <p>© {new Date().getFullYear()} Rane Lazer · Todos os direitos reservados</p>
            <p>
              Desenvolvido por{" "}
              <span className="font-semibold" style={{ color: ORANGE }}>
                Kauan Rey
              </span>
            </p>
          </div>
        </div>
      </div>
 
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Rane Lazer",
            description: "Espaço de lazer para festas e eventos com piscinas, churrasqueiras, bar e área verde",
            url: "https://ranelazer.com.br",
            telephone: "+5511987772482",
            email: "ranelazer@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Valdemar Pereira Da Silva, 226",
              addressLocality: "Jardim Jaraguá",
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
            sameAs: [
              "https://www.instagram.com/rane_lazer",
              "https://www.facebook.com/ranelazereventos",
            ],
          }),
        }}
      />
    </footer>
  )
}