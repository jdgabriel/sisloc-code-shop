'use client'

import { getCar } from '@/api/get-car'
import { buttonVariants } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import CarInfo from './car-info'
import CarRent from './car-rent'
import CarSelectMode from './car-select-mode'

export default function CarDetail({ params }: { params: { id: string } }) {
  const { data, isLoading, isFetched } = useQuery({
    queryKey: ['car', params.id],
    queryFn: () => getCar({ id: params.id }),
  })

  const isDone = isFetched && !isLoading

  return (
    <section className="container">
      <div className="flex items-center gap-2 mb-3">
        <Link href="/" className={buttonVariants({ variant: 'ghost' })}>
          <ArrowLeft />
          Voltar
        </Link>
        Detalhes do carro
      </div>

      {isLoading && (
        <div className="flex items-center justify-center h-10">
          Carregando detalhes do carro
        </div>
      )}

      {isDone && data && (
        <div className="grid grid-cols-cart gap-3">
          <div className="flex flex-col rounded-lg overflow-hidden">
            <img src={data.car.image_url} alt={data.car.name} />
          </div>

          <div className="flex flex-col rounded-lg p-3 space-y-2">
            <h1 className="text-3xl">{data.car.name}</h1>
            <h2 className="text-2xl text-zinc-400">{data.car.brand}</h2>
            <hr className="my-2" />
            <CarInfo infos={data.car.infos} />
            <hr className="my-2" />
            <CarRent modes={data.car.modes} />
            <hr className="my-2" />
            <CarSelectMode car={data.car} />
          </div>
        </div>
      )}
    </section>
  )
}
