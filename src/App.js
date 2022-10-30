import React, { useContext } from 'react'
import Card from './meals/Card'
import MealsSummary from './MealsSummary/MealsSummary'
import Header from './Header/Header'
import Modal from './OrderSummery/Modal'

import AuthContext from './store/order-context'


function App() {

  const ctxShow = useContext(AuthContext)

  return (
      <React.Fragment>
        {ctxShow.showSummery && <Modal />}
        <Header />
        <MealsSummary />
        <Card />
      </React.Fragment>
  );
}

export default App;
