'use client'
import { useCart } from '@/contexts/cart-context'

export interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }
  return (
    <button
      type="button"
      className="mt-8 flex items-center justify-center rounded-full bg-emerald-600 font-semibold text-white h-12"
      onClick={handleAddProductToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
