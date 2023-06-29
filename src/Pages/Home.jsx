import{Box,styled} from '@mui/material';

import Sunset1 from '../assests/images/paper.jpg';
import Form from '../components/Form';
import Information from '../components/Information';
import { useState } from 'react';



const Home=()=>{

    const[result,setresult]=useState({});
    return (
            <div className='kalukumar'>
          <Box  style ={{width :"100%",height:"84%",background:"rgb(188 178 66)",backgroundImage:`url(${Sunset1})`,backgroundSize:"cover"}}>
          <Form setresult={setresult}/>
          <Information  result={result}></Information>
           </Box>
           </div>
     


    )
}
export default Home;