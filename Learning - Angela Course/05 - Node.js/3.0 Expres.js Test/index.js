import express from "express";

const app = express();

const port = 3000;

// GET Request
app.get("/students" , (req,res) => {
    res.send("Here is the list of students !");
})

// POST request
app.post("/students",(req, res)=> {
    res.send("A new Student has been added !");
})

// PUT request
app.put("/students/:id", (req,res) => {
    res.send("Student information repalced !");
})

// PATCH request
app.patch("/students/:id" , (req, res)=> {
    res.send("Student information partially updated !");
})

// DELETE request
app.delete("/students/:id", (req,res)=> {
    res.send("Student deleted !");
})

// GET request with a parameter
app.get("/students/:id", (req,res)=> {
    const studentId = req.params.id;
    res.send(`Student ID : ${studentId}`);
})
app.listen(port, () => {
    console.log(`Server running on port ${port} .`)
})