import {useRouter} from 'next/router';
import Image from 'next/image'
import {useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addToCart,addToWishlist} from '../../state/ecommSlice'


export default function Product(){
	const router = useRouter()
	const slug = router.query.slug

	const dispatch = useDispatch()
	const [product,setProduct] = useState({})
		
	useEffect(()=>{
		if(slug!=undefined)
		fetch(`https://fakestoreapi.com/products/${slug}`)
        .then(res=>res.json())
        .then(data=>{
        	setProduct(data)
        })
	},[slug])



	return(
		<div className="grid grid-cols-2 h-[100vh] gap-10">
			{/*Product Image*/}
			<div className="bg-gray-200">
				<div className="w-full h-full relative">
					<Image src={product?.image} layout='fill' />
				</div>
			</div>

			{/*Product Details*/}
			<div>
				<div className="p-10 text-xl text-zinc-800 flex flex-col gap-6">
					<h1 className="text-4xl font-medium text-black">{product?.title}</h1>
					<span className="">{product?.description}</span>
					<span className="font-medium">$ {product?.price}</span>

					<div className="w-full flex justify-between gap-4">
						<button onClick={()=>dispatch(addToCart({...product,count:1}))}>Add to Cart</button>
						<button onClick={()=>dispatch(addToWishlist({...product}))}>Wishlist</button>
					</div>
				</div>	
			</div>
		</div>
	)
}