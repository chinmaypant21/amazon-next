import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemCount, removeFromCart, selectCartItems } from '../../state/slices/cartSlice'
import { cartItemType } from '../../utils/commonTypes'

const CartFeed = ({authStatus}) => {
  const cartItems : cartItemType[] = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const itemsCount : number = useSelector(itemCount)

  const handleItemRemove = (id) => {
    dispatch(removeFromCart(id))
  }

  if (authStatus === 'authenticated')
    return (
      <>
      {
        (itemsCount)
        ? <div>
            <div>Shopping Cart</div>
            
            <div>
            {
              cartItems.map( item => (
                <div key={item.id}>
                  {/* {item.image} */}
                  {item.description}
                  {/* {item.price} */}
                  {item.quantity}
                  <div onClick={() => {handleItemRemove(item.id)}}>Remove</div>
                </div>
              ))
            }
            </div>
          </div>

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