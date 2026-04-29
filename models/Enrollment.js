const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Enrollment = sequelize.define('Enrollment', {
    studentId : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    courseId : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Enrollment;



