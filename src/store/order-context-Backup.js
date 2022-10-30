import React, { useEffect, useState } from 'react'

const AuthContext = React.createContext({
    order : [],
    calculateTotal: false,
    orderQuantity: 0,
    showSummery : false,
    orderTotalPrice : 0,
    onBump : false,
    onOrder: (id, title, price, amount, total) => { },
    onReset: () => { },
    onShowSummery : () => { } ,
    onCloseSummery : () => { } ,
    onAddAmount : () => { } ,
    onRemoveAmount : () => { } ,
})

export const OrderContextProvider = (props) => {
    const [order, setOrder] = useState([])
    const [calculateTotal, setCalculateTotal] = useState(false)
    const [showSummery, setShowSummery] = useState(false)
    const [onBump, setonBump] = useState(false)
    const [orderQuantity , setOrderQuantity] = useState(0)
    const [orderTotalPrice , setOrderTotalPrice] = useState(0)

    const addMealHandler = (id, title, price, amount, total) => {
        setCalculateTotal(prev => !prev)
        setonBump(true)
        if (order.length > 0 && order.some(el => el.id === id)) {
            order.forEach(
                element => {
                    if (element.id === id){
                        element.amount += (+amount) ;
                        element.total += (+total) ;
            }}
            )
            setOrder(order)
            return
        }
        setOrderQuantity((order.length) + 1)
        const newOrder = {
            id: id,
            title: title,
            price: +price,
            amount: +amount,
            total: total,
        }
        setOrder(prev => {
            return [newOrder, ...prev]
        })
    }

    const resetHandler = () => {
        setonBump(false)
    }

    const summery = () => {
        if(order.length > 0){
            setShowSummery(true)
        }       
    }

    const closeSummery = () => {
        setShowSummery(false)
    }

    const onAddAmount = (id) => {
        order?.forEach(element => {
            if(element.id === id){
                element.amount += 1 ;
                element.total = (element.price*element.amount) ;
            }
        })
        setOrder(order)
        setCalculateTotal(prev => !prev)
        // setonBump(true)
    }
    
    const onRemoveAmount = (id) => {
        order?.forEach(element => {
            if(element.id === id && element.amount > 0){
                element.amount = element.amount - 1 ;
                element.total = element.amount * element.price ;
            }
            if(element.id === id && element.amount === 0){
                const removedItemIndex = order.findIndex(element => element.amount === 0)
                order.splice(removedItemIndex , 1)
                setOrderQuantity((order.length))
                if(order.length === 0){
                    setShowSummery(false)
                }
                // setonBump(true)
            }
        })
        setOrder(order)
        setCalculateTotal(prev => !prev)
        // setonBump(true)
    }

    useEffect(() => {
        let totalOrderPrice = 0
        order?.forEach(
            element => totalOrderPrice += element.total
        )
        setOrderTotalPrice(totalOrderPrice) 
    },[calculateTotal])


    return (
        <AuthContext.Provider value={{
            requestSummery: order ,
            orderQuantity: orderQuantity ,
            showSummery : showSummery ,
            orderTotalPrice : orderTotalPrice,
            onBump: onBump,
            onOrder: addMealHandler,
            onReset: resetHandler,
            onShowSummery : summery,
            onCloseSummery : closeSummery,
            onAddAmount : onAddAmount,
            onRemoveAmount : onRemoveAmount,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext