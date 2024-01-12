import { MoveRight } from 'lucide-react'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

interface CarCardProps {
  car: any
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Card key={car.id} className="overflow-hidden">
      <CardHeader className="h-32 overflow-hidden p-0">
        <img className="bg-center" src={car.image_url} alt="" />
      </CardHeader>
      <CardHeader className="py-2 px-4">
        <CardTitle className="text-lg">{car.name}</CardTitle>
        <CardDescription>{car.brand}</CardDescription>
      </CardHeader>
      <CardContent className="py-2 px-4">
        <p className="text-sm text-zinc-800">
          {formatPrice(car.mode[0].priceInCents)}/por dia
        </p>
      </CardContent>
      <CardFooter className="p-2">
        <Button
          className="flex items-center justify-between w-full"
          size={'sm'}
          variant={'outline'}
        >
          Ver detalhes
          <MoveRight className="opacity-35" />
        </Button>
      </CardFooter>
    </Card>
  )
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price / 1000)
}
