"use client"
 
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
 
const ORANGE = "oklch(0.65 0.18 45)"
 
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
 
  const navigation = [
    { name: "Home",           href: "/" },
    { name: "Sobre",          href: "/sobre" },
    { name: "Estrutura",      href: "/estrutura" },
    { name: "Bar & Cardápio", href: "/bar" },
    { name: "Eventos",        href: "/eventos" },
    { name: "Preços",         href: "/precos" },
    { name: "Galeria",        href: "/galeria" },
    { name: "Depoimentos",    href: "/depoimentos" },
    { name: "Contato",        href: "/contato" },
    { name: "Agenda",         href: "/agendar" },
  ]
 
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
 
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Gemini_Generated_Image_45h85n45h85n45h8 (1).png"
                alt="Rane Lazer - Momentos de Alegria e Celebração"
                width={320}
                height={120}
                className="h-28 w-auto object-contain"
                priority
              />
            </Link>
          </div>
 
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-bold transition-opacity duration-200 hover:opacity-70"
                style={{ color: ORANGE }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
 
          {/* CTA Desktop */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="font-bold rounded-xl text-white border-0"
              style={{ backgroundColor: ORANGE }}
            >
              <Link href="/contato">Reservar Agora</Link>
            </Button>
          </div>
 
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
 
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-card rounded-xl mt-2 border border-border shadow-xl">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2.5 rounded-lg text-sm font-bold transition-opacity duration-200 hover:opacity-70"
                  style={{ color: ORANGE }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-2 pt-2">
                <Button
                  asChild
                  className="w-full font-bold rounded-xl text-white border-0"
                  style={{ backgroundColor: ORANGE }}
                >
                  <Link href="/contato" onClick={() => setIsMenuOpen(false)}>
                    Reservar Agora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}