import { useEffect, useState } from 'react'
import { ProductCard } from '../../components'
import { getFeaturedProductList } from '../../services'

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchFeaturedProducts() {
      //  get Featured Products service
      const data = await getFeaturedProductList()
      setProducts(data)
    }

    fetchFeaturedProducts()
  }, [])

  return (
    <div className='my-8 w-fit mx-auto'>
      <h2 className='w-fit mx-auto md:text-3xl mb-4 md:mb-8'>
        Productos Destacados
      </h2>
      <div className='flex flex-col md:flex-row md:flex md:flex-wrap gap-8 md:gap-14'>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
