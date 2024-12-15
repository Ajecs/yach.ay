import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTitle } from '../../hooks/useTitle'

import { ProductCard } from '../../components'
import { FilterBar } from './FilterBar'

import { getProductList } from '../../services'
import { useFilter } from '../../context'

export const ProductsList = () => {
  // De esta forma se tiene acceso a los valores del contexto
  const { products, initialProductList } = useFilter()

  const [show, setShow] = useState(false)

  useTitle('Ebooks')

  const search = useLocation().search,
    // Permite acceder al query string a partir de la ruta actual
    searchTerm = new URLSearchParams(search).get('q')
  // Permite obtener el parametro asociado con 'q ej. -> "react"

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProductList(searchTerm)
      initialProductList(data)
    }
    fetchProducts()
  }, [searchTerm])

  return (
    <main className='relative'>
      <section>
        <div className='w-fit me-5 ms-auto my-5 flex items-center gap-12'>
          <span className='text-2xl font-semibold dark:text-slate-100 mb-5'>
            Ebooks ({products.length})
          </span>
          {/* button sidebar */}
          <button
            onClick={() => setShow(!show)}
            data-drawer-target='default-sidebar'
            data-drawer-toggle='default-sidebar'
            aria-controls='default-sidebar'
            type='button'
            className='md:-mt-3 -mt-5 w-fit order-last inline-flex items-center p-2 text-sm  text-secondary-dark rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          >
            <span className='sr-only'>Open sidebar</span>
            <svg
              className='size-6 md:size-8 xl:size-10'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                clipRule='evenodd'
                fillRule='evenodd'
                d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
              ></path>
            </svg>
          </button>
        </div>
        <div className='w-full'>
          <div className='mx-auto flex flex-wrap gap-12 lg:flex-row w-[95%] xl:w-full'>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
      {show && <FilterBar setShow={setShow} />}
    </main>
  )
}
