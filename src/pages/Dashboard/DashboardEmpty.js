import { Link } from "react-router-dom"
import { CartIcon } from "../../components/Elements/CartIcon"

export const DashboardEmpty = () => {
  return (
    <div className='flex flex-col items-center gap-10 p-8 mx-auto my-16 text-lg text-secondary md:w-3/4 dark:text-white'>
      <div className='size-32'>
        <CartIcon />
      </div>
      <div className='w-3/4 text-center md:w-fit'>
        <p>Tu panel de pedidos esta vacío</p>
        <p>Agregra libros al carrito para ver aqui los pedidos realizados</p>
      </div>
      <button className='rounded-lg bg-primary-dark hover:bg-primary-darker'>
        <Link
          to='/products'
          className='inline-flex px-4 py-2 text-xl font-medium text-white rounded-lg gap-x-2'
        >
          Continua Comprando <CartIcon />
        </Link>
      </button>
    </div>
  )
}
