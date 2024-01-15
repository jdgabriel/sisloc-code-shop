'use client'

import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'
import { Minus, Plus } from 'lucide-react'

export default function CarAmount({
  cartId,
  amount,
}: {
  cartId: string
  amount: number
}) {
  const updateAmountCart = useCartStore((state) => state.updateAmountCart)

  return (
    <div className="flex items-center">
      <Button
        size="sm"
        variant="ghost"
        className="flex items-center"
        disabled={amount === 1}
        onClick={() => updateAmountCart(cartId!, -1)}
      >
        <Minus className="w-4 h-4" />
      </Button>
      <Button size="sm" variant="outline">
        {amount}
      </Button>
      <Button
        size="sm"
        variant="ghost"
        className="flex items-center"
        onClick={() => updateAmountCart(cartId!, 1)}
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  )
}
