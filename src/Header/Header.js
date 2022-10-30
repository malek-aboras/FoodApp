import React from 'react'
import meals from './meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'

const Header = () => {
    return (
        <React.Fragment>
            <div className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </div>
            <div className={classes['main-image']}>
                <img src={meals} alt="food" />
            </div>
        </React.Fragment>
    )
}
export default Header