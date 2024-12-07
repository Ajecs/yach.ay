import { useEffect, useState } from "react"

export const useFetch = (apiPath) => {
  console.log(apiPath)
  
  
  const [data, setData] = useState([]),
    url = `http://localhost:8000/${apiPath}`

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(url),
        data = await response.json()
      setData(data)
    }
    fetchProducts()
  }, [url])
  return {data}
}
