import { create } from 'zustand'

import { Car } from '@/api/types/car'
import { Mode } from '@/api/types/car-rent-mode'
import { v4 as uuid } from 'uuid'

export interface CartProps {
  cartId?: string
  car: Car
  mode: Mode
  amount: number
}

export interface CartStore {
  cart: CartProps[]
  total: number
  addToCart: (cart: CartProps) => void
  updateAmountCart: (cartId: string, amount: number) => void
  updateModeCar: (cartId: string, mode: Mode) => void
  removeFromCart: (cartId: string) => void
  removeAllFromCart: () => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  total: 0,
  addToCart: (cart: CartProps) => {
    const { cart: prevCart, total } = get()

    const newCarInCart: CartProps = {
      ...cart,
      amount: 1,
      cartId: uuid(),
    }

    set({
      cart: [...prevCart, newCarInCart],
      total: total + cart.mode.priceInCents,
    })
  },
  updateModeCar: (cartId: string, mode: Mode) => {
    if (!cartId) return

    const { cart, total } = get()
    const updateCar = cart.find((c) => c.cartId === cartId)
    if (!updateCar) return

    const prevAmount = updateCar.amount * updateCar.mode.priceInCents
    const nextAmount = 1 * mode.priceInCents

    set({
      cart: cart.map((c) => {
        if (c.cartId === cartId) {
          return { ...c, amount: 1, mode }
        }
        return c
      }),
      total: total - prevAmount + nextAmount,
    })
  },
  updateAmountCart: (cartId: string, amount: number) => {
    if (!cartId) return

    const { cart, total } = get()
    const updateCar = cart.find((c) => c.cartId === cartId)
    if (!updateCar) return

    const nextAmountCount = amount + updateCar.amount
    const prevAmount = updateCar.amount * updateCar.mode.priceInCents
    const nextAmount = nextAmountCount * updateCar.mode.priceInCents

    set({
      cart: cart.map((c) => {
        if (c.cartId === cartId) {
          return { ...c, amount: nextAmountCount }
        }
        return c
      }),
      total: total - prevAmount + nextAmount,
    })
  },
  removeFromCart: (cartId: string) => {
    if (!cartId) return

    const { cart, total } = get()
    const removeCar = cart.find((c) => c.cartId === cartId)
    if (!removeCar) return

    set({
      cart: cart.filter((c) => c.cartId !== cartId),
      total: total - removeCar.mode.priceInCents,
    })
  },
  removeAllFromCart: () => {
    set({
      cart: [],
      total: 0,
    })
  },
}))
