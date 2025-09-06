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
import NotFound from './components/NotFound'
import PageTitle from './components/PageTitle'

function App() {
  
  return (
    <>
    <Routes>

      <Route path='*/*' element={
        <>
        <PageTitle defaultTitle="Blue_Bird" />
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        </>
      } />
    </Routes>
    </>
  );
}

export default App
