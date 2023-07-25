

export const fetchWeather = async ( lat, lon, today, instance ) => {
      
    const resp = await instance.get(`data/2.5/weather?lat=${lat}&lon=${lon}`);     
    
    const actualWeather = {     
        dt_txt: today.toString(),     
        main: {
            humidity: resp.data.main.humidity,
            temp: resp.data.main.temp,
            temp_min: resp.data.main.temp_min,
            temp_max: resp.data.main.temp_max,
            feels_like: resp.data.main.feels_like,
        },
        weather: [{
            description: resp.data.weather[0].description,
            icon: resp.data.weather[0].icon
        }],
        wind: {
            speed: resp.data.wind.speed
        },
        date: today
    }      

    return actualWeather

}