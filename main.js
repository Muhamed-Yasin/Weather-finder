const api = {
    key:"d462a26f9c9ed9697c0ddf4b20815ce0",
    baseurl: "https://api.openweathermap.org/data/2.5/weather?q="
}

const display = (weather) =>{
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let date = document.querySelector('.location .date');
    let today = new Date().toUTCString().slice(0, 16);;
    console.log(today);
    date.innerText = today;

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}°C`;

    let wel = document.querySelector('.current .weather');
    let str = weather.weather[0].description;
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    const str2 = arr.join(" ");
    wel.innerText = str2;

    let hilo = document.querySelector('.current .hi-lo');
    hilo.innerHTML = `${Math.round(weather.main.temp_min)}°C/${Math.round(weather.main.temp_max)}°C`;
}

const getRes = (query) =>{
    fetch(`${api.baseurl}${query}&units=metric&appid=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(display);
}



const setquery = (e) =>{
    if(e.keyCode == 13){
        getRes(searchbox.value)
        console.log(searchbox.value);
    }
    }

const searchbox = document.querySelector('.search');
searchbox.addEventListener('keypress',setquery);
