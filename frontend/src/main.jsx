// Description: This is the main entry point for the React application. 
// It renders the App component inside a BrowserRouter and a ShopContextProvider.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{ BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider> 
    <App />
  </ShopContextProvider>
    
  </BrowserRouter>,
)
