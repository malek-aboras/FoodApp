import React , { useState } from 'react'
import Input from './Input'

import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const [amount, setAmount] = useState("");

    const mealAmountChangeHandler = (event) =>{
        setAmount(event)
    }

    const mealSubmitHandler = event => {
        event.preventDefault()
        if (amount === "" || amount === "0"){
            console.log("Enter a valid amount")
        }
        else{
            props.onAdd(amount)
            setAmount("")
        }
    }

    return (
        <form className={classes.form} onSubmit={mealSubmitHandler}>
            <Input mealAmount = {mealAmountChangeHandler} value = {amount} />
            <button>+ Add</button>
        </form>
    )
} 
export default MealItemForm