'use client'
import { fetchCars } from '@/api/fetch-cars'
import { CarCard } from '@/components/car-card'
import { useQuery } from '@tanstack/react-query'

export default function CarGrid() {
  const { data, isFetched, isLoading } = useQuery({
    queryKey: ['cars'],
    queryFn: () => fetchCars({ page: 1 }),
  })

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center h-10">
          Carregando carros
        </div>
      )}
      <div className="grid gap-4 grid-cols-marketplace">
        {isFetched &&
          data &&
          data.cars.map((car) => <CarCard key={car.id} car={car} />)}
      </div>
    </>
  )
}
