import { useCart } from '../../context'
import { useTitle } from '../../hooks/useTitle'
import { CartList } from '../Cart/CartList'
import { CartEmpty } from './CartEmpty'

export const CartPage = () => {
  const { cartList } = useCart()

  function handleItemsTitle() {
    if (cartList.length === 0) {
      return 'No hay productos'
    } else {
      if (cartList.length === 1) {
        return '1 producto' 
      } else {
        return `${cartList.length} productos`
      }
    }
  }

  useTitle(`Carrito ${handleItemsTitle()}`)

  return (
    <main className=' size-full mx-auto py-4'>
      {cartList.length ? <CartList /> : <CartEmpty />}
    </main>
  )
}
