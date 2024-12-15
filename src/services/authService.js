/*  
  Contiene todos las funciones relacionadas a la solicitud 
  de datos a la API para la autenticación de usuarios
*/

export async function login(authDetail) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authDetail)
  }
  const response = await fetch('http://localhost:8000/login', requestOptions),
    data = await response.json()

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
  const response = await fetch('http://localhost:8000/register', requestOptions)
  // json server auth contiene la ruta /register para registrar nuevos usuarios

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
