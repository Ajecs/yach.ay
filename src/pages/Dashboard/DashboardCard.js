import { Link } from 'react-router-dom'

export const DashboardCard = ({ order }) => {
  return (
    <section className='max-w-4xl p-4 m-auto my-5 font-semibold border md:p-8 dark:border-slate-700'>
      <div className='flex justify-between'>
        <span>Id de pedido: {order.id}</span>
        <span className=''>Total: ${order.amount_paid}</span>
      </div>
      <div className='space-y-8'>
        {order.cartList.map((product) => (
          <div key={product.id} className='my-8'>
            <div className='flex max-w-md md:max-w-3xl space-x-3 md:space-x-6 md:text-xl '>
              <div className='size-1/4'>
                <Link to={`/product/${product.id}`}>
                  <img
                    className='aspect-auto rounded-lg'
                    src={product.poster}
                    alt={product.name}
                  />
                </Link>
              </div>
              <div className='space-y-2'>
                <Link to=''>
                  <p className=''>{product.name}</p>
                </Link>
                <span className='block'>${product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
