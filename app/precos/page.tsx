import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Check, Clock, Users, Calendar, Star, Gift } from "lucide-react"

export default function PricingPage() {
  const packages = [
    {
      name: "Pacote Básico",
      price: "R$ 800",
      period: "por 6 horas",
      description: "Ideal para reuniões familiares e pequenas celebrações",
      capacity: "Até 30 pessoas",
      features: [
        "Uso da piscina",
        "1 churrasqueira",
        "Wi-Fi gratuito",
        "Mesas e cadeiras 14",
        "2 Geladeiras",
        "Som basico",
      ],
      popular: false,
      color: "border-border",
    },
    {
      name: "Pacote Completo",
      price: "R$ 1.200",
      period: "por 8 horas",
      description: "Perfeito para festas de aniversário e eventos familiares",
      capacity: "Até 50 pessoas",
      features: [
        "Uso da piscina aquecida",
        "Mesas e cadeiras 14",
        "Churrasqueira",
        "Área gourmet",
        "Sistema de som bluetooth",
        "Wi-Fi gratuito",
        "2 Geladeiras",
      ],
      popular: true,
      color: "border-primary",
    },
    {
      name: "Pacote Premium",
      price: "R$ 1.800",
      period: "por 10 horas",
      description: "Para grandes eventos e celebrações especiais",
      capacity: "Até 70 pessoas",
      features: [
        "Uso completo do espaço",
        "Acesso a Area gourmet",
        "Piscina aquecida",
        "Sistema de som Paredão",
        "Iluminação especial",
        "Wi-Fi gratuito",
        "Limpeza incluída",
        "Suporte de equipe",
        "2 Geladeiras",
      ],
      popular: false,
      color: "border-secondary",
    },
  ]

  const additionalServices = [
    { service: "Hora adicional", price: "R$ 100" },
    { service: "Decoração básica", price: "R$ 200" },
    { service: "Serviço de garçom", price: "R$ 150/dia" },
    { service: "Equipamento de som extra", price: "R$ 100" },
    { service: "Limpeza pós-evento", price: "R$ 150" },
    { service: "Segurança adicional", price: "R$ 200/dia" },
  ]

  const discounts = [
    {
      title: "Desconto Antecipação",
      description: "Reserve com 30 dias de antecedência",
      discount: "10% OFF",
      icon: Calendar,
    },
    {
      title: "Cliente Fidelidade",
      description: "A partir do 3º evento no ano",
      discount: "15% OFF",
      icon: Star,
    },
    {
      title: "Eventos Corporativos",
      description: "Para empresas e organizações",
      discount: "20% OFF",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10"
      style={{ backgroundImage: "url('/ChatGPT Image 10 de fev. de 2026, 14_23_09.png')" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Preços Transparentes</h1>
            <p className="text-xl text-muted-foreground">
              Pacotes flexíveis para todos os tipos de eventos, sem taxas ocultas
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nossos Pacotes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o pacote ideal para seu evento. Todos incluem limpeza e estrutura básica
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.color} ${pkg.popular ? "ring-2 ring-primary" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">Mais Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground ml-2">{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{pkg.description}</p>
                  <Badge variant="secondary" className="mt-3 w-fit mx-auto">
                    {pkg.capacity}
                  </Badge>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <Link href="/contato">Solicitar Orçamento</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Serviços Adicionais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personalize seu evento com nossos serviços extras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((item, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 flex justify-between items-center">
                  <span className="text-foreground font-medium">{item.service}</span>
                  <span className="text-primary font-bold">{item.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Descontos Especiais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aproveite nossas promoções e economize no seu evento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {discounts.map((discount, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <discount.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{discount.title}</h3>
                  <p className="text-muted-foreground mb-4">{discount.description}</p>
                  <Badge variant="secondary" className="text-lg px-4 py-2 bg-primary/10 text-primary">
                    {discount.discount}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Condições Gerais</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Horários e Reservas
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Funcionamento: 8h às 22h (todos os dias)</li>
                  <li>• Reserva mínima: 6 horas</li>
                  <li>• Antecedência mínima: 7 dias</li>
                  <li>• Sinal: 50% do valor total</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Gift className="h-5 w-5 text-primary mr-2" />O que está incluído
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Caixinha de som </li>
                  <li>• Mesas e cadeiras básicas</li>
                  <li>• 2 Geladeiras</li>
                  <li>• Segurança e monitoramento</li>
                  <li>• Churrasqueira e piscina</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg">
              <p className="text-muted-foreground text-center">
                <strong>Importante:</strong> Os preços podem variar em feriados e datas comemorativas. Entre em contato
                para um orçamento personalizado e condições especiais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Pronto para reservar?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para um orçamento personalizado e garanta já a data do seu evento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contato">Solicitar Orçamento</Link>
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
