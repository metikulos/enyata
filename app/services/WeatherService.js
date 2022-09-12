const axios = require('axios')
require('dotenv').config()

module.exports = {
    getWeatherData: async (lat,lon) => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WAPI_KEY}`)
            return await response.data
        }catch(err){
            throw err
        }
    },
    getGeoData: async (city) => {
        try{
            const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${process.env.GEO_DATA_LIMIT}&appid=${process.env.WAPI_KEY}`)
            return await response.data
        }catch(err){
            throw err
        }
    }
}