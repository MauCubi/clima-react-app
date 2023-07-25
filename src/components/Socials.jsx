import { IconButton, Stack, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Socials = () => {
  return (
    <Stack 
      direction={{
        xs:'row',
        sm:'column'
      }}
      display='flex' 
      alignSelf='center' 
      alignItems='center' 
      position='absolute' 
      bottom='0'
    >    
            
    <Typography 
      fontSize={{
        xs:16,
        sm:20,
        md:24
      }} 
      fontFamily='serif' 
      color='rgba(0, 0, 0, 0.80)'
    >
      Copyright &copy; 2023 Cubilla Mauro
    </Typography>

    <Stack 
      direction='row' 
      spacing={{
        sm:'0',
        md:'4'
      }}
    >
      <IconButton color='rgba(0, 0, 0, 0.80)' onClick={ () => { window.open('https://www.linkedin.com/in/macubi90/') }}>
        <LinkedInIcon sx={{ fontSize:{ xs:'25px', sm:'32px', md:'34px'}  }} />
      </IconButton>
      <IconButton onClick={ () => { window.open('https://github.com/MauCubi') }}>
        <GitHubIcon sx={{ fontSize:{ xs:'25px', sm:'32px', md:'34px'}  }} />
      </IconButton>
    </Stack>

  </Stack>
  )
}
