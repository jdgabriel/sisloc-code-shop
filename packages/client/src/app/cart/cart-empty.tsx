'use client'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/store/cart'
import { Car } from 'lucide-react'
import Link from 'next/link'

export default function CartEmpty() {
  const cartLength = useCartStore((state) => state.cart.length)

  return (
    <>
      {cartLength <= 0 ? (
        <div className="flex items-center justify-center flex-col gap-5 p-24">
          <>
            <p>Você ainda não possui nenhum carro em seu carrinho.</p>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'flex justify-between gap-3',
              )}
            >
              Ir para loja
              <Car className="w-6 h-6" />
            </Link>
          </>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
