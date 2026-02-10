"use client"

import React, { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Send, Loader2 } from "lucide-react"

type FormDataType = {
  name: string
  email: string
  phone: string
  eventType: string
  eventDate: string
  guests: string
  message: string
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState<FormDataType>({
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target

    if (name === "phone") value = formatPhone(value)

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    const emailURL = `mailto:ranelazer@gmail.com?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(mensagem)}`

    if (typeof window !== "undefined") {
      window.open(whatsappURL, "_blank")

      setTimeout(() => {
        window.location.href = emailURL
      }, 1200)
    }

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
      action:
        "https://www.instagram.com/rane_lazer",
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
      action:
        "https://www.google.com/maps/search/Rua+Valdemar+Pereira+Da+Silva+226",
    },
  ]

  const businessHours = [
    { day: "Segunda a Sexta", hours: "8h às 18h" },
    { day: "Sábados", hours: "8h às 22h" },
    { day: "Domingos e Feriados", hours: "8h às 22h" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Entre em Contato</h1>
        <p className="text-gray-600 mb-10">
          Preencha o formulário abaixo e entraremos em contato em breve
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {React.createElement(item.icon, {
                      className:
                        "h-6 w-6 text-primary flex-shrink-0 mt-1",
                    })}
                    <div>
                      <h3 className="font-semibold text-lg">
                        {item.title}
                      </h3>
                      <a
                        href={item.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        {item.info}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-0 shadow-sm bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {businessHours.map((hour, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{hour.day}</span>
                    <span className="text-primary font-semibold">
                      {hour.hours}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input name="name" placeholder="Nome" value={formData.name} onChange={handleInputChange} />
                  <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                  <Input name="phone" placeholder="Telefone" value={formData.phone} onChange={handleInputChange} />
                  <Textarea name="message" placeholder="Mensagem" value={formData.message} onChange={handleInputChange} />

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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}