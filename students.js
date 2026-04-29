const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.post('/:id/enroll', studentController.enroll);

router.delete('/:id/unenroll', studentController.unenroll);

router.get('/:id/courses', studentController.EnrolledCourses);

router.get('/:id', studentController.getStudentById);
//get all students
router.get('/', studentController.getAllStudents);
//get student by id
router.post('/', studentController.createStudent);
//update student
router.put('/:id', studentController.updateStudent);
//delete student
router.delete('/:id', studentController.deleteStudent);



module.exports = router;
