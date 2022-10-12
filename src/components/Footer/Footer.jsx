import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Grid sx={{display: 'flex', alignItems:'center', justifyContent:'center' ,backgroundColor:'black', height:'10rem'}}>
        <Button sx={{textDecoration:'none', color:'darkgray'}}>Contact us</Button>
        <Typography sx={{ fontSize: '1.5rem',padding:'2rem',color:'gold' }}>KALON</Typography>
        <Button sx={{textDecoration:'none', color:'darkgray'}}>Suscribe</Button>  
    </Grid>
  )
}
