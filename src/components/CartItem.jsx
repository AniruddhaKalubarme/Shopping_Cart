import { MdOutlineDeleteOutline } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";

export default function({item, index})
{
    const dispatch = useDispatch();

    function removeFromCart()
    {
        toast.success("Item Removed");
        dispatch(remove(item));
    }

    return (
        <div className="flex items-center justify-between p-10 gap-5 border-b-2 border-slate-500 last:border-none">
            <div className="flex items-center justify-center flex-1">
                <img src={item.image} className="w-[200px] h-[200px] object-contain"></img>
            </div>
            <div className="flex flex-col gap-5 flex-2">
                <p className="font-bold text-[25px]">{item.title}</p>
                <p className="text-gray-700 text-[15px]">{item.description.split(" ").splice(0, 15).join(" ")+"..."}</p>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-[25px] text-green-600">${item.price}</p>
                    <button onClick={removeFromCart} className="border-2 border-red-400 p-2 rounded-full bg-red-200 hover:bg-red-400 hover:text-white hover:scale-110 transition-all cursor-pointer">
                        <MdOutlineDeleteOutline/>
                    </button>
                </div>
            </div>
        </div>
    )
}