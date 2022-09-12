const express = require('express')
const app = express()
const path = require('path')
var bodyParser = require('body-parser')
const cors = require('cors')

var corsOptions = {
    origin: '*',
}
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors(corsOptions))

const db = require("./app/models")
db.sequelize.sync()

var routesPath = require("path").join(__dirname, "./app/routes")
require("fs").readdirSync(routesPath).forEach(function(file) {
    require("./app/routes/" + file)(app)
});

module.exports = app