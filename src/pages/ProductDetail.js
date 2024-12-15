import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Rating } from '../components'
import { useTitle } from '../hooks/useTitle'
import { useCart } from '../context'
import { getProduct } from '../services'

export const ProductDetail = () => {
  const { cartList, addToCart, removeFromCart } = useCart(),
    [isInCart, setIsInCart] = useState(false)

  const [product, setProduct] = useState({})
  // useState recibe {} ya que es el objeto (producto) del json que se intenta obtener
  const { id } = useParams()

  useEffect(() => {
    async function fetchProducts() {
      // Get product service
      const data = await getProduct(id)
      setProduct(data)
    }
    fetchProducts()
  }, [id])

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id)
    if (productInCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [cartList, product.id])

  const {
    name,
    overview,
    long_description,
    price,
    poster,
    in_stock,
    rating,
    size,
    best_seller
  } = product

  useTitle(name)

  const tagStyles =
    'shadow-inner rounded-lg py-1 px-2 uppercase dark:bg-neutral-100'

  return (
    <section className='mb-20 mt-8'>
      <div className=' md:grid md:grid-cols-auto grid-rows-auto md:w-[80%] mx-auto'>
        <div className='md:w-[60%]'>
          <h1>{name}</h1>
          <p className='my-4'>{overview}</p>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
          <img className='size-full' src={poster} alt='product' />
          {/* text content */}
          <div className='flex flex-col items-start gap-2 md:gap-3'>
            <span className='block text-3xl font-bold'>${price}</span>
            <div className='flex gap-1 md:text-xl'>
              <Rating rating={rating} />
            </div>
            <div className='flex gap-3 md:gap-4 md:mb-0 text-sm font-semibold'>
              {best_seller && (
                <span className={`${tagStyles} text-yellow-500`}>
                  Más vendido
                </span>
              )}
              {in_stock ? (
                <span className={`${tagStyles} text-green-600`}>En stock</span>
              ) : (
                <span className={`${tagStyles} text-red-600`}>Agotado</span>
              )}
              <span className={`${tagStyles} text-blue-600`}>{size} mb</span>
            </div>
            {!isInCart && (
              <button
                onClick={() => addToCart(product)}
                className='px-5 py-2.5 inline-flex gap-1 text-white font-medium rounded-lg text-sm md:text-lg bg-primary-dark hover:bg-primary-darker'
                disabled={!in_stock}
              >
                Agregar al carrito
                <span className='bi bi-cart-plus'></span>
              </button>
            )}
            {isInCart && (
              <button
                onClick={() => removeFromCart(product)}
                className='px-5 py-2.5 inline-flex gap-1 text-white text-center md:text-lg font-medium rounded-lg text-sm bg-red-500 hover:bg-red-600'
                disabled={!in_stock}
              >
                Eliminar del carrito
                <span className='bi bi-trash'></span>
              </button>
            )}
            <p className='mt-4'>{long_description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
