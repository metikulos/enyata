module.exports = (sequelize, Sequelize) => {
    const Incident = sequelize.define("incidents", {
        client_id: {
            type: Sequelize.INTEGER,
        },
        incident_desc:{
            type: Sequelize.STRING,
        },
        city:{
            type: Sequelize.STRING,
        },
        country:{
            type: Sequelize.STRING,
        },
        date:{
            type: Sequelize.DATE,
        },
        weather_report:{
            type: Sequelize.TEXT,
            set(val) {
                this.setDataValue("weather_report", JSON.stringify(val ?? ""));
            },
        }
    });
    return Incident;
};