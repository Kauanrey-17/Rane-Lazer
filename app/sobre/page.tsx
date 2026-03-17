import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight, Heart, Target, Eye, Award, Users,
  Calendar, Star, Sparkles, Quote, CheckCircle
} from "lucide-react"
 
const ORANGE = "oklch(0.65 0.18 45)"
const BLUE = "oklch(0.55 0.15 220)"
 
// ─── EQUIPE ───────────────────────────────────────────────
const team = [
  {
    name: "Alberto Bento",
    role: "Fundador & Proprietário",
    description:
      "Visionário por trás da Rane Lazer. Com mais de 8 anos de experiência em hospitalidade e eventos, Alberto construiu do zero um espaço que se tornou referência na região de Jaraguá.",
    initial: "A",
    accentColor: ORANGE,
    tags: ["Gestão", "Hospitalidade", "Eventos"],
  },
  {
    name: "Kauan Rey",
    role: "Gerente de Desenvolvimento",
    description:
      "Responsável pela inovação tecnológica e estratégia digital da Rane Lazer. Kauan garante que a experiência do cliente começa muito antes de chegar ao espaço — desde o primeiro clique no site.",
    initial: "K",
    accentColor: BLUE,
    tags: ["Tecnologia", "Inovação", "Estratégia"],
  },
  {
    name: "Nicole Rane",
    role: "Atendimento ao Cliente",
    description:
      "O coração do atendimento da Rane Lazer. Nicole é quem transforma cada dúvida em uma reserva e cada reserva em uma experiência inesquecível, com atenção e carinho únicos.",
    initial: "N",
    accentColor: ORANGE,
    tags: ["Atendimento", "Relacionamento", "Experiência"],
  },
]
 
// ─── VALORES ──────────────────────────────────────────────
const values = [
  {
    icon: Heart,
    title: "Paixão pelo que fazemos",
    description:
      "Cada evento é uma oportunidade de criar algo especial. Colocamos amor em cada detalhe — da limpeza à decoração.",
  },
  {
    icon: Users,
    title: "Foco total no cliente",
    description:
      "Seu evento é único. Nosso atendimento é personalizado do primeiro contato até o encerramento da festa.",
  },
  {
    icon: Award,
    title: "Excelência em tudo",
    description:
      "Não aceitamos menos que o melhor. Nossa estrutura, equipe e serviços são mantidos sempre no mais alto padrão.",
  },
  {
    icon: Target,
    title: "Compromisso real",
    description:
      "Quando assumimos um evento, nossa palavra é lei. Pontualidade, entrega e profissionalismo sem exceção.",
  },
]
 
// ─── TIMELINE ─────────────────────────────────────────────
const timeline = [
  {
    year: "2019",
    title: "O começo de tudo",
    description:
      "Alberto Bento fundou a Rane Lazer com um sonho simples: criar um espaço onde famílias pudessem criar memórias inesquecíveis. O espaço nasceu pequeno, mas com uma grande missão.",
  },
  {
    year: "2020",
    title: "Crescimento e estrutura",
    description:
      "Mesmo em um ano desafiador para o mundo, a Rane Lazer investiu em melhorias — piscinas reformadas, churrasqueiras novas e um atendimento que fez a diferença.",
  },
  {
    year: "2022",
    title: "Bar e entretenimento",
    description:
      "Inauguração do bar completo e instalação do sistema de som Paredão e palco profissional. A Rane Lazer se tornava um espaço completo de entretenimento.",
  },
  {
    year: "2024",
    title: "Referência na região",
    description:
      "Com mais de 500 eventos realizados e avaliação 5 estrelas, a Rane Lazer se consolidou como o espaço de lazer mais completo de Jardim Jaraguá.",
  },
  {
    year: "2025",
    title: "Novo patamar",
    description:
      "Expansão digital, novos pacotes corporativos e uma equipe ainda mais preparada para atender empresas e clientes de todo o Brasil.",
  },
]
 
// ─── STATS ────────────────────────────────────────────────
const stats = [
  { value: "500+", label: "Eventos realizados" },
  { value: "6",    label: "Anos de experiência" },
  { value: "5★",   label: "Avaliação média" },
  { value: "100%", label: "Clientes satisfeitos" },
]
 
export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
 
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[oklch(0.10_0.04_220)]">
        {/* Grade tech */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.55 0.15 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.15 220) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Foto de fundo com overlay */}
        <div className="absolute inset-0">
          <img
            src="/WhatsApp Image 2026-02-10 at 12.56.16.jpeg"
            alt="Rane Lazer"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[oklch(0.55_0.15_220)]/10 rounded-full blur-[100px]" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-[oklch(0.65_0.18_45)]/8 rounded-full blur-[80px]" />
 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[oklch(0.55_0.15_220)]/40 bg-[oklch(0.55_0.15_220)]/10 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5" style={{ color: ORANGE }} />
              <span className="text-[oklch(0.85_0.08_220)] text-sm font-medium tracking-widest uppercase">
                Fundada em 2019 · Jardim Jaraguá, SP
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-5">
              Mais que um espaço —{" "}
              <span style={{ color: ORANGE }}>uma história</span>{" "}
              de momentos
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              A Rane Lazer nasceu de um sonho e cresceu sobre a base de milhares de sorrisos, festas inesquecíveis e famílias felizes. Conheça quem está por trás de cada evento.
            </p>
          </div>
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
 
      {/* ── NOSSA HISTÓRIA ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texto */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: ORANGE }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: ORANGE }}>
                  Nossa História
                </span>
              </div>
              <h2 className="text-4xl font-black text-foreground mb-6 leading-tight">
                De um sonho a mais de 500 eventos realizados
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Rane Lazer nasceu em 2019 do sonho de Alberto Bento: criar um espaço onde famílias e amigos pudessem se reunir para celebrar os momentos mais importantes da vida — com estrutura de qualidade, segurança e um atendimento que fizesse cada pessoa se sentir especial.
                </p>
                <p>
                  Começamos pequenos, mas com uma visão grande. Ao longo dos anos, investimos constantemente em melhorias — novas churrasqueiras, bar completo, sistema de som profissional, palco, e uma equipe dedicada que trata cada evento como se fosse o próprio.
                </p>
                <p>
                  Hoje, somos referência em Jardim Jaraguá e atendemos desde festas íntimas de família até grandes eventos corporativos de empresas de todo o Brasil. A nossa missão continua a mesma: criar memórias inesquecíveis.
                </p>
              </div>
 
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "Espaço próprio e seguro",
                  "Equipe treinada e dedicada",
                  "Estrutura sempre renovada",
                  "Atendimento 7 dias por semana",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: ORANGE }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
 
            {/* Foto + quote */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src="/WhatsApp Image 2026-02-10 at 12.56.07.jpeg"
                  alt="Espaço Rane Lazer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Quote flutuante */}
              <div
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-xl max-w-xs"
              >
                <Quote className="w-6 h-6 mb-2" style={{ color: ORANGE }} />
                <p className="text-sm text-foreground font-medium leading-snug">
                  "Cada evento que sai daqui leva um pedaço do nosso coração."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Alberto Bento, Fundador</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── MISSÃO VISÃO VALORES ── */}
      <section className="py-20 bg-[oklch(0.10_0.04_220)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.55 0.15 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.15 220) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-2">Missão, Visão & Propósito</h2>
            <p className="text-white/50 max-w-lg mx-auto">O que nos guia todos os dias</p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: Target,
                label: "Missão",
                text: "Oferecer um espaço de lazer completo, seguro e acolhedor para que cada cliente viva momentos únicos e inesquecíveis com quem ama.",
              },
              {
                icon: Eye,
                label: "Visão",
                text: "Ser o espaço de eventos mais reconhecido e desejado de São Paulo, referência em qualidade, atendimento e experiência do cliente.",
              },
              {
                icon: Heart,
                label: "Propósito",
                text: "Acreditamos que celebrar a vida é um direito de todos. Nosso propósito é tornar cada festa possível, independente do tamanho ou orçamento.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[oklch(0.65_0.18_45)]/50 hover:bg-[oklch(0.65_0.18_45)]/5 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${ORANGE}15` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: ORANGE }} />
                </div>
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ORANGE }}>
                  {item.label}
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
 
          {/* Valores */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-white">Nossos Valores</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[oklch(0.55_0.15_220)]/50 transition-all duration-300"
              >
                <value.icon className="w-6 h-6 mb-3" style={{ color: BLUE }} />
                <h4 className="text-white font-bold text-sm mb-2">{value.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── TIMELINE ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: BLUE }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: BLUE }}>
                Nossa Trajetória
              </span>
              <div className="h-px w-8" style={{ backgroundColor: BLUE }} />
            </div>
            <h2 className="text-4xl font-black text-foreground">6 anos de história</h2>
          </div>
 
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Linha vertical */}
              <div
                className="absolute left-[60px] top-0 bottom-0 w-px"
                style={{ backgroundColor: `${BLUE}30` }}
              />
 
              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <div key={item.year} className="flex gap-8 items-start relative">
                    {/* Ano */}
                    <div className="shrink-0 w-[44px] text-right">
                      <span className="text-sm font-black" style={{ color: i === timeline.length - 1 ? ORANGE : BLUE }}>
                        {item.year}
                      </span>
                    </div>
 
                    {/* Bolinha */}
                    <div className="relative shrink-0 mt-1">
                      <div
                        className="w-4 h-4 rounded-full border-2 border-background"
                        style={{
                          backgroundColor: i === timeline.length - 1 ? ORANGE : BLUE,
                          boxShadow: `0 0 0 4px ${i === timeline.length - 1 ? ORANGE : BLUE}20`,
                        }}
                      />
                    </div>
 
                    {/* Conteúdo */}
                    <div className="flex-1 pb-2">
                      <h3 className="font-black text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── EQUIPE ── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: ORANGE }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: ORANGE }}>
                Quem faz acontecer
              </span>
              <div className="h-px w-8" style={{ backgroundColor: ORANGE }} />
            </div>
            <h2 className="text-4xl font-black text-foreground">Nossa Equipe</h2>
            <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
              Pessoas apaixonadas pelo que fazem, comprometidas em tornar cada evento único
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-background rounded-2xl border border-border p-8 hover:shadow-xl hover:border-opacity-50 transition-all duration-300 group"
                style={{ "--hover-border": member.accentColor } as React.CSSProperties}
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black mb-5"
                  style={{ backgroundColor: member.accentColor }}
                >
                  {member.initial}
                </div>
 
                <h3 className="text-xl font-black text-foreground mb-0.5">{member.name}</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: member.accentColor }}>
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {member.description}
                </p>
 
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: `${member.accentColor}12`,
                        color: member.accentColor,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <Star className="w-10 h-10 mx-auto mb-4" style={{ color: ORANGE }} />
          <h2 className="text-4xl font-black text-foreground mb-3">
            Faça parte da nossa história
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Cada evento realizado aqui é mais um capítulo da Rane Lazer. Queremos que o próximo seja o seu. Fale com a gente e vamos criar algo incrível juntos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="font-bold px-10 rounded-xl text-white"
              style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}
            >
              <Link href="/contato">
                Falar com a Equipe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <Link href="/estrutura">Conhecer o Espaço</Link>
            </Button>
          </div>
        </div>
      </section>
 
      <Footer />
    </div>
  )
}