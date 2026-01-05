const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); //For allowing the frontend to connect 
app.use(express.json()); // To read data sent from from


// Testing route
app.get('/', (req, res) => {
    res.send('Hello, this is CoGIT School Management System!');
});

app.listen(PORT, () => {
    console.log(`Server is runnin on http://localhost:${PORT}`)
});