import { createContext, useContext, useReducer } from 'react'
import { filterReducer } from '../reducers'

// Estado inicial
const filterInitialState = {
  /*
   * Se almacena los datos de productos suplantando el estado de ProductList
   *  Que luego se iterara en las páginas
   */
  productList: [],
  // Se almacena la info del filtrado de productos definiendo los valores por defecto
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null
}

// Contexto para el uso de filtros
const FilterContext = createContext(filterInitialState)

// Proveedor
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState)

  /* 
    Las funciones a continuación se aplican todas a la lista de productos sin importar
    si se usan o no los filtros. Con el fin de mantener la integridad de la información
  */

  // Funciones
  function initialProductList(products) {
    dispatch({
      type: 'PRODUCT_LIST',
      payload: { products: products }
    })
  }

  function sort(products) {
    if (state.sortBy === 'high-to-low') {
      return products.sort((a, b) => b.price - a.price)
    }
    if (state.sortBy === 'low-to-high') {
      return products.sort((a, b) => a.price - b.price)
    }
    return products
  }

  function ratings(products) {
    if (state.ratings === '4STARABOVE') {
      return products.filter((product) => product.rating >= 4)
    }
    if (state.ratings === '3STARABOVE') {
      return products.filter((product) => product.rating >= 3)
    }
    if (state.ratings === '2STARABOVE') {
      return products.filter((product) => product.rating >= 2)
    }
    if (state.ratings === '1STARABOVE') {
      return products.filter((product) => product.rating >= 1)
    }
    return products
  }

  function bestSellerOnly(products) {
    return state.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products
  }

  function onlyInStock(products) {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products
  }

  const filteredProductList = ratings(
    sort(onlyInStock(bestSellerOnly(state.productList)))
  )
  // Por defecto se ejecutaran las funcinoes pero no se filtraran los datos

  const value = {
    state,
    dispatch,
    products: filteredProductList,
    initialProductList
  }

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  )
}
// useFilter para el uso del contexto en los componentes
export const useFilter = () => useContext(FilterContext)
