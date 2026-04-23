import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import CartTile from "../components/cart-tile";



export default function Cart() {

    const [totalCart, setTotalCart] = useState(0)
    const { cart } = useSelector(state => state)

    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    console.log(cart, totalCart);

    return (
        <div className="flex justify-between w-full flex-col">
            {
                cart && cart.length ? (
                    <div className="w-full bg-red-400 flex">
                        <div className="mx-auto bg-blue-500 flex-1">
                            <div className="flex flex-wrap w-full justify-start gap-4 items-center p-3 bg-amber-700">
                                {
                                    cart.map(cartItem => <CartTile cartItem={cartItem} />)
                                }
                            </div>
                        </div>
                        <div className="h-fit bg-amber-300 self-end">
                            <div className="flex flex-col justify-around items-start p-5 mt-14 gap-3 ">
                                <h1 className="font-bold text-lg text-red-800">Your Cart Summary</h1>
                                <p>
                                    <span className="text-gray-800 font-bold " >Total Item</span>
                                    <span className="">: {cart.length}</span>
                                </p>
                                <p>
                                    <span className="text-gray-800 font-bold " >Total Amount</span>
                                    <span className="">: {totalCart}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="min-h-[80vh] flex flex-col items-center justify-center ">
                        <h1 className="text-gray-800 font-bold text-xl mb-2 ">Your Cart is Empty</h1>
                        <Link to={'/'} className="bg-red-950 text-white border-2 rounded-lg font-bold p-4 ">Shop Now</Link>
                    </div>
                )
            }
        </div>
    )
}