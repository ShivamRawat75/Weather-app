import React, { useState } from 'react'
import {Box,styled} from '@mui/material';
import imgSun from '../images/bg.jpg';
import Form from '../components/Form';
import Information from '../components/Information';

const Component=styled(Box)({
    height:'100vh',
    display:'flex',
    alignItems:'center',
    margin:'0 auto',
    width:'65%',
    
    
    

})



const Image=styled(Box)({
    backgroundImage: `url(${imgSun})`,
    width:'27%',
    height:'80%',
    backgroundSize:'cover',
    borderRadius:'20px 0 0 20px',
    backgroundColor:'cyan'

})

export default function Home() {

        const [result,setResult]=useState({});

  return (
    <Component>
        <Image></Image>
        <Box style={{height:'80%',width:'73%',backgroundColor:'#E5E4E2'}}>
            <Form setResult={setResult}/>
            <Information result={result}/>
            {console.log(result)}
        </Box>
    </Component>
  )
}
