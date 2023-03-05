import Link from 'next/link';
import {BsCart2} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'

export default function Navbar(){
	return (
		<div className="w-full min-h-[80px] max-h-fit bg-blue-200 flex justify-around items-center">
			<Link className="text-2xl font-bold" href="/">Ecomm-Store</Link>

			<div className="bg-white p-2 rounded-lg flex items-center ">
				<input className="outline-none" type="text" placeholder="Search here..." />
				<BsSearch />
			</div>

			<div className="flex gap-8 items-center" >
				<Link className="text-2xl" href="/user/wishlist"><AiOutlineHeart /></Link>
				<Link className="text-2xl" href="/user/cart"><BsCart2 /></Link>
				<Link href="/login">LogIn/SignUp</Link>
				<Link href="/user/profile">Profile</Link>
			</div>
		</div>
	)
}