import WishItem from "../../components/singleitem/wishitem"
import {useSelector, useDispatch} from 'react-redux'
import {incrementCart,decrementCart,removeFromCart} from '../../state/ecommSlice'

export default function Wishlist(){

	const wishList = useSelector((state)=>state.ecomm.wishList)	
	
	return (
		<div className="flex flex-col justify-center items-center mt-10 mb-20">
			<div className="w-[50%] flex flex-col justify-center items-center gap-10">
				<h2 className="font-bold text-3xl">Wishlist</h2>
				<div className="grid gap-6 w-full">
					<WishItem />
					<WishItem />
					<WishItem />
					<WishItem />
				</div>
			</div>
		</div>

	)
}