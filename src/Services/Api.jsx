import axios from 'axios';

const API_KEY = 'cd200590eb630d47a27ed1fead2e617f';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        
        return response.data;
    } catch (error) {
         
       alert("😕😕 Enter a Correct City Name 😕😕")
        // console.log('Error while calling the api ', error.message);
        // return error.response;
    }
}

