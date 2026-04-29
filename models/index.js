const Student = require('./Student');
const Course = require('./Course');
const Enrollment = require('./Enrollment');

//One-to-Many
Student.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
Course.hasMany(Student, { foreignKey: 'courseId', as: 'students' });

//Many-to-Many
Student.belongsToMany(Course, {
    through: Enrollment,
    foreignKey: 'studentId',
    as : 'enrolledCourses'
});

Course.belongsToMany(Student, {
    through: Enrollment,
    foreignKey: 'courseId',
    as : 'enrolledStudents'
});

module.exports = { Student, Course, Enrollment };

