import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import AuthContext from '../store/order-context'

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {

  const ctx = useContext(AuthContext)

  const clickHandler = () => {
    ctx.onShowSummery()
  }


  return (
    <div className={ctx.onBump ? `${classes.bump}` : ""}>
      <button className={classes.button} onClick={clickHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span> 
        <span>Your Cart</span>
        <span className={classes.badge}>{ctx.orderQuantity}</span>
      </button>
    </div>
  );
};
export default HeaderCartButton;
