import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className="h-fit">
      {
        cart.length > 0 ?
          (
            <div className="flex justify-between p-10 gap-10 h-full">
              <div className="w-full md:w-[60%] flex flex-col p-2">
                {
                  cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>

              <div className="flex flex-col flex-1 h-[100] justify-between">
                <div>
                  <div className="font-bold text-[35px] text-green-700 uppercase">Your Cart</div>
                  <div className="font-bold text-[50px] text-green-700 uppercase">Summary</div>
                  <p className="text-[30px] text-black font-bold">Total Items: {cart.length}</p>
                </div>

                <div>
                  <p className="text-[30px] text-black font-bold">Total Amount: ${totalAmount}</p>
                  <button className="border-2 border-green-700 w-full py-2 bg-green-600 uppercase font-bold rounded-lg hover:bg-white hover:text-green-700 hover:scale-101 transition-all cursor-pointer">
                    CheckOut Now
                  </button>
                </div>
              </div>
            </div>

          )
          :
          (
            <div className="min-h-[80vh] flex flex-col items-center justify-center">
              <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
              <Link to={"/"}>
                <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 uppercase tracking-wider cursor-pointer">
                  Shop Now
                </button>
              </Link>
            </div>
          )
      }
    </div>
  )
}

export default Cart