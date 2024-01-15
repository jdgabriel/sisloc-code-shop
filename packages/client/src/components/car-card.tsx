'use client'

import { Car } from '@/api/types/car'
import { cn } from '@/lib/utils'
import { CartProps, useCartStore } from '@/store/cart'
import { formatPrice } from '@/utils/format-price'
import { MoveRight, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
  const addToCart = useCartStore((state) => state.addToCart)

  function handleAddToCart(cart: CartProps) {
    addToCart(cart)
  }

  return (
    <Card key={car.id} className="overflow-hidden">
      <CardHeader className="h-32 overflow-hidden p-0 object-center">
        <img className="bg-center" src={car.image_url} alt="" />
      </CardHeader>
      <CardHeader className="py-2 px-4">
        <CardTitle className="text-lg">{car.name}</CardTitle>
        <CardDescription>{car.brand}</CardDescription>
      </CardHeader>
      <CardContent className="py-2 px-4">
        <p className="text-sm text-zinc-800">
          {formatPrice(car.modes[0].priceInCents)}/por dia
        </p>
      </CardContent>
      <CardFooter className="flex items-center gap-3 p-2">
        <Link
          href={`/${car.id}`}
          className={cn(
            buttonVariants({ size: 'sm', variant: 'outline' }),
            'flex-1 items-center justify-between',
          )}
        >
          Ver detalhes
          <MoveRight className="w-4 h-4 text-zinc-500" />
        </Link>
        <Button
          size={'sm'}
          variant={'ghost'}
          onClick={() =>
            handleAddToCart({
              car,
              mode: car.modes[0],
            })
          }
        >
          <ShoppingCart className="w-4 h-4 text-zinc-500" />
        </Button>
      </CardFooter>
    </Card>
  )
}
