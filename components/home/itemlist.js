import SingleItem from "../singleitem/singleitem"
import {useState,useEffect} from 'react'
export default function ItemList(){

  const [products,setProducts] = useState([])

  useEffect(()=>{

		fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))

  },[])

	return (
		<div className="grid grid-cols-5 gap-10">
			{
	          products.map((product)=>(
	            <SingleItem product={product} />
	          ))
	        }
		</div>	
	)
}