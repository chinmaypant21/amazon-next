import { storeProductType } from "./commonTypes"

const fetchFakeStoreAPI = async () : Promise<storeProductType[]> => {
    const response : Response = await fetch('https://fakestoreapi.com/products')
    const productData = await response.json()
    console.log('Inside Fetch')
    return (productData)
}

export default fetchFakeStoreAPI