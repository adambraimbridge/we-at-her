console.log('hello, this is client/index.js')

const getWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?APPID=c2b2c4f07adbbf691be05d78aea9ce25&q=London')
        .then(response => response.json())
        .then(json => {
            console.log(json)
        })
}

document.getElementById('location').onchange(event => {
    console.log(event)
})