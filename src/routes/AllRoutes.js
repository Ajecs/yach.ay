import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={null} />
        <Route path='/contact' element={null} />
      </Routes>
    </main>
  )
}

export default AllRoutes    