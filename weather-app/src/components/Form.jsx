import React from 'react'
import { Box,styled,InputBase,Button } from '@mui/material'

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
export default function Form() {
  return (
    <Container>
        <Input
        placeholder='City'
        />
        <Input
        placeholder='Country'
        />
        <GetButton
            variant='contained'
        >Get Weather</GetButton>
        
        </Container>
  )
}
