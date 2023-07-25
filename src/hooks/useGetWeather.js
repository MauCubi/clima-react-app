import axios from 'axios'
import { fetchWeather } from '../helper/fetchWeather'
import { fetchForecast } from '../helper/fetchForecast'

export const useGetWeather = () => {

    let today = new Date()

    const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/',
        params: {
          'units': 'metric',
          'appid': import.meta.env.VITE_REACT_OPENWEATHER_API_KEY,         
          'lang': 'es'
      }
      })      
    
    const getWeather = async (lat, lon) => {
        const weather = await fetchWeather(lat, lon, today, instance)        
        return weather    
    }

    const getForecast = async (lat, lon) => {
        const forecast = await fetchForecast(lat, lon, today, instance) 
        return forecast
    }

    return {
        getWeather,
        getForecast
    }
}



