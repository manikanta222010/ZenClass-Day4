const getDetails = ()=>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v2/all")
    xhr.responseType= "json"
    xhr.onload = () =>{
        const countries=xhr.response
        for( var country of countries){
            const image = document.createElement("img")
            image.src = country.flags[1]
            document.body.append(image)
        }
    }
    xhr.send()
}
getDetails()
