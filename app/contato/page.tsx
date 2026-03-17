"use client"
 
import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Phone, Mail, MapPin, Clock, Instagram, Facebook,
  MessageCircle, Send, Loader2, Sparkles, ArrowRight,
  CheckCircle, Star, Building2, Users
} from "lucide-react"
 
const ORANGE = "oklch(0.65 0.18 45)"
const BLUE = "oklch(0.55 0.15 220)"
 
// ─── TIPOS ────────────────────────────────────────────────
type FormMode = "orcamento" | "depoimento"
 
type FormData = {
  name: string
  email: string
  phone: string
  eventType: string
  eventDate: string
  guests: string
  message: string
}
 
const initialForm: FormData = {
  name: "", email: "", phone: "",
  eventType: "", eventDate: "", guests: "", message: "",
}
 
const eventTypes = [
  "Aniversário", "Confraternização Corporativa", "Casamento",
  "Festa Infantil", "Formatura", "Churrasco em Família",
  "Festa Temática", "Outro",
]
 
// ─── INFO CARDS ───────────────────────────────────────────
const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(11) 98777-2482",
    sub: "Atendimento rápido",
    href: "https://wa.me/5511987772482",
    accent: ORANGE,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "ranelazer@gmail.com",
    sub: "Resposta em até 24h",
    href: "mailto:ranelazer@gmail.com",
    accent: BLUE,
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Valdemar Pereira Da Silva, 226",
    sub: "Jardim Jaraguá · SP · CEP 05267-180",
    href: "https://maps.google.com/?q=Rua+Valdemar+Pereira+Da+Silva+226+Jardim+Jaragua+SP",
    accent: ORANGE,
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Segunda a Domingo",
    sub: "08h às 22h",
    href: null,
    accent: BLUE,
  },
]
 
const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@rane_lazer",
    href: "https://www.instagram.com/rane_lazer",
    accent: ORANGE,
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "Rane Lazer Eventos",
    href: "https://www.facebook.com/ranelazereventos",
    accent: BLUE,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    handle: "(11) 98777-2482",
    href: "https://wa.me/5511987772482",
    accent: ORANGE,
  },
]
 
// ─── FORMULÁRIO ───────────────────────────────────────────
function ContactForm() {
  const searchParams = useSearchParams()
  const isDepoimento = searchParams.get("origem") === "depoimento"
 
  const [mode, setMode] = useState<FormMode>(isDepoimento ? "depoimento" : "orcamento")
  const [form, setForm] = useState<FormData>(initialForm)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
 
  const formatPhone = (v: string) => {
    v = v.replace(/\D/g, "").slice(0, 11)
    if (v.length > 6) return `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`
    if (v.length > 2) return `(${v.slice(0,2)}) ${v.slice(2)}`
    return v
  }
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: name === "phone" ? formatPhone(value) : value }))
  }
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return
    if (!form.name || !form.email) {
      alert("Preencha nome e e-mail para continuar.")
      return
    }
    setLoading(true)
 
    const isOrca = mode === "orcamento"
    const emoji = isOrca ? "📩" : "⭐"
    const titulo = isOrca ? "Novo Pedido de Orçamento" : "Novo Depoimento"
 
    // ── WhatsApp ──
    const zapMsg = `
${emoji} *${titulo}*
 
👤 Nome: ${form.name}
📧 Email: ${form.email}
📱 Telefone: ${form.phone || "Não informado"}
${isOrca ? `🎉 Evento: ${form.eventType || "Não informado"}
📅 Data: ${form.eventDate || "Não informada"}
👥 Convidados: ${form.guests || "Não informado"}` : ""}
 
📝 Mensagem:
${form.message || "Nenhuma"}
    `.trim()
 
    window.open(
      `https://wa.me/5511987772482?text=${encodeURIComponent(zapMsg)}`,
      "_blank"
    )
 
    // ── E-mail via API ──
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.name,
          email: form.email,
          mensagem: `${isOrca
            ? `Telefone: ${form.phone}\nEvento: ${form.eventType}\nData: ${form.eventDate}\nConvidados: ${form.guests}\n\n`
            : ""}${form.message}`,
          tipo: isOrca ? "ORCAMENTO" : "DEPOIMENTO",
        }),
      })
    } catch (_) {}
 
    setLoading(false)
    setSuccess(true)
    setForm(initialForm)
    setTimeout(() => setSuccess(false), 5000)
  }
 
  return (
    <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl">
 
      {/* Tabs */}
      <div className="grid grid-cols-2 border-b border-border">
        {(["orcamento", "depoimento"] as FormMode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className="py-4 text-sm font-bold transition-all duration-200 relative"
            style={{
              color: mode === m ? ORANGE : undefined,
              backgroundColor: mode === m ? `${ORANGE}08` : undefined,
            }}
          >
            {m === "orcamento" ? "💬 Solicitar Orçamento" : "⭐ Deixar Depoimento"}
            {mode === m && (
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: ORANGE }}
              />
            )}
          </button>
        ))}
      </div>
 
      <div className="p-7 md:p-10">
        {success ? (
          <div className="text-center py-12">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: ORANGE }} />
            <h3 className="text-2xl font-black text-foreground mb-2">Mensagem enviada!</h3>
            <p className="text-muted-foreground">
              {mode === "orcamento"
                ? "Recebemos seu pedido! Entraremos em contato em breve pelo WhatsApp ou e-mail."
                : "Obrigado pelo seu depoimento! Ele significa muito para nós."}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
 
            {/* Nome + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                  Nome completo *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all"
                  style={{ "--tw-ring-color": ORANGE } as React.CSSProperties}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                  E-mail *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all"
                />
              </div>
            </div>
 
            {/* Telefone */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                Telefone / WhatsApp
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all"
              />
            </div>
 
            {/* Campos exclusivos de orçamento */}
            {mode === "orcamento" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                      Tipo de evento
                    </label>
                    <select
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 transition-all"
                    >
                      <option value="">Selecione...</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                      Data do evento
                    </label>
                    <input
                      name="eventDate"
                      type="date"
                      value={form.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 transition-all"
                    />
                  </div>
                </div>
 
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                    Número de convidados
                  </label>
                  <input
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    placeholder="Ex: 50 pessoas"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all"
                  />
                </div>
              </>
            )}
 
            {/* Mensagem */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                {mode === "orcamento" ? "Detalhes do evento" : "Seu depoimento"}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder={
                  mode === "orcamento"
                    ? "Conte mais sobre o seu evento, necessidades especiais, decoração..."
                    : "Conte como foi sua experiência na Rane Lazer..."
                }
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all resize-none"
              />
            </div>
 
            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full font-bold rounded-xl text-white gap-2"
              style={{ backgroundColor: ORANGE }}
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
              ) : (
                <><Send className="w-4 h-4" />
                  {mode === "orcamento" ? "Enviar Pedido de Orçamento" : "Enviar Depoimento"}
                </>
              )}
            </Button>
 
            <p className="text-center text-xs text-muted-foreground">
              Ao enviar, você será redirecionado ao WhatsApp e uma cópia chegará por e-mail.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
 
// ─── PÁGINA PRINCIPAL ─────────────────────────────────────
export default function ContatoPage() {
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
              Resposta rápida garantida
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4">
            Fale com a{" "}
            <span style={{ color: ORANGE }}>Rane Lazer</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Solicite seu orçamento, tire dúvidas ou deixe seu depoimento. Respondemos por e-mail, WhatsApp e redes sociais.
          </p>
        </div>
      </section>
 
      {/* ── CONTEÚDO PRINCIPAL ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
 
            {/* ── COLUNA ESQUERDA — Info ── */}
            <div className="lg:col-span-2 space-y-6">
 
              {/* Info cards */}
              <div>
                <h2 className="text-xl font-black text-foreground mb-4">Nossas informações</h2>
                <div className="space-y-3">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    const content = (
                      <div
                        key={info.label}
                        className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-card hover:shadow-md transition-all duration-300 group"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${info.accent}15` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: info.accent }} />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-0.5">{info.label}</div>
                          <div className="font-semibold text-foreground text-sm">{info.value}</div>
                          <div className="text-xs text-muted-foreground">{info.sub}</div>
                        </div>
                      </div>
                    )
                    return info.href ? (
                      <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : content
                  })}
                </div>
              </div>
 
              {/* Redes sociais */}
              <div>
                <h2 className="text-xl font-black text-foreground mb-4">Redes Sociais</h2>
                <div className="space-y-3">
                  {socialLinks.map((s) => {
                    const Icon = s.icon
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:shadow-md transition-all duration-300 group"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${s.accent}15` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: s.accent }} />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-0.5">{s.label}</div>
                          <div className="font-semibold text-foreground text-sm">{s.handle}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )
                  })}
                </div>
              </div>
 
              {/* Credenciais rápidas */}
              <div
                className="rounded-2xl p-5 border"
                style={{ backgroundColor: `${BLUE}08`, borderColor: `${BLUE}20` }}
              >
                <h3 className="font-black text-foreground text-sm mb-4">Por que escolher a Rane Lazer?</h3>
                <div className="space-y-2.5">
                  {[
                    { icon: Star,      text: "Avaliação 5 estrelas" },
                    { icon: Users,     text: "500+ eventos realizados" },
                    { icon: Building2, text: "Atendemos empresas de todo o Brasil" },
                    { icon: CheckCircle, text: "Resposta em até 24h" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2.5 text-sm text-foreground">
                      <Icon className="w-4 h-4 shrink-0" style={{ color: BLUE }} />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
 
            {/* ── COLUNA DIREITA — Formulário ── */}
            <div className="lg:col-span-3">
              <Suspense fallback={
                <div className="bg-card rounded-3xl border border-border p-10 text-center">
                  <Loader2 className="w-8 h-8 animate-spin mx-auto" style={{ color: ORANGE }} />
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── MAPA ── */}
      <section className="py-4 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-foreground mb-2">Como Chegar</h2>
            <p className="text-muted-foreground">
              Rua Valdemar Pereira Da Silva, 226 — Jardim Jaraguá, São Paulo · SP
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-xl h-80 md:h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0!2d-46.7578!3d-23.4529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI3JzEwLjQiUyA0NsKwNDUnMjguMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Rane Lazer — Jardim Jaraguá, SP"
            />
          </div>
          <div className="flex justify-center mt-5">
            <a
              href="https://maps.google.com/?q=Rua+Valdemar+Pereira+Da+Silva+226+Jardim+Jaragua+SP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="font-bold rounded-xl text-white gap-2"
                style={{ backgroundColor: ORANGE }}
              >
                <MapPin className="w-4 h-4" />
                Abrir no Google Maps
              </Button>
            </a>
          </div>
        </div>
      </section>
 
      <Footer />
    </div>
  )
}