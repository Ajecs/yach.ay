// Se obtiene la lista de productos
const host =  process.env.REACT_APP_HOST
export async function getProductList(searchTerm) {
  const response = await fetch(
    `${host}/444/products?name_like=${
      searchTerm ? searchTerm : ''
    }`
  )
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }
  }
  const data = await response.json()
  return data
}

// Se obtiene el producto de forma individual
export async function getProduct(id) {
  const response = await fetch(`${host}/444/products/${id}`)
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }
  }
  const data = await response.json()
  return data
}

export async function getFeaturedProductList() {
  const response = await fetch(
    `${host}/444/featured_products`
  )
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }
  }
  const data = await response.json()
  return data
}
