"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { useCart } from "@/context/CartContext";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  estoque: number;
  imagem?: string;
};

export default function CardapioPage() {
  const [itens, setItens] = useState<Produto[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function carregarProdutos() {
      const { data, error } = await supabase
        .from("produtos")
        .select("*")
        .gt("estoque", 0);

      if (!error && data) {
        setItens(data);
      }
    }

    carregarProdutos();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Cardápio</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {itens.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-4">
                {/* IMAGEM */}
                {item.imagem ? (
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Sem imagem</span>
                  </div>
                )}

                {/* NOME */}
                <h3 className="font-semibold text-lg">{item.nome}</h3>

                {/* PREÇO */}
                <p className="text-muted-foreground mb-2">R$ {item.preco}</p>

                {/* ESTOQUE */}
                <p className="text-sm mb-4">Estoque: {item.estoque}</p>

                {/* BOTÃO */}
                <Button onClick={() => addToCart(item)} className="w-full">
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
