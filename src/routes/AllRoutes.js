import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'
import { ProductsList } from '../pages/Products/ProductsList'
import { FeaturedProducts } from '../components'

export const AllRoutes = () => {
  return (
    <div className='flex flex-col py-4 px-4 md:pl-10 dark:text-white dark:bg-gray-900 grow transition-colors duration-300'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsList />} />
      </Routes>
    </div>
  )
}

export default AllRoutes      