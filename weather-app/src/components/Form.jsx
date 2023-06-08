import React, { useState } from 'react'
import { Box,styled,InputBase,Button } from '@mui/material'

import { getWeather } from '../service/api'


const Container=styled(Box)({
    background:'#445A6F',
    padding:'10px',
})

const Input=styled(InputBase)({
    color:'#FFFFFF',
    marginRight:'20px',
    fontSize:'18',

})

const GetButton=styled(Button)({
    background:'#e67e22'

})
export default function Form( {setResult}) {


    const [data,setdata]=useState({city:'',country:''});

const handleChange=(e)=>{

        setdata({...data,[e.target.name]:e.target.value})

      //  console.log(data);
}

const getWeatherInfo=async()=>{

    let response=await getWeather(data.city,data.country);
   // console.log(response);
    setResult(response);
}

  return (
    <Container>
        <Input
        placeholder='City'
        onChange={(e)=>handleChange(e)}
        name='city'
        />
        <Input
        placeholder='Country'
        onChange={(e)=>handleChange(e)}
        name='country'
        />
        <GetButton
            variant='contained'
            onClick={()=>getWeatherInfo()}
        >Get Weather</GetButton>
        
        </Container>
  )
}
