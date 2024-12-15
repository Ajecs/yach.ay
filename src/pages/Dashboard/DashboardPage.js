import { useEffect, useState } from 'react'

import { DashboardCard } from './DashboardCard'
import { DashboardEmpty } from './DashboardEmpty'

import { getUserOrders } from '../../services'
import { useTitle } from '../../hooks/useTitle'

export const DashboardPage = () => {
  const [orderList, setOrderList] = useState([])

  useEffect(() => {
    async function fetchOrders() {
      // Data user order service
      const data = await getUserOrders()
      setOrderList(data)
    }
    fetchOrders()
  }, [])

  useTitle('Panel')

  return (
    <main className='my-8'>
      <h1 className='w-fit mx-auto'>Panel</h1>
      <section>
        {orderList.length > 0 &&
          orderList.map((order) => (
            <DashboardCard key={order.id} order={order} />
          ))}
      </section>
      <section>{!orderList.length && <DashboardEmpty />}</section>
    </main>
  )
}
