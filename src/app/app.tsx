"use client";
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Register from '@/components/Register';
import { store } from '@/redux/store';
import React, { useState } from 'react'
import { Provider } from 'react-redux';

const App = ({ children }: {children: React.ReactNode }) => {
    const [showCart, setShowCart] = useState(false);
    const [showRegister, setShowRegiter] = useState(false);

  return <Provider store={store}>
    <NavBar setShowCart={setShowCart} setShowRegiter={setShowRegiter} />
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showRegister && <Register setShowRegiter={setShowRegiter}  />}
    {children}
    <Footer />
  </Provider>;
}

export default App