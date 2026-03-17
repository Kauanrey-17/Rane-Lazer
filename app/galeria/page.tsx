"use client"
 
import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  X, ChevronLeft, ChevronRight, Camera, Waves,
  Flame, Wine, Baby, Speaker, Tent, ZoomIn,
  ArrowRight, Sparkles, Play, Pause
} from "lucide-react"
 
const ORANGE = "oklch(0.65 0.18 45)"
const BLUE = "oklch(0.55 0.15 220)"
 
// ─── CATEGORIAS ───────────────────────────────────────────
const categories = [
  { id: "all",            name: "Todas as fotos",  icon: Camera  },
  { id: "piscinas",       name: "Piscinas",         icon: Waves   },
  { id: "churrasqueiras", name: "Churrasqueiras",   icon: Flame   },
  { id: "bar",            name: "Bar",              icon: Wine    },
  { id: "infantil",       name: "Área Infantil",    icon: Baby    },
  { id: "som",            name: "Som & Palco",      icon: Speaker },
  { id: "palco",          name: "Palco",            icon: Tent    },
]
 
// ─── IMAGENS ─────────────────────────────────────────────
// Nomes com espaço precisam de encodeURIComponent ou usar o caminho exato
const images = [
  {
    id: 1,
    src: "/WhatsApp%20Image%202026-02-10%20at%2012.56.07.jpeg",
    alt: "Piscina principal com deck",
    category: "piscinas",
    title: "Piscina Principal",
    description: "Piscina adulto com 1,40m de profundidade, deck molhado e área de descanso",
  },
  {
    id: 2,
    src: "/WhatsApp%20Image%202026-02-10%20at%2012.56.08.jpeg",
    alt: "Piscina vista aberta com pessoas",
    category: "piscinas",
    title: "Área das Piscinas",
    description: "Vista completa da área das piscinas — adulto e infantil integradas",
  },
  {
    id: 3,
    src: "/WhatsApp%20Image%202026-02-10%20at%2012.56.17.jpeg",
    alt: "Área de churrasqueira coberta",
    category: "churrasqueiras",
    title: "Churrasqueiras Cobertas",
    description: "Espaço coberto com churrasqueiras profissionais e bancadas completas",
  },
  {
    id: 4,
    src: "/WhatsApp%20Image%202026-02-10%20at%2020.56.18.jpeg",
    alt: "Bar completo da Rane Lazer",
    category: "bar",
    title: "Bar Completo",
    description: "Bar abastecido com cervejas, drinks, destilados e porções quentes",
  },
  {
    id: 5,
    src: "/WhatsApp%20Image%202026-02-10%20at%2012.56.18.jpeg",
    alt: "Área infantil com bancos e sombra",
    category: "infantil",
    title: "Área Infantil",
    description: "Espaço seguro com bancos e sombra para as crianças aproveitarem",
  },
  {
    id: 6,
    src: "/WhatsApp%20Image%202026-02-10%20at%2020.59.49.jpeg",
    alt: "Sistema de som Paredão",
    category: "som",
    title: "Sistema de Som Paredão",
    description: "Equipamento profissional de alta potência para eventos e festas",
  },
  {
    id: 7,
    src: "/WhatsApp%20Image%202026-02-10%20at%2020.59.50.jpeg",
    alt: "Palco para eventos e shows",
    category: "palco",
    title: "Palco para Eventos",
    description: "Palco profissional para apresentações, shows e eventos de grande porte",
  },
  {
    id: 8,
    src: "/WhatsApp%20Image%202026-02-10%20at%2020.53.06.jpeg",
    alt: "Salão principal",
    category: "palco",
    title: "Salão Principal",
    description: "Salão amplo com iluminação especial para eventos e festas",
  },
]
 
// ─── LIGHTBOX ─────────────────────────────────────────────
function Lightbox({
  images: imgs,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof images
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const img = imgs[index]
 
  useEffect(() => {
    document.body.style.overflow = "hidden"
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }
    window.addEventListener("keydown", handler)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handler)
    }
  }, [onClose, onPrev, onNext])
 
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors z-20"
      >
        <X className="w-5 h-5 text-white" />
      </button>
 
      <div className="absolute top-5 left-5 bg-black/40 rounded-full px-3 py-1.5 text-white/60 text-xs font-medium z-20">
        {index + 1} / {imgs.length}
      </div>
 
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors z-20"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
 
      <div
        className="relative max-w-5xl w-full mx-20 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[72vh] max-w-full w-auto object-contain rounded-2xl shadow-2xl"
        />
        <div className="text-center px-4">
          <h3 className="text-white font-black text-lg mb-0.5">{img.title}</h3>
          <p className="text-white/50 text-sm">{img.description}</p>
        </div>
      </div>
 
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors z-20"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
 
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {imgs.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation() }}
            className="rounded-full transition-all duration-300 h-2"
            style={{
              width: i === index ? 24 : 8,
              backgroundColor: i === index ? ORANGE : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>
    </div>
  )
}
 
// ─── CARROSSEL ────────────────────────────────────────────
function Carousel({
  images: imgs,
  onOpenLightbox,
}: {
  images: typeof images
  onOpenLightbox: (i: number) => void
}) {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
 
  const prev = useCallback(() =>
    setCurrent((c) => (c === 0 ? imgs.length - 1 : c - 1)), [imgs.length])
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % imgs.length), [imgs.length])
 
  // Auto-play
  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(next, 4000)
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [playing, next])
 
  const img = imgs[current]
 
  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl" style={{ aspectRatio: "16/7" }}>
      {/* Imagem principal */}
      <img
        key={img.id}
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
 
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
 
      {/* Caption + zoom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex items-end justify-between">
        <div>
          <div
            className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full text-white mb-3"
            style={{ backgroundColor: `${ORANGE}CC` }}
          >
            {(() => {
              const cat = categories.find((c) => c.id === img.category)
              return cat ? <><cat.icon className="w-3 h-3" />{cat.name}</> : null
            })()}
          </div>
          <h3 className="text-white font-black text-2xl md:text-3xl mb-1">{img.title}</h3>
          <p className="text-white/60 text-sm max-w-lg">{img.description}</p>
        </div>
 
        {/* Botão ampliar */}
        <button
          onClick={() => onOpenLightbox(current)}
          className="shrink-0 ml-4 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm"
        >
          <ZoomIn className="w-5 h-5 text-white" />
        </button>
      </div>
 
      {/* Controles laterais */}
      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
 
      {/* Play/Pause + Dots */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <button
          onClick={() => setPlaying((p) => !p)}
          className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center backdrop-blur-sm hover:bg-black/50 transition-colors"
        >
          {playing
            ? <Pause className="w-3.5 h-3.5 text-white" />
            : <Play className="w-3.5 h-3.5 text-white" />
          }
        </button>
      </div>
 
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {imgs.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300 h-1.5"
            style={{
              width: i === current ? 20 : 6,
              backgroundColor: i === current ? ORANGE : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
 
      {/* Thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 hidden lg:flex gap-2 px-10 pb-2 justify-center pointer-events-none">
        {/* Espaço reservado para caption */}
      </div>
    </div>
  )
}
 
// ─── CARD GRID ────────────────────────────────────────────
function PhotoCard({
  image,
  index,
  onClick,
}: {
  image: typeof images[0]
  index: number
  onClick: () => void
}) {
  const cat = categories.find((c) => c.id === image.category)
  const accent = index % 2 === 0 ? ORANGE : BLUE
 
  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer border border-border"
      style={{ aspectRatio: "4/3" }}
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading={index < 4 ? "eager" : "lazy"}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300" />
      <div className="absolute top-3 left-3">
        <span
          className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full text-white"
          style={{ backgroundColor: `${accent}CC` }}
        >
          {cat && <cat.icon className="w-3 h-3" />}
          {cat?.name}
        </span>
      </div>
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <ZoomIn className="w-4 h-4 text-white" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-white font-black text-sm mb-0.5">{image.title}</h3>
        <p className="text-white/65 text-xs line-clamp-1">{image.description}</p>
      </div>
    </div>
  )
}
 
// ─── PÁGINA ───────────────────────────────────────────────
export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
 
  const filtered = activeCategory === "all"
    ? images
    : images.filter((img) => img.category === activeCategory)
 
  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() =>
    setLightboxIndex((i) => i !== null ? (i === 0 ? filtered.length - 1 : i - 1) : null),
    [filtered.length])
  const nextImage = useCallback(() =>
    setLightboxIndex((i) => i !== null ? (i + 1) % filtered.length : null),
    [filtered.length])
 
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
 
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
 
      {/* ── HERO ── */}
      <section className="relative py-20 overflow-hidden bg-[oklch(0.10_0.04_220)]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.55 0.15 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.15 220) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[oklch(0.55_0.15_220)]/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[oklch(0.55_0.15_220)]/40 bg-[oklch(0.55_0.15_220)]/10 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5" style={{ color: ORANGE }} />
            <span className="text-[oklch(0.85_0.08_220)] text-sm font-medium tracking-widest uppercase">
              Conheça o espaço em fotos
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4">
            Cada foto conta{" "}
            <span style={{ color: ORANGE }}>uma história</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Explore nossas instalações em fotos reais. Clique em qualquer imagem para ampliar.
          </p>
        </div>
      </section>
 
      {/* ── FILTROS (sticky) ── */}
      <section className="sticky top-24 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => {
              const active = activeCategory === cat.id
              const count = cat.id === "all"
                ? images.length
                : images.filter((i) => i.category === cat.id).length
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setLightboxIndex(null) }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: active ? ORANGE : "transparent",
                    color: active ? "white" : undefined,
                    border: `1px solid ${active ? ORANGE : "var(--border)"}`,
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.name}
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
 
      {/* ── CONTEÚDO ── */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 
          {/* CARROSSEL — só no "Todas as fotos" */}
          {activeCategory === "all" && (
            <div className="mb-10">
              <Carousel images={images} onOpenLightbox={openLightbox} />
              <p className="text-center text-muted-foreground text-xs mt-3">
                Clique em <ZoomIn className="inline w-3 h-3" /> para ampliar · Navegue com ← → · Auto-play ativo
              </p>
            </div>
          )}
 
          {/* GRID — filtros específicos */}
          {activeCategory !== "all" && (
            filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                Nenhuma foto nessa categoria ainda.
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filtered.map((img, index) => (
                    <PhotoCard
                      key={img.id}
                      image={img}
                      index={index}
                      onClick={() => openLightbox(index)}
                    />
                  ))}
                </div>
                <p className="text-center text-muted-foreground text-xs mt-6">
                  Clique em qualquer foto para ampliar · Use ← → para navegar · ESC para fechar
                </p>
              </>
            )
          )}
        </div>
      </section>
 
      {/* ── CONVITE ── */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <Camera className="w-10 h-10 mx-auto mb-4" style={{ color: ORANGE }} />
          <h2 className="text-3xl font-black text-foreground mb-3">
            Realizou um evento aqui?
          </h2>
          <p className="text-muted-foreground mb-8">
            Compartilhe suas fotos pelo WhatsApp ou Instagram e apareça na nossa galeria!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/5511987772482?text=Ol%C3%A1!%20Quero%20compartilhar%20fotos%20do%20meu%20evento%20na%20Rane%20Lazer."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="font-bold px-8 rounded-xl text-white gap-2"
                style={{ backgroundColor: ORANGE }}
              >
                Enviar minhas fotos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <Link href="/contato">Fazer minha Reserva</Link>
            </Button>
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
          <h2 className="text-4xl font-black text-white mb-3">Gostou do que viu?</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Reserve o seu espaço e faça parte da história da Rane Lazer.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild size="lg"
              className="font-bold px-10 rounded-xl text-white"
              style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}
            >
              <Link href="/contato">
                Reservar Meu Evento <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild size="lg" variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent rounded-xl"
            >
              <Link href="/estrutura">Conhecer a Estrutura</Link>
            </Button>
          </div>
        </div>
      </section>
 
      <Footer />
    </div>
  )
}