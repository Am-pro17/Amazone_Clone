import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import classes from './Head.module.css'

function LowerHead() {
  return (
    <>
    <ul className={classes.LowerHead}>
        <li className='first_list'>
            <MenuOutlinedIcon/>
            <div>All</div>
        </li>
        <li>Today's Deal</li>
        <li>Customer Service</li>
        <li>Registary</li>
        <li>Gift Cards</li>
        <li>Sell</li>
    </ul>
    </>
  )
}

export default LowerHead