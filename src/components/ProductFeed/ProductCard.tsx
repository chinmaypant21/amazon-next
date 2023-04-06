import React from 'react'
import style from '../../styles/Product.module.css'
import { storeProductType } from '../../utils/commonTypes'
import Image from 'next/image'

const ProductCard : React.FC<{product : storeProductType}> = ({product}) => {
  return (
    <div className={`bg-white px-4 py-5 ${style.product_card_container}`}>
        <div className='flex justify-center mb-3 '>
            <Image src={product.image} height={400} width={200} alt={product.title}/>
        </div>

        <div>
            <div>
                <span className='font-semibold'>{product?.title}</span>
            </div>

            <div>
                <span>{product?.rating?.rate}</span>
                <span>{product?.rating?.count}</span>
            </div>

            <div className={`text-fc_dark_sec ${style.description_container}`}>
                <span>{product?.description}</span>
            </div>

            <div>
                <span>{product?.price}</span>
            </div>

            <div>
                <img loading='lazy' src='/prime.png' />
            </div>

            <div>
                <span>Add to Cart</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard