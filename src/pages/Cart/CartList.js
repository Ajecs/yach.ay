import { useState } from 'react'
import { CartCard } from '../Cart/CartCard'
import { CheckoutDialog } from '../Cart/CheckoutDialog'
import { useCart } from '../../context'

export const CartList = () => {
  const [showDialog, setShowDialog] = useState(false)

  const { cartList, total } = useCart()

  return (
    <section className='md:w-[90%] mt-2 mb-8 mx-auto p-4 flex flex-col'>
      <h1 className='mb-5'>Lista del carrito ({cartList.length})</h1>
      <section className=''>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
      <div className='py-2.5 md:text-xl grid grid-cols-4 justify-items-center items-center'>
        <span className='justify-self-start font-bold'>Total:</span>
        <span></span>
        <span className='self-center'>${total}</span>
        <button
          onClick={() => {
            window.scrollTo(0, 0)
            setShowDialog(true)
          }}
          className='px-4 md:px-6 py-2 md:py-4 justify-self-start flex items-center gap-x-2 text-white text-xs font-medium lg:text-xl bg-primary-dark hover:bg-primary-darker  rounded-lg'
        >
          Realizar pedido <span className='bi bi-arrow-right mt-1'></span>
        </button>
      </div>
      {showDialog && <CheckoutDialog setShowDialog={setShowDialog} />}
    </section>
  )
}
