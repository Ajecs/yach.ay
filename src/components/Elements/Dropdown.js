import { NavLink } from 'react-router-dom'
import { Avatar } from './Avatar'

export const Dropdown = () => {
  return (
    <div>
      <button
        id='dropdownNavbarLink'
        data-dropdown-toggle='dropdownNavbar'
        className='border dark:border-0 rounded-xl text-secondary dark:text-secondary-light hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 text-sm'
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
