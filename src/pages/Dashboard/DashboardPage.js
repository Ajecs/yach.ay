import { useEffect, useState } from 'react'
import { DashboardCard } from './DashboardCard'
import { DashboardEmpty } from './DashboardEmpty'

export const DashboardPage = () => {
  const token = JSON.parse(sessionStorage.getItem('token')),
    yid = JSON.parse(sessionStorage.getItem('yid'))
  
    const [orderList, setOrderList] = useState([])

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(
        `http://localhost:8000/660/orders?user_id=${yid}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      )
      const data = await response.json()
      setOrderList(data)
    }
    fetchOrders()
  }, [token, yid])

  return (
    <main className='my-8'>
      <h1 className='w-fit mx-auto'>Panel de control</h1>
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
