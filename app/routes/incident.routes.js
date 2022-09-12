module.exports = app => {
    var router = require("express").Router();
    const controller = require("../controllers/incident.controller");


    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    router
        .post('/', controller.add)
        .get('/', controller.get)
    app.use('/v1/incident', router)
};