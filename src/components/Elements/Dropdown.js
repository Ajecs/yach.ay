import { NavLink } from 'react-router-dom'
import { Avatar } from './Avatar'

export const Dropdown = () => {
  return (
    <div>
      
      <div
        id='dropdownNavbar'
        className='z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
      >
        <ul
          className='py-2 text-sm text-gray-700 dark:text-gray-400'
          aria-labelledby='dropdownLargeButton'
        >
          <li>
            <NavLink
              to='/'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Panel de control
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className=' block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Todos los eBooks
            </NavLink>
          </li>
        </ul>
        <div className='py-1'>
          <NavLink
            to='/'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
          >
            Cerrar sesión
          </NavLink>
        </div>
      </div>
    </div>
  )
}
