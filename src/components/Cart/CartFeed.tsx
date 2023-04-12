import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemCount, removeFromCart, selectCartItems } from '../../state/slices/cartSlice'
import { cartItemType } from '../../utils/commonTypes'
import Image from 'next/image'
import { Rating } from '@mui/material'
import CurrencyFormat from 'react-currency-format'

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
        ? <div className='ml-4 mt-2'>
            <div className='text-3xl'>Shopping Cart</div>
            
            <div className='flex flex-col gap-y-4 mx-5 my-3'>
            {
              cartItems.map( item => (
                <>
                <hr className='' />
                <div className='flex gap-x-10 justify-between' key={item.id}>
                  <Image loading='lazy' src={item.image} width={100} height={100} alt={item.category} />
                  <div className='flex flex-col justify-start w-full'>
                    <span className='font-semibold'>{item.title}</span>
                    <span className='text-sm line-clamp-2'>{item.description}</span>
                    <Rating name="read-only" 
                      value={item.rating.rate} 
                      precision={0.5}
                      size='small'
                      sx={{color:'#fea21c'}}
                      readOnly 
                    />
                    <span>₹<CurrencyFormat className='text-md font-medium leading-none'
                        value={item.price * 82} 
                        displayType='text'
                        thousandSeparator={true}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        />
                    </span>
                  </div>
                  <div>
                    <div className='amzn-btn-main cursor-pointer' onClick={() => {handleItemRemove(item.id)}}>
                      <span>Remove</span>
                      </div>
                    <div>Quantity : {item.quantity}</div>
                  </div>
                </div>
                </>
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