import React, { useContext } from 'react'
import AuthContext from '../store/order-context'

import classes from './CartItem.module.css'

const CartItem = (props) => {

    const ctx = useContext(AuthContext)

    const addAmountHandler = () => {
        ctx.onAddAmount(props.id)
    }

    const removeAmountHandler = () => {
        ctx.onRemoveAmount(props.id)
    }

    return (
        <li className={classes["cart-item"]}>
            <div>
                <h2>{props.title}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{`${props.price}$`}</span>
                    <span className={classes.amount}>{`× ${props.amount}`}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={addAmountHandler}>+</button>
                <button onClick={removeAmountHandler}>-</button>
            </div>
        </li>

    )
}
export default CartItem