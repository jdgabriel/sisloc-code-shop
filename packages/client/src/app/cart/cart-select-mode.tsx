'use client'

import { Car } from '@/api/types/car'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useCartStore } from '@/store/cart'
import { modesSelect } from '@/utils/mode-translate'

interface CartSelectProps extends Pick<Car, 'modes'> {
  cartId: string
  defaultValue: string
}

export function CartSelectMode({
  cartId,
  modes,
  defaultValue,
}: CartSelectProps) {
  const updateModeCar = useCartStore((state) => state.updateModeCar)

  function handleSetMode(modeSelect: string) {
    const mode = modes.find((md) => md.mode === modeSelect)
    console.log({ mode, modes, modeSelect })
    if (!mode) return
    updateModeCar(cartId, mode)
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={handleSetMode}>
      <SelectTrigger className="border-none w-full">
        <SelectValue placeholder="Modo de aluguel" />
      </SelectTrigger>
      <SelectContent>
        {modesSelect.map((mode) => (
          <SelectItem key={mode.key} value={mode.key}>
            {mode.value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
