import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import axios from 'axios'
import classes from './Product.module.css'

function Product() {
    let [products,setProducts] = useState([])
    useEffect(()=>{
       axios.get('https://fakestoreapi.com/products')
       .then((res)=>setProducts(res.data))
       .catch((err)=>console.log(err))
    },[])
  return (
    <div className={classes.products_container}>
{
    products.map((data)=>(
        <SingleProduct Product={data} key={data.id}/>
    ))
}
    </div>
  )
}

export default Product