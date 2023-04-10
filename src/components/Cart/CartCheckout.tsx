import React from 'react'

const CartCheckout : React.FC<{authStatus : string}> = ({authStatus}) : JSX.Element => {
  return (
    <>
        {
            (authStatus === 'authenticated')
            ? <div>CartCheckout</div>
            : <div>Login to Checkout</div>
        }
    </>
    )
}

export default CartCheckout