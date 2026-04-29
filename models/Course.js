const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    courseName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        unique: true
    }
});


module.exports = Course;