import axios from 'axios';

const appId = '164574e4390a0f43db4d02a2e3f0b837';

const forecastWeatherService = (city, callBack)=>{
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+city+',BR&lang=pt&units=metric&appid='+appId)
    .then((response)=>{
        callBack(response.data);
    },
    (error)=>{
        console.error(error);
        callBack();
    });
}

export default forecastWeatherService;