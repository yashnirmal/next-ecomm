import Image from 'next/image';
import Link from 'next/link'
import {BsStarFill} from 'react-icons/bs'

export default function SingleItem(props){

	let product = props.product

	return (
		<div className="gap-2 hover:shadow-2xl relative transition">
			<Link href={`/product/${product.id}`}>
				<div className="w-full aspect-square bg-gray-200 relative">
					<Image src={product.image} layout='fill' />
				</div>
				<div className="p-2 grid gap-3">
					<h3 className="font-bold">{product.title}</h3>
					<span>{product.description.substring(0,40)+"..."}</span>
					<div className="flex justify-between items-center">
						<span className="text-green-500 font-bold">$ {product.price}</span>
						<div className="flex items-center justify-between gap-2">
							<span>{product.rating.rate}</span>
							<BsStarFill />
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}