import { Route, Routes } from 'react-router-dom'
import { CartPage, DashboardPage, HomePage, Login, OrderPage, PageNotFound, ProductDetail, Register } from '../pages'
import { ProductsList } from '../pages/Products/ProductsList'
import { ProtectedRoutes } from './ProtectedRoutes'

export const AllRoutes = () => {
  return (
    <div className='flex flex-col px-4 transition-colors duration-300 md:px-6 dark:text-white dark:bg-dark grow'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='products' element={<ProductsList />} />
        <Route path='products/:id' element={<ProductDetail />} />

        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />

        <Route
          path='cart'
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path='order-summary'
          element={
            <ProtectedRoutes>
              <OrderPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path='dashboard'
          element={
            <ProtectedRoutes>
              <DashboardPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  )
}

export default AllRoutes
