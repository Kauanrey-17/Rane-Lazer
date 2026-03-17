"use client"
 
import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Music, Calendar, Clock, MapPin, Users, ArrowRight,
  Sparkles, Mic2, Drum, PartyPopper, ChevronRight,
  Instagram, MessageCircle, Star
} from "lucide-react"
 
const ORANGE = "oklch(0.65 0.18 45)"
const BLUE = "oklch(0.55 0.15 220)"
 
// ─── TIPOS ────────────────────────────────────────────────
type EventStatus = "em-breve" | "hoje" | "esgotado" | "aberto"
 
type Evento = {
  id: number
  title: string
  artist?: string
  type: string
  typeIcon: React.ElementType
  date: string
  dateISO: string
  time: string
  description: string
  image: string
  status: EventStatus
  highlight?: boolean
  category: string
}
 
// ─── EVENTOS DE EXEMPLO ───────────────────────────────────
// ✏️ Edite esta lista para adicionar/remover eventos reais
const eventos: Evento[] = [
  {
    id: 1,
    title: "Noite de Pagode",
    artist: "Grupo Raiz do Samba",
    type: "Pagode & Samba",
    typeIcon: Music,
    date: "Sábado, 29 de Março de 2026",
    dateISO: "2026-03-29",
    time: "19h às 23h",
    description:
      "Uma noite especial de pagode raiz com o melhor do samba. Entrada franca, bar completo e muita animação para toda a família. Venha com seus amigos e celebre o fim de semana na Rane Lazer!",
    image: "/WhatsApp%20Image%202026-02-10%20at%2020.59.50.jpeg",
    status: "em-breve",
    highlight: true,
    category: "pagode",
  },
  {
    id: 2,
    title: "Show ao Vivo",
    artist: "Banda Eletrizante",
    type: "Show ao Vivo",
    typeIcon: Mic2,
    date: "Sábado, 12 de Abril de 2026",
    dateISO: "2026-04-12",
    time: "20h às 00h",
    description:
      "Show completo com banda ao vivo tocando os maiores hits do pagode, samba e axé. Espaço aberto ao público, com bar completo e área de dança. Não perca!",
    image: "/WhatsApp%20Image%202026-02-10%20at%2020.53.06.jpeg",
    status: "em-breve",
    highlight: false,
    category: "show",
  },
  {
    id: 3,
    title: "Festa Junina",
    artist: "Quadrilha & Forró ao Vivo",
    type: "Festa Comemorativa",
    typeIcon: PartyPopper,
    date: "Sábado, 14 de Junho de 2026",
    dateISO: "2026-06-14",
    time: "16h às 23h",
    description:
      "A maior festa junina da Rane Lazer! Forró ao vivo, quadrilha, comidas típicas, bar completo e muita animação para crianças e adultos. Venha fantasiado!",
    image: "/WhatsApp%20Image%202026-02-10%20at%2012.56.07.jpeg",
    status: "em-breve",
    highlight: false,
    category: "comemorativo",
  },
  {
    id: 4,
    title: "Noite de Samba",
    artist: "Roda de Samba Especial",
    type: "Pagode & Samba",
    typeIcon: Drum,
    date: "Sábado, 5 de Julho de 2026",
    dateISO: "2026-07-05",
    time: "18h às 22h",
    description:
      "Roda de samba no estilo mais autêntico, com músicos locais e muito talento. Entrada gratuita, venha curtir com a família e os amigos no melhor espaço de lazer de Jaraguá.",
    image: "/WhatsApp%20Image%202026-02-10%20at%2020.59.49.jpeg",
    status: "em-breve",
    highlight: false,
    category: "pagode",
  },
  {
    id: 5,
    title: "Réveillon Rane Lazer",
    artist: "Show + DJ",
    type: "Festa Comemorativa",
    typeIcon: PartyPopper,
    date: "Quarta-feira, 31 de Dezembro de 2026",
    dateISO: "2026-12-31",
    time: "22h até 04h",
    description:
      "Réveillon especial na Rane Lazer! Show ao vivo, DJ, piscina aberta, bar completo e queima de fogos à meia-noite. O melhor lugar para virar o ano em São Paulo!",
    image: "/WhatsApp%20Image%202026-02-10%20at%2012.56.08.jpeg",
    status: "em-breve",
    highlight: true,
    category: "comemorativo",
  },
]
 
// ─── STATUS CONFIG ────────────────────────────────────────
const statusConfig: Record<EventStatus, { label: string; bg: string; color: string; dot: string }> = {
  "hoje":     { label: "Hoje!",     bg: "#16a34a20", color: "#16a34a", dot: "#16a34a" },
  "em-breve": { label: "Em breve",  bg: `${BLUE}20`, color: BLUE,      dot: BLUE      },
  "aberto":   { label: "Aberto",    bg: `${ORANGE}20`, color: ORANGE,  dot: ORANGE    },
  "esgotado": { label: "Esgotado",  bg: "#dc262620", color: "#dc2626", dot: "#dc2626" },
}
 
// ─── FILTROS ──────────────────────────────────────────────
const filtros = [
  { id: "todos",       label: "Todos os eventos" },
  { id: "pagode",      label: "Pagode & Samba" },
  { id: "show",        label: "Shows ao Vivo" },
  { id: "comemorativo",label: "Festas Comemorativas" },
]
 
// ─── CARD DE EVENTO ───────────────────────────────────────
function EventCard({ evento, destaque }: { evento: Evento; destaque?: boolean }) {
  const status = statusConfig[evento.status]
  const Icon = evento.typeIcon
 
  if (destaque) {
    return (
      <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl group">
        {/* Imagem de fundo */}
        <div className="relative h-[420px] md:h-[500px]">
          <img
            src={evento.image}
            alt={evento.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>
 
        {/* Conteúdo */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ backgroundColor: `${ORANGE}CC`, color: "white" }}
            >
              <Icon className="w-3.5 h-3.5" />
              {evento.type}
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ backgroundColor: status.bg, color: status.color, border: `1px solid ${status.color}40` }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: status.dot }}
              />
              {status.label}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 text-white">
              <Users className="w-3 h-3" /> Entrada Franca
            </span>
          </div>
 
          <h2 className="text-4xl md:text-5xl font-black text-white mb-1">{evento.title}</h2>
          {evento.artist && (
            <p className="text-white/70 text-lg font-medium mb-4">{evento.artist}</p>
          )}
 
          <div className="flex flex-wrap gap-4 mb-5 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" style={{ color: ORANGE }} />
              {evento.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" style={{ color: ORANGE }} />
              {evento.time}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" style={{ color: ORANGE }} />
              Jardim Jaraguá · SP
            </span>
          </div>
 
          <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-2xl">
            {evento.description}
          </p>
 
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/5511987772482?text=Ol%C3%A1!%20Vi%20o%20evento%20%22${encodeURIComponent(evento.title)}%22%20no%20site%20e%20quero%20saber%20mais!`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="font-bold rounded-xl text-white gap-2"
                style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}
              >
                <MessageCircle className="w-4 h-4" />
                Confirmar Presença
              </Button>
            </a>
            <Button
              asChild size="lg" variant="outline"
              className="border-white/25 text-white hover:bg-white/10 bg-transparent rounded-xl"
            >
              <Link href="/contato">Mais informações</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }
 
  // Card normal
  return (
    <div className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:border-[oklch(0.65_0.18_45)]/40 transition-all duration-300">
      {/* Imagem */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={evento.image}
          alt={evento.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
 
        {/* Badges topo */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full text-white"
            style={{ backgroundColor: `${ORANGE}CC` }}
          >
            <Icon className="w-3 h-3" />
            {evento.type}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: status.bg,
              color: status.color,
              border: `1px solid ${status.color}40`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: status.dot }} />
            {status.label}
          </span>
        </div>
 
        {/* Entrada franca */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
            <Users className="w-3 h-3" /> Entrada Franca
          </span>
        </div>
      </div>
 
      {/* Conteúdo */}
      <div className="p-6">
        <h3 className="text-xl font-black text-foreground mb-0.5">{evento.title}</h3>
        {evento.artist && (
          <p className="text-sm font-semibold mb-3" style={{ color: ORANGE }}>{evento.artist}</p>
        )}
 
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-3.5 h-3.5 shrink-0" style={{ color: BLUE }} />
            {evento.date}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-3.5 h-3.5 shrink-0" style={{ color: BLUE }} />
            {evento.time}
          </div>
        </div>
 
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
          {evento.description}
        </p>
 
        <a
          href={`https://wa.me/5511987772482?text=Ol%C3%A1!%20Vi%20o%20evento%20%22${encodeURIComponent(evento.title)}%22%20no%20site%20e%20quero%20saber%20mais!`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full px-4 py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: ORANGE }}
        >
          Confirmar Presença
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
 
// ─── PÁGINA ───────────────────────────────────────────────
export default function EventosPage() {
  const [filtroAtivo, setFiltroAtivo] = useState("todos")
 
  const eventosFiltrados = filtroAtivo === "todos"
    ? eventos
    : eventos.filter((e) => e.category === filtroAtivo)
 
  const destaque = eventosFiltrados.find((e) => e.highlight)
  const restantes = eventosFiltrados.filter((e) => !e.highlight || filtroAtivo !== "todos")
 
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
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[oklch(0.55_0.15_220)]/10 rounded-full blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-[oklch(0.65_0.18_45)]/8 rounded-full blur-[80px]" />
 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[oklch(0.55_0.15_220)]/40 bg-[oklch(0.55_0.15_220)]/10 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5" style={{ color: ORANGE }} />
            <span className="text-[oklch(0.85_0.08_220)] text-sm font-medium tracking-widest uppercase">
              Entrada franca para todos
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4">
            Eventos &{" "}
            <span style={{ color: ORANGE }}>Shows ao Vivo</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Pagode, samba, shows ao vivo e festas comemorativas abertas ao público na Rane Lazer. Entrada sempre franca!
          </p>
 
          {/* Stats */}
          <div className="inline-flex items-center gap-8 bg-white/5 border border-white/10 rounded-2xl px-8 py-4 backdrop-blur-sm">
            {[
              { value: String(eventos.length), label: "Eventos programados" },
              { value: "100%",                  label: "Entrada franca" },
              { value: "Bar",                   label: "Completo no local" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-black" style={{ color: ORANGE }}>{s.value}</div>
                <div className="text-white/50 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── AVISO ENTRADA FRANCA ── */}
      <div
        className="border-b border-border py-4"
        style={{ backgroundColor: `${ORANGE}10` }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            {[
              { icon: Users,    text: "Todos os eventos com entrada franca" },
              { icon: Music,    text: "Shows ao vivo e paredão" },
              { icon: MapPin,   text: "Jardim Jaraguá · São Paulo" },
              { icon: Clock,    text: "Consulte data e horário em cada evento" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-foreground/70">
                <Icon className="w-4 h-4" style={{ color: ORANGE }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* ── FILTROS ── */}
      <section className="sticky top-24 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap gap-2 justify-center">
            {filtros.map((f) => {
              const active = filtroAtivo === f.id
              const count = f.id === "todos"
                ? eventos.length
                : eventos.filter((e) => e.category === f.id).length
              return (
                <button
                  key={f.id}
                  onClick={() => setFiltroAtivo(f.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: active ? ORANGE : "transparent",
                    color: active ? "white" : undefined,
                    border: `1px solid ${active ? ORANGE : "var(--border)"}`,
                  }}
                >
                  {f.label}
                  <span
                    className="text-xs px-1.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: active ? "rgba(255,255,255,0.25)" : `${ORANGE}15`,
                      color: active ? "white" : ORANGE,
                    }}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>
 
      {/* ── EVENTOS ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 
          {eventosFiltrados.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <Music className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>Nenhum evento nessa categoria no momento.</p>
              <p className="text-sm mt-1">Fique de olho — novidades em breve!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Destaque */}
              {destaque && filtroAtivo === "todos" && (
                <EventCard evento={destaque} destaque />
              )}
 
              {/* Grid dos demais */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(filtroAtivo === "todos" ? restantes : eventosFiltrados).map((evento) => (
                  <EventCard key={evento.id} evento={evento} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
 
      {/* ── NOTIFICAÇÕES ── */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <div
            className="rounded-3xl p-10 relative overflow-hidden"
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
              <Star className="w-10 h-10 mx-auto mb-4" style={{ color: ORANGE }} />
              <h2 className="text-3xl font-black text-foreground mb-3">
                Não perca nenhum evento
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Siga a Rane Lazer nas redes sociais e fique por dentro de todos os eventos, shows e festas. Novidades toda semana!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://www.instagram.com/rane_lazer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="font-bold px-8 rounded-xl text-white gap-2"
                    style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}
                  >
                    <Instagram className="w-4 h-4" />
                    Seguir no Instagram
                  </Button>
                </a>
                <a
                  href="https://wa.me/5511987772482?text=Ol%C3%A1!%20Quero%20receber%20informa%C3%A7%C3%B5es%20sobre%20os%20pr%C3%B3ximos%20eventos%20da%20Rane%20Lazer!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="rounded-xl gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── CTA — Realizar evento ── */}
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
            Quer realizar um evento aqui?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Tem uma banda, um show ou uma festa temática? A Rane Lazer tem toda a estrutura — palco, paredão, bar e espaço para o seu evento!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild size="lg"
              className="font-bold px-10 rounded-xl text-white"
              style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}
            >
              <Link href="/contato">
                Falar sobre meu Evento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild size="lg" variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent rounded-xl"
            >
              <Link href="/estrutura">Ver Estrutura Disponível</Link>
            </Button>
          </div>
        </div>
      </section>
 
      <Footer />
    </div>
  )
}