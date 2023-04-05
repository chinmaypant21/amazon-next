import React from 'react'
import ProductCard from './ProductCard'
import { storeProductType } from '../../utils/commonTypes'
import style from '../../styles/Product.module.css'

const ProductFeed : React.FC<{products : storeProductType[]}> = ({products}) => {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 mx-8 gap-x-6 gap-y-7 ${style.product_feed_container}`}>
        {
            products.map(product => (
                    <ProductCard key={product.id} product={product}/>
            ))
        }
        </div>
    ) 
}

export default ProductFeed