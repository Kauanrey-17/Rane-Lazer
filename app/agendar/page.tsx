"use client"

import React, { useEffect, Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar as CalendarIcon, Clock, CheckCircle2, ShieldCheck } from "lucide-react"
import Cal, { getCalApi } from "@calcom/embed-react"

function ScheduleContent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { 
        theme: "light", 
        styles: { branding: { brandColor: "--primary" } }, // Use a cor primária do seu site aqui
        hideEventTypeDetails: false,
        layout: "month_view" 
      });
    })();
  }, []);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Reserve sua Data</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Consulte nossa disponibilidade em tempo real e agende sua visita ou evento. 
          Sincronizado diretamente com nossa administração.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Benefícios/Instruções - Lado Esquerdo */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="border-0 shadow-sm bg-primary/5">
            <CardContent className="p-6 space-y-6">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">Confirmação Imediata</h3>
                  <p className="text-xs text-muted-foreground">Sua data reservada na hora.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CalendarIcon className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">Agenda Atualizada</h3>
                  <p className="text-xs text-muted-foreground">Datas sincronizadas com o iPhone.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">Segurança</h3>
                  <p className="text-xs text-muted-foreground">Seus dados protegidos.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="p-4 rounded-xl border border-dashed border-border text-center">
            <p className="text-xs text-muted-foreground">
              Dúvidas sobre horários específicos? <br/>
              <a href="/contato" className="text-primary underline">Fale conosco</a>
            </p>
          </div>
        </div>

        {/* Widget do Calendário - Lado Direito */}
        <div className="lg:col-span-3">
          <Card className="border-0 shadow-lg overflow-hidden min-h-[600px]">
            <Cal
              calLink="rane-lazer/reserva" // IMPORTANTE: Substitua pelo seu link do Cal.com
              style={{ width: "100%", height: "100%", minHeight: "600px" }}
              config={{ layout: 'month_view' }}
            />
          </Card>
        </div>
      </div>
    </section>
  )
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Suspense fallback={
        <div className="py-40 text-center flex flex-col items-center gap-4">
          <Clock className="h-10 w-10 animate-spin text-primary" />
          <p>Carregando agenda...</p>
        </div>
      }>
        <ScheduleContent />
      </Suspense>
      <Footer />
    </div>
  )
}