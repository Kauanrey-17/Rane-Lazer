"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show the WhatsApp button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show tooltip for first-time visitors
      const hasSeenTooltip = localStorage.getItem("whatsapp-tooltip-seen")
      if (!hasSeenTooltip) {
        setShowTooltip(true)
        setTimeout(() => {
          setShowTooltip(false)
          localStorage.setItem("whatsapp-tooltip-seen", "true")
        }, 5000)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511987772482"
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais informações sobre o espaço de lazer da Rane Lazer para meu evento.",
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 w-64 bg-white border border-border rounded-lg shadow-lg p-4 animate-in slide-in-from-bottom-2">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="pr-6">
            <h4 className="font-semibold text-foreground mb-1">Fale conosco no WhatsApp!</h4>
            <p className="text-sm text-muted-foreground">
              Tire suas dúvidas e faça sua reserva de forma rápida e prática.
            </p>
          </div>
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-border"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        size="sm"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
