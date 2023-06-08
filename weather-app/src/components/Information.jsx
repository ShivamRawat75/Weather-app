import { Box ,Typography,styled} from '@mui/material'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import OpacityIcon from '@mui/icons-material/Opacity';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloudIcon from '@mui/icons-material/Cloud';

const Row=styled(Typography)({

    padding:'10px',
    fontSize:'20px',
    letterSpacing:2,
    '& > svg ':{
        marginRight:10
    }
})

const Error =styled(Typography)({
    color:'red',
    margin:50,
    padding:20

})

 const Information=(result)=> {
    console.log('name is ',result.result.name);

  return (
    
    result && Object.keys(result.result).length >0 ?
    <Box style={{margin:'30px 60px',backgroundColor:'#D3D3D3',borderRadius:'20px'}}>
        <Row> <LocationOnIcon/>Location    {result.result.name},{result.result.sys.country}</Row>
        <Row> <SettingsBrightnessIcon/>Temperature    {result.result.main.temp}°C</Row>
        <Row> <OpacityIcon/> Humidity     {result.result.main.humidity}%</Row>
        <Row> <Brightness5Icon/> Sun Rise       {new Date(result.result.sys.sunrise*1000).toLocaleTimeString()}</Row>
        <Row> <Brightness6Icon/> Sun Set   {new Date(result.result.sys.sunset*1000).toLocaleTimeString()}</Row>
        <Row> <DehazeIcon/> Condition    {result.result.weather[0].main}</Row>
        <Row> <CloudIcon/> Clouds    {result.result.clouds.all}%</Row>
    </Box>
    :<Error>Please enter the value to check Weather</Error>
  )
}
export default Information;
