"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Painel Administrativo</h1>
        <p>Aqui você vai gerenciar produtos, estoque e eventos.</p>
      </section>

      <Footer />
    </div>
  )
}