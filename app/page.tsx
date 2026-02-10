import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Waves, TreePine, Users, Shield, MapPin, Clock, ChefHat, Car, Wifi } from "lucide-react"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HomePage() {
  const features = [
    {
      icon: Waves,
      title: "Piscinas",
      description: "Piscinas amplas e limpas para toda a família se refrescar",
    },
    {
      icon: ChefHat,
      title: "Churrasqueiras",
      description: "Churrasqueiras equipadas para o melhor churrasco",
    },
    {
      icon: TreePine,
      title: "Área Verde",
      description: "Ambiente natural com muito verde e sombra",
    },
    {
      icon: Users,
      title: "Espaço Amplo",
      description: "Capacidade para eventos de todos os tamanhos",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Local seguro e monitorado 24 horas",
    },
    {
      icon: Car,
      title: "Estacionamento",
      description: "Estacionamento gratuito para todos os convidados",
    },
  ]

  const differentials = [
    {
      icon: MapPin,
      title: "Localização Privilegiada",
      description: "Fácil acesso e próximo ao centro da cidade",
    },
    {
      icon: Clock,
      title: "Atendimento Personalizado",
      description: "Equipe dedicada para tornar seu evento perfeito",
    },
    {
      icon: Wifi,
      title: "Comodidades Completas",
      description: "Wi-Fi, som ambiente e toda infraestrutura necessária",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/beautiful-leisure-area-with-pool--bbq-area--green-.jpg"
            alt="Rane Lazer - Espaço de Lazer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Seu espaço ideal para momentos inesquecíveis
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-pretty opacity-90">
            Piscinas, churrasqueiras, área verde e toda estrutura para suas festas e eventos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
              <Link href="/contato">Faça sua Reserva</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-foreground bg-transparent"
            >
              <Link href="/galeria">Ver Galeria</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nossa Estrutura Completa</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para tornar seu evento especial e inesquecível
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Por que escolher a Rane Lazer?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossos diferenciais fazem toda a diferença no seu evento
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para criar momentos especiais?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e reserve já o seu espaço para o próximo evento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contato">Agendar Visita</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/precos">Ver Preços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Eventos Realizados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground">Atendimento</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5★</div>
              <div className="text-muted-foreground">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  )
}
