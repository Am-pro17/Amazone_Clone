import React from 'react'
import classes from './Category.module.css'
import SingleCatagory from './SingleCatagory/SingleCatagory'
import Data from './Data/Data'


function Category() {

  return (
    <>
    <div className={classes.categories}>
        {
            Data.map((current,index)=>{
                console.log(current.image);

                let category = (
                    <SingleCatagory key={index} title={current.title} image={current.image}/>
                  )
                  return category 
            })
       
        }
    </div>
    </>
  )
}

export default Category