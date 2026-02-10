import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Target, Eye, Users, Award } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Paixão pelo que fazemos",
      description: "Amamos criar momentos especiais e ver a alegria dos nossos clientes",
    },
    {
      icon: Users,
      title: "Foco no cliente",
      description: "Cada evento é único e merece atenção personalizada",
    },
    {
      icon: Award,
      title: "Excelência em serviço",
      description: "Buscamos sempre superar as expectativas dos nossos clientes",
    },
  ]

  const team = [
    {
      name: "Maria Silva",
      role: "Fundadora & Diretora",
      description: "15 anos de experiência em eventos e hospitalidade",
    },
    {
      name: "João Santos",
      role: "Gerente de Operações",
      description: "Especialista em logística e coordenação de eventos",
    },
    {
      name: "Ana Costa",
      role: "Atendimento ao Cliente",
      description: "Dedicada a tornar cada experiência única e especial",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Sobre a Rane Lazer</h1>
            <p className="text-xl text-muted-foreground">
              Uma história de dedicação em criar momentos inesquecíveis para famílias e empresas
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Rane Lazer nasceu do sonho de criar um espaço onde famílias e amigos pudessem se reunir para
                  celebrar os momentos mais importantes da vida. Fundada em 2015, nossa empresa começou como um pequeno
                  espaço de lazer e cresceu para se tornar referência na região.
                </p>
                <p>
                  Ao longo dos anos, investimos constantemente em melhorias na infraestrutura, sempre pensando no
                  conforto e segurança dos nossos clientes. Hoje, oferecemos uma das mais completas estruturas de lazer
                  da cidade, com piscinas, churrasqueiras, área verde e muito mais.
                </p>
                <p>
                  Nossa missão é proporcionar experiências únicas e memoráveis, cuidando de cada detalhe para que você
                  possa focar no que realmente importa: aproveitar momentos especiais com quem você ama.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder-rbcn9.png"
                alt="Família aproveitando o espaço de lazer"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="text-center border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Proporcionar experiências únicas e memoráveis em um ambiente seguro, confortável e acolhedor,
                  superando as expectativas dos nossos clientes.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida como a melhor opção em espaços de lazer da região, sendo referência em qualidade,
                  atendimento e inovação.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="text-center border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Valores</h3>
                <p className="text-muted-foreground">
                  Paixão pelo que fazemos, respeito aos clientes, compromisso com a qualidade e responsabilidade social
                  e ambiental.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Detail */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nossos Diferenciais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que nos torna únicos e especiais no mercado de espaços de lazer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissionais dedicados e apaixonados por criar experiências únicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Conheça nossa estrutura</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Venha conhecer pessoalmente nosso espaço e descobrir por que somos a escolha certa para seu evento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/estrutura">Ver Estrutura</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contato">Agendar Visita</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
