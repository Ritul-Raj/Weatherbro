import React from "react";
import { Box,InputBase,Button,styled } from "@mui/material"
import { useState } from "react";
import { getWeather } from "../Services/Api";
const Container =styled(Box)(
 {   background :'#000000',padding:'10px'
})

const Input=styled(InputBase)({
marginRight:'25px',
fontsize:'18px',
fontFamily:"revert",

})

const Getbutton=styled(Button)({
    background:
  "  #198754",
  borderColor:'#198754',
  fontFamily:"revert",
   
})

const Form =(props)=>{

const getweatherinfo=async()=>{
let response=await getWeather(data.city,data.country);
// const[setresult]=props;
    props.setresult(response);
 


}

    const[data,setdata]=useState({city:'',country:''});
    
    const handlechange=(event)=>{
        setdata({...data, [event.target.name]:event.target.value})
  
    }
    return (
        <Container className="kalu1">
            <Input style={{borderRadius:"3px",color:'white',background:"#d48713",borderColor:"#d48713"}} placeholder="Enter City Name" onChange={handlechange} name='city'></Input>
            <Input  style={{borderRadius:"3px",color:'white',background:"#d48713",borderColor:"#d48713"}} placeholder="Enter Country Name" onChange={handlechange} name='country'></Input>
            <Getbutton style={{margin:'2px'}}  variant="contained"  onClick={getweatherinfo}>GeT wEaThEr</Getbutton>
        </Container>
    )
}   
export default Form