import { Route, Routes } from 'react-router-dom'
import { CartPage, HomePage, Login, ProductDetail, Register } from '../pages'
import { ProductsList } from '../pages/Products/ProductsList'
import { ProtectedRoutes } from './ProtectedRoutes'

export const AllRoutes = () => {
  return (
    <div className='flex flex-col px-4 md:pl-10 dark:text-white dark:bg-dark grow transition-colors duration-300'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='products' element={<ProductsList />} />
        <Route path='products/:id' element={<ProductDetail />} />

        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />

        <Route
          path='cart'
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  )
}

export default AllRoutes
