"use client"
 
import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Star, Quote, ChevronLeft, ChevronRight,
  Users, Heart, Award, Sparkles, ArrowRight, MessageSquarePlus
} from "lucide-react"
 
const ORANGE = "oklch(0.65 0.18 45)"
const BLUE = "oklch(0.55 0.15 220)"
 
// ─── DEPOIMENTOS ──────────────────────────────────────────
const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    event: "Aniversário de 50 anos",
    rating: 5,
    date: "Dezembro 2023",
    text: "Lugar maravilhoso! Comemoramos meus 50 anos e foi perfeito. A estrutura é excelente, piscina limpa, churrasqueiras funcionando perfeitamente. A equipe foi muito atenciosa e nos ajudou em tudo. Recomendo de olhos fechados!",
    category: "Aniversário",
  },
  {
    id: 2,
    name: "João Silva",
    event: "Confraternização da Empresa",
    rating: 5,
    date: "Janeiro 2024",
    text: "Fizemos nossa confraternização de fim de ano aqui e superou todas as expectativas. O espaço é amplo, bem organizado e tem tudo que precisamos. Os funcionários são muito profissionais. Já estamos planejando o próximo evento aqui!",
    category: "Corporativo",
  },
  {
    id: 3,
    name: "Ana Costa",
    event: "Festa de 15 anos",
    rating: 5,
    date: "Novembro 2023",
    text: "A festa da minha filha foi um sonho realizado! O local é lindo, muito bem cuidado e seguro. As meninas adoraram a piscina e o espaço para dançar. Tudo funcionou perfeitamente, desde a decoração até a limpeza. Muito obrigada!",
    category: "Aniversário",
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    event: "Churrasco de Família",
    rating: 5,
    date: "Outubro 2023",
    text: "Reunimos toda a família para um churrasco e foi incrível! As churrasqueiras são excelentes, o espaço é muito confortável e tem área para as crianças brincarem. Preço justo e atendimento nota 10. Voltaremos com certeza!",
    category: "Família",
  },
  {
    id: 5,
    name: "Fernanda Lima",
    event: "Casamento Civil",
    rating: 5,
    date: "Setembro 2023",
    text: "Celebramos nosso casamento civil aqui e foi mágico! O ambiente é muito acolhedor, a área verde é linda para as fotos e a equipe nos ajudou em todos os detalhes. Nossos convidados elogiaram muito o local. Recomendamos!",
    category: "Casamento",
  },
  {
    id: 6,
    name: "Roberto Mendes",
    event: "Aniversário de 10 anos do filho",
    rating: 5,
    date: "Agosto 2023",
    text: "Festa perfeita para crianças! Meu filho e os amiguinhos se divertiram muito na piscina. O local é muito seguro, limpo e organizado. Os pais também aproveitaram bastante. Parabéns pela excelência no atendimento!",
    category: "Infantil",
  },
  {
    id: 7,
    name: "Patrícia Gomes",
    event: "Confraternização Corporativa",
    rating: 5,
    date: "Março 2024",
    text: "Estrutura incrível para eventos corporativos. Nossa equipe adorou o espaço — piscina, churrasco, bar e ainda sistema de som de qualidade. O Alberto e a Nicole cuidaram de tudo com muito profissionalismo.",
    category: "Corporativo",
  },
  {
    id: 8,
    name: "Lucas Ferreira",
    event: "Festa de Formatura",
    rating: 5,
    date: "Junho 2024",
    text: "Melhor lugar para uma formatura! O paredão de som é impressionante, o bar bem abastecido e o espaço comportou todo o nosso grupo com conforto. Atendimento excepcional do começo ao fim.",
    category: "Formatura",
  },
  {
    id: 9,
    name: "Cláudia Ribeiro",
    event: "Festa Junina",
    rating: 5,
    date: "Junho 2023",
    text: "Realizamos nossa festa junina aqui e foi um sucesso enorme! O espaço ao ar livre é perfeito para esse tipo de evento. Toda a estrutura funcionou perfeitamente. Já reservamos para o ano que vem!",
    category: "Festa Temática",
  },
]
 
// ─── FILTROS ──────────────────────────────────────────────
const categories = ["Todos", "Aniversário", "Corporativo", "Família", "Casamento", "Infantil", "Formatura", "Festa Temática"]
 
// ─── STATS ────────────────────────────────────────────────
const stats = [
  { icon: Users,  value: "500+", label: "Eventos Realizados" },
  { icon: Star,   value: "5.0",  label: "Avaliação Média" },
  { icon: Heart,  value: "100%", label: "Clientes Satisfeitos" },
  { icon: Award,  value: "6",    label: "Anos de Experiência" },
]
 
// ─── HELPER ───────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          style={{
            fill: i < rating ? ORANGE : "transparent",
            color: i < rating ? ORANGE : "#d1d5db",
          }}
        />
      ))}
    </div>
  )
}
 
function Initial({ name, accent }: { name: string; accent: string }) {
  return (
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
      style={{ backgroundColor: accent }}
    >
      {name.charAt(0)}
    </div>
  )
}
 
// ─── PÁGINA ───────────────────────────────────────────────
export default function DepoimentosPage() {
  const [featured, setFeatured] = useState(0)
  const [activeCategory, setActiveCategory] = useState("Todos")
 
  const filtered = activeCategory === "Todos"
    ? testimonials
    : testimonials.filter((t) => t.category === activeCategory)
 
  const prev = () => setFeatured((f) => (f === 0 ? testimonials.length - 1 : f - 1))
  const next = () => setFeatured((f) => (f + 1) % testimonials.length)
 
  const current = testimonials[featured]
  const accentColors = [ORANGE, BLUE, ORANGE, BLUE, ORANGE, BLUE, ORANGE, BLUE, ORANGE]
 
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
 
      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden bg-[oklch(0.10_0.04_220)]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.55 0.15 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.15 220) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[oklch(0.55_0.15_220)]/10 rounded-full blur-[100px]" />
        <div className="absolute right-1/4 top-0 w-72 h-72 bg-[oklch(0.65_0.18_45)]/8 rounded-full blur-[80px]" />
 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[oklch(0.55_0.15_220)]/40 bg-[oklch(0.55_0.15_220)]/10 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5" style={{ color: ORANGE }} />
            <span className="text-[oklch(0.85_0.08_220)] text-sm font-medium tracking-widest uppercase">
              Avaliação 5 estrelas · 500+ eventos
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4">
            Quem foi,{" "}
            <span style={{ color: ORANGE }}>adorou</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Histórias reais de clientes que confiaram na Rane Lazer para seus momentos mais especiais.
          </p>
        </div>
      </section>
 
      {/* ── STATS ── */}
      <section className="bg-card border-b border-border">
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
 
      {/* ── DEPOIMENTO DESTAQUE (CAROUSEL) ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: ORANGE }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: ORANGE }}>
                Em destaque
              </span>
              <div className="h-px w-8" style={{ backgroundColor: ORANGE }} />
            </div>
            <h2 className="text-3xl font-black text-foreground">Depoimento do Momento</h2>
          </div>
 
          <div className="max-w-4xl mx-auto relative">
            <div
              className="rounded-3xl border border-border bg-card p-10 md:p-14 relative overflow-hidden"
            >
              {/* Detalhe geométrico */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5"
                style={{ backgroundColor: ORANGE, transform: "translate(40%, -40%)" }}
              />
 
              <Quote className="w-10 h-10 mb-6" style={{ color: ORANGE }} />
 
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 italic">
                "{current.text}"
              </p>
 
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-black"
                    style={{ backgroundColor: accentColors[featured] }}
                  >
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-foreground">{current.name}</div>
                    <div className="text-sm font-medium" style={{ color: ORANGE }}>{current.event}</div>
                    <div className="text-xs text-muted-foreground">{current.date}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Stars rating={current.rating} />
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${BLUE}15`, color: BLUE }}
                  >
                    {current.category}
                  </span>
                </div>
              </div>
            </div>
 
            {/* Controles */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-[oklch(0.65_0.18_45)] hover:text-[oklch(0.65_0.18_45)] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
 
              {/* Dots */}
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setFeatured(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === featured ? 24 : 8,
                      height: 8,
                      backgroundColor: i === featured ? ORANGE : `${ORANGE}30`,
                    }}
                  />
                ))}
              </div>
 
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-[oklch(0.65_0.18_45)] hover:text-[oklch(0.65_0.18_45)] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── GRADE DE TODOS OS DEPOIMENTOS ── */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-foreground mb-2">Todos os Depoimentos</h2>
            <p className="text-muted-foreground">Filtre por tipo de evento</p>
          </div>
 
          {/* Filtros */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: activeCategory === cat ? ORANGE : "transparent",
                  color: activeCategory === cat ? "white" : undefined,
                  border: `1px solid ${activeCategory === cat ? ORANGE : "var(--border)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
 
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {filtered.map((t, i) => {
              const accent = accentColors[t.id % accentColors.length]
              return (
                <div
                  key={t.id}
                  className="bg-background rounded-2xl border border-border p-6 hover:shadow-lg hover:border-opacity-60 transition-all duration-300 flex flex-col gap-4"
                >
                  {/* Estrelas + categoria */}
                  <div className="flex items-center justify-between">
                    <Stars rating={t.rating} />
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${accent}12`, color: accent }}
                    >
                      {t.category}
                    </span>
                  </div>
 
                  {/* Texto */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                    "{t.text}"
                  </p>
 
                  {/* Autor */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <Initial name={t.name} accent={accent} />
                    <div>
                      <div className="font-bold text-foreground text-sm">{t.name}</div>
                      <div className="text-xs font-medium" style={{ color: accent }}>{t.event}</div>
                      <div className="text-xs text-muted-foreground">{t.date}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
 
          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              Nenhum depoimento nessa categoria ainda.
            </div>
          )}
        </div>
      </section>
 
      {/* ── CONVITE PARA DEIXAR DEPOIMENTO ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <div
            className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
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
              <MessageSquarePlus className="w-12 h-12 mx-auto mb-4" style={{ color: ORANGE }} />
              <h2 className="text-3xl font-black text-foreground mb-3">
                Já foi nosso cliente?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Sua experiência é muito importante para nós — e ajuda outras famílias e empresas a conhecerem a Rane Lazer. Compartilhe como foi o seu evento!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="font-bold px-8 rounded-xl text-white"
                  style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}
                >
                  <Link href="/contato?origem=depoimento">
                    Deixar Meu Depoimento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl">
                  <Link href="/galeria">Ver Galeria</Link>
                </Button>
              </div>
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
            Seja o próximo a criar memórias especiais
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Junte-se a centenas de clientes satisfeitos e reserve já o seu espaço para um evento inesquecível.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="font-bold px-10 rounded-xl text-white"
              style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}
            >
              <Link href="/contato">
                Reservar Meu Evento
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
      </section>
 
      <Footer />
    </div>
  )
}