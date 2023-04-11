import React from 'react'

const CartPayout : React.FC<{authStatus : string}> = ({authStatus}) : JSX.Element => {
  return (
    <>
        {
            (authStatus === 'authenticated')
            ? <div>CartPayout</div>
            : <div>Login to Checkout</div>
        }
    </>
    )
}

export default CartPayout