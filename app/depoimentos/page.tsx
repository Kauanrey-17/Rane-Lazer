"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Users,
  Heart,
  Award,
} from "lucide-react";

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria Santos",
      event: "Aniversário de 50 anos",
      rating: 5,
      date: "Dezembro 2023",
      text: "Lugar maravilhoso! Comemoramos meus 50 anos e foi perfeito. A estrutura é excelente, piscina limpa, churrasqueiras funcionando perfeitamente. A equipe foi muito atenciosa e nos ajudou em tudo. Recomendo de olhos fechados!",
      image: "/placeholder.svg?key=testimonial1",
    },
    {
      id: 2,
      name: "João Silva",
      event: "Confraternização da Empresa",
      rating: 5,
      date: "Janeiro 2024",
      text: "Fizemos nossa confraternização de fim de ano aqui e superou todas as expectativas. O espaço é amplo, bem organizado e tem tudo que precisamos. Os funcionários são muito profissionais. Já estamos planejando o próximo evento aqui!",
      image: "/placeholder.svg?key=testimonial2",
    },
    {
      id: 3,
      name: "Ana Costa",
      event: "Festa de 15 anos da filha",
      rating: 5,
      date: "Novembro 2023",
      text: "A festa da minha filha foi um sonho realizado! O local é lindo, muito bem cuidado e seguro. As meninas adoraram a piscina e o espaço para dançar. Tudo funcionou perfeitamente, desde a decoração até a limpeza. Muito obrigada!",
      image: "/placeholder.svg?key=testimonial3",
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      event: "Churrasco de Família",
      rating: 5,
      date: "Outubro 2023",
      text: "Reunimos toda a família para um churrasco e foi incrível! As churrasqueiras são excelentes, o espaço é muito confortável e tem área para as crianças brincarem. Preço justo e atendimento nota 10. Voltaremos com certeza!",
      image: "/placeholder.svg?key=testimonial4",
    },
    {
      id: 5,
      name: "Fernanda Lima",
      event: "Casamento Civil",
      rating: 5,
      date: "Setembro 2023",
      text: "Celebramos nosso casamento civil aqui e foi mágico! O ambiente é muito acolhedor, a área verde é linda para as fotos e a equipe nos ajudou em todos os detalhes. Nossos convidados elogiaram muito o local. Recomendamos!",
      image: "/placeholder.svg?key=testimonial5",
    },
    {
      id: 6,
      name: "Roberto Mendes",
      event: "Aniversário de 10 anos do filho",
      rating: 5,
      date: "Agosto 2023",
      text: "Festa perfeita para crianças! Meu filho e os amiguinhos se divertiram muito na piscina e no playground. O local é muito seguro, limpo e organizado. Os pais também aproveitaram bastante. Parabéns pela excelência no atendimento!",
      image: "/placeholder.svg?key=testimonial6",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Eventos Realizados" },
    { icon: Star, value: "4.9", label: "Avaliação Média" },
    { icon: Heart, value: "100%", label: "Clientes Satisfeitos" },
    { icon: Award, value: "5", label: "Anos de Experiência" },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10"
        style={{
          backgroundImage:
            "url('/ChatGPT Image 10 de fev. de 2026, 14_23_09.png')",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Depoimentos
            </h1>
            <p className="text-xl text-muted-foreground">
              Veja o que nossos clientes falam sobre suas experiências na Rane
              Lazer
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Depoimento em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de clientes que confiaram em nosso espaço para
              seus momentos especiais
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <Quote className="h-8 w-8 text-primary mb-4 mx-auto lg:mx-0" />
                    <p className="text-lg text-muted-foreground mb-6 italic">
                      "{testimonials[currentTestimonial].text}"
                    </p>

                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>

                    <div className="text-center lg:text-left">
                      <h4 className="font-semibold text-foreground text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-primary font-medium">
                        {testimonials[currentTestimonial].event}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {testimonials[currentTestimonial].date}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-full bg-transparent"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-full bg-transparent"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Todos os Depoimentos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leia mais histórias de sucesso e momentos especiais vividos em
              nosso espaço
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-border hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm line-clamp-4">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary text-xs font-medium truncate">
                          {testimonial.event}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Invitation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Já foi nosso cliente?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Compartilhe sua experiência conosco! Seu depoimento ajuda outras
              pessoas a conhecerem nosso trabalho e nos motiva a continuar
              oferecendo o melhor serviço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/*Altere apenas o Link do botão "Deixar Depoimento*/}
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                {/* Adicionamos um parâmetro na URL para o formulário saber que é depoimento */}
                <Link href="/contato?origem=depoimento">Deixar Depoimento</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/galeria">Ver Galeria</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Seja o próximo a criar memórias especiais
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Junte-se aos nossos clientes satisfeitos e reserve já o seu espaço
            para momentos inesquecíveis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-3"
            >
              <Link href="/contato">Reservar Agora</Link>
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

      <Footer />
    </div>
  );
}
