"use client";
 
import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Wine,
  Beer,
  Flame,
  Candy,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  Phone,
} from "lucide-react";
 
// ─── TIPOS ────────────────────────────────────────────────
type MenuItem = {
  name: string;
  price: number | string;
  description?: string;
  badge?: string;
};
 
type MenuSection = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  accent: string;
  items: MenuItem[];
};
 
// ─── DADOS DO CARDÁPIO ────────────────────────────────────
const menuSections: MenuSection[] = [
  {
    id: "cervejas",
    title: "Cervejas",
    icon: Beer,
    color: "from-amber-950 to-amber-900",
    accent: "amber",
    items: [
      // Long neck
      { name: "Heineken Long 330ml", price: 12, badge: "Long neck" },
      { name: "Corona 330ml", price: 12, badge: "Long neck" },
      { name: "Heineken Zero Álcool 330ml", price: 12, badge: "Long neck" },
      // Lata
      { name: "Original Lata", price: 6, badge: "Lata" },
      { name: "Skol Lata", price: 5, badge: "Lata" },
      { name: "Itaipava Lata", price: 5, badge: "Lata" },
      { name: "Amstel Lata", price: 6, badge: "Lata" },
      { name: "Brahma Duplo Malte Lata", price: 6, badge: "Lata" },
      // Garrafa
      { name: "Heineken Garrafa", price: 18, badge: "Garrafa" },
      { name: "Original Garrafa", price: 14, badge: "Garrafa" },
      { name: "Skol Garrafa", price: 12, badge: "Garrafa" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks & Energéticos",
    icon: Wine,
    color: "from-rose-950 to-rose-900",
    accent: "rose",
    items: [
      { name: "Red Bull", price: 15, description: "Original" },
      { name: "Red Bull Melancia", price: 16, description: "Edição especial" },
      { name: "Ice", price: 15, description: "Gelado e refrescante" },
      {
        name: "Whisky com Gelo + Red Bull — Cavalo",
        price: 40,
        badge: "Combo",
        description: "Old Parr reserve + Red Bull + gelo",
      },
      {
        name: "Whisky com Gelo + Red Bull — Old Parr",
        price: 40,
        badge: "Combo",
        description: "Old Parr + Red Bull + gelo",
      },
      {
        name: "Whisky com Gelo + Red Bull — Buchanan's",
        price: 45,
        badge: "Combo",
        description: "Buchanan's + Red Bull + gelo",
      },
      {
        name: "Whisky com Gelo + Red Bull — Jack Daniel's",
        price: 40,
        badge: "Combo",
        description: "Jack Daniel's + Red Bull + gelo",
      },
    ],
  },
  {
    id: "destilados",
    title: "Destilados & Cachaça",
    icon: Wine,
    color: "from-yellow-950 to-yellow-900",
    accent: "yellow",
    items: [
      {
        name: "Cavalo (Old Parr Reserve) — Dose Pura",
        price: 20,
        description: "Dose 50ml",
      },
      {
        name: "Old Parr — Dose Pura",
        price: 25,
        description: "Dose 50ml",
      },
      {
        name: "Buchanan's — Dose Pura",
        price: 30,
        description: "Dose 50ml",
      },
      {
        name: "Jack Daniel's — Dose Pura",
        price: 25,
        description: "Dose 50ml",
      },
      {
        name: "Cachaça",
        price: "Consulte",
        description: "Pergunte ao bartender",
      },
    ],
  },
  {
    id: "nao-alcoolicos",
    title: "Não Alcoólicos",
    icon: ShoppingBag,
    color: "from-sky-950 to-sky-900",
    accent: "sky",
    items: [
      { name: "Coca-Cola Lata", price: 8 },
      { name: "Guaraná Antarctica Lata", price: 5 },
      { name: "Água Natural 500ml", price: 4 },
      { name: "Água com Gás 500ml", price: 5 },
      { name: "Gelo Coco e Melancia", price: 5, description: "Geladinho artesanal" },
    ],
  },
  {
    id: "porcoes",
    title: "Porções",
    icon: Flame,
    color: "from-orange-950 to-orange-900",
    accent: "orange",
    items: [
      {
        name: "Frango",
        price: 40,
        description: "Porção generosa de frango frito",
        badge: "Popular",
      },
      {
        name: "Peixe Tilápia",
        price: 50,
        description: "Filé de tilápia frito crocante",
      },
      {
        name: "Batata Frita",
        price: 35,
        description: "Crocante por fora, macia por dentro",
        badge: "Clássico",
      },
      {
        name: "Calabresa",
        price: 40,
        description: "Calabresa acebolada grelhada",
      },
      {
        name: "Contra Filé",
        price: 60,
        description: "Corte nobre grelhado na medida",
        badge: "Premium",
      },
    ],
  },
  {
    id: "kids",
    title: "Criançada",
    icon: Candy,
    color: "from-pink-950 to-pink-900",
    accent: "pink",
    items: [
      { name: "Balas", price: "Consulte", description: "Variedades disponíveis" },
      { name: "Docinhos", price: "Consulte", description: "Variedades disponíveis" },
      { name: "Salgadinhos", price: "Consulte", description: "Variedades disponíveis" },
    ],
  },
];
 
// ─── BADGE COLOR MAP ──────────────────────────────────────
const badgeStyles: Record<string, string> = {
  "Long neck":
    "bg-amber-500/20 text-amber-300 border border-amber-500/30",
  Lata: "bg-sky-500/20 text-sky-300 border border-sky-500/30",
  Garrafa: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  Combo: "bg-rose-500/20 text-rose-300 border border-rose-500/30",
  Popular: "bg-orange-500/20 text-orange-300 border border-orange-500/30",
  Clássico: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
  Premium: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
};
 
// ─── COMPONENTE: CARD DE ITEM ─────────────────────────────
function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-white/10 last:border-0 group">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-0.5">
          <span className="text-white/90 text-sm font-medium leading-snug">
            {item.name}
          </span>
          {item.badge && (
            <span
              className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                badgeStyles[item.badge] ?? "bg-white/10 text-white/60"
              }`}
            >
              {item.badge}
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-white/40 text-xs">{item.description}</p>
        )}
      </div>
      <div className="shrink-0 text-right">
        {typeof item.price === "number" ? (
          <span className="text-white font-bold text-sm">
            R$&nbsp;{item.price}
          </span>
        ) : (
          <span className="text-white/50 text-xs italic">{item.price}</span>
        )}
      </div>
    </div>
  );
}
 
// ─── COMPONENTE: SEÇÃO DO CARDÁPIO ────────────────────────
function MenuSectionCard({ section }: { section: MenuSection }) {
  const [open, setOpen] = useState(true);
  const Icon = section.icon;
 
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
      {/* Header da seção */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between px-5 py-4 bg-gradient-to-r ${section.color} hover:opacity-90 transition-opacity`}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
            <Icon className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold text-base tracking-wide">
            {section.title}
          </span>
          <span className="text-white/50 text-xs">
            {section.items.length} itens
          </span>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-white/60" />
        ) : (
          <ChevronDown className="w-4 h-4 text-white/60" />
        )}
      </button>
 
      {/* Itens */}
      {open && (
        <div className="px-5 py-2">
          {section.items.map((item, i) => (
            <MenuItemCard key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
 
// ─── PÁGINA PRINCIPAL ─────────────────────────────────────
export default function BarPage() {
  const [activeFilter, setActiveFilter] = useState<string>("todos");
 
  const filters = [
    { id: "todos", label: "Todos" },
    { id: "cervejas", label: "Cervejas" },
    { id: "drinks", label: "Drinks" },
    { id: "destilados", label: "Destilados" },
    { id: "nao-alcoolicos", label: "Não Alcoólicos" },
    { id: "porcoes", label: "Porções" },
    { id: "kids", label: "Criançada" },
  ];
 
  const visibleSections =
    activeFilter === "todos"
      ? menuSections
      : menuSections.filter((s) => s.id === activeFilter);
 
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
 
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/WhatsApp Image 2026-02-10 at 20.56.18.jpeg"
            alt="Bar da Rane Lazer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-zinc-950/80" />
          {/* Gradient overlay sutil */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/30 to-zinc-950" />
        </div>
 
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <Wine className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">Bar Rane Lazer</span>
          </div>
 
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
            O bar que faz
            <br />
            <span className="text-amber-400">a festa acontecer</span>
          </h1>
 
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
            Cardápio completo com cervejas geladas, drinks, destilados, porções caprichadas e mimo para a criançada.
          </p>
 
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-8"
            >
              <Link href="#cardapio">Ver Cardápio</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/contato">Reservar Espaço</Link>
            </Button>
          </div>
        </div>
      </section>
 
      {/* ── DESTAQUES ── */}
      <section className="py-12 border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "6+", label: "Marcas de Cerveja" },
              { value: "4", label: "Whiskies Premium" },
              { value: "5", label: "Porções Quentes" },
              { value: "100%", label: "Gelado Garantido" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-amber-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── CARDÁPIO ── */}
      <section id="cardapio" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-2">Cardápio Completo</h2>
            <p className="text-zinc-400">Preços à vista. Consulte condições de pagamento.</p>
          </div>
 
          {/* Filtros */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f.id
                    ? "bg-amber-500 text-zinc-950"
                    : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
 
          {/* Seções */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {visibleSections.map((section) => (
              <MenuSectionCard key={section.id} section={section} />
            ))}
          </div>
 
          {/* Observação */}
          <div className="mt-10 max-w-2xl mx-auto text-center bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-zinc-400 text-sm leading-relaxed">
              <span className="text-white font-semibold block mb-1">Informações importantes</span>
              Preços sujeitos a alteração sem aviso prévio. Consumo de bebidas alcoólicas é proibido para menores de 18 anos.
              Bebidas podem ser adquiridas separadamente ou incluídas em pacotes de evento.
              Dúvidas? Fale com a gente pelo WhatsApp.
            </p>
            <Button
              asChild
              className="mt-4 bg-green-600 hover:bg-green-500 text-white gap-2"
            >
              <a
                href="https://wa.me/5511987772482?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20bar%20da%20Rane%20Lazer."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
 
      {/* ── CTA FINAL ── */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-3">
            Reserve seu evento e aproveite o bar completo
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Ao alugar o espaço Rane Lazer, o bar fica disponível para todos os convidados. Curta com tranquilidade!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-700 hover:bg-white/90 font-bold"
            >
              <Link href="/precos">Ver Pacotes</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent font-bold"
            >
              <Link href="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </section>
 
      <Footer />
    </div>
  );
}