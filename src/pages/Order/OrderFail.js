import { Link } from 'react-router-dom'
import { CartIcon } from '../../components/Elements/CartIcon'

export const OrderFail = () => {
  return (
    <section className='md:size-3/4 mx-auto my-8 ring ring-gray-100 dark:ring-gray-800'>
      <div className='w-fit mx-auto space-y-6 text-lg md:text-xl p-16 text-center'>
        <div className='w-fit mx-auto text-8xl text-red-400 bi bi-exclamation-circle'></div>
        <p>Fallo en el pago, por favor intente nuevamente</p>
        <div>
          <p>Su pedido no se confirmó</p>
          <p>Contacte con el soporte</p>
        </div>
        <span className='block'>ID de pago: xyz_123345689</span>
        <button className='bg-primary-dark hover:bg-primary-darker rounded-lg'>
          <Link
            to='/cart'
            className='inline-flex gap-x-2 text-xl text-white px-4 py-2 font-medium rounded-lg'
          >
            Revise el carrito de nuevo <CartIcon className='' />
          </Link>
        </button>
      </div>
    </section>
  )
}
