import React from 'react'
import logo  from '/logo.png'
import classes from './Head.module.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LowerHead from './LowerHead';

const Head = () => {
  return (
    <>
    <div className={classes.Head_container}>
        
           <div className={classes.Head_container__logo_wrapper}>
            <a href="/">
            <img className={classes.Head_container_logo__img} src={logo} alt="" />
            </a>
            </div>


        <div className={classes.Head_container__location}>
             <div> <LocationOnOutlinedIcon/> </div>

            <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
            </div>
        </div>
         

        <div className={classes.Head_container__search}>
            <div>
                <select name="" id="">
                    <option value="">All</option>
                </select>
            </div>
            <div><input placeholder='Search Amazone' id='search' type="text" /></div>
            <label htmlFor="search" className={classes.bg_yellow}><SearchOutlinedIcon  className={classes.bg_black}/></label>
        </div>
        <label htmlFor=""></label>

        <div className={classes.Head_container__flag}>
            <div>
                <img src="https://image.shutterstock.com/image-vector/vector-image-american-flag-260nw-157626554.jpg" alt="" />
            </div>

            <div>
                <select name="" id="">
                    <option value="">EN</option>
                </select>
            </div>

        </div>

        <div className={classes.Head_container__account}>
            <a href="">
            <p>Sign in</p>
            <span>Account & Lists</span>
            </a>
        </div>

        <div className={classes.Head_container__order}>
            <a href="">
            <p>return</p>
            <span>& Orders</span>
            </a>
        </div>


        <a className={classes.Head_container__cart} href="">
            <ShoppingCartOutlinedIcon/>
            <span>0</span>
        </a> 
         
    </div>
    <LowerHead/>
    </>
  )
}

export default Head