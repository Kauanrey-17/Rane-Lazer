import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Waves, ChefHat, TreePine, Users, Car, Wifi, Music, Utensils, Shield, Camera } from "lucide-react"

export default function StructurePage() {
  const spaces = [
    {
      id: "piscinas",
      title: "Área das Piscinas",
      capacity: "Até 100 pessoas",
      description: "Uma piscinas com diferentes profundidades, ideais para adultos e crianças",
      features: ["Piscina adulto (1,40m)", "Piscina infantil (0,60m)", "Deck molhado", "Área de descanso"],
      image: "/WhatsApp Image 2026-02-10 at 12.56.07.jpeg",
      icon: Waves,
    },
    {
      id: "churrasqueiras",
      title: "Área de Churrasqueiras",
      capacity: "Até 70 pessoas",
      description: "Espaço coberto com churrasqueiras profissionais e área de preparo completa",
      features: [
        "1 churrasqueiras grandes",
        "Bancadas de apoio",
        "Pia com água corrente",
        "Geladeira disponível",
        "Área coberta",
      ],
      image: "/WhatsApp Image 2026-02-10 at 12.56.17.jpeg",
      icon: ChefHat,
    },
    {
      id: "salao",
      title: "Salão Principal",
      capacity: "Até 100 pessoas",
      description: "Salão amplo e aberto, perfeito para festas e eventos corporativos",
      features: ["Sistema de som", "Iluminação especial", "Palco Pequeno", "Banheiros próximos"],
      image: "/WhatsApp Image 2026-02-10 at 20.53.06.jpeg",
      icon: Users,
    },
  ]

  const amenities = [
    { icon: Car, title: "Estacionamento Na Rua", description: "Pode estacionar na rua em volta do local" },
    { icon: Wifi, title: "Wi-Fi Gratuito", description: "Internet de alta velocidade em todo o espaço" },
    { icon: Music, title: "Sistema de Som", description: "Equipamento profissional disponível" },
    { icon: Utensils, title: "Cozinha Equipada", description: "Geladeira, fogão e utensílios básicos" },
    { icon: Shield, title: "Segurança 24h", description: "Monitoramento e segurança completa" },
    { icon: Camera, title: "Área para Fotos", description: "Cenários naturais para suas lembranças" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10"
      style={{ backgroundImage: "url('/ChatGPT Image 10 de fev. de 2026, 14_23_09.png')" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Nossa Estrutura</h1>
            <p className="text-xl text-muted-foreground">
              Conheça todos os espaços e comodidades que temos para tornar seu evento perfeito
            </p>
          </div>
        </div>
      </section>

      {/* Spaces Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nossos Espaços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada área foi pensada para proporcionar conforto, diversão e momentos inesquecíveis
            </p>
          </div>

          <div className="space-y-16">
            {spaces.map((space, index) => (
              <div
                key={space.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <space.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{space.title}</h3>
                      <Badge variant="secondary" className="mt-1">
                        {space.capacity}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-lg">{space.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Características:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {space.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <img
                    src={space.image || "/placeholder.svg"}
                    alt={space.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Comodidades Incluídas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para um evento completo e sem preocupações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground text-sm">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Capacidade Total</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">70 </div>
                <div className="text-muted-foreground">Pessoas (evento completo, aumento somente com negociação)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">14</div>
                <div className="text-muted-foreground">Conjunto de cadeiras</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">300m²</div>
                <div className="text-muted-foreground">Área total do espaço</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nosso espaço pode ser adaptado para eventos de diferentes tamanhos, desde reuniões íntimas até grandes
              celebrações
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Pronto para conhecer pessoalmente?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende uma visita e veja como nosso espaço pode ser perfeito para seu próximo evento
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
              <Link href="/galeria">Ver Galeria</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
