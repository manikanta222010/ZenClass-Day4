const getDetails = ()=>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v2/all")
    xhr.responseType= "json"
    xhr.onload = () =>{
        const countries=xhr.response
        for( var country of countries){
            console.log(`Country: ${country.name}, Region: ${country.region}, Population: ${country.population}`)
        }
    }
    xhr.send()
}
getDetails()
