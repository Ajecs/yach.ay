import { useLocation } from 'react-router-dom'
import { useTitle } from '../../hooks/useTitle'

import { OrderFail } from './OrderFail'
import { OrderSuccess } from './OrderSuccess'

export const OrderPage = () => {
  // Se accede a los datos del check out (status ...) a partir de useLocation
  const { state } = useLocation()

  useTitle('Resumen de pedido')

  return (
    <main>
      {state.status ? <OrderSuccess order={state.order} /> : <OrderFail />}
    </main>
  )
}
