// ===== Middleware & Body parser for JSON Data ====

import express from "express";

const app = express();

const port = 3000;

// 1. Parse incoming JSON Data
app.use(express.json());

// 2. Create a Post route
app.post("/students", (req,res) => {
    console.log(req.body)
    //3. Access the received data
    const name = req.body.name;
    const age = req.body.age;

    res.json({
        message: "Student received !",
        name : name,
        age :age
    })
})

app.listen(3000, () => {
    console.log("Server running successfully !")
});