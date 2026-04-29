const express = require('express');
const sequelize = require('./config/database');
const logger = require('./middleware/logger');

require('./models/');

const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

//Middleware
app.use(express.json());

//Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

//Start the server
app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});

//DB + Server start
sequelize.sync()
    .then(() => {
        console.log('Database connected');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost: ${PORT}`);
        });
    })
    .catch(err => {
        console.error('DB Error: ', err);
    });


app.use((req, res) => {
    res.status(404).json({ error: 'Route not Found' });
});
    
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).json({ error: 'An unexpected error occurred' });
});
