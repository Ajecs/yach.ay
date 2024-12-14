import { Link } from 'react-router-dom'
import { CartIcon } from '../../components/Elements/CartIcon'

export const OrderSuccess = ({ order }) => {
  return (
    <section className='mx-auto my-8 md:size-3/4 ring ring-gray-100 dark:ring-gray-800'>
      <div className='w-fit p-16 mx-auto space-y-6 text-lg text-center md:text-xl'>
        <div className='w-fit mx-auto text-green-400 text-8xl bi bi-check-circle'></div>
        <div>
          <p>¡Gracias {order.user.name} por su pedido!</p>
          <p>
            Su id de pedido es: <span>{order.id}</span>
          </p>
        </div>
        <div>
          <p>Se confirmo su pedido</p>
          <p>
            Por favor revise su correo electrónico {order.user.email}
          </p>
        </div>
        <span className='block'>ID de pago: xyz_123345689</span>
        <button className='rounded-lg bg-primary-dark hover:bg-primary-darker'>
          <Link
            to='/products'
            className='inline-flex px-4 py-2 text-xl font-medium text-white rounded-lg gap-x-2'
          >
            Continua Comprando <CartIcon className='' />
          </Link>
        </button>
      </div>
    </section>
  )
}
