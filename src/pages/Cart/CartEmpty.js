import { Link } from 'react-router-dom'
import Cart from '../../assets/images/cart-icon.svg'
import { CartIcon } from '../../components/Elements/CartIcon'

export const CartEmpty = () => {
  return (
    <div className='text-lg text-secondary md:w-3/4 mx-auto my-16 p-8 flex flex-col items-center gap-10 dark:text-white'>
      <div className='size-32'>
        <CartIcon />
      </div>
      <div className='w-3/4 md:w-fit text-center'>
        <p>Tu carrito esta vacío por el momento</p>
        <p>Agregra libros al carrito para ver aqui tu lista de compra</p>
      </div>
      <Link
        className='flex items-center gap-x-2 text-xl bg-primary-dark hover:bg-primary-darker text-white px-4 py-2 font-medium rounded-lg'
        to='/products'
      >
        Continua Comprando <CartIcon className='' />
      </Link>
    </div>
  )
}
