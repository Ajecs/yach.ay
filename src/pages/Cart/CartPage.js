import { useCart } from "../../context"
import { CartList } from "../Cart/CartList"
import { CartEmpty } from "./CartEmpty"

export const CartPage = () => {
  const {cartList} = useCart()

  return (
    <main className=' size-full mx-auto py-4'>
      {cartList.length ? <CartList /> : <CartEmpty />}
    </main>
  )
}
