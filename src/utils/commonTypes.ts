export type storeProductType = {
    id : number,
    price : number,
    title : string,
    description: string,
    category : string,
    image : string,
    rating: {
        count : number,
        rate : number
    }
}