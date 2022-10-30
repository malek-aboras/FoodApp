import React, { useContext } from 'react'
import CartItem from './CartItem'
import AuthContext from '../store/order-context'

import classes from './Cart.module.css'

const Cart = () => {

    const ctx = useContext(AuthContext)

    const closeClickHandler = () => {
        ctx.onCloseSummery()
    }

    const orderSubmitHandler = () => {
        console.log(ctx.requestSummery)
    }

    return (
        <React.Fragment>
            <div className={classes["cart-items"]}>
                <ul>
                    {
                        ctx.requestSummery.map((meal) => {
                            return (
                                <CartItem
                                    key={meal.id}
                                    id={meal.id}
                                    title={meal.title}
                                    price={meal.price}
                                    amount={meal.amount}
                                />
                            )
                        })
                    }
                </ul>
            </div>
            <div className={classes.total}>
                <h3>Total</h3>
                <h3>{`$${ctx.orderTotalPrice}`}</h3>
            </div>
            <div className={classes.actions}>
                <button onClick={closeClickHandler}>
                    Close
                </button>
                <button className={classes.button} onClick={orderSubmitHandler}>
                    Order
                </button>
            </div>
        </React.Fragment>
    )
}
export default Cart