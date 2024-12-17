/*  
  Contiene todos las funciones relacionadas a la solicitud 
  de datos a la API para la autenticación de usuarios
*/

const host = process.env.REACT_APP_HOST

export async function login(authDetail) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authDetail)
  }
  const response = await fetch(`${host}/login`, requestOptions),
    data = await response.json()
  console.log(response)

  if (!response.ok && response.status !== 400) {
    const errorMessage = {
      message: response.statusText,
      status: response.status
    }
    throw errorMessage
  }

  if (data.accessToken) {
    sessionStorage.setItem('token', JSON.stringify(data.accessToken))
    sessionStorage.setItem('yid', JSON.stringify(data.user.id))
  }

  return data
}

export async function register(authDetail) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authDetail)
  }
  const response = await fetch(`${host}/register`, requestOptions)
  // json server auth contiene la ruta /register para registrar nuevos usuarios

  if (response.status !== 400 && !response.ok) {
    const errorMessage = {
      message: response.statusText,
      status: response.status
    }
    throw errorMessage
  }

  const data = await response.json()

  if (data.accessToken) {
    sessionStorage.setItem('token', JSON.stringify(data.accessToken))
    sessionStorage.setItem('yd', JSON.stringify(data.user.id))
  }

  return data
}

export function logout() {
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('yid')
}
