import React from 'react'
import classes from './AvailableMeals.module.css'
import DUMMY_MEALS from './dummy-meals'
import MealItem from './MealItem'

const AvailableMeals = () => {


    return (
        <div className={classes.meals}>
            <ul>
                {
                    DUMMY_MEALS.map((meal) => {
                        return (
                            <MealItem
                                key={meal.id}
                                id={meal.id}
                                title={meal.name}
                                discription={meal.description}
                                price={meal.price}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default AvailableMeals