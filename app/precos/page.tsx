import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Check, ArrowRight, Clock, Users, Waves, ChefHat,
  Wifi, Music, Shield, Star, Zap, Crown, Sparkles,
  Phone, Calendar, Gift, ChevronDown
} from "lucide-react"
 
// ─── PACOTES ─────────────────────────────────────────────
const packages = [
  {
    id: "basico",
    icon: Zap,
    name: "Básico",
    price: 800,
    period: "6 horas",
    capacity: "Até 30 pessoas",
    tagline: "Ideal para reuniões e celebrações íntimas",
    popular: false,
    accent: "blue",
    features: [
      "Uso da piscina (adulto + infantil)",
      "1 churrasqueira equipada",
      "Wi-Fi gratuito",
      "14 conjuntos de mesas e cadeiras",
      "2 geladeiras",
      "Som básico incluso",
    ],
    notIncluded: [
      "Área gourmet",
      "Piscina aquecida",
      "Sistema de som Paredão",
      "Iluminação especial",
    ],
  },
  {
    id: "completo",
    icon: Star,
    name: "Completo",
    price: 1200,
    period: "8 horas",
    capacity: "Até 50 pessoas",
    tagline: "Perfeito para aniversários e festas em família",
    popular: true,
    accent: "orange",
    features: [
      "Uso da piscina aquecida",
      "14 conjuntos de mesas e cadeiras",
      "Churrasqueira equipada",
      "Área gourmet inclusa",
      "Sistema de som Bluetooth",
      "Wi-Fi gratuito",
      "2 geladeiras",
    ],
    notIncluded: [
      "Sistema de som Paredão",
      "Iluminação especial",
    ],
  },
  {
    id: "premium",
    icon: Crown,
    name: "Premium",
    price: 1800,
    period: "10 horas",
    capacity: "Até 70 pessoas",
    tagline: "Para grandes eventos e celebrações especiais",
    popular: false,
    accent: "purple",
    features: [
      "Uso completo do espaço",
      "Acesso à área gourmet",
      "Piscina aquecida",
      "Sistema de som Paredão",
      "Iluminação especial",
      "Wi-Fi gratuito",
      "Limpeza incluída",
      "Suporte de equipe",
      "2 geladeiras",
    ],
    notIncluded: [],
  },
]
 
// ─── ADICIONAIS ───────────────────────────────────────────
const additionals = [
  { service: "Hora adicional", price: "R$ 100" },
  { service: "Decoração básica", price: "R$ 200" },
  { service: "Serviço de garçom", price: "R$ 200/dia" },
  { service: "Equipamento de som extra", price: "R$ 100" },
  { service: "Limpeza pós-evento", price: "R$ 150" },
  { service: "Segurança adicional", price: "R$ 200/dia" },
  { service: "Churrasqueiro", price: "R$ 300/dia" },
]
 
// ─── DESCONTOS ────────────────────────────────────────────
const discounts = [
  {
    icon: Calendar,
    title: "Antecipação",
    desc: "Reserve com 30 dias de antecedência",
    value: "10% OFF",
  },
  {
    icon: Star,
    title: "Fidelidade",
    desc: "A partir do 3º evento no ano",
    value: "10% OFF",
  },
  {
    icon: Gift,
    title: "Indicação",
    desc: "Quando sua indicação fechar negócio",
    value: "10% OFF",
  },
]
 
// ─── FAQ ──────────────────────────────────────────────────
const faqs = [
  {
    q: "Qual a antecedência mínima para reservar?",
    a: "Recomendamos pelo menos 7 dias de antecedência. Em datas comemorativas e feriados, antecipe o quanto antes pois a agenda esgota rápido.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Cobramos 50% de sinal para confirmar a reserva e os outros 50% no dia do evento. Aceitamos Pix, transferência e dinheiro.",
  },
  {
    q: "Posso trazer comida e bebida de fora?",
    a: "Sim! Você pode trazer alimentos. Para bebidas alcoólicas, consulte nossas condições — temos bar completo disponível no espaço.",
  },
  {
    q: "Os preços variam em feriados?",
    a: "Sim. Em feriados nacionais e datas comemorativas como Réveillon e Carnaval, os preços podem ter acréscimo. Consulte disponibilidade.",
  },
  {
    q: "Posso contratar apenas o salão, sem a piscina?",
    a: "Os pacotes incluem o espaço completo. Para customizações específicas, entre em contato para montarmos uma proposta personalizada.",
  },
]
 
// ─── ACCENT CLASSES ───────────────────────────────────────
const accentMap: Record<string, {
  border: string; glow: string; badge: string; icon: string;
  btn: string; check: string; ring: string;
}> = {
  blue: {
    border: "border-[oklch(0.55_0.15_220)]/40",
    glow: "shadow-[oklch(0.55_0.15_220)]/10",
    badge: "bg-[oklch(0.55_0.15_220)]/10 text-[oklch(0.55_0.15_220)] border-[oklch(0.55_0.15_220)]/30",
    icon: "bg-[oklch(0.55_0.15_220)]/10 text-[oklch(0.55_0.15_220)]",
    btn: "border-[oklch(0.55_0.15_220)]/40 text-[oklch(0.55_0.15_220)] hover:bg-[oklch(0.55_0.15_220)]/10",
    check: "text-[oklch(0.55_0.15_220)]",
    ring: "ring-[oklch(0.55_0.15_220)]/20",
  },
  orange: {
    border: "border-[oklch(0.65_0.18_45)]",
    glow: "shadow-[oklch(0.65_0.18_45)]/20",
    badge: "bg-[oklch(0.65_0.18_45)] text-white border-transparent",
    icon: "bg-[oklch(0.65_0.18_45)]/10 text-[oklch(0.65_0.18_45)]",
    btn: "bg-[oklch(0.65_0.18_45)] text-white hover:bg-[oklch(0.70_0.18_45)] border-transparent",
    check: "text-[oklch(0.65_0.18_45)]",
    ring: "ring-[oklch(0.65_0.18_45)]/30",
  },
  purple: {
    border: "border-purple-500/40",
    glow: "shadow-purple-500/10",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    icon: "bg-purple-500/10 text-purple-400",
    btn: "border-purple-500/40 text-purple-400 hover:bg-purple-500/10",
    check: "text-purple-400",
    ring: "ring-purple-500/20",
  },
}
 
// ─── FAQ ITEM (client needed for open/close — workaround: pure CSS) ──────────
function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-border rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-card transition-colors">
        <span className="font-semibold text-foreground text-sm pr-4">{q}</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
        {a}
      </div>
    </details>
  )
}
 
// ─── PÁGINA ───────────────────────────────────────────────
export default function PricingPage() {
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
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[oklch(0.55_0.15_220)]/10 rounded-full blur-[100px]" />
        <div className="absolute right-1/4 top-0 w-72 h-72 bg-[oklch(0.65_0.18_45)]/8 rounded-full blur-[80px]" />
 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[oklch(0.55_0.15_220)]/40 bg-[oklch(0.55_0.15_220)]/10 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[oklch(0.65_0.18_45)]" />
            <span className="text-[oklch(0.85_0.08_220)] text-sm font-medium tracking-widest uppercase">
              Transparência total
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4">
            Planos que cabem no{" "}
            <span className="text-[oklch(0.65_0.18_45)]">seu evento</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Sem taxas ocultas. Sem surpresas. Escolha o pacote certo e garanta um evento inesquecível.
          </p>
        </div>
      </section>
 
      {/* ── PACOTES ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
            {packages.map((pkg) => {
              const ac = accentMap[pkg.accent]
              const Icon = pkg.icon
              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-2xl border bg-card p-7 flex flex-col gap-5 shadow-xl ring-1 ${ac.border} ${ac.glow} ${ac.ring} ${pkg.popular ? "scale-[1.03] z-10" : ""} transition-transform`}
                >
                  {/* Badge popular */}
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className={`text-xs font-bold px-4 py-1.5 rounded-full border ${ac.badge}`}>
                        ⚡ Mais Escolhido
                      </span>
                    </div>
                  )}
 
                  {/* Header */}
                  <div>
                    <div className={`inline-flex w-10 h-10 rounded-xl items-center justify-center mb-3 ${ac.icon}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black text-foreground mb-1">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm">{pkg.tagline}</p>
                  </div>
 
                  {/* Preço */}
                  <div className="border-y border-border py-5">
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-black text-foreground">
                        R$ {pkg.price.toLocaleString("pt-BR")}
                      </span>
                      <span className="text-muted-foreground text-sm mb-1">/ {pkg.period}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Users className="w-3.5 h-3.5" />
                        {pkg.capacity}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {pkg.period}
                      </div>
                    </div>
                  </div>
 
                  {/* Features incluídas */}
                  <ul className="space-y-2.5 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${ac.check}`} />
                        {f}
                      </li>
                    ))}
                    {pkg.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground/40 line-through">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 opacity-30" />
                        {f}
                      </li>
                    ))}
                  </ul>
 
                  {/* CTA */}
                  <Button
                    asChild
                    size="lg"
                    variant={pkg.popular ? "default" : "outline"}
                    className={`w-full rounded-xl font-bold ${ac.btn}`}
                  >
                    <Link href={`/contato?pacote=${pkg.id}`}>
                      Quero este pacote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )
            })}
          </div>
 
          {/* Nota rodapé pacotes */}
          <p className="text-center text-muted-foreground text-sm mt-8 max-w-lg mx-auto">
            Precisa de algo diferente? <Link href="/contato" className="text-[oklch(0.65_0.18_45)] underline underline-offset-2">Fale conosco</Link> e montamos uma proposta personalizada para o seu evento.
          </p>
        </div>
      </section>
 
      {/* ── O QUE ESTÁ INCLUSO ── */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-black text-foreground mb-10">
            Todos os pacotes incluem
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Waves, label: "Piscinas" },
              { icon: ChefHat, label: "Churrasqueira" },
              { icon: Wifi, label: "Wi-Fi Grátis" },
              { icon: Music, label: "Som Básico" },
              { icon: Shield, label: "Segurança 24h" },
              { icon: Users, label: "Área Verde" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 bg-background rounded-xl p-4 border border-border">
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.15_220)]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[oklch(0.55_0.15_220)]" />
                </div>
                <span className="text-xs font-semibold text-foreground text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── ADICIONAIS ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-8 bg-[oklch(0.65_0.18_45)]" />
                <span className="text-[oklch(0.65_0.18_45)] text-sm font-semibold tracking-widest uppercase">Personalize</span>
                <div className="h-px w-8 bg-[oklch(0.65_0.18_45)]" />
              </div>
              <h2 className="text-3xl font-black text-foreground">Serviços Adicionais</h2>
              <p className="text-muted-foreground mt-2">Adicione ao seu pacote e deixe tudo ainda mais completo</p>
            </div>
 
            <div className="rounded-2xl border border-border overflow-hidden">
              {additionals.map((item, i) => (
                <div
                  key={item.service}
                  className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-card" : "bg-background"} hover:bg-[oklch(0.55_0.15_220)]/5 transition-colors`}
                >
                  <span className="text-sm font-medium text-foreground">{item.service}</span>
                  <span className="text-sm font-bold text-[oklch(0.65_0.18_45)]">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* ── DESCONTOS ── */}
      <section className="py-16 bg-[oklch(0.10_0.04_220)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.55 0.15 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.15 220) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">Descontos Especiais</h2>
            <p className="text-white/50 mt-2">Acumuláveis para quem planeja com antecedência</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {discounts.map((d) => (
              <div
                key={d.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[oklch(0.65_0.18_45)]/50 hover:bg-[oklch(0.65_0.18_45)]/5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.65_0.18_45)]/10 flex items-center justify-center mx-auto mb-4">
                  <d.icon className="w-6 h-6 text-[oklch(0.65_0.18_45)]" />
                </div>
                <div className="text-2xl font-black text-[oklch(0.65_0.18_45)] mb-1">{d.value}</div>
                <div className="text-white font-bold text-sm mb-1">{d.title}</div>
                <div className="text-white/50 text-xs">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── FAQ ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-8 bg-[oklch(0.55_0.15_220)]" />
              <span className="text-[oklch(0.55_0.15_220)] text-sm font-semibold tracking-widest uppercase">Dúvidas Frequentes</span>
              <div className="h-px w-8 bg-[oklch(0.55_0.15_220)]" />
            </div>
            <h2 className="text-3xl font-black text-foreground">Perguntas & Respostas</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
 
      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-3xl font-black text-foreground mb-3">
            Pronto para garantir sua data?
          </h2>
          <p className="text-muted-foreground mb-8">
            Entre em contato agora pelo WhatsApp ou preencha o formulário — respondemos em minutos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[oklch(0.65_0.18_45)] hover:bg-[oklch(0.70_0.18_45)] text-white font-bold px-8 rounded-xl shadow-lg shadow-[oklch(0.65_0.18_45)]/25"
            >
              <a
                href="https://wa.me/5511987772482?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Rane%20Lazer."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-4 w-4" />
                Reservar pelo WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl"
            >
              <Link href="/contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
 
      <Footer />
    </div>
  )
}
 