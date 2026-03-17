import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Waves, ChefHat, Wine, Users, Music, Wifi,
  Car, Shield, Utensils, Camera, Speaker, ArrowRight,
  Check, MapPin, Clock, Sparkles
} from "lucide-react"
 
const ORANGE = "oklch(0.65 0.18 45)"
const BLUE = "oklch(0.55 0.15 220)"
 
// ─── ÁREAS PRINCIPAIS ─────────────────────────────────────
const areas = [
  {
    id: "piscinas",
    tag: "01 — Lazer",
    title: "Área das Piscinas",
    subtitle: "Refrescante para toda a família",
    description:
      "Duas piscinas com profundidades diferentes pensadas para garantir segurança e diversão para todas as idades. Deck molhado, área de descanso e fácil acesso para cadeirantes.",
    capacity: "Até 70 pessoas",
    hours: "08h às 22h",
    features: [
      "Piscina adulto — 1,40m de profundidade",
      "Piscina infantil — 0,60m de profundidade",
      "Deck molhado ao redor",
      "Área de descanso com sombra",
      "Chuveiros e vestiários próximos",
      "Limpeza e tratamento diário",
    ],
    image: "/WhatsApp Image 2026-02-10 at 12.56.07.jpeg",
    imageAlt: "Piscinas da Rane Lazer",
    icon: Waves,
    accentColor: BLUE,
  },
  {
    id: "churrasqueiras",
    tag: "02 — Gastronomia",
    title: "Área de Churrasqueiras",
    subtitle: "Para o churrasco perfeito",
    description:
      "Estrutura coberta com churrasqueira profissional de grande porte, bancadas de apoio completas e toda a infraestrutura necessária para preparar uma refeição inesquecível.",
    capacity: "Até 70 pessoas",
    hours: "08h às 22h",
    features: [
      "Churrasqueira profissional de grande porte",
      "Bancadas de apoio em granito",
      "Pia com água corrente",
      "2 geladeiras disponíveis",
      "Área totalmente coberta",
      "Iluminação para eventos noturnos",
    ],
    image: "/WhatsApp Image 2026-02-10 at 12.56.17.jpeg",
    imageAlt: "Churrasqueiras cobertas da Rane Lazer",
    icon: ChefHat,
    accentColor: ORANGE,
  },
  {
    id: "salao",
    tag: "03 — Eventos",
    title: "Salão Principal",
    subtitle: "Palco para grandes momentos",
    description:
      "Salão amplo e versátil com capacidade para até 100 pessoas, equipado com sistema de som, iluminação especial e palco — ideal tanto para festas particulares quanto para eventos corporativos.",
    capacity: "Até 100 pessoas",
    hours: "08h às 22h",
    features: [
      "Capacidade para até 100 pessoas",
      "Palco estruturado para apresentações",
      "Sistema de iluminação especial",
      "14 conjuntos de mesas e cadeiras",
      "Piso nivelado e amplo",
      "Banheiros privativos próximos",
    ],
    image: "/WhatsApp Image 2026-02-10 at 20.53.06.jpeg",
    imageAlt: "Salão principal da Rane Lazer",
    icon: Users,
    accentColor: BLUE,
  },
  {
    id: "bar",
    tag: "04 — Bar",
    title: "Bar Completo",
    subtitle: "Bebidas geladas e porções",
    description:
      "Bar equipado e abastecido com cervejas nacionais e importadas, drinks, destilados premium, energéticos, refrigerantes e porções quentes — tudo para animar qualquer evento.",
    capacity: "Atende todo o espaço",
    hours: "08h às 22h",
    features: [
      "Cervejas nacionais e importadas",
      "Drinks e coquetéis",
      "Destilados premium (Buchanan's, Jack, Old Parr)",
      "Porções: frango, peixe, batata, calabresa, contrafilé",
      "Energéticos e não alcoólicos",
      "Opções para a criançada",
    ],
    image: "/WhatsApp Image 2026-02-10 at 20.56.18.jpeg",
    imageAlt: "Bar da Rane Lazer",
    icon: Wine,
    accentColor: ORANGE,
  },
  {
    id: "palco-som",
    tag: "05 — Entretenimento",
    title: "Palco & Sistema de Som",
    subtitle: "Estrutura para shows e apresentações",
    description:
      "Palco profissional com sistema de som Paredão de alta potência — para quem quer uma festa com muito volume e energia. Ideal para shows ao vivo, DJs e apresentações culturais.",
    capacity: "Toda a área",
    hours: "08h às 22h",
    features: [
      "Palco estruturado e nivelado",
      "Sistema de som Paredão profissional",
      "Alto-falantes distribuídos no espaço",
      "Entrada para microfone e instrumentos",
      "Iluminação de palco disponível",
      "Suporte técnico no evento",
    ],
    image: "/WhatsApp Image 2026-02-10 at 20.59.50.jpeg",
    imageAlt: "Palco e sistema de som da Rane Lazer",
    icon: Speaker,
    accentColor: BLUE,
  },
]
 
// ─── COMODIDADES ──────────────────────────────────────────
const amenities = [
  { icon: Car,      title: "Estacionamento",    desc: "Vagas na rua em volta do espaço" },
  { icon: Wifi,     title: "Wi-Fi Gratuito",    desc: "Internet de alta velocidade" },
  { icon: Music,    title: "Sistema de Som",    desc: "Paredão e caixinha disponíveis" },
  { icon: Utensils, title: "Cozinha Equipada",  desc: "Geladeira, fogão e utensílios" },
  { icon: Shield,   title: "Segurança 24h",     desc: "Monitoramento e câmeras" },
  { icon: Camera,   title: "Área para Fotos",   desc: "Cenários naturais incríveis" },
]
 
// ─── STATS ────────────────────────────────────────────────
const stats = [
  { value: "300m²",  label: "Área total do espaço" },
  { value: "70",     label: "Pessoas por evento" },
  { value: "14",     label: "Conjuntos mesa+cadeira" },
  { value: "500+",   label: "Eventos realizados" },
]
 
// ─── PÁGINA ───────────────────────────────────────────────
export default function EstruturaPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
 
      {/* ── HERO ── */}
      <section className="relative py-28 overflow-hidden bg-[oklch(0.10_0.04_220)]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.55 0.15 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.15 220) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[oklch(0.55_0.15_220)]/10 rounded-full blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-[oklch(0.65_0.18_45)]/8 rounded-full blur-[80px]" />
 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[oklch(0.55_0.15_220)]/40 bg-[oklch(0.55_0.15_220)]/10 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[oklch(0.65_0.18_45)]" />
              <span className="text-[oklch(0.85_0.08_220)] text-sm font-medium tracking-widest uppercase">
                Tour completo pelo espaço
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4">
              Estrutura pensada para{" "}
              <span style={{ color: ORANGE }}>cada detalhe</span>{" "}
              do seu evento
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-8">
              5 áreas distintas, 300m² de espaço e tudo que você precisa para uma festa inesquecível — de reuniões íntimas a grandes eventos corporativos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="font-bold px-8 rounded-xl text-white"
                style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}
              >
                <Link href="/contato">
                  Solicitar Visita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent rounded-xl"
              >
                <Link href="/precos">Ver Pacotes e Preços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── STATS ── */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="px-8 py-8 text-center">
                <div className="text-3xl font-black mb-1" style={{ color: ORANGE }}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── TOUR DAS ÁREAS ── */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            {areas.map((area, index) => {
              const isEven = index % 2 === 0
              const Icon = area.icon
              return (
                <div
                  key={area.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow duration-500 my-8"
                >
                  {/* Imagem */}
                  <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <img
                      src={area.image}
                      alt={area.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Overlay com tag */}
                    <div className="absolute top-5 left-5">
                      <span
                        className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
                        style={{ backgroundColor: area.accentColor }}
                      >
                        {area.tag}
                      </span>
                    </div>
                    {/* Gradiente inferior */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
 
                  {/* Conteúdo */}
                  <div className={`p-10 lg:p-14 flex flex-col justify-center bg-card ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    {/* Ícone */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${area.accentColor}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: area.accentColor }} />
                    </div>
 
                    <h2 className="text-3xl font-black text-foreground mb-1">{area.title}</h2>
                    <p className="text-muted-foreground font-medium mb-4">{area.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-7">
                      {area.description}
                    </p>
 
                    {/* Features */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {area.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                          <Check
                            className="w-4 h-4 mt-0.5 shrink-0"
                            style={{ color: area.accentColor }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
 
                    {/* Info linha */}
                    <div className="flex items-center gap-6 pt-5 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {area.capacity}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {area.hours}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
 
      {/* ── COMODIDADES ── */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: ORANGE }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: ORANGE }}>
                Incluso em todos os pacotes
              </span>
              <div className="h-px w-8" style={{ backgroundColor: ORANGE }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground">
              Comodidades do espaço
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
              Tudo que você precisa para um evento completo, sem precisar trazer nada de fora
            </p>
          </div>
 
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {amenities.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-background rounded-2xl p-5 border border-border hover:border-[oklch(0.55_0.15_220)]/50 hover:shadow-md transition-all duration-300 text-center cursor-default"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${BLUE}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: BLUE }} />
                </div>
                <div className="text-xs font-bold text-foreground mb-1">{title}</div>
                <div className="text-xs text-muted-foreground leading-snug">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── CAPACIDADE TOTAL ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div
            className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
            style={{ backgroundColor: `${BLUE}08`, border: `1px solid ${BLUE}20` }}
          >
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-foreground mb-2">Capacidade Total do Espaço</h2>
              <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
                Nosso espaço é adaptável para eventos de diferentes portes — de reuniões íntimas a grandes celebrações
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {[
                  { value: "70", label: "Pessoas por evento", sub: "Aumento mediante negociação" },
                  { value: "14", label: "Conjuntos de mesa+cadeira", sub: "Inclusos em todos os pacotes" },
                  { value: "300m²", label: "Área total", sub: "5 ambientes distintos" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-4xl font-black mb-1" style={{ color: ORANGE }}>{item.value}</div>
                    <div className="font-semibold text-foreground text-sm mb-0.5">{item.label}</div>
                    <div className="text-muted-foreground text-xs">{item.sub}</div>
                  </div>
                ))}
              </div>
              <Button
                asChild
                size="lg"
                className="font-bold px-10 rounded-xl text-white"
                style={{ backgroundColor: ORANGE }}
              >
                <Link href="/contato">
                  Agendar Visita ao Espaço
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-[oklch(0.10_0.04_220)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.55 0.15 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.15 220) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black text-white mb-3">
            Pronto para conhecer pessoalmente?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Agende uma visita gratuita, conheça o espaço e tire todas as suas dúvidas antes de reservar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="font-bold px-10 rounded-xl text-white"
              style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}
            >
              <Link href="/contato">
                Agendar Visita Gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent rounded-xl"
            >
              <Link href="/galeria">Ver Galeria de Fotos</Link>
            </Button>
          </div>
        </div>
      </section>
 
      <Footer />
    </div>
  )
}