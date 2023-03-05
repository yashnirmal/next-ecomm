import Image from 'next/image'
import {useDispatch} from 'react-redux'
import {incrementCart,decrementCart,removeFromCart} from '../../state/ecommSlice'


export default function CartItem(props){

	const dispatch = useDispatch()
	const cartItem = props.cartItem
	console.log(props)

	return (
		<div className="h-40 w-full grid grid-cols-3 border-2">
			<div className="col-span-1">
				<div className="w-full h-full relative bg-gray-300">
					<Image src={cartItem?.image} layout='fill' />
				</div>
			</div>

			<div className="col-span-1 flex-col flex justify-around">
				<h3 className="text-2xl font-medium">{cartItem?.title} </h3>
				<span className="text-xl">$ {cartItem?.price}</span>
				<div className="flex items-center gap-3">
					<button className="w-fit p-1 rounded-full hover:bg-gray-300 bg-gray-200">&nbsp; + &nbsp;</button>
					<span>{cartItem?.count} </span>
					<button className="w-fit p-1 rounded-full hover:bg-gray-300 bg-gray-200">&nbsp; - &nbsp;</button>
				</div>
			</div>
		</div>	
	)
}