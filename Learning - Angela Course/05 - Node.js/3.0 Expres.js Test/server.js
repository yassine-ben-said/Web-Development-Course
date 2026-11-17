import express from "express";

const app = express();

const port = 3000;

// 1. Parse HTML form data
app.use(express.urlencoded({extended : true}));

// 2. Handle the form submission
app.post("/register", (req,res)=>{
    const name = req.body.name;
    const age = req.body.age;

    res.send(`Student registered : ${name} , Age ${age}`);
})

app.listen(port,()=>{
    console.log("Server running successfully !")
})