import CartItem from "../../components/singleitem/cartitem"
import {useSelector, useDispatch} from 'react-redux'
import {incrementCart,decrementCart,removeFromCart} from '../../state/ecommSlice'
import {useState, useEffect} from 'react'

export default function Cart(){

	const cartItems = useSelector((state)=>state.ecomm.cartItems)

	return (
		<div className="flex flex-col justify-center items-center mt-10 mb-20">
			<div className="w-[50%] flex flex-col justify-center items-center gap-10">
				<h2 className="font-bold text-3xl">Cart</h2>
				<div className="grid gap-6 w-full">
					{
						cartItems.map((item)=>{
							<CartItem cartItem={item} />
						})
					}
				</div>
				<button className="bg-green-400 hover:bg-green-500">Checkout</button>
			</div>
		</div>

	)
}