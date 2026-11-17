import express from "express";

const app = express();

const port = 3000;

// Allow Express to read JSON request bodies
app.use(express.json())

app.get("/" ,(req,res) =>{
    res.send("Hello to my server ! We're testing Postman today !")
})

// GET : Retrieve students
app.get("/students",(req,res)=>{
    res.json( [
        { id : 1, name : "Ahmed", age : 18 },
        { id : 2, name : "Sami", age : 19 },
        { id : 3, name : "Youssef", age : 18 }
    ])
})

// POST : Add a new Student
app.post("/students", (req,res) => {

    const newStudent = req.body;

    res.status(201).json({
        message :"Student received successfully",
        student : newStudent
    });
})

app.listen(port,() => {
    console.log(`Server running successfully on port ${port}`)
})