import { Link } from 'react-router-dom'
import HeroImage from '../../assets/images/program-hero.svg'

export const Hero = () => {
  return (
    <section className='flex flex-col justify-center mb-4 md:mb-8 md:w-3/4 mx-auto md:grid md:grid-cols-2'>
      <div className='flex flex-col mx-auto md:w-5/6 md:mx-0 md:ms-auto md:items-center md:gap-y-2 justify-center'>
        <h2 className='md:text-3xl lg:text-4xl'>
          La mejor tienda de libros digitales
        </h2>
        <p className='mb-4 md:text-xl lg:text-2xl lg:mx-0 md:self-start'>
          <span className='logo dark:text-secondary-light'>Yach.ay</span> es el la más popular fuente de
          libros electrónicos a nivel mundial. Encuentra puntajes y acceso a los
          más nuevos libros digitalmente
        </p>
        <button className=' me-auto bg-primary-dark hover:bg-primary-darker text-white text-sm px-4 py-2 font-medium md:text-xl md:px-6 md:py-4 rounded-lg'>
          <Link to='/products'>Explora eBooks</Link>
        </button>
      </div>  
      <div>
        <img className='-my-3' src={HeroImage} alt='Programmer Hero' />
      </div>
    </section>
  )
}
