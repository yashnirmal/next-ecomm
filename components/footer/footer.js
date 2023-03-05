import Link from 'next/link'

export default function Footer(){
	return (
		<div className="flex flex-row justify-around items-center p-10">
			<Link href="/"><h2 className="text-xl font-bold">© 2020 Ecomm-Store</h2></Link>
			<Link href="#"><span>Terms and Conditions</span></Link>
			<Link href="#"><span>Privacy Policy</span></Link>
			<Link href="#"><span>Terms and Conditions</span></Link>
		</div>
	)
}