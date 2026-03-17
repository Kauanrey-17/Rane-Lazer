"use client"
 
import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Calendar, Clock, Users, CheckCircle, ChevronLeft,
  ChevronRight, ArrowRight, Sparkles, Shield, Loader2,
  Phone, Mail, Zap, Star, Crown, AlertCircle
} from "lucide-react"
 
const ORANGE = "oklch(0.65 0.18 45)"
const BLUE = "oklch(0.55 0.15 220)"
 
// ─── PACOTES ─────────────────────────────────────────────
const pacotes = [
  {
    id: "basico",
    icon: Zap,
    name: "Pacote Básico",
    price: 800,
    hours: 6,
    capacity: "Até 30 pessoas",
    color: BLUE,
    features: ["Piscina adulto + infantil", "1 churrasqueira", "Wi-Fi", "14 mesas e cadeiras", "2 geladeiras", "Som básico"],
  },
  {
    id: "completo",
    icon: Star,
    name: "Pacote Completo",
    price: 1200,
    hours: 8,
    capacity: "Até 50 pessoas",
    color: ORANGE,
    popular: true,
    features: ["Piscina aquecida", "Churrasqueira", "Área gourmet", "Som Bluetooth", "Wi-Fi", "2 geladeiras", "14 mesas e cadeiras"],
  },
  {
    id: "premium",
    icon: Crown,
    name: "Pacote Premium",
    price: 1800,
    hours: 10,
    capacity: "Até 70 pessoas",
    color: BLUE,
    features: ["Espaço completo", "Área gourmet", "Piscina aquecida", "Som Paredão", "Iluminação especial", "Wi-Fi", "Limpeza inclusa", "Suporte de equipe"],
  },
]
 
// ─── HORÁRIOS ────────────────────────────────────────────
const horarios = [
  "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
  "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
  "18:00", "19:00", "20:00", "21:00", "22:00",
]
 
const MESES = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
const DIAS_SEMANA = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"]
 
// ─── TIPO ────────────────────────────────────────────────
type Step = 1 | 2 | 3 | 4
 
// ─── PÁGINA ──────────────────────────────────────────────
export default function AgendarPage() {
  const [step, setStep] = useState<Step>(1)
  const [pacoteSelecionado, setPacoteSelecionado] = useState<string | null>(null)
  const [mesAtual, setMesAtual] = useState(new Date())
  const [dataSelecionada, setDataSelecionada] = useState<Date | null>(null)
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null)
  const [diasOcupados, setDiasOcupados] = useState<string[]>([])
  const [carregandoDias, setCarregandoDias] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [sucesso, setSucesso] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
 
  const pacote = pacotes.find((p) => p.id === pacoteSelecionado)
 
  // ── Busca dias ocupados no Google Calendar ──
  useEffect(() => {
    const buscarDias = async () => {
      setCarregandoDias(true)
      try {
        const ano = mesAtual.getFullYear()
        const mes = mesAtual.getMonth() + 1
        const res = await fetch(`/api/calendar/disponibilidade?ano=${ano}&mes=${mes}`)
        if (res.ok) {
          const data = await res.json()
          setDiasOcupados(data.ocupados || [])
        }
      } catch (_) {
        // Se falhar, não bloqueia nada — admin confirma manualmente
      } finally {
        setCarregandoDias(false)
      }
    }
    if (step === 2) buscarDias()
  }, [mesAtual, step])
 
  // ── Calendário ──
  const getDiasDoMes = () => {
    const ano = mesAtual.getFullYear()
    const mes = mesAtual.getMonth()
    const primeiroDia = new Date(ano, mes, 1).getDay()
    const totalDias = new Date(ano, mes + 1, 0).getDate()
    const hoje = new Date()
    hoje.setHours(0, 0, 0, 0)
 
    const dias: (Date | null)[] = Array(primeiroDia).fill(null)
    for (let d = 1; d <= totalDias; d++) {
      dias.push(new Date(ano, mes, d))
    }
    return dias
  }
 
  const isDiaOcupado = (dia: Date) => {
    const key = dia.toISOString().split("T")[0]
    return diasOcupados.includes(key)
  }
 
  const isDiaPassado = (dia: Date) => {
    const hoje = new Date()
    hoje.setHours(0, 0, 0, 0)
    return dia < hoje
  }
 
  const isDiaSelecionado = (dia: Date) => {
    return dataSelecionada?.toDateString() === dia.toDateString()
  }
 
  // ── Submit ──
  const handleSubmit = async () => {
    if (!pacote || !dataSelecionada || !horarioSelecionado || !form.name || !form.email) return
    setEnviando(true)
 
    const dataFormatada = dataSelecionada.toLocaleDateString("pt-BR", {
      weekday: "long", day: "numeric", month: "long", year: "numeric"
    })
 
    const msg = `
🗓️ *Nova Solicitação de Reserva — Rane Lazer*
 
📦 Pacote: ${pacote.name} (${pacote.hours}h · R$ ${pacote.price.toLocaleString("pt-BR")})
📅 Data: ${dataFormatada}
🕐 Horário: ${horarioSelecionado} às ${calcularFim(horarioSelecionado, pacote.hours)}
👥 Capacidade: ${pacote.capacity}
 
👤 Nome: ${form.name}
📧 Email: ${form.email}
📱 Telefone: ${form.phone || "Não informado"}
 
📝 Observações: ${form.message || "Nenhuma"}
    `.trim()
 
    // WhatsApp
    window.open(`https://wa.me/5511987772482?text=${encodeURIComponent(msg)}`, "_blank")
 
    // Email
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.name,
          email: form.email,
          mensagem: `Pacote: ${pacote.name}\nData: ${dataFormatada}\nHorário: ${horarioSelecionado}\nTelefone: ${form.phone}\n\n${form.message}`,
          tipo: "RESERVA",
        }),
      })
    } catch (_) {}
 
    // Salvar no Google Calendar (via API)
    try {
      await fetch("/api/calendar/reserva", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pacote: pacote.name,
          data: dataSelecionada.toISOString().split("T")[0],
          horario: horarioSelecionado,
          horas: pacote.hours,
          nome: form.name,
          email: form.email,
          telefone: form.phone,
        }),
      })
    } catch (_) {}
 
    setEnviando(false)
    setSucesso(true)
    setStep(4)
  }
 
  const calcularFim = (inicio: string, horas: number) => {
    const [h] = inicio.split(":").map(Number)
    const fim = (h + horas) % 24
    return `${String(fim).padStart(2, "0")}:00`
  }
 
  const dias = getDiasDoMes()
 
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
 
      {/* ── HERO ── */}
      <section className="relative py-20 overflow-hidden bg-[oklch(0.10_0.04_220)]">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(oklch(0.55 0.15 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.15 220) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[oklch(0.55_0.15_220)]/10 rounded-full blur-[100px]" />
 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[oklch(0.55_0.15_220)]/40 bg-[oklch(0.55_0.15_220)]/10 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5" style={{ color: ORANGE }} />
            <span className="text-[oklch(0.85_0.08_220)] text-sm font-medium tracking-widest uppercase">
              Agenda atualizada em tempo real
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4">
            Reserve seu <span style={{ color: ORANGE }}>evento</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Escolha o pacote, selecione a data disponível e envie sua solicitação. Confirmamos em até 2 horas!
          </p>
        </div>
      </section>
 
      {/* ── PROGRESS BAR ── */}
      {step < 4 && (
        <div className="bg-card border-b border-border py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="flex items-center justify-between">
              {[
                { n: 1, label: "Pacote" },
                { n: 2, label: "Data" },
                { n: 3, label: "Confirmar" },
              ].map(({ n, label }, i) => (
                <div key={n} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300"
                      style={{
                        backgroundColor: step >= n ? ORANGE : "transparent",
                        color: step >= n ? "white" : undefined,
                        border: `2px solid ${step >= n ? ORANGE : "var(--border)"}`,
                      }}
                    >
                      {step > n ? <CheckCircle className="w-5 h-5" /> : n}
                    </div>
                    <span className="text-xs font-medium mt-1" style={{ color: step >= n ? ORANGE : undefined }}>
                      {label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className="flex-1 h-0.5 mx-3 transition-all duration-500"
                      style={{ backgroundColor: step > n ? ORANGE : "var(--border)" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
 
      {/* ── CONTEÚDO ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
 
          {/* STEP 1 — Escolher pacote */}
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-black text-foreground text-center mb-2">Escolha seu Pacote</h2>
              <p className="text-muted-foreground text-center mb-10">Selecione o pacote ideal para o seu evento</p>
 
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {pacotes.map((pkg) => {
                  const Icon = pkg.icon
                  const selected = pacoteSelecionado === pkg.id
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setPacoteSelecionado(pkg.id)}
                      className={`relative rounded-2xl border-2 p-7 cursor-pointer transition-all duration-300 ${pkg.popular ? "scale-[1.03]" : ""}`}
                      style={{
                        borderColor: selected ? pkg.color : "var(--border)",
                        backgroundColor: selected ? `${pkg.color}08` : undefined,
                        boxShadow: selected ? `0 0 0 4px ${pkg.color}20` : undefined,
                      }}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                          <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
                            style={{ backgroundColor: ORANGE }}>
                            ⚡ Mais Escolhido
                          </span>
                        </div>
                      )}
 
                      {selected && (
                        <div className="absolute top-4 right-4">
                          <CheckCircle className="w-6 h-6" style={{ color: pkg.color }} />
                        </div>
                      )}
 
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${pkg.color}15` }}>
                        <Icon className="w-5 h-5" style={{ color: pkg.color }} />
                      </div>
 
                      <h3 className="text-xl font-black text-foreground mb-1">{pkg.name}</h3>
                      <div className="text-3xl font-black mb-1" style={{ color: pkg.color }}>
                        R$ {pkg.price.toLocaleString("pt-BR")}
                      </div>
                      <div className="flex gap-3 mb-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{pkg.hours} horas</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" />{pkg.capacity}</span>
                      </div>
 
                      <ul className="space-y-1.5">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-foreground">
                            <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: pkg.color }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
 
              <div className="text-center">
                <Button
                  size="lg"
                  disabled={!pacoteSelecionado}
                  onClick={() => setStep(2)}
                  className="font-bold px-12 rounded-xl text-white gap-2"
                  style={{ backgroundColor: pacoteSelecionado ? ORANGE : undefined }}
                >
                  Continuar — Escolher Data
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
 
          {/* STEP 2 — Calendário + Horário */}
          {step === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
 
              {/* Calendário */}
              <div>
                <h2 className="text-2xl font-black text-foreground mb-6">Escolha a Data</h2>
 
                <div className="bg-card rounded-2xl border border-border p-6">
                  {/* Navegação mês */}
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={() => setMesAtual(new Date(mesAtual.getFullYear(), mesAtual.getMonth() - 1))}
                      className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-[oklch(0.65_0.18_45)] transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <div className="font-black text-foreground">
                      {MESES[mesAtual.getMonth()]} {mesAtual.getFullYear()}
                      {carregandoDias && <Loader2 className="inline ml-2 w-3.5 h-3.5 animate-spin opacity-50" />}
                    </div>
                    <button
                      onClick={() => setMesAtual(new Date(mesAtual.getFullYear(), mesAtual.getMonth() + 1))}
                      className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-[oklch(0.65_0.18_45)] transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
 
                  {/* Dias da semana */}
                  <div className="grid grid-cols-7 mb-2">
                    {DIAS_SEMANA.map((d) => (
                      <div key={d} className="text-center text-xs font-bold text-muted-foreground py-1">{d}</div>
                    ))}
                  </div>
 
                  {/* Dias */}
                  <div className="grid grid-cols-7 gap-1">
                    {dias.map((dia, i) => {
                      if (!dia) return <div key={`empty-${i}`} />
                      const ocupado = isDiaOcupado(dia)
                      const passado = isDiaPassado(dia)
                      const selecionado = isDiaSelecionado(dia)
                      const disabled = ocupado || passado
 
                      return (
                        <button
                          key={dia.toISOString()}
                          disabled={disabled}
                          onClick={() => { setDataSelecionada(dia); setHorarioSelecionado(null) }}
                          className="aspect-square rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center relative"
                          style={{
                            backgroundColor: selecionado ? ORANGE : ocupado ? "#f1f5f9" : "transparent",
                            color: selecionado ? "white" : disabled ? "#cbd5e1" : undefined,
                            cursor: disabled ? "not-allowed" : "pointer",
                          }}
                          onMouseEnter={(e) => {
                            if (!disabled && !selecionado)
                              e.currentTarget.style.backgroundColor = `${ORANGE}20`
                          }}
                          onMouseLeave={(e) => {
                            if (!disabled && !selecionado)
                              e.currentTarget.style.backgroundColor = "transparent"
                          }}
                          title={ocupado ? "Data indisponível" : passado ? "Data passada" : ""}
                        >
                          {dia.getDate()}
                          {ocupado && (
                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-400" />
                          )}
                        </button>
                      )
                    })}
                  </div>
 
                  {/* Legenda */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ORANGE }} />
                      Selecionado
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      Indisponível
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-slate-200" />
                      Passado
                    </div>
                  </div>
                </div>
              </div>
 
              {/* Horário */}
              <div>
                <h2 className="text-2xl font-black text-foreground mb-6">Escolha o Horário</h2>
 
                {!dataSelecionada ? (
                  <div className="bg-card rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
                    <Calendar className="w-10 h-10 mx-auto mb-3 opacity-30" />
                    <p>Selecione uma data primeiro</p>
                  </div>
                ) : (
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      Data: <strong className="text-foreground">
                        {dataSelecionada.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}
                      </strong>
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                      Pacote de <strong>{pacote?.hours}h</strong> — escolha o horário de início:
                    </p>
 
                    <div className="grid grid-cols-3 gap-2 max-h-[320px] overflow-y-auto pr-1">
                      {horarios.map((h) => {
                        const sel = horarioSelecionado === h
                        return (
                          <button
                            key={h}
                            onClick={() => setHorarioSelecionado(h)}
                            className="py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200"
                            style={{
                              backgroundColor: sel ? ORANGE : "transparent",
                              color: sel ? "white" : undefined,
                              borderColor: sel ? ORANGE : "var(--border)",
                            }}
                          >
                            {h}
                            {pacote && (
                              <div className="text-[10px] opacity-70">
                                até {calcularFim(h, pacote.hours)}
                              </div>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
 
                {/* Resumo */}
                {dataSelecionada && horarioSelecionado && pacote && (
                  <div className="mt-4 p-4 rounded-xl border border-border bg-card">
                    <h4 className="font-bold text-foreground text-sm mb-2">Resumo da seleção</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div><strong className="text-foreground">Pacote:</strong> {pacote.name}</div>
                      <div><strong className="text-foreground">Data:</strong> {dataSelecionada.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric", month: "short" })}</div>
                      <div><strong className="text-foreground">Horário:</strong> {horarioSelecionado} às {calcularFim(horarioSelecionado, pacote.hours)}</div>
                      <div><strong className="text-foreground">Valor:</strong> R$ {pacote.price.toLocaleString("pt-BR")}</div>
                    </div>
                  </div>
                )}
 
                <div className="flex gap-3 mt-6">
                  <Button variant="outline" onClick={() => setStep(1)} className="rounded-xl flex-1">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Voltar
                  </Button>
                  <Button
                    disabled={!dataSelecionada || !horarioSelecionado}
                    onClick={() => setStep(3)}
                    className="rounded-xl flex-1 font-bold text-white"
                    style={{ backgroundColor: dataSelecionada && horarioSelecionado ? ORANGE : undefined }}
                  >
                    Continuar <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          )}
 
          {/* STEP 3 — Dados + Confirmação */}
          {step === 3 && pacote && dataSelecionada && horarioSelecionado && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-black text-foreground text-center mb-2">Confirmar Reserva</h2>
              <p className="text-muted-foreground text-center mb-8">Preencha seus dados e finalize a solicitação</p>
 
              {/* Resumo */}
              <div className="rounded-2xl border-2 border-dashed p-6 mb-8"
                style={{ borderColor: `${ORANGE}40`, backgroundColor: `${ORANGE}05` }}>
                <h3 className="font-black text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: ORANGE }} />
                  Resumo da Reserva
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    ["Pacote", pacote.name],
                    ["Duração", `${pacote.hours} horas`],
                    ["Capacidade", pacote.capacity],
                    ["Data", dataSelecionada.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric", month: "long" })],
                    ["Horário", `${horarioSelecionado} às ${calcularFim(horarioSelecionado, pacote.hours)}`],
                    ["Valor Total", `R$ ${pacote.price.toLocaleString("pt-BR")}`],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div className="text-xs text-muted-foreground">{k}</div>
                      <div className="font-bold text-foreground">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
 
              {/* Formulário */}
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-foreground mb-1.5">Nome completo *</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-foreground mb-1.5">E-mail *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-foreground mb-1.5">WhatsApp</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-foreground mb-1.5">Observações</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tipo de festa, decoração, necessidades especiais..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all resize-none"
                  />
                </div>
              </div>
 
              {/* Aviso */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border mb-6">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: BLUE }} />
                <p className="text-sm text-muted-foreground">
                  Ao confirmar, você será redirecionado ao WhatsApp e receberá um e-mail. A reserva é <strong className="text-foreground">confirmada após o pagamento do sinal de 50%</strong>. Respondemos em até 2 horas!
                </p>
              </div>
 
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(2)} className="rounded-xl">
                  <ChevronLeft className="w-4 h-4 mr-1" /> Voltar
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={enviando || !form.name || !form.email}
                  className="flex-1 font-bold rounded-xl text-white gap-2"
                  style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}
                >
                  {enviando
                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
                    : <><CheckCircle className="w-4 h-4" /> Confirmar Reserva</>
                  }
                </Button>
              </div>
            </div>
          )}
 
          {/* STEP 4 — Sucesso */}
          {step === 4 && (
            <div className="max-w-lg mx-auto text-center py-10">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: `${ORANGE}15` }}>
                <CheckCircle className="w-10 h-10" style={{ color: ORANGE }} />
              </div>
              <h2 className="text-3xl font-black text-foreground mb-3">Solicitação enviada!</h2>
              <p className="text-muted-foreground mb-2">
                Recebemos seu pedido de reserva. Verifique seu WhatsApp e e-mail.
              </p>
              <p className="text-muted-foreground mb-8 text-sm">
                Confirmamos em até <strong className="text-foreground">2 horas</strong> e enviamos os dados para o pagamento do sinal.
              </p>
 
              <div className="bg-card rounded-2xl border border-border p-6 mb-8 text-left">
                <h4 className="font-black text-foreground mb-4">Próximos passos</h4>
                <div className="space-y-3">
                  {[
                    { n: "1", text: "Aguarde nossa confirmação por WhatsApp ou e-mail" },
                    { n: "2", text: "Realize o pagamento do sinal de 50% para garantir a data" },
                    { n: "3", text: "Receba a confirmação oficial da reserva" },
                    { n: "4", text: "Aproveite seu evento na Rane Lazer!" },
                  ].map(({ n, text }) => (
                    <div key={n} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white shrink-0"
                        style={{ backgroundColor: ORANGE }}>{n}</div>
                      <p className="text-sm text-muted-foreground">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
 
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://wa.me/5511987772482" target="_blank" rel="noopener noreferrer">
                  <Button className="font-bold rounded-xl text-white gap-2" style={{ backgroundColor: ORANGE }}>
                    <Phone className="w-4 h-4" /> Falar pelo WhatsApp
                  </Button>
                </a>
                <Button asChild variant="outline" className="rounded-xl">
                  <Link href="/">Voltar ao Início</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
 
      {/* ── GARANTIAS ── */}
      {step < 4 && (
        <section className="py-12 bg-card border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              {[
                { icon: Shield,   text: "Reserva segura",        sub: "Dados protegidos" },
                { icon: Clock,    text: "Qualquer horário",       sub: "Até de madrugada" },
                { icon: Calendar, text: "Agenda em tempo real",   sub: "Sincronizada com iPhone" },
                { icon: CheckCircle, text: "Confirmação em 2h",   sub: "Resposta garantida" },
              ].map(({ icon: Icon, text, sub }) => (
                <div key={text}>
                  <Icon className="w-7 h-7 mx-auto mb-2" style={{ color: ORANGE }} />
                  <div className="font-bold text-foreground text-sm">{text}</div>
                  <div className="text-xs text-muted-foreground">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
 
      <Footer />
    </div>
  )
}