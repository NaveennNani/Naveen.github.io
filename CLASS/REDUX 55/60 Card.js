import React from 'react'

function OrderPage() {
  return (
    <div>
      <h2>Your Order has been placed successfully and your Id is {Math.ceil(Math.random()*100)}</h2>
    </div>
  )
}

export default OrderPage