import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Rating } from '../components'
import { useTitle } from '../hooks/useTitle'
export const ProductDetail = () => {
  const [product, setProduct] = useState({})
  // useState recibe {} ya que es el objeto (producto) del json que se intenta obtener
  const { id } = useParams()

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`http://localhost:8000/products/${id}`)
      const data = await response.json()
      setProduct(data)
    }
    fetchProducts()
  }, [id])

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
    <section className='mb-20'>
      <div className='md:w-3/4 mx-auto'>
        <h1>{name}</h1>
        <p className='my-4'>{overview}</p>
        <div className='flex flex-col md:flex-row gap-4 md:gap-16'>
          <img className='w-full' src={poster} alt='product' />
          {/* text content */}
          <div className='flex flex-col gap-2 md:gap-3'>
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
            <button className='self-start bg-primary-dark hover:bg-primary-darker text-white text-sm my-4 px-4 py-2 font-medium md:text-xl md:px-6 md:py-4 rounded-lg'>
              Agregar al carrito{' '}
              <span>
                <i className='bi bi-plus text-white'></i>
              </span>
            </button>
            <p className=''>{long_description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
