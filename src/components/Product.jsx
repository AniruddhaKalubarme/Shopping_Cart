import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { add, remove } from '../redux/Slices/CartSlice';

const Product = ({post}) => {
    const {cart} = useSelector((state)=>state);
    const dispatch = useDispatch();

    function addToCart()
    {
        dispatch(add(post));
        toast.success("Item added to Cart");
    }

    function removeFromCart()
    {
        dispatch(remove(post));
        toast.success("Item removed from Cart");
    }

    return (
        <div className='flex flex-col items-center justify-between h-full gap-3 p-4 mt-10 ml-5 rounded-xl hover:scale-110 transition duration-300 ease-in shadow-lg hover:shadow-5xl shadow-black/20'>
            <div>
                <p className='text-gray-700 font-semibold text-lg truncate w-40 mt-1'>{post.title.split(" ").slice(0, 3).join(" ") + "..."}</p>
            </div>
            <div className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</div>
            <div className='h-[180px]'><img src={post.image} className='h-full w-full object-contain' /></div>
            <div className='flex items-center justify-between w-full mt-5'>
                <div>
                    <p className='text-green-600 font-semibold'>${post.price}</p>
                </div>
                <div>
                    {
                        cart.some((p) => p.id == post.id) ?
                            <button className='text-gray-700 w-fit border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in cursor-pointer' onClick={removeFromCart}>Remove Item</button> :
                            <button className='text-gray-700 w-fit border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in cursor-pointer' onClick={addToCart}>Add Item</button>
                    }
                </div>

            </div>
        </div>
    )
}

export default Product