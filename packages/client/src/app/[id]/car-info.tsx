import { Car } from '@/api/types/car'

export default function CarInfo({ infos }: Pick<Car, 'infos'>) {
  return (
    <>
      <span className="text-sm text-zinc-500">Informações do carro</span>
      {infos.map((info) => (
        <div className="flex item-center justify-between" key={info.info}>
          <span className="text-zinc-600">{info.info}</span>
          <span>{info.description}</span>
        </div>
      ))}
    </>
  )
}
