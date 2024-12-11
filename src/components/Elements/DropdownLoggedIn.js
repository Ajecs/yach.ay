import { NavLink, useNavigate } from 'react-router-dom'

export const DropdownLoggedIn = (setShowDropdown) => {
  const navigate = useNavigate() 

  function handleLogOut() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('cbid')
    setShowDropdown(false)
    navigate('/')
  }

  return (
    <div className='relative'>
      <div
        id='dropdownNavbar'
        className='absolute z-10 top-2 -left-16 font-normal bg-white divide-y divide-gray-300 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
      >
        <div className='p-4 text-lg font-medium truncate dark:text-white divide-y divide-gray-300 dark:divide-gray-400'>
          nicocoriale.com
        </div>
        <ul
          className='py-2 text-sm text-gray-700 dark:text-gray-400'
          aria-labelledby='dropdownLargeButton'
        >
          <li>
            <NavLink
              onClick={() => setShowDropdown(false)}
              to='/dashboard'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Panel de control
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setShowDropdown(false)}
              to='/products'
              className=' block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Todos los eBooks
            </NavLink>
          </li>
        </ul>
        <div className='py-1'>
          <NavLink
            onClick={handleLogOut}
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
