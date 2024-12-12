import { Link } from 'react-router-dom'

export const CartCard = ({ product }) => {
  return (
    <div className='flex items-center lg:text-xl' key={product.id}>
      <Link to={`/products/${product.id}`}>
        <img className='size-32' src={product.poster} alt={product.name} />
      </Link>
      <div className='grow flex  items-center'>
        <div className='flex flex-col ms-6 me-4 w-40 md:w-40 lg:w-64'>
          <Link to={`/products/${product.id}`} className='font-bold'>
            {product.name}
          </Link>
          <p>${product.price}</p>
        </div>
        <div className=' flex flex-col md:flex-row md:grow md:justify-around'>
          <p className='font-bold mb-2 md:mb-4'>Cantidad: {product.quantity}</p>
          <Link
            to='checkout'
            className='text-red-500 font-medium md:mb-3 py-2 px-4 border border-red-500 hover:bg-red-500  hover:text-white rounded-lg transition-colors duration-300'
          >
            Quitar
          </Link>
        </div>
      </div>
    </div>
  )
}
