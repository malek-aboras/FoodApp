import React from 'react'
import AvailableMeals from './AvailableMeals'
import classes from './Card.module.css';


const Card = (props) => {
    return (
        <div className={classes.card}>
            <AvailableMeals />
        </div>
    )
}
export default Card