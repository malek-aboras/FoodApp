import React, { useContext } from 'react'
import MealItemForm from './MealItemForm'
import AuthContext from '../store/order-context'

import classes from './MealItem.module.css'

const MealItem = (props) => {
    const ctx = useContext(AuthContext)

    const amountSubmitHandler = event => {
        const total = parseInt(event) * props.price
        ctx.onOrder(props.id, props.title, props.price, event, total)
    }


    return (
        <li className={classes.meal}>
            <div >
                <h3>
                    {props.title}
                </h3>
                <div className={classes.description}>
                    {props.discription}
                </div>
                <div className={classes.price}>
                    {props.price}
                </div>
            </div>
            <MealItemForm onAdd={amountSubmitHandler} />

        </li>
    )
}
export default MealItem