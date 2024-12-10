import { useTitle } from '../../hooks/useTitle'
import { Hero, Testimonials, Faq, FeaturedProducts } from '.'

export const HomePage = () => {
  useTitle('Inicio')

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  )
}
