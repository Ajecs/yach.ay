import { FeaturedProducts } from '../../components'
import { ProductsList } from '../Products/ProductsList'
import { Faq } from './Faq'
import { Hero } from './Hero'
import { Testimonials } from './Testimonials'

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  )
}
