const fetchFakeStoreAPI = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const productData = await response.json()
    console.log(typeof(productData))
    console.log(productData)
    return (productData)
}

fetchFakeStoreAPI()
