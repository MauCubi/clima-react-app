import { Box, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types';



export const Forecast = ({forecast}) => {
  return (
    <Stack 
      direction='row' 
      mt={{ 
        xs:2, 
        sm:4,
        md:5
      }} 
      flexWrap={{ 
        xs:'nowrap', 
        md:'wrap'
      }} 
      overflow={{ 
        xs:'auto',
        sm:'scroll',
        md:'auto'
      }} 
      spacing={4} 
      sx={{ 
        justifyContent:{
          xs:'space-between',
          md:'space-around'
        }
      }}>
    {
        forecast?.map( (w, index) =>  {                
            return  (
              <Stack  key={index} mb={6} alignItems='center' textAlign='center'>                      
                
                <Typography 
                  fontFamily='sans-serif' 
                  color='#48447e' 
                  fontSize={{
                    xs:16,
                    sm:17,
                    md:18
                  }}  
                  fontWeight={600}
                > 
                  { new Date(w.dt_txt).toLocaleDateString('ES-es', { weekday: 'short'})} 
                </Typography>
                
                <Box 
                  component='img' 
                  sx={{
                    height: 110,
                    width: 110,
                  }}
                  src={`https://openweathermap.org/img/wn/${w.weather[0].icon.replace('n','d')}@2x.png`}
                />   

                <Typography 
                  textAlign='start' 
                  fontSize={{
                    xs:13,
                    md:15
                  }} 
                  color='rgb(106 136 164)' 
                  fontFamily='sans-serif' 
                  fontWeight={600}
                > 
                  { w.weather[0].description} 
                </Typography>
                
                <Typography 
                  textAlign='start' 
                  color='rgb(65 132 198)' 
                  fontSize={{
                    xs:13,
                    md:15
                  }} 
                  fontWeight={500}
                >
                  {w.temp_max}°C / { w.temp_min}°C  
                </Typography>
              
              </Stack>
            )                          
        })
    }
  </Stack>
  )
}


Forecast.propTypes = {
    forecast: PropTypes.arrayOf(PropTypes.shape({
        dt_txt: PropTypes.string,
        temp_max: PropTypes.number,
        temp_min: PropTypes.number,
        weather: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string,
            icon: PropTypes.string,
        }))
    }))
}