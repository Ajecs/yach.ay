export const Faq = () => {
  return (
    <section className='my-4 md:my-8 border px-16'>
      <h2 className='w-fit mx-auto mb-4 mt-8 md:mb-8 md:text-3xl lg:text-4xl '>
        Preguntas Frecuentes
      </h2>
      <details className='min-h-32 md:w-3/4 text-lg'>
        <summary className='mb-2 border-b-2 py-4'>
          ¿Cuál es la diferencia entre Yach.ay y otros cursos de programación?
        </summary>
        <p>
          En Yach.ay, nos enfocamos en la programación como una forma de
          resolver problemas reales. En lugar de enfocarnos en la teoría pura,
          nos enfocamos en la práctica y en el desarrollo de proyectos. Además,
          nuestros cursos son muy prácticos y ofrecemos un soporte personalizado
          a nuestros estudiantes.
        </p>
      </details>
      <details className='min-h-32 md:w-3/4 text-lg'>
        <summary className='mb-2 border-b-2 py-4'>
          ¿Por qué elegir Yach.ay para aprender programación?
        </summary>
        <p>
          Nuestros cursos son diseñados para que los estudiantes puedan aprender
          a su propio ritmo, sin importar su nivel de experiencia. Además,
          nuestros instructores son expertos en la materia y ofrecen un soporte
          personalizado a nuestros estudiantes.
        </p>
      </details>
    </section>
  )
}
