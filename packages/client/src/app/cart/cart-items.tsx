'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/utils/format-price'
import { Trash } from 'lucide-react'
import CarAmount from './cart-amount'
import { CartSelectMode } from './cart-select-mode'

export default function CartItems() {
  const { cart, removeFromCart } = useCartStore(({ cart, removeFromCart }) => ({
    cart,
    removeFromCart,
  }))

  return (
    <div className="space-y-2">
      {cart.map(({ car, mode, cartId, amount }) => (
        <Card key={cartId} className="overflow-hidden">
          <CardHeader className="flex gap-3 flex-row py-1 px-4">
            <CardTitle className="flex pt-2 items-center justify-between">
              <img className="rounded-lg w-32" src={car.image_url} alt="" />
            </CardTitle>
            <CardTitle className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{car.name}</span>
                <span className="text-sm text-zinc-500">{car.brand}</span>
              </div>
              <Button
                variant="link"
                size="sm"
                className="flex gap-2 text-red-500"
                onClick={() => removeFromCart(cartId!)}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="py-2 px-4 flex items-center justify-between">
            <div className="flex gap-2">
              <CartSelectMode
                defaultValue={mode.mode}
                modes={car.modes}
                cartId={cartId!}
              />

              <CarAmount cartId={cartId!} amount={amount} />
            </div>
            <span className="text-xl text-zinc-800">
              {formatPrice(mode.priceInCents)}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
