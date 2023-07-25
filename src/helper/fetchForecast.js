
export const fetchForecast = async ( lat, lon, today, instance ) => {

    const resp = await instance.get(`data/2.5/forecast?lat=${lat}&lon=${lon}`)

    let forecastList = []

    resp.data.list.map( item => {

        let forecast = {
            dt_txt: item.dt_txt,
            temp_max: item.main.temp,
            temp_min: item.main.temp,
            weather: [{
                description: item.weather[0].description,
                icon: item.weather[0].icon,
            }]
        }           

        if (new Date(forecast.dt_txt).getDate() != today.getDate()) {
            today = new Date(forecast.dt_txt)
            forecastList = [...forecastList, forecast]            
        } else if(forecastList.length > 0) {
            if (forecastList[forecastList.length - 1].temp_max < item.main.temp) forecastList[forecastList.length - 1].temp_max = item.main.temp
            if (forecastList[forecastList.length - 1].temp_min > item.main.temp) forecastList[forecastList.length - 1].temp_min = item.main.temp 
            
        }
        
    })

    return forecastList

}