import React from 'react'
import { signIn } from 'next-auth/react';

const CartPayout : React.FC<{authStatus : string}> = ({authStatus}) : JSX.Element => {
    const handleSignIn = () => {
        signIn()
    }

    return (
        <div className='px-2 flex justify-center mt-10'>
            {
                (authStatus === 'authenticated')
                ? <div>

                </div>

                : <div className='flex flex-col gap-y-3'>
                    <span>You need to login to proceed</span>
                    <div className='amzn-btn-main' onClick={handleSignIn}>
                        Login to Checkout
                    </div>
                    </div>
            }
        </div>
    )
}

export default CartPayout