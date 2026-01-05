import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => {
        setAnimate(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [cart.length]);

  return (
    <div className="bg-black text-white p-2 flex justify-around items-center fixed top-0 w-full z-50 shadow-md shadow-amber-500/50">
      <NavLink to="/" className='inline-block'>
        <img src='/logo.png' width="100px"></img>
      </NavLink>
      <div className='flex items-center gap-8'>
        <NavLink to='/'>Home</NavLink>
        <div>
          <NavLink to='/Cart' className='flex items-center gap-2 px-2'>
            <FaShoppingCart />
            <div className={`text-[20px] bg-green-700 px-2 rounded-full ${animate ? 'animate-bounce' : ''}`}>{cart.length}</div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
