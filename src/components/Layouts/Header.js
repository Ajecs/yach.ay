import CartIcon from '../../assets/images/cart-icon.svg'
import Logo from '../../assets/images/yachay-logo.svg'
import { NavLink } from 'react-router-dom'
import { Search } from '../Sections/Search'
import { BtDarkMode } from '../Elements/BtDarkMode'
import { useEffect, useState } from 'react'
import { Dropdown } from '../Elements/Dropdown'

export const Header = () => {
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

  const activeClass =
      'block py-2 px-3 text-primary rounded md:text-primary md:p-0 dark:bg-blue-600 md:dark:text-secondary md:dark:bg-transparent',
    inactiveClass =
      'block py-2 px-3 text-primary rounded md:text-secondary md:hover:text-primary md:p-0 md:dark:text-secondary md:dark:text-secondary'

  const handleActiveClass = ({ isActive }) => {
    const className = isActive ? activeClass : inactiveClass
    return className
  }

  return (
    <header className=''>
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
            <ul className='flex items-center font-medium rounded-lg md:border-0 md:ms-8 md:space-x-32 rtl:space-x-reverse md:flex-row md:mt-0 md:text-xl dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li className='grow hidden md:block'>
                <Search />
              </li>
              <li className='flex gap-x-4 md:gap-x-6'>
                <Dropdown />
                <button className=''>
                  <img
                    className='dark:invert'
                    src={CartIcon}
                    alt='Cart icon'
                  />
                </button>
                <BtDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
