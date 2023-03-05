import Image from 'next/image'

export default function Wishitem(){
	return (
		<div className="h-40 w-full grid grid-cols-3 border-2">
			<div className="col-span-1">
				<div className="w-full h-full relative bg-gray-300">
					<Image src="" layout='fill' />
				</div>
			</div>

			<div className="col-span-1 flex-col flex justify-around">
				<h3 className="text-2xl font-medium">Product Name</h3>
				<span className="text-xl">Rs 1220</span>
				<div className="flex items-center gap-3">
					<button className="w-fit font-normal underline hover:bg-transparent bg-transparent">Add to Cart</button>
					<button className="w-fit font-normal underline  font-normal underline text-red-600 hover:bg-transparent bg-transparent">Remove</button>
				</div>
			</div>
		</div>	
	)
}