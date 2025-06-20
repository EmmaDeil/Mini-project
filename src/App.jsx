import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Checkout from './components/Checkout/Checkout' 
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Product from './components/Product/Products'
import Cart from './components/Cart/Cart'
import ProductDetails from './components/Product/ProductsDetails'

function App() {
  
  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
      <Footer />
    </>
  )
}

export default App
