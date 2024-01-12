import { CarCard } from '@/components/car-card'
import { randomUUID } from 'crypto'

const cars = Array(50)
  .fill({})
  .map(() => ({
    id: randomUUID(),
    name: 'Car name',
    brand: 'Car brand',
    image_url:
      'https://img.freepik.com/fotos-gratis/vista-do-carro-3d_23-2150796894.jpg?w=826&t=st=1705088516~exp=1705089116~hmac=56ba299e074bec09f1c7156eb256fc1ca4b994b89c0e18e8f4fbf2ea33bf0353',
    mode: [
      {
        mode: 'DAY',
        priceInCents: Math.floor(Math.random() * 100000),
      },
    ],
  }))

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-12 overflow-x-hidden">
      <header className="w-screen h-16 bg-zinc-800 flex items-center justify-center">
        <div className="flex container">
          <div className="text-2xl text-white">RentCar</div>
        </div>
      </header>

      <section className="container">
        <div className="grid gap-4 grid-cols-marketplace">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </main>
  )
}
