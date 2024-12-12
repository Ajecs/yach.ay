import { CartEmpty } from "./CartEmpty"
import { CartList } from "./CartList"

export const CartPage = () => {
  const cartListLenght = 0
  return <main className=" size-full mx-auto py-4">
    {cartListLenght > 0 ? <CartList /> : <CartEmpty />}
  </main>
}
