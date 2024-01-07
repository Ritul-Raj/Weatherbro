
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material'



import Sunset11 from '../assests/images/bad.jpg';


const Information =({result})=>{
    return (
result && Object.keys(result).length>0 ?
<div className ="ritul">
            <p><LocationOn style={{marginRight:'4px'}}/>Location:{result.name},{result.sys.country}</p>
            <p><SettingsBrightness style={{marginRight:'10px'}} />Temperature: {result.main.temp}</p>
            <p><Opacity style={{marginRight:'10px'}} />Humidity: {result.main.humidity}</p>
            <p><Brightness5 style={{marginRight:'10px'}}/>Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p><Brightness6 style={{marginRight:'10px'}}/>Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</p>
            <p><Dehaze style={{marginRight:'10px'}} />Humidity: {result.weather[0].main}</p>
            <p><Cloud style={{marginRight:'10px'}} />Clouds: {result.clouds.all}%</p>  
            <p style={{fontFamily:'cursive',color:'white'}}>😎HaVe A nIcE dAy😎</p> 

            
</div>
:   <div style ={{width :"100%",height:"94%",background:"#101d1d", backgroundImage:`url(${Sunset11})` ,backgroundSize:"cover"}}><p  className="front">Please enter some valid city name for us to search !</p></div>
        // <div>hiii ritul here infrmation</div>
    )
}
export default Information 