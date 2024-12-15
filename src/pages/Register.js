import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from '../services'

export const Register = () => {
  const navigate = useNavigate()

  const nameRef = useRef(),
    emailRef = useRef(),
    passwordRef = useRef()

  const handleRegister = async (event) => {
    event.preventDefault()
    const authDetail = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    // register service
    const data = await register(authDetail)
    
    data.accessToken ? navigate('/products') : toast.error(data)
  }

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-4'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Crea una cuenta
            </h1>
            <form onSubmit={handleRegister} className='space-y-4 md:space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Tu nombre
                </label>
                <input
                  ref={nameRef}
                  type='name'
                  id='name'
                  name='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Tu correo electrónico
                </label>
                <input
                  ref={emailRef}
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='nombre@correo.com'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Contraseña
                </label>
                <input
                  ref={passwordRef}
                  type='password'
                  name='password'
                  id='password'
                  placeholder=' '
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='confirm-password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Confirma tu contraseña
                </label>
                <input
                  type='password'
                  name='confirm-password'
                  id='confirm-password'
                  placeholder=' '
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </div>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='terms'
                    aria-describedby='terms'
                    type='checkbox'
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                    required
                  />
                </div>
                <div className='ml-3 text-sm'>
                  <label
                    htmlFor='terms'
                    className='font-light text-gray-500 dark:text-gray-300'
                  >
                    Acepto los{' '}
                    <Link
                      className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                      to='/'
                    >
                      Términos y Condiciones
                    </Link>
                  </label>
                </div>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Crear cuenta
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                ¿Ya tienes una cuenta?{' '}
                <Link
                  to='/'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Iniciar sesión aquí
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
