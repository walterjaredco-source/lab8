const Student = require('../models/Student');
const Course = require('../models/Course');


//GET all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//CREATE student
exports.createStudent = async (req, res) => {
    try {
        
        const { firstName, lastName, email } = req.body;

        if (!firstName || !lastName || !email) {
            return res.status(400).json({
                 error: 'firstName, lastName, and email are required.'
                 });
        }
        const student = await Student.create(req.body);

        res.status(201).json(student);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//UPDATE student
exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByPk(id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        await Student.update(req.body, { where: { id } });
        res.json({ message: 'Student updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//DELETE student
exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByPk(id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        await Student.destroy({ where: { id } });
        res.json({ message: 'Student deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//Get student by ID
exports.getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByPk(id, {
            include: [{model: Course, as : 'course'}]
        });
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


//Enroll student in a course
exports.enroll = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        const { courseId } = req.body;
        await student.addEnrolledCourses(courseId);
        res.json({ message: 'Enrolled Successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//Unenroll student from a course
exports.unenroll= async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        const { courseId } = req.body;
        await student.removeEnrolledCourses(courseId);
        res.json({ message: 'Unenrolled Successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//Get courses a student is enrolled in
exports.EnrolledCourses = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        
        if (!student) {
            return res.status(404).json({ error: 'Student not found.' });
        }
        
        const courses = await student.getEnrolledCourses();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
