import { ProductCard } from '../Elements/ProductCard'
import { useEffect, useState } from 'react'

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    return () => {
      async function fetchFeaturedProducts() {
        const response = await fetch('http://localhost:8000/featured_products')
        const data = await response.json()
        setProducts(data)
      }

      fetchFeaturedProducts()
    }
  }, [])

  return (
    <div className='my-8'>
      <h2 className='text-center md:text-3xl mb-4 md:mb-8'>
        Productos Destacados
      </h2>
      <div className='flex flex-col justify-center md:flex-row md:flex md:flex-wrap gap-8 md:gap-16'>
        {products.map((product) => (
          <div className='flex flex-col justify-center md:flex-row md:flex md:flex-wrap gap-8 md:gap-16'>
            <ProductCard product={product} key={product.id} />
          </div>
        ))}
      </div>
    </div>
  )
}
