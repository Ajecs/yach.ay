import { Link } from 'react-router-dom'
import { useCart } from '../../context'

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart()

  return (
    <div
      className='py-5 grid grid-cols-4 justify-items-start items-center lg:text-xl gap-4 md:gap-0 border-b-2'
      key={product.id}
    >
      <Link to={`/products/${product.id}`}>
        <img className='size-32' src={product.poster} alt={product.name} />
      </Link>
      <Link to={`/products/${product.id}`} className='font-bold'>
        {product.name}
      </Link>
      <p className='justify-self-center'>${product.price}</p>
      <button
        onClick={() => removeFromCart(product)}
        className='text-red-500 font-medium text-xs md:text-lg md:mb-3 py-1.5 px-3 border border-red-500 hover:bg-red-500 hover:text-white rounded-lg'
      >
        Quitar
      </button>
    </div>
  )
}
