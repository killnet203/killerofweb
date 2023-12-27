const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('killnet203', 'root', null,{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully!");
    } catch (error) {
        console.log("Unable to connect to database "+error);
    }
}

module.exports = connectDB;