import { useEffect } from "react"

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Yach.ay`
  }, [title])

  return null
}
