const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json());


// Routes

// create a todo

app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        // using INSERT INTO command in todo table than` we have to specify what type of column we have to add data into than we have to specify values in them
        // $1 is a placeholder for the value of description specifing it
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);
        res.json(newTodo);
    } catch(err){
        console.error(err.message);
    }
})

// get all todo

// get a todo

// update a todo

// delete a todo


// Build routes with postgres queries

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

