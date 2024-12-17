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
  const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${yid}`, requestOptions)
  if (!response.ok) {
    throw { message: response.statusText, status: response.status } //eslint-disable-line
  }
  const data = await response.json()
  return data
}

export async function getUserOrders() {
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
    `${process.env.REACT_APP_HOST}/660/orders?user_id=${yid}`,
    requestOptions
  )
  if (!response.ok) {
    throw { message: response.statusText, status: response.status } //eslint-disable-line
  }
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
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(order)
  }

  const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, requestOptions)
  if (!response.ok) {
    throw { message: response.statusText, status: response.status } //eslint-disable-line
    // * Otra solución es generar un new Error o convertir la declaración en una variable
    // Ver authService
  }
  const data = await response.json()

  return data
}
