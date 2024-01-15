import { Car } from '@/api/types/car'
import { formatPrice } from '@/utils/format-price'
import { modeTranslate } from '@/utils/mode-translate'

export default function CarRent({ modes }: Pick<Car, 'modes'>) {
  return (
    <>
      <span className="text-sm text-zinc-500">Modalidade de aluguel</span>
      {modes.map((mode) => (
        <div className="flex item-center justify-between" key={mode.mode}>
          <span className="text-zinc-600">{modeTranslate[mode.mode]}</span>
          <span>{formatPrice(mode.priceInCents)}</span>
        </div>
      ))}
    </>
  )
}
