import { Link } from 'react-router-dom'
import { Rating } from './Rating'
import { useCart } from '../../context'
import { useEffect, useState } from 'react'

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart(),
    [isInCart, setIsInCart] = useState(false)

  const { id, name, overview, price, best_seller, image_local, rating } =
    product

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === id)
    if (productInCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [cartList, id])

  function handleClick(product) {
    addToCart(product)
  }

  return (
    <div className='last:grow'>
      <div className='h-full flex flex-col items-end bg-white border border-gray-200 rounded-lg shadow md:max-w-sm lg:max-w-md dark:bg-gray-800 dark:border-gray-700'>
        <Link to={`/products/${id}`} className='relative'>
          {best_seller && (
            <span className='absolute top-8 left-8 px-2 bg-accent-dark bg-opacity-90 text-white rounded'>
              Best Seller
            </span>
          )}
          <img
            className='p-8 rounded-t-lg aspect-square object-cover'
            src={image_local}
            alt='product'
          />
        </Link>
        {/* Text content */}
        <div className='px-5 pb-5 md:h-full md:flex md:flex-col'>
          <Link to={`/products/${id}`}>
            <h5 className='text-xl md:h-16 font-semibold tracking-tight text-gray-900 dark:text-white'>
              {name}
            </h5>
          </Link>
          <p className='mb-6'>{overview}</p>
          <div className='flex items-center mt-2.5 mb-5 md:mb-8'>
            {/* Rating */}
            <div className='flex items-center space-x-1 rtl:space-x-reverse'>
              <Rating rating={rating} />
            </div>
            <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3'>
              {rating}
            </span>
          </div>
          {/* Price */}
          <div className='flex items-center justify-between'>
            <span className='text-3xl font-bold text-gray-900 dark:text-white'>
              ${price}
            </span>
            {/* Button add to cart */}
            {!isInCart && (
              <button
                onClick={() => handleClick(product)}
                className='px-5 py-2.5 inline-flex gap-1 text-white font-medium rounded-lg text-sm text-center md:text-lg bg-primary-dark hover:bg-primary-darker'
              >
                Agregar al carrito
                <span className='bi bi-cart-plus'></span>
              </button>
            )}
            {isInCart && (
              <button
                onClick={() => removeFromCart(product)}
                className='px-5 py-2.5 inline-flex gap-1 text-white text-center md:text-lg font-medium rounded-lg text-sm bg-red-500 hover:bg-red-600'
              >
                Eliminar del carrito
                <span className='bi bi-trash'></span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
