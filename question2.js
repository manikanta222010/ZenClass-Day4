const getDetails = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v2/all")
    xhr.responseType = "json"
    xhr.onload = () => {
        const countries = xhr.response
        for (var country of countries) {
            console.image = function (url, size = 10) {
                var image = new Image();
                image.onload = function () {
                    var style = [
                        'font-size: 1px;',
                        'padding: ' + this.height / 100 * size + 'px ' + this.width / 100 * size + 'px;',
                        'background: url(' + url + ') no-repeat;',
                        'background-size: contain;'
                    ].join(' ');
                    console.log('%c ', style);
                };
                image.src = url;
            };
            console.image(country.flags[1])
        }
    }
    xhr.send()
}
getDetails()