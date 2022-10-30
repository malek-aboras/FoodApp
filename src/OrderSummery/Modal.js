import React from 'react'
import Cart from './Cart'

import classes from './Modal.module.css'

const Modal = () => {
    return (
        <div className={classes.backdrop}>
            <div className={classes.modal}>
                <Cart />
            </div>
        </div>
    )
}
export default Modal