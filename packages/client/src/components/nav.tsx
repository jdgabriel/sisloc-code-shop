'use client'

import { cn } from '@/lib/utils'
import { useCartStore } from '@/store/cart'
import { ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

export default function Nav() {
  const cartLength = useCartStore((state) => state.cart.length)

  return (
    <div className="flex items-center justify-between container">
      <Link href="/">
        <div className="text-2xl text-white">RentCar - Sisloc</div>
      </Link>
      <div className="flex items-center gap-3">
        <Link
          href="/cart"
          className={cn(
            buttonVariants({ variant: 'link' }),
            'flex gap-2 text-white ',
          )}
        >
          <ShoppingCart className="tw-6 h-6" />
          {cartLength > 0 ? <span className="text-xl">{cartLength}</span> : ''}
        </Link>
        <Link
          href="/cart"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'flex gap-2 text-white',
          )}
        >
          <User className=" w-6 h-6" />
          Entrar
        </Link>
      </div>
    </div>
  )
}
