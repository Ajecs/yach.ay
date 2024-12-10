import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='bg-white border-t-2 dark:border-gray-700 dark:bg-gray-900 py-4 px-4 md:px-8 md:flex md:items-center md:justify-between transition-colors duration-300'>
      <div className='flex items-center gap-x-12'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2024{' '}
          <Link to='/' className='hover:underline' rel='noreferrer'>
            Yach.ay™
          </Link>
          . Todos los derechos reservados.
        </span>
        <div className='flex items-center ms-12 gap-x-6'>
          <Link
            to='/'
            className='text-xl font-medium text-gray-500 hover:underline dark:text-gray-400'
            rel='noreferrer'
          >
            <i className='bi bi-twitter-x'></i>
          </Link>
          <Link
            to='/'
            className='text-xl font-medium text-gray-500 hover:underline dark:text-gray-400'
            rel='noreferrer'
          >
            <i className='bi bi-facebook'></i>
          </Link>
          <Link
            to='/'
            className='text-xl font-medium text-gray-500 hover:underline dark:text-gray-400'
            rel='noreferrer'
          >
            <i className='bi bi-instagram'></i>
          </Link>
        </div>
      </div>
      <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
        <li>
          <Link
            to='/'
            className='hover:underline me-4 md:me-6'
            rel='noreferrer'
          >
            Acerca de
          </Link>
        </li>
        <li>
          <Link
            to='/'
            className='hover:underline me-4 md:me-6'
            rel='noreferrer'
          >
            Política de privacidad
          </Link>
        </li>
        <li>
          <Link
            to='/'
            className='hover:underline me-4 md:me-6'
            rel='noreferrer'
          >
            Licenciamiento
          </Link>
        </li>
        <li>
          <Link to='/' className='hover:underline' rel='noreferrer'>
            Contacto
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
