import { Suspense, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/banner';
import Footer from './Components/Footer/Footer';
import './App.css'

const jsonPromise = fetch("auctions.json").then((response) => response.json());
function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const handleCart = (item) => {
    setCart([...cart, item]), setTotal(total+item.currentBidPrice);
  }
  const removeCart = ( item, id ) => {
    setTotal(total-item.currentBidPrice);
    const newCart = cart.filter((indicator) => indicator.id != id);
    setCart(newCart);
  }
  return (
    <>
      <Suspense>
        <Navbar jsonPromise={jsonPromise}></Navbar>
        <Banner jsonPromise={jsonPromise} handleCart={handleCart} cart={cart} total={total} removeCart={removeCart}></Banner>
        <Footer jsonPromise={jsonPromise}></Footer>
      </Suspense>
    </>
  )
}

export default App
