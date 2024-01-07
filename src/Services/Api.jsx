

import axios from 'axios';

export const getWeather = async (city) => {
    try {
        // let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`);
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=cd200590eb630d47a27ed1fead2e617f`);
        return response.data;
        
    } catch (error) {
          
       alert("😕❌🛑 Enter a Valid City Name 🛑❌😕")
      
    }
}



