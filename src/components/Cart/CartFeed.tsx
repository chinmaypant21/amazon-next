import React from 'react'
import { useSelector } from 'react-redux'
import { itemCount } from '../../state/slices/cartSlice'

const CartFeed = ({authStatus}) => {
  const itemsCount : number = useSelector(itemCount)

  if (authStatus === 'authenticated')
    return (
      <>
      {
        (itemsCount)
        ? <div>Shopping Cart</div>
        : <div>Your Amazon Cart is empty</div>
      }
      </>
    )

  else return (
    <>
      Unauthenticated
    </>
  )
}

export default CartFeed