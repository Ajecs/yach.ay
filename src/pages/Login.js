import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Login = () => {
  const emailRef = useRef(),
    passwordRef = useRef(),
    navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()
    const authDetail = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authDetail)
    }
    const response = await fetch('http://localhost:8000/login', requestOptions),
      data = await response.json()
    console.log(data)

    data.accessToken ? navigate('/products') : toast.error(data)
  }

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center md:mt-8 px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Iniciar sesión
            </h1>
            <form onSubmit={handleLogin} className='space-y-4 md:space-y-6'>
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
                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='remember'
                      aria-describedby='remember'
                      type='checkbox'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                      required
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='remember'
                      className='text-gray-500 dark:text-gray-300'
                    >
                      Recuerdame
                    </label>
                  </div>
                </div>
                <Link
                  to='/'
                  className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Olvide mi contraseña
                </Link>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-dark dark:hover:bg-primary-darker dark:focus:ring-primary-800'
              >
                Iniciar sesión
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                ¿Aún no tienes una cuenta?{' '}
                <Link
                  to='/'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Registrate
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
