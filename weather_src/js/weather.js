async function getMyLocation() {

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });

}

const searchButton = document.querySelector('#cityButton');
const cityInput = document.querySelector('#city');
const weatherForm = document.querySelector('#weatherForm')
const getCityBtnRef = document.querySelector('#getCity')

getCityBtnRef.addEventListener('click', async (ev) => {
    const {coords: {latitude, longitude}} = await getMyLocation();

    const {name} = await getCity(longitude, latitude);

    cityInput.value = name;
})

weatherForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const city = cityInput.value;

    if (city !== '') {
        const {coord: {lon, lat}} = await getLocation(city);

        const data = await getWeather(lon, lat)
        console.log(data)
    }
})

const apiKey = '68e2a081a82b3b45bc6a1f69cd8105aa'; // API OpenWeatherMap

async function getLocation(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)

    return await response.json();
}

async function getCity(long, lat) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`);

    return await response.json();

}

async function getWeather(long, lat) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`);

    return await response.json();
}