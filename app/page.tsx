import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ScrollToTop } from "@/components/scroll-to-top"
import {
  Waves, ChefHat, Wine, Users, Shield, Wifi, MapPin,
  Clock, Star, CheckCircle, Building2, Calendar, ArrowRight,
  Phone, Instagram, Facebook,
} from "lucide-react"
 
export default function HomePage() {
  const stats = [
    { value: "500+", label: "Eventos Realizados" },
    { value: "5★", label: "Avaliação Média" },
    { value: "300m²", label: "Área Total" },
    { value: "70", label: "Pessoas / Evento" },
  ]
 
  const features = [
    {
      icon: Waves,
      title: "Piscinas",
      description: "Adulto 1,40m e infantil 0,60m com deck molhado e área de descanso.",
      image: "/WhatsApp Image 2026-02-10 at 12.56.07.jpeg",
    },
    {
      icon: ChefHat,
      title: "Churrasqueiras",
      description: "Estrutura profissional coberta com bancadas, pia e geladeira.",
      image: "/WhatsApp Image 2026-02-10 at 12.56.17.jpeg",
    },
    {
      icon: Wine,
      title: "Bar Completo",
      description: "Cervejas, drinks, destilados, porções e mimo para a criançada.",
      image: "/WhatsApp Image 2026-02-10 at 20.56.18.jpeg",
    },
    {
      icon: Users,
      title: "Salão Principal",
      description: "Espaço amplo com som, iluminação e palco para até 100 pessoas.",
      image: "/WhatsApp Image 2026-02-10 at 20.53.06.jpeg",
    },
  ]
 
  const corporateFeatures = [
    "Espaço exclusivo para confraternizações",
    "Wi-Fi de alta velocidade em todo o espaço",
    "Sistema de som e microfone profissional",
    "Suporte de equipe dedicada no evento",
    "Capacidade para até 70 colaboradores",
    "Pacotes corporativos com nota fiscal",
  ]
 
  const testimonials = [
    {
      name: "Fernanda Lima",
      role: "Aniversário de 30 anos",
      text: "Melhor decisão que tomei! Estrutura impecável, atendimento incrível e meu aniversário foi inesquecível.",
      stars: 5,
    },
    {
      name: "Ricardo Souza",
      role: "Gerente RH — Empresa de TI",
      text: "Realizamos nossa confraternização anual aqui. Profissionalismo de ponta a ponta, equipe toda adorou.",
      stars: 5,
    },
    {
      name: "Ana Paula Costa",
      role: "Festa Infantil",
      text: "As crianças ficaram na piscina o dia todo! Seguro, limpo e a organização foi perfeita.",
      stars: 5,
    },
  ]
 
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <WhatsAppFloat />
      <ScrollToTop />
 
      {/* ══════════════════════════════════════
          HERO — fullscreen com grade tech
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Foto de fundo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/WhatsApp Image 2026-02-10 at 12.56.16.jpeg"
            alt="Rane Lazer"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient tech */}
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.05_220)]/95 via-[oklch(0.08_0.03_220)]/80 to-[oklch(0.12_0.04_45)]/90" />
          {/* Grade tecnológica */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.55 0.15 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.15 220) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Glow azul canto esquerdo */}
          <div className="absolute -left-32 top-1/3 w-[600px] h-[600px] rounded-full bg-[oklch(0.55_0.15_220)]/20 blur-[120px]" />
          {/* Glow laranja canto direito */}
          <div className="absolute -right-32 bottom-1/4 w-[500px] h-[500px] rounded-full bg-[oklch(0.65_0.18_45)]/15 blur-[100px]" />
        </div>
 
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[oklch(0.55_0.15_220)]/50 bg-[oklch(0.55_0.15_220)]/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.18_45)] animate-pulse" />
              <span className="text-[oklch(0.85_0.08_220)] text-sm font-medium tracking-widest uppercase">
                Jardim Jaraguá · São Paulo
              </span>
            </div>
 
            {/* Título principal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              O espaço que{" "}
              <span
                className="relative inline-block"
                style={{
                  WebkitTextStroke: "2px oklch(0.65 0.18 45)",
                  color: "transparent",
                }}
              >
                transforma
              </span>
              <br />
              eventos em{" "}
              <span className="text-[oklch(0.65_0.18_45)]">memórias</span>
            </h1>
 
            <p className="text-[oklch(0.75_0.04_220)] text-xl max-w-2xl mb-10 leading-relaxed">
              Piscinas, churrasqueiras, bar completo e salão de eventos — tudo em um só lugar para festas particulares e eventos corporativos em São Paulo.
            </p>
 
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Button
                asChild
                size="lg"
                className="bg-[oklch(0.65_0.18_45)] hover:bg-[oklch(0.70_0.18_45)] text-white font-bold px-8 py-4 text-base rounded-xl shadow-lg shadow-[oklch(0.65_0.18_45)]/30"
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
                className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-base rounded-xl backdrop-blur-sm"
              >
                <Link href="/estrutura">Conhecer a Estrutura</Link>
              </Button>
            </div>
 
            {/* Stats rápidos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 px-5 py-4 text-center">
                  <div className="text-2xl font-black text-[oklch(0.65_0.18_45)] mb-0.5">{stat.value}</div>
                  <div className="text-xs text-[oklch(0.70_0.05_220)] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
 
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
          <span className="text-white text-xs tracking-widest uppercase">Role para ver</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>
 
      {/* ══════════════════════════════════════
          ESTRUTURA — 4 cards com foto e hover
      ══════════════════════════════════════ */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Detalhe geométrico */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[oklch(0.55_0.15_220)]/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header da seção */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-8 bg-[oklch(0.55_0.15_220)]" />
                <span className="text-[oklch(0.55_0.15_220)] text-sm font-semibold tracking-widest uppercase">Nossa Estrutura</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground leading-tight">
                Tudo que seu evento<br />precisa em um só lugar
              </h2>
            </div>
            <Button asChild variant="outline" className="shrink-0 rounded-xl">
              <Link href="/estrutura">
                Ver estrutura completa
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
 
          {/* Grid de cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay permanente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.04_220)]/95 via-[oklch(0.08_0.04_220)]/20 to-transparent" />
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-[oklch(0.55_0.15_220)]/0 group-hover:bg-[oklch(0.55_0.15_220)]/20 transition-all duration-500" />
 
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[oklch(0.65_0.18_45)] flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-bold text-lg">{feature.title}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-snug translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ══════════════════════════════════════
          CORPORATIVO — fundo escuro premium
      ══════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-[oklch(0.10_0.04_220)]">
        {/* Grid tech de fundo */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.55 0.15 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.15 220) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[oklch(0.55_0.15_220)]/10 rounded-full blur-[80px]" />
 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texto */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-[oklch(0.65_0.18_45)]" />
                <span className="text-[oklch(0.65_0.18_45)] text-sm font-semibold tracking-widest uppercase">Para Empresas</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                Confraternizações e eventos corporativos{" "}
                <span className="text-[oklch(0.55_0.15_220)]">de alto nível</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Oferecemos estrutura completa para empresas de todos os portes realizarem eventos memoráveis para suas equipes — com profissionalismo, segurança e suporte dedicado do início ao fim.
              </p>
 
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {corporateFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[oklch(0.55_0.15_220)] shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
 
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[oklch(0.55_0.15_220)] hover:bg-[oklch(0.60_0.15_220)] text-white font-bold px-8 rounded-xl"
                >
                  <Link href="/contato?tipo=corporativo">
                    Solicitar Proposta Corporativa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
 
            {/* Visual de credenciais */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "Segurança total", desc: "Monitoramento 24h e equipe treinada" },
                { icon: Wifi, title: "Conectividade", desc: "Wi-Fi alta velocidade em todo o espaço" },
                { icon: Calendar, title: "Flexibilidade", desc: "Horários adaptados à sua empresa" },
                { icon: Star, title: "Experiência", desc: "Mais de 500 eventos realizados" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[oklch(0.55_0.15_220)]/50 hover:bg-[oklch(0.55_0.15_220)]/5 transition-all duration-300"
                >
                  <item.icon className="w-7 h-7 text-[oklch(0.55_0.15_220)] mb-3" />
                  <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                  <div className="text-white/50 text-xs leading-snug">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* ══════════════════════════════════════
          DEPOIMENTOS
      ══════════════════════════════════════ */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[oklch(0.65_0.18_45)]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-8 bg-[oklch(0.65_0.18_45)]" />
              <span className="text-[oklch(0.65_0.18_45)] text-sm font-semibold tracking-widest uppercase">Depoimentos</span>
              <div className="h-px w-8 bg-[oklch(0.65_0.18_45)]" />
            </div>
            <h2 className="text-4xl font-black text-foreground">
              Quem foi, aprovou
            </h2>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-background rounded-2xl p-7 border border-border hover:border-[oklch(0.55_0.15_220)]/40 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Estrelas */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[oklch(0.65_0.18_45)] text-[oklch(0.65_0.18_45)]" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-[oklch(0.55_0.15_220)]/20 flex items-center justify-center text-[oklch(0.55_0.15_220)] font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
 
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/depoimentos">
                Ver todos os depoimentos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
 
      {/* ══════════════════════════════════════
          LOCALIZAÇÃO + HORÁRIOS
      ══════════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-[oklch(0.55_0.15_220)]" />
                <span className="text-[oklch(0.55_0.15_220)] text-sm font-semibold tracking-widest uppercase">Como Chegar</span>
              </div>
              <h2 className="text-4xl font-black text-foreground mb-8">
                Venha nos conhecer
              </h2>
 
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <MapPin className="w-5 h-5 text-[oklch(0.55_0.15_220)] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-0.5">Endereço</div>
                    <div className="text-muted-foreground text-sm">Rua Valdemar Pereira Da Silva, 226 — Jardim Jaraguá, SP · CEP 05267-180</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <Clock className="w-5 h-5 text-[oklch(0.65_0.18_45)] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-0.5">Funcionamento</div>
                    <div className="text-muted-foreground text-sm">Segunda a domingo · 08h às 22h</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <Phone className="w-5 h-5 text-[oklch(0.55_0.15_220)] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-0.5">Contato</div>
                    <div className="text-muted-foreground text-sm">(11) 98777-2482 · ranelazer@gmail.com</div>
                  </div>
                </div>
              </div>
 
              <div className="flex gap-3 mt-8">
                <a
                  href="https://www.instagram.com/rane_lazer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-[oklch(0.55_0.15_220)]/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                >
                  <Instagram className="w-4 h-4" /> @rane_lazer
                </a>
                <a
                  href="https://www.facebook.com/ranelazereventos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-[oklch(0.55_0.15_220)]/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                >
                  <Facebook className="w-4 h-4" /> Rane Lazer
                </a>
              </div>
            </div>
 
            {/* Mapa embed */}
            <div className="rounded-2xl overflow-hidden border border-border h-80 lg:h-96 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0!2d-46.7578!3d-23.4529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI3JzEwLjQiUyA0NsKwNDUnMjguMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Rane Lazer"
              />
            </div>
          </div>
        </div>
      </section>
 
      {/* ══════════════════════════════════════
          CTA FINAL — gradiente da marca
      ══════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-[oklch(0.10_0.04_220)]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.55 0.15 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.15 220) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[oklch(0.55_0.15_220)]/15 rounded-full blur-[80px]" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[oklch(0.65_0.18_45)]/10 rounded-full blur-[80px]" />
 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Pronto para criar um<br />
            <span className="text-[oklch(0.65_0.18_45)]">evento inesquecível?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Entre em contato agora, verifique a disponibilidade e garanta a data do seu evento com quem entende de festas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[oklch(0.65_0.18_45)] hover:bg-[oklch(0.70_0.18_45)] text-white font-bold px-10 py-4 text-base rounded-xl shadow-lg shadow-[oklch(0.65_0.18_45)]/25"
            >
              <Link href="/contato">
                Fazer minha Reserva
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent px-10 py-4 text-base rounded-xl"
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