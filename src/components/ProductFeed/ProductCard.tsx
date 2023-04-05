import React from 'react'
import style from '../../styles/Product.module.css'
import { storeProductType } from '../../utils/commonTypes'

const ProductCard : React.FC<{product : storeProductType}> = ({product}) => {
  return (
    <div className={style.product_card_container}>
        <div>
            <img />
            <div>{product?.title}</div>
            <div>
                <span>{product?.rating?.rate}</span>
                <span>{product?.rating?.count}</span>
            </div>
            <div>{product?.description}</div>
            <div>{product?.price}</div>
        </div>

        <div>
            <img loading='lazy' src='/prime.png' />
        </div>
        <div>

            Add to Cart
        </div>
    </div>
  )
}

export default ProductCard