"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, Waves, ChefHat, Users, TreePine, Camera } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = [
    { id: "all", name: "Todas", icon: Camera },
    { id: "piscinas", name: "Piscinas", icon: Waves },
    { id: "churrasqueiras", name: "Churrasqueiras", icon: ChefHat },
    { id: "eventos", name: "Eventos", icon: Users },
    { id: "area-verde", name: "Área Verde", icon: TreePine },
  ]

  const images = [
    {
      id: 1,
      src: "/placeholder.svg?key=gallery1",
      alt: "Piscina principal com deck",
      category: "piscinas",
      title: "Piscina Principal",
      description: "Piscina ampla com deck molhado e área de descanso",
    },
    {
      id: 2,
      src: "/placeholder.svg?key=gallery2",
      alt: "Área de churrasqueiras cobertas",
      category: "churrasqueiras",
      title: "Churrasqueiras Cobertas",
      description: "Espaço coberto com múltiplas churrasqueiras profissionais",
    },
    {
      id: 3,
      src: "/placeholder.svg?key=gallery3",
      alt: "Festa de aniversário no salão",
      category: "eventos",
      title: "Festa de Aniversário",
      description: "Celebração familiar no salão climatizado",
    },
    {
      id: 4,
      src: "/placeholder.svg?key=gallery4",
      alt: "Jardim com playground",
      category: "area-verde",
      title: "Área Verde",
      description: "Jardim amplo com playground e área de descanso",
    },
    {
      id: 5,
      src: "/placeholder.svg?key=gallery5",
      alt: "Piscina infantil",
      category: "piscinas",
      title: "Piscina Infantil",
      description: "Piscina segura para crianças com profundidade adequada",
    },
    {
      id: 6,
      src: "/placeholder.svg?key=gallery6",
      alt: "Churrasco em família",
      category: "churrasqueiras",
      title: "Momento Família",
      description: "Família aproveitando o espaço de churrasqueira",
    },
    {
      id: 7,
      src: "/placeholder.svg?key=gallery7",
      alt: "Evento corporativo",
      category: "eventos",
      title: "Evento Corporativo",
      description: "Confraternização de empresa no espaço completo",
    },
    {
      id: 8,
      src: "/placeholder.svg?key=gallery8",
      alt: "Quadra de vôlei",
      category: "area-verde",
      title: "Quadra de Vôlei",
      description: "Espaço para atividades esportivas e recreação",
    },
    {
      id: 9,
      src: "/placeholder.svg?key=gallery9",
      alt: "Vista geral do espaço",
      category: "all",
      title: "Vista Geral",
      description: "Visão panorâmica de todo o espaço de lazer",
    },
  ]

  const filteredImages = selectedCategory === "all" ? images : images.filter((img) => img.category === selectedCategory)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Galeria de Fotos</h1>
            <p className="text-xl text-muted-foreground">
              Veja como nosso espaço pode ser perfeito para seu próximo evento
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer bg-card border border-border hover:shadow-lg transition-all duration-300"
                onClick={() => openModal(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>

                <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground">
                  {categories.find((cat) => cat.id === image.category)?.name || "Geral"}
                </Badge>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Nenhuma imagem encontrada nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={filteredImages[selectedImage].src || "/placeholder.svg"}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
              <h3 className="font-semibold text-lg mb-1">{filteredImages[selectedImage].title}</h3>
              <p className="text-sm opacity-90">{filteredImages[selectedImage].description}</p>
            </div>

            {/* Close Button */}
            <Button variant="secondary" size="sm" className="absolute top-4 right-4" onClick={closeModal}>
              <X className="h-4 w-4" />
            </Button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Momentos Especiais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada foto conta uma história de alegria e celebração no nosso espaço
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Eventos Fotografados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Fotos na Galeria</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Sorrisos Capturados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground">Novas Memórias</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Crie suas próprias memórias</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Reserve nosso espaço e seja o próximo a criar momentos inesquecíveis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
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
  )
}
