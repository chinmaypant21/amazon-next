import React from 'react'
import ProductCard from './ProductCard'
import { storeProductType } from '../../utils/commonTypes'

const ProductFeed : React.FC<{products : storeProductType[]}> = ({products}) => {
    // console.log('hiy',products[0])
    return (
        <div>
        {
            products.map(product => (
                    <ProductCard key={product.id} product={product}/>
            ))
        }
        </div>
    ) 
}

export default ProductFeed