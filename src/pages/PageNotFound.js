import { Link } from 'react-router-dom'
import NotFoundLogo from '../assets/images/logo-not-found.svg'
import { PrimaryButton } from '../components/Elements/PrimaryButton'

export const PageNotFound = () => {
  return (
    <main className=''>
      <div className='flex flex-col items-center gap-12 w-fit mx-auto'>
        <h1 className='w-fit mx-auto my-5 text-3xl md:text-5xl mb-6'>
          Página no encontrada
        </h1>
        <img src={NotFoundLogo} alt='' />
        <PrimaryButton className='w-fit mx-auto'>
          <Link className='text-2xl' to='/'>
            Volver al inicio
          </Link>
        </PrimaryButton>
      </div>
    </main>
  )
}
    