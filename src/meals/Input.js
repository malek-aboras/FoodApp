import React, { useContext } from 'react'
import AuthContext from '../store/order-context'

import classes from './Input.module.css'


const Input = (props) => {
    const ctx = useContext(AuthContext)

    const amountChangeHandler = event => {
        ctx.onReset()
        props.mealAmount(event.target.value)

    }
    return (
        <div className={classes.input}>
            <label htmlFor='amount'>Amount</label>
            <input 
            type="number"
            name='amount'
            min="0"
            onChange={amountChangeHandler}
            value={props.value}
            />
        </div>
    )
}
export default Input