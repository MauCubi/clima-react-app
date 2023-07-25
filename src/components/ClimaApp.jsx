import { Box, Typography, CircularProgress, Divider } from '@mui/material';
import { SearchBox } from '@mapbox/search-js-react';
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import '@fontsource/roboto/500.css';

import { useState } from 'react';
import { useGetWeather } from '../hooks/useGetWeather';
import { Weather } from './Weather';
import { Forecast } from './Forecast';
import { Socials } from './Socials';
    
    export const ClimaApp = () => {     
      
      const [place, setPlace] = useState([])
      const [weather, setWeather] = useState()
      const [forecast, setForecast] = useState()
      const [isLoading, setIsLoading] = useState('false')
      const { getWeather, getForecast } = useGetWeather()

      const handleRetrieve = async (e) => {
        const { latitude, longitude } = e.features[0].properties.coordinates 

        setIsLoading('true')       

        setPlace([e.features[0].properties.name, e.features[0].properties.place_formatted])   
        
        const weatherNow = await getWeather(latitude, longitude)
        const weatherForecast = await getForecast(latitude, longitude)

        setWeather(weatherNow)
        setForecast(weatherForecast) 

        setIsLoading('loaded')        
      }  
      
      
      return (
        <Box          
          component='div'                
          sx={{
            background: 'linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(9,120,121,0) 8%, rgb(135 212 228 / 77%) 100%)',
            backgroundAttachment: 'fixed'            
          }}
          flexDirection='column'  
          position='absolute'
          minHeight='100vh'
          width='100%'        
        >

          <Box
            component='div'
            my={7}            
            p={2}            
            display='flex'
            border='blue 1px'            
            flexDirection='column'
            borderRadius='15px'     
            height='100%'
            sx={{
              mx:{
                xs: 1,
                sm: 8,
                md: 25
              },
              my:{
                xs: 2,
                sm: 10,
                md: 7
              },   
            }}            
          >
            <Typography 
              fontSize={{
                xs:'1.7rem',
                sm:'2.125rem'
              }}
              color='rgb(65 132 198)' 
              fontFamily='serif' 
              fontWeight='600' 
              mb={{
                xs:'1rem',
                md:'1.5rem'
              }}
              textAlign={{
                xs:'center',
                sm:'initial'
              }}
            >
              Clima React App
            </Typography>

            <SearchBox            
              theme={{
                variables: {
                  borderRadius:'15px'                                                   
              }}                  
              }              
              accessToken={import.meta.env.VITE_REACT_MAPBOX_API_KEY} 
              options={{
                limit: 5,
                language: 'ES',
                types: 'place',                             
              }}       
              
              placeholder='Buscar ubicación'                            
              value=''      
              onRetrieve={ (e) => { void handleRetrieve(e)}}                                        
            />

            <Box
              component='div'
              bgcolor='white'
              my={2}
              p={2}            
              borderRadius='15px'
              sx={{
                boxShadow:'3',
                opacity:'1'              
              }}  
              display={isLoading !== 'false'? 'default': 'none'}         
            >            

              <Box height='auto' display='flex' justifyContent='center'>
                {
                  isLoading === 'true'
                    ? <CircularProgress size={80} sx={{ my:'100px'}}/>
                    :                  
                    weather && forecast
                    ?

                    // Caja de informacion de clima
                    <Box display='flex' flexDirection='column' width='100%'>

                        {/* Parte Superior (Clima Actual) */}
                        <Typography 
                          fontSize={{
                            xs:'1.2rem',
                            sm:'1.5rem'
                          }} 
                          fontFamily='serif' 
                          color='gray' 
                        >
                          Clima Actual
                        </Typography>

                        <Weather weather={ weather } place={ place }/>

                        <Divider sx={{ mb:2 }}/>

                        {/* Parte Inferior (Pronostico a 5 dias) */}
                        <Typography 
                          fontSize={{
                            xs:'1.2rem',
                            sm:'1.5rem'
                          }}  
                          fontFamily='serif' 
                          color='gray' 
                        >
                          Pronóstico
                        </Typography>
                        <Forecast forecast={ forecast }/>
                    </Box>
                  : ''              
              }
              </Box>
            </Box>

            <Socials />

          </Box>        
        </Box>  
  )
}

