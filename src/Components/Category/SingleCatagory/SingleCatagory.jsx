import React from 'react'
import classes from '../Category.module.css'

function SingleCatagory({title,image}) {

  return (
  <>
      <div className={classes.category}>
       <a href='#'>
        <h2>{title}</h2>
        <img src={image} alt={`${title} Image`} />
        <div>shop now</div>
        </a>
        </div>
    </>
  )
}

export default SingleCatagory