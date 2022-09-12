const db = require("../models");
const Incident = db.incidents
const WeatherService = require('../services/WeatherService')

exports.add = async (req, res) => {
    try {
        const city = req.body.city
        const gdata = await WeatherService.getGeoData(city)
        const wdata = await WeatherService.getWeatherData(gdata[0].lat,gdata[0].lon)
        if(wdata){
            const data = {
                client_id: req.body.client_id,
                incident_desc: req.body.incident_desc,
                city: req.body.city, 
                country: req.body.country, 
                date: req.body.date,
                weather_report: JSON.stringify(wdata ?? "")
            }
            const incident = await Incident.create(data)

            if (incident)
                res.status(200).send({ message: "Incident added successfully",data })
        }
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

exports.get = async (req, res) => {
    try {
        const incidents = await Incident.findAll()
        res.status(200).send({ incidents });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}