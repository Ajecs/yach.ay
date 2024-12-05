import { NavLink } from 'react-router-dom'
import { Avatar } from './Avatar'

export const Dropdown = () => {
  return (
    <div>
      <button
        id='dropdownNavbarLink'
        data-dropdown-toggle='dropdownNavbar'
        className='flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:text-primary md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
      >
        {/* Avatar */}
        <Avatar />
      </button>
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
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className=' block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Earnings
            </NavLink>
          </li>
        </ul>
        <div className='py-1'>
          <NavLink
            to='/'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
          >
            Sign out
          </NavLink>
        </div>
      </div>
    </div>
  )
}
