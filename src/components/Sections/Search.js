import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Search = ({setShowSearchBar}) => {

  const navigate = useNavigate(),
    searchRef = useRef()

  const handleSearch = (event) => {
    event.preventDefault()
    navigate(`/products?q=${searchRef.current.value}`)
    setShowSearchBar(false)
    // console.log(searchValue)
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className='hidden searchBar md:block border'>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          >
            Buscar
          </label>
          <div className='relative'>
            {/* lens icon */}
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              ref={searchRef}
              type='search'
              name='search'
              id='default-search'
              className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary'
              placeholder='Busca un libro...'
              required
            />
            <button
              type='submit'
              className='text-white font-bold absolute end-2.5 bottom-2.5 bg-primary-dark hover:bg-primary-darker focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 dark:bg-primary dark:hover:bg-primary-dark dark:focus:ring-primary-dark'
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
