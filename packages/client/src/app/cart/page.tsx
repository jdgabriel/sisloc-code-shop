import { Metadata } from 'next'
import Cart from './cart'
import CartEmpty from './cart-empty'
import CartHeader from './cart-header'
import CartItems from './cart-items'

export const metadata: Metadata = {
  title: 'Compras',
}

export default function CartManager() {
  return (
    <section className="container">
      <CartHeader />
      <div className="flex flex-col md:grid md:grid-cols-cart gap-3">
        <div className="flex flex-col rounded-lg overflow-hidden">
          <CartEmpty />
          <CartItems />
        </div>
        <Cart />
      </div>
    </section>
  )
}
