import { Hero } from './Hero'
import { Testimonials } from './Testimonials'
import { Faq } from './Faq'
import { FeaturedProducts } from './FeaturedProducts'

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
