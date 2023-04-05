import React from 'react'
import style from '../../styles/Product.module.css'
import { storeProductType } from '../../utils/commonTypes'
import Image from 'next/image'

const ProductCard : React.FC<{product : storeProductType}> = ({product}) => {
  return (
    <div className={`bg-white ${style.product_card_container}`}>
        <div>
            <Image src={product.image} height={400} width={200} alt={product.title}/>
            {/* <img src={product.image}/> */}
            <div>{product?.title}</div>
            <div>
                <span>{product?.rating?.rate}</span>
                <span>{product?.rating?.count}</span>
            </div>
            <div className={style.description_container}>{product?.description}</div>
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