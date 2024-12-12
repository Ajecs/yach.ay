export const CheckoutDialog = ({ setShowDialog }) => {
  return (
    <div className='content-center absolute top-0 left-0 bg-black/50 size-full'>
      <div className='text-secondary-dark mx-auto px-8 md:px-12 py-6 md:py-8 bg-white  w-[75%] md:w-[50%] rounded-xl'>
        <div className='relative'>
          <span
            onClick={() => setShowDialog(false)}
            className='absolute bi bi-x-lg right-0 block text-black cursor-pointer'
          ></span>
        </div>
        <h1 className='my-6'>
          <button className='bi bi-credit-card mr-2'></button>Pago con tarjeta
        </h1>
        <div className='flex flex-col gap-y-6'>
          <div>
            <label
              htmlFor='name'
              className='block mb-2 text-lg font-medium text-gray-700'
            >
              Nombre:
            </label>
            <input
              type='text'
              id='name'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-lg font-medium text-gray-700'
            >
              Correo electrónico:
            </label>
            <input
              type='email'
              id='email'
              autoComplete="off"
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
          <div>
            <label
              htmlFor='name'
              className='block mb-2 text-lg font-medium text-gray-700'
            >
              Número de tarjeta:
            </label>
            <input
              type='number'
              id='number-card'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
          <div>
            <label
              htmlFor='expiry-date'
              className='block mb-2 text-lg font-medium text-gray-700'
            >
              Fecha de vencimiento:
            </label>
            <div className='flex gap-x-4 w-1/2 md:w-1/3 mb-6'>
              <input
                type='number'
                id='expiry-date'
                placeholder="xx"
                className='w-full p-2 border border-gray-300 rounded-md'
              />
              <input
                type='number'
                id='expiry-date'
                placeholder="xx"
                className='w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div>
              <label
                htmlFor='security-code'
                className='block mb-2 text-lg font-medium text-gray-700'
              >
                Código de seguridad:
              </label>
              <input
                type='number'
                id='security-code'
                className='w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
          </div>
          <span className="mx-auto lg:mx-0 text-2xl font-bold">
            $99
          </span>
          <button
            onClick={() => setShowDialog(false)}
            className='bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded'
          >
            Pagar
          </button>
        </div>
      </div>
    </div>
  )
}
