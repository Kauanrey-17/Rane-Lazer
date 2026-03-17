"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Produto = {
  id: string
  nome: string
  preco: number
  imagem?: string
}

type CartContextType = {
  cart: Produto[]
  addToCart: (produto: Produto) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Produto[]>([])

  function addToCart(produto: Produto) {
    setCart((prev) => [...prev, produto])
  }

  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart deve ser usado dentro de CartProvider")
  }

  return context
}