import { useState } from "react"
import { CartCard } from "../Cart/CartCard"
import { CheckoutDialog } from "../Cart/CheckoutDialog"

export const CartList = () => {
  const [showDialog, setShowDialog] = useState(false)
  
  const cartList = [
    {
      id: 1,
      name: 'React desde cero',
      price: 20,
      quantity: 2,
      poster:
        'https://images.unsplash.com/photo-1613490900233-141c5560d75d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40'
    },
    {
      id: 2,
      name: 'Node.js desde cero',
      price: 30,
      quantity: 1,
      poster:
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40'
    }
  ]

  return (
    <section className='md:w-[90%] my-8 mx-auto p-4 flex flex-col'>
      <h1 className='mb-12'>Lista del carrito(2)</h1>
      <section className='flex flex-col gap-6 mb-8'>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
      <div className='border-b-2 py-4 md:px-8 mb-4'>
        <p className='font-bold'>
          Total: <span>$200</span>
        </p>
      </div>
      <button onClick={() => setShowDialog(true)} className='self-end me-4 flex items-center gap-x-2 bg-primary-dark hover:bg-primary-darker text-white text-sm px-4 py-2 font-medium md:text-xl md:px-6 md:py-4 rounded-lg'>
        Realizar pedido <span className='bi bi-arrow-right mt-1'></span>
      </button>
      {showDialog && <CheckoutDialog setShowDialog={setShowDialog}/>}
    </section>
  )
}
