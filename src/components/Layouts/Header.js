import Logo from '../../assets/images/yachay-logo.svg'
import { NavLink } from 'react-router-dom'
import { Search } from '../Sections/Search'
import { BtDarkMode } from '../Elements/BtDarkMode'
import { useEffect, useState } from 'react'
import { DropdownLoggedIn, DropdownLoggedOut } from '../../components'
import { Avatar } from '../Elements/Avatar'
import { CartIcon } from '../Elements/CartIcon'
import { useCart } from '../../context'

export const Header = () => {
  const token = JSON.parse(sessionStorage.getItem('token'))

  const { cartList } = useCart()

  const [showSearchBar, setShowSearchBar] = useState(false),
    [showDropdown, setShowDropdown] = useState(false)

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
    <header className='sticky top-0 z-30'>
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
            <ul className='flex items-center font-medium h-full text-secondary dark:text-secondary-light rounded-lg md:ms-8 gap-x-4 md:gap-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:text-xl  '>
              <li className='grow border dark:border-0 rounded-lg'>
                <button
                  onClick={() => setShowSearchBar(!showSearchBar)}
                  className='lens md:hidden'
                >
                  <i className='text-secondary block text-2xl bi bi-search'></i>
                </button>
                <Search />
              </li>
              <li className='content-center cursor-pointer'>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  id='dropdownNavbarLink'
                  data-dropdown-toggle='dropdownNavbar'
                  className='border dark:border-0 rounded-xl text-secondary dark:text-secondary-light hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 text-sm'
                >
                  <Avatar />
                </button>
                {showDropdown &&
                  (token ? (
                    <DropdownLoggedIn setShowDropdown={setShowDropdown} />
                  ) : (
                    <DropdownLoggedOut setShowDropdown={setShowDropdown} />
                  ))}
              </li>
              <li className='relative content-center'>
                <span className='absolute -top-2 -right-2 text-xs md:text-sm font-bold bg-white dark:bg-secondary-dark text-secondary-dark dark:text-white border border-secondary-dark rounded-full w-4 h-4 md:h-[18px] flex items-center justify-center'>
                  {cartList.length}
                </span>
                <NavLink
                  to='cart'
                  className=' flex dark:border-0 rounded-xl size-6 md:size-7 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 text-sm'
                >
                  <CartIcon />
                </NavLink>
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
          <Search setShowSearchBar={setShowSearchBar} />
        </div>
      )}
    </header>
  )
}

export default Header
