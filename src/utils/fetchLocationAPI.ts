var locationAPI : string = 'https://geolocation-db.com/json/'

type locationFunction = () => Promise<[string,string]>

type responseData = {
    city : string,
    postal : string
}

const fetchLocationAPI : locationFunction = async () => {
    var response : Response = await fetch(locationAPI)
    var data : responseData = await response.json()

    if (data.city.length > 9)
        data.city = data.city.slice(0,8).concat('..')
        
    return([data.city, data.postal])
}

export default fetchLocationAPI