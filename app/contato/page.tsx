"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Send,
  Loader2,
} from "lucide-react";

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guests: string;
  message: string;
};

function ContactContent() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  // Verifica se o usuário veio para deixar um depoimento
  const eDepoimento = searchParams.get("origem") === "depoimento";

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    message: "",
  });

  const formatPhone = (value: string) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    let { name, value } = e.target;
    if (name === "phone") value = formatPhone(value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Preencha Nome, Email e Telefone");
      setLoading(false);
      return;
    }

    // Define o título e a estrutura da mensagem baseada no tipo (Orçamento ou Depoimento)
    const titulo = eDepoimento
      ? "🌟 Novo Depoimento"
      : "📩 Novo Pedido de Orçamento";

    const mensagemZap = `
${titulo}

👤 Nome: ${formData.name}
📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}
${
  !eDepoimento
    ? `🎉 Evento: ${formData.eventType || "Não informado"}
📅 Data: ${formData.eventDate || "Não informada"}
👥 Convidados: ${formData.guests || "Não informado"}`
    : ""
}

📝 Mensagem/Depoimento:
${formData.message || "Nenhuma"}
    `;

    const numero = "5511987772482";
    const whatsappURL = `https://wa.me/${numero}?text=${encodeURIComponent(mensagemZap)}`;

    // Dispara para o WhatsApp
    window.open(whatsappURL, "_blank");

    // Opcional: Enviar também via Mailto (ou sua API Route se preferir)
    const assuntoEmail = eDepoimento
      ? "Depoimento de Cliente - Site"
      : "Orçamento de Evento - Site";
    const emailURL = `mailto:ranelazer@gmail.com?subject=${encodeURIComponent(assuntoEmail)}&body=${encodeURIComponent(mensagemZap)}`;

    setTimeout(() => {
      window.location.href = emailURL;
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guests: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">
        {eDepoimento ? "Deixe seu Depoimento" : "Entre em Contato"}
      </h1>
      <p className="text-gray-600 mb-10">
        {eDepoimento
          ? "Compartilhe sua experiência na Rane Lazer com a gente!"
          : "Preencha o formulário abaixo e entraremos em contato em breve"}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lado Esquerdo: Info de Contato (Seu código original aqui) */}
        <div className="space-y-6">
          <Card className="border-0 shadow-sm bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" /> Horários
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Finais de Semana: 8h às 22h</p>
            </CardContent>
          </Card>
        </div>

        {/* Lado Direito: Formulário */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Nome Completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="phone"
                    placeholder="Telefone / WhatsApp"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {!eDepoimento && (
                  <>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="" disabled>
                        Selecione o tipo de evento
                      </option>
                      <option value="Aniversário">Aniversário</option>
                      <option value="Casamento">Casamento</option>
                      <option value="Outro">Outro</option>
                    </select>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                      />
                      <Input
                        name="guests"
                        type="number"
                        placeholder="Nº de Convidados"
                        value={formData.guests}
                        onChange={handleInputChange}
                      />
                    </div>
                  </>
                )}

                <Textarea
                  name="message"
                  placeholder={
                    eDepoimento
                      ? "Escreva aqui seu depoimento..."
                      : "Conte mais sobre o que você precisa..."
                  }
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-[120px]"
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary py-6 text-lg"
                >
                  {loading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {eDepoimento ? "Enviar Depoimento" : "Enviar Solicitação"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* O Suspense é obrigatório no Next.js ao usar useSearchParams */}
      <Suspense
        fallback={<div className="py-20 text-center">Carregando...</div>}
      >
        <ContactContent />
      </Suspense>
      <Footer />
    </div>
  );
}
