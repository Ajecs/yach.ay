import CartIcon from '../../assets/images/cart-icon.svg'
import Logo from '../../assets/images/yachay-logo.svg'
import { NavLink } from 'react-router-dom'
import { Search } from '../Sections/Search'
import { BtDarkMode } from '../Elements/BtDarkMode'
import { useEffect, useState } from 'react'
import { Dropdown } from '../Elements/Dropdown'

export const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  )
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <header className='relative'>
      {/* Navbar */}
      <nav className='bg-white border border-b-200 dark:bg-gray-900 dark:border-gray-700 transition-colors duration-300'>
        <div className='flex flex-wrap justify-between items-center p-4 md:px-8 md:min-h-32'>
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
          {/* Menu */}
          <div className='md:max-w-4xl md:grow'>
            <ul className='flex items-center font-medium rounded-lg md:border-0 md:ms-8 gap-x-3 md:gap-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:text-xl  '>
              <li className='grow border dark:border-0 rounded-lg'>
                <button
                  onClick={() => setShowSearchBar(!showSearchBar)}
                  className='lens md:hidden'
                >
                  <i className='text-secondary block text-2xl bi bi-search'></i>
                </button>
                <Search />
              </li>
              <li className='content-center'>
                <Dropdown />
              </li>
              <li className='content-center'>
                <button className='border dark:border-0 rounded-xl text-secondary-light hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 text-sm'>
                  <img
                    className='dark:invert block size-6'
                    src={CartIcon}
                    alt='Cart icon'
                  />
                </button>
              </li>
              <li className='content-center'>
                <BtDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Hidden search for mobile */}
      {showSearchBar && (
        <div className='search-mobile md:hidden z-30 content-center absolute -bottom-15 left-0 py-4 w-full  bg-white dark:bg-gray-900'>
          <Search setShowSearchBar={setShowSearchBar}/>
        </div>
      )}
    </header>
  )
}

export default Header
