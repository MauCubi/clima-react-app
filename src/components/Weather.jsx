import { Box, Stack, Typography } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import PropTypes from 'prop-types';

export const Weather = ({weather, place}) => {

  
  return (
    <Stack 
      mb={{
        xs:2,      
        sm:4,  
        md:6
      }} 
      width='100%' 
      p={{
        xs:0,
        sm:2
      }} 
      direction={{
        xs:'column',
        sm: 'row'
      }}
      spacing={2}      
    >
      <Stack 
        width={{
          sx:'100%',
          sm:'60%',

        }}
        alignItems='center'
      >
        <Typography 
          fontSize={{
            xs:'1.5rem',
            sm:'1.7rem',
            md:'2.125rem'
          }} 
          fontFamily='sans-serif' 
          color='#48447e'
        > 
          {place[0]}
        </Typography>                          
        
        <Stack direction='row' alignItems='center'>
          <Box         
            component='img' 
            sx={{
                height: {
                  xs:125,
                  sm:125,
                  md:150
                },
                width: {
                  xs:125,
                  sm:125,
                  md:150
                },
            }}
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon.replace('n','d')}@2x.png`}
          />             
          <Typography 
            component='span' 
            fontSize={{
              xs:26,
              sm:30,
              md:34
            }} 
            color='rgb(65 132 198)' 
          >
            { weather.main.temp}°C
          </Typography>       

        </Stack>      
        
        <Typography 
          fontSize={{
            xs:24,
            sm:28,
            md:32,
          }}  
          color='rgb(106 136 164)' 
          fontWeight={500}
        > 
          { weather.weather[0].description} 
        </Typography>
      </Stack>


      <Stack 
        width={{
          xs:'100%',
          sm:'60%'
        }}
        pl={{
          xs:0,
          sm:2,
          md:6
        }} 
        justifyContent='center' 
        spacing={1}
      >

        <Stack color='rgb(106 136 164)' direction='row' justifyContent='space-between'>  

          <Stack direction='row'  alignItems='center'>
            <ThermostatIcon />
            <Typography 
              fontFamily='serif' 
              fontSize={{
                xs:19,
                sm:22,
                md:24
              }} 
              mr={2}
            > 
              Sensación
            </Typography>                            
          </Stack>

          <Typography 
            component='span' 
            fontSize={{
              xs:19,
              sm:22,
              md:24
            }}  
            color='rgb(65 132 198)'
          >
            { weather.main.feels_like}°C
          </Typography>
        </Stack>

        <Stack color='rgb(106 136 164)' direction='row' justifyContent='space-between'>

          <Stack direction='row' alignItems='center'>
            <ArrowUpwardIcon />
            <Typography 
              display={{
                xs:'none',
                md:'inherit'
              }}
              fontFamily='serif' 
              fontSize={{
                xs:19,
                sm:22,
                md:24
              }}  
              mr={2}
            > 
              Max
            </Typography>

            <Typography 
              component='span' 
              fontSize={{
                xs:19,
                sm:22,
                md:24
              }}  
              color='rgb(65 132 198)' 
              mr={2}
            >
              {weather.main.temp_max}°C 
            </Typography>
          </Stack>

          <Stack direction='row' alignItems='center'>
            <ArrowDownwardIcon />            
            <Typography 
              display={{
                xs:'none',
                md:'inherit'
              }}
              fontFamily='serif' 
              fontSize={{
                xs:19,
                sm:22,
                md:24
              }}
              mr={2}
            > 
              Min
            </Typography>  
                     
            <Typography 
              component='span' 
              fontSize={{
                xs:19,
                sm:22,
                md:24
              }}  
              color='rgb(65 132 198)'
            >
              { weather.main.temp_min}°C
            </Typography>
          </Stack>

        </Stack>

        <Stack color='rgb(106 136 164)' direction='row' justifyContent='space-between'>   

          <Stack direction='row'  alignItems='center'>
            <AirIcon />
            <Typography 
              fontFamily='serif' 
              fontSize={{
                xs:19,
                sm:22,
                md:24
              }}   
              mr={2}
            > 
              Viento
            </Typography>                            
          </Stack>        

          <Typography 
            component='span' 
            fontSize={{
              xs:19,
              sm:22,
              md:24
            }}  
            color='rgb(65 132 198)' 
          >
            { weather.wind.speed} Km/h
          </Typography>

        </Stack>

        <Stack color='rgb(106 136 164)' direction='row' justifyContent='space-between'>      

          <Stack direction='row'  alignItems='center'>
            <WaterDropIcon />
            <Typography 
              fontFamily='serif' 
              fontSize={{
                xs:19,
                sm:22,
                md:24
              }}  
              mr={2}
            > 
              Humedad
            </Typography>                            
          </Stack>                

          <Typography 
            component='span' 
            fontSize={{
              xs:19,
              sm:22,
              md:24
            }}  
            color='rgb(65 132 198)' 
          >
            { weather.main.humidity}%
          </Typography>
          
        </Stack>

      </Stack>

    </Stack>
  )
}

Weather.propTypes = {
    place: PropTypes.arrayOf(PropTypes.string),
    weather: PropTypes.shape({
        dt_txt: PropTypes.string,
        main: PropTypes.shape({
            humidity: PropTypes.number,
            temp: PropTypes.number,
            temp_min: PropTypes.number,
            temp_max: PropTypes.number,
            feels_like: PropTypes.number,
        }),
        weather: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string,
            icon: PropTypes.string,
        })),
        wind: PropTypes.shape({
            speed: PropTypes.number
        }),
        date: PropTypes.instanceOf(Date)
    })
    
   
}

