import { NavLink } from 'react-router-dom'
import { Avatar } from './Avatar'

export const DropdownLoggedOut = () => {
  return (
    <div className='relative'>
      <div
        id='dropdownNavbar'
        className='absolute top-2 -left-16 z-10 font-normal bg-white divide-y divide-gray-300 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
      >
        <ul
          className='py-2 text-sm text-gray-700 dark:text-gray-400'
          aria-labelledby='dropdownLargeButton'
        >
          <li>
            <NavLink
              to='/products'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Todos los eBooks
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/login'
              className=' block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Iniciar sesión
            </NavLink>
          </li>
        </ul>
        <div className='py-1'>
          <NavLink
            to='/register'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
          >
            Registrarse
          </NavLink>
        </div>
      </div>
    </div>
  )
}
