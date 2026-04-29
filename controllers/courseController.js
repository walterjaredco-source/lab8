const Course = require('../models/Course');

//Get courses
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//Get course by ID
exports.getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//Create course
exports.createCourse = async (req, res) => {
    try {
        const { courseName, code } = req.body;

        if (!courseName || !code) {
            return res.status(400).json({ error: 'courseName and code are required' });
        }

        const course = await Course.create(req.body);
        res.status(201).json(course);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//Update course
exports.updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        await Course.update(req.body, { where: { id } });
        res.json({ message: 'Course updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//Delete course
exports.deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        await Course.destroy({ where: { id } });
        res.json({ message: 'Course deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

//Get course by ID
exports.getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};