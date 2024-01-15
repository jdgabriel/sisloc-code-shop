'use client'

import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/utils/format-price'
import { modeTranslate } from '@/utils/mode-translate'
import { ShoppingCart } from 'lucide-react'

export default function Cart() {
  const {
    cart,
    total,
    removeAllFromCart: fakePurchase,
  } = useCartStore(({ cart, total, removeAllFromCart }) => ({
    cart,
    removeAllFromCart,
    total,
  }))

  return (
    <div className="flex flex-col rounded-lg p-3 space-y-4">
      <span className="text-lg text-zinc-800">Modalidades</span>
      <hr />
      {cart.map(({ amount, car, mode }) => (
        <div className="flex item-center justify-between" key={car.id}>
          <span className="text-zinc-700">
            {amount}x - {car.name} -{' '}
            <span className="text-sm text-zinc-600">
              {modeTranslate[mode.mode]}
            </span>
          </span>
          <span>{formatPrice(amount * mode.priceInCents)}</span>
        </div>
      ))}
      <hr className="my-2" />
      <div className="flex items-center justify-between">
        <span className="text-xl text-zinc-400">Total</span>
        <span className="text-xl">{formatPrice(total)}</span>
      </div>
      <Button
        variant="primary"
        size="sm"
        className="flex gap-5"
        disabled={cart.length <= 0}
        onClick={fakePurchase}
      >
        <ShoppingCart className="w-4 h-4" />
        Efetuar compra
      </Button>
    </div>
  )
}
