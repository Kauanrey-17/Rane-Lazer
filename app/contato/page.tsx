"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Calendar, Users, Send, Loader2 } from "lucide-react"

export default function ContactPage() {

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    message: "",
  })

  const formatPhone = (value: string) => {
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target

    if (name === "phone") value = formatPhone(value)

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Preencha Nome, Email e Telefone")
      setLoading(false)
      return
    }

    const mensagem = `
📩 Novo Pedido de Orçamento

👤 Nome: ${formData.name}
📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}

🎉 Evento: ${formData.eventType || "Não informado"}
📅 Data: ${formData.eventDate || "Não informada"}
👥 Convidados: ${formData.guests || "Não informado"}

📝 Mensagem:
${formData.message || "Nenhuma"}
    `

    const numero = "5511987772482"
    const whatsappURL = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

    const assunto = "Novo Pedido de Orçamento - Site"
    const emailURL = `mailto:ranelazer@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`

    window.open(whatsappURL, "_blank")

    setTimeout(() => {
      window.location.href = emailURL
    }, 1200)

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guests: "",
      message: "",
    })

    setTimeout(() => setLoading(false), 1500)
  }

  const contactInfo = [
    {
      icon: Instagram,
      title: "Instagram",
      info: "rane_lazer",
      description: "Atendimento de segunda a domingo",
      action: "https://www.instagram.com/rane_lazer?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(11) 98777-2482",
      description: "Resposta rápida e direta",
      action: "https://wa.me/5511987772482",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "ranelazer@gmail.com",
      description: "Resposta em até 24 horas",
      action: "mailto:ranelazer@gmail.com",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua Valdemar Pereira Da Silva, 226",
      description: "Jardim Jaraguá - SP, CEP 05267-180",
      action: "https://www.google.com/maps/search/Rua+Valdemar+Pereira+Da+Silva+226+Jardim+Jaragua+SP+05267-180",
    },
  ]

  const businessHours = [
    { day: "Segunda a Sexta", hours: "8h às 18h" },
    { day: "Sábados", hours: "8h às 22h" },
    { day: "Domingos e Feriados", hours: "8h às 22h" },
  ]

  const socialMedia = [
    { icon: Instagram, name: "Instagram", handle: "@ranelazer", url: "#" },
    { icon: Facebook, name: "Facebook", handle: "Rane Lazer", url: "#" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO / RESTO DO SEU CÓDIGO PERMANECE 100% IGUAL */}

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* TODOS SEUS INPUTS PERMANECEM IGUAIS */}

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Enviar Solicitação
            </>
          )}
        </Button>

      </form>

      <Footer />
    </div>
  )
}
