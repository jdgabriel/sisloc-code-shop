'use client'

import { Car } from '@/api/types/car'
import { Mode } from '@/api/types/car-rent-mode'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useCartStore } from '@/store/cart'
import { modesSelect } from '@/utils/mode-translate'
import { Car as CarIcon } from 'lucide-react'
import { useState } from 'react'

export default function CarSelectMode({ car }: { car: Car }) {
  const [mode, setMode] = useState<Mode | null>(null)
  const addToCart = useCartStore((state) => state.addToCart)

  function handleSetMode(mode: string) {
    const modeSelected = car.modes.find((md) => md.mode === mode)
    if (!modeSelected) return
    setMode(modeSelected)
  }

  function handleAddToCart() {
    if (!mode) return
    addToCart({ car, mode, amount: 1 })
    setMode(null)
  }

  return (
    <div className="space-y-3">
      <label htmlFor="" className="text-sm text-zinc-500">
        Selecione um modo de aluguel
      </label>
      <Select onValueChange={handleSetMode}>
        <SelectTrigger className="w-full">
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
      <Button
        className="w-full flex items-center justify-between"
        variant={!mode ? 'destructive' : 'primary'}
        disabled={!mode}
        onClick={handleAddToCart}
      >
        {mode ? ' Quero alugar este carro' : 'Selecione um modo de aluguel'}

        <CarIcon className="w-6 h-6" />
      </Button>
    </div>
  )
}
