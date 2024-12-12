import React from 'react'
import ReactDOM from 'react-dom/client'
import { FilterProvider, CartProvider } from './context'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import './index.css'
import 'react-toastify/dist/ReactToastify.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ToastContainer position='bottom-right' hideProgressBar={true} />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
)
