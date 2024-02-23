import React from 'react'
import { Rating } from '@mui/material';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css'

function SingleProduct({Product}) {
    console.log(Product);
  return (
    <div className={classes.Outer_Product_Container}>
        <a href="#">
            <img src={Product.image} alt="" />
        </a>

        <div>
            <h3>{Product.title}</h3>
            <div>
                {/* rating */}
                <Rating   name="size-large" value={Product.rating.rate} precision={0.1} size="large"/>
                {/* counter */}
                <small>{Product.rating.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={Product.price}/>
                <button className={classes.button}>Add To Chart</button>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct