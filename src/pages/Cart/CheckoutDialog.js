import { useEffect, useState, useRef } from 'react'
import { useCart } from '../../context'
import { useNavigate } from 'react-router-dom'
import { createOrder, getUser } from '../../services'

export const CheckoutDialog = ({ setShowDialog }) => {
  const { cartList, total, clearCart } = useCart()
  const [user, setUser] = useState({})



  const navigate = useNavigate()

  // Data user request
  useEffect(() => {
    async function fetchData() {
      // Data user service
      const data = await getUser()
      setUser(data)
    }
    fetchData()
  }, [])

  // Fetch Order Request
  async function handleOrder(event) {
    event.preventDefault()
    /* Se requiere la información tanto del usuario como del pedido */
    try {
      const data = await createOrder(cartList, total, user)
      clearCart()
      // * Los datos pueden ser pasados a través de useNavigate con state
      navigate('/order-summary', { state: { status: true, order: data } })
    } catch (error) {
      navigate('/order-summary', { state: { status: false } })
    }
  }
  return (
    <div className='absolute top-0 left-0 z-50 content-center bg-black/50 size-full'>
      <div className='text-secondary-dark mx-auto px-8 md:px-12 py-6 md:py-8 bg-white w-[75%] md:w-[30%] rounded-xl'>
        <div className='relative'>
          <span
            onClick={() => setShowDialog(false)}
            className='absolute right-0 block text-black cursor-pointer bi bi-x-lg'
          ></span>
        </div>
        <h1 className='my-6'>
          <button className='mr-2 bi bi-credit-card'></button>Pago con tarjeta
        </h1>
        <form onSubmit={handleOrder}>
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
                value={user.name || ''}
                disabled
                required=''
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
                autoComplete='off'
                className='w-full p-2 border border-gray-300 rounded-md'
                value={user.email || ''}
                disabled
                required=''
              />
            </div>
            <div>
              <label
                htmlFor='number-card'
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
              <div className='flex w-1/2 mb-6 gap-x-4 md:w-1/3'>
                <input
                  type='number'
                  id='expiry-date'
                  placeholder='xx'
                  className='w-full p-2 border border-gray-300 rounded-md'
                />
                <input
                  type='number'
                  id='expiry-date'
                  placeholder='xx'
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
            <span className='mx-auto text-2xl font-bold lg:mx-0'>${total}</span>
            <button
              type='submit'
              // onClick={() => setShowDialog(false)}
              className='px-4 py-2 text-white rounded bg-primary hover:bg-primary-dark'
            >
              Pagar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
