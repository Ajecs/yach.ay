import { useState } from 'react'
import Logo from '../../assets/images/yachay-logo.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const activeClass =
      'block py-2 px-3 text-primary bg-blue-700 rounded md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent',
    inactiveClass =
      'block py-2 px-3 text-black bg-blue-700 rounded md:hover:text-primary md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'

  const handleActiveClass = ({isActive}) => {
    const className = isActive ? activeClass : inactiveClass
    return className
  }

  return (
    <header className='Header'>
      <nav className='bg-white border border-b-200 dark:bg-gray-900 dark:border-gray-700'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:min-h-32'>
          {/* Logo */}
          <NavLink
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img src={Logo} className='h-16 md:h-24' alt='Yachay logo' />
            <span className='logo uppercase tracking-tighter mb-1 self-center text-4xl font-semibold whitespace-nowrap dark:text-white md:text-6xl'>
              Yach.ay
            </span>
          </NavLink>
          {/* burger */}
          <button
            data-collapse-toggle='navbar-dropdown'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-dropdown'
            aria-expanded='false'
          >
            <span className='sr-only'>Abrir menu principal</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          <div
            className='hidden w-full md:block md:w-auto'
            id='navbar-dropdown'
          >
            <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white md:text-xl dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <NavLink
                  to='/'
                  className={handleActiveClass}
                  aria-current='page'
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <button
                  id='dropdownNavbarLink'
                  data-dropdown-toggle='dropdownNavbar'
                  className='flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:text-primary md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
                >
                  Dropdown{' '}
                  <svg
                    className='w-2.5 h-2.5 ms-2.5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m1 1 4 4 4-4'
                    />
                  </svg>
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
              </li>
              <li>
                <NavLink
                  to='/services'
                  className={handleActiveClass}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact'
                  className={handleActiveClass}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
