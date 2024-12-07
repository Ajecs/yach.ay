export const Testimonials = () => {
  return (
    <section>
      <h2 className='w-fit md:text-3xl mx-auto mt-16 mb-8'>
        Nuestros estudiantes sobre <span className='logo'>Yach.ay</span>
      </h2>
      {/* grid */}
      <div className=' flex flex-col md:grid md:grid-cols-3 mx-auto'>
        <div className='p-16 border border-secondary-light'>
          <div className='mb-4'>
            <h3>"Me encanta la forma en que se presentan los conceptos."</h3>
            <p className='text-secondary'>He podido entender fácilmente los conceptos de programación.</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <img
              className='w-10 h-10 rounded-full'
              src='https://flowbite.com/docs/images/people/profile-picture-1.jpg'
              alt='Rounded avatar'
            />
            <div className='flex flex-col text-left'>
              <h4 className='font-semibold mb-0'>María Fernández</h4>
              <p className='text-secondary'>Estudiante</p>
            </div>
          </div>
        </div>
        <div className='p-16 border border-secondary-light'>
          <div className='mb-4'>
            <h3>"Me ha ayudado a mejorar mi comprensión de los conceptos."</h3>
            <p className='text-secondary'>Gracias a Yach.ay, he podido aprobar mi curso de programación.</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <img
              className='w-10 h-10 rounded-full'
              src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
              alt='Rounded avatar'
            />
            <div className='flex flex-col text-left'>
              <h4 className='font-semibold mb-0'>Juan Gómez</h4>
              <p className='text-secondary'>Estudiante</p>
            </div>
          </div>
        </div>
        <div className='p-16 border border-secondary-light'>
          <div className='mb-4'>
            <h3>"Es fácil de entender y está muy bien explicado."</h3>
            <p className='text-secondary'>Me ha ayudado a aprender a programar de manera efectiva.</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <img
              className='w-10 h-10 rounded-full'
              src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
              alt='Rounded avatar'
            />
            <div className='flex flex-col text-left'>
              <h4 className='font-semibold mb-0'>Luis Pérez</h4>
              <p className='text-secondary'>Estudiante</p>
            </div>
          </div>
        </div>
        <div className='p-16 border border-secondary-light'>
          <div className='mb-4'>
            <h3>"Me parece una excelente herramienta para aprender."</h3>
            <p className='text-secondary'>Me ha ayudado a mejorar mi comprensión de los conceptos.</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <img
              className='w-10 h-10 rounded-full'
              src='https://flowbite.com/docs/images/people/profile-picture-4.jpg'
              alt='Rounded avatar'
            />
            <div className='flex flex-col text-left'>
              <h4 className='font-semibold mb-0'>Ana Sánchez</h4>
              <p className='text-secondary'>Estudiante</p>
            </div>
          </div>
        </div>
        <div className='p-16 border border-secondary-light'>
          <div className='mb-4'>
            <h3>"Me parece una excelente herramienta para aprender."</h3>
            <p className='text-secondary'>Me ha ayudado a aprobar mi curso de programación.</p>
          </div>
          <div className='flex items-center gap-2'>
            <img
              className='w-10 h-10 rounded-full'
              src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              alt='Rounded avatar'
            />
            <div className='flex flex-col text-left'>
              <h4 className='font-semibold mb-0'>Pedro Gutiérrez</h4>
              <p className='text-secondary'>Estudiante</p>
            </div>
          </div>
        </div>
        <div className='p-16 border border-secondary-light'>
          <div className='mb-4'>
            <h3>"Me parece una excelente herramienta para aprender."</h3>
            <p className='text-secondary'>Me ha ayudado a mejorar mi comprensión de los conceptos.</p>
          </div>
          <div className='flex items-center gap-2'>
            <img
              className='w-10 h-10 rounded-full'
              src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              alt='Rounded avatar'
            />
            <div className='flex flex-col text-left'>
              <h4 className='font-semibold mb-0'>Sofía López</h4>
              <p className='text-secondary'>Estudiante</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

