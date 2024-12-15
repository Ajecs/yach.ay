function getSession() {
  const token = JSON.parse(sessionStorage.getItem('token')),
    yid = JSON.parse(sessionStorage.getItem('yid'))
  return { token, yid }
}

// Se obtiene los datos del usuario que inicia sesión
export async function getUser() {
  const browseDataSession = getSession(),
    { token, yid } = browseDataSession

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
  const response = await fetch(
    `http://localhost:8000/600/users/${yid}`,
    requestOptions
  )
  const data = await response.json()
  return data
}

export async function getUserOrders() {
  const browseDataSession = getSession(),
    { token, yid } = browseDataSession

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
  return data
}

export async function createOrder(cartList, total, user) {
  const browseDataSession = getSession(),
    { token } = browseDataSession

  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id
    }
  }

  const response = await fetch('http://localhost:8000/660/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(order)
  })
  const data = await response.json()

  return data
}
