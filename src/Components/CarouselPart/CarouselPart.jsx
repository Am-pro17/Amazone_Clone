import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {images} from '../../assets/Carusole_Image/data'
import classes from './CarouselPart.module.css'

function CarouselPart() {
  return (
    <div>
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        >
{
    images.map((image,i)=> (<img key={i} src={image}/>))
}

        </Carousel>
        <div className={classes.bg__green}></div>
    </div>
  )
}

export default CarouselPart