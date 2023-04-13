import React from 'react'
import Image from 'next/image'
import { Rating } from '@mui/material'
import { useDispatch } from 'react-redux'
import CurrencyFormat from 'react-currency-format'
import { removeFromCart } from '../../state/slices/cartSlice'


const CartFeedCard = ({item}) => {
    const dispatch = useDispatch()
  
    const handleItemRemove = (id) => {
        dispatch(removeFromCart(id))
    }

  return (
    <>
        <hr className='' />
        <div className='flex gap-x-6 justify-between' key={item.id}>
        <Image className='object-contain' loading='lazy' src={item.image} width={100} height={100} alt={item.category} />
        <div className='flex flex-col gap-y-1  justify-start w-full'>
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
  )
}

export default CartFeedCard